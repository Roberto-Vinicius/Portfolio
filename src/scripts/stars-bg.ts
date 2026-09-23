import * as THREE from "three";

export function mountStarBackground(): void {
  const canvas = document.querySelector<HTMLCanvasElement>("[data-stars-bg]");
  if (!canvas) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
  } catch {
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
  camera.position.z = 200;

  // Gerar textura circular suave em canvas para não depender de imagens externas
  const starCanvas = document.createElement("canvas");
  starCanvas.width = 32;
  starCanvas.height = 32;
  const ctx = starCanvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.3, "rgba(56, 189, 248, 0.8)");
    gradient.addColorStop(0.7, "rgba(14, 165, 233, 0.2)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
  }
  const starTexture = new THREE.CanvasTexture(starCanvas);

  const totalStars = 700;
  const positions = new Float32Array(totalStars * 3);
  const colors = new Float32Array(totalStars * 3);

  // Paleta de cores espaciais elegantes em tons azuis/ciano/turquesa e toques celestes
  const palette = [
    new THREE.Color(0x38bdf8), // Cyan / Sky Blue
    new THREE.Color(0x0ea5e9), // Ocean Blue
    new THREE.Color(0x60a5fa), // Soft Blue
    new THREE.Color(0x818cf8), // Indigo / Violet
    new THREE.Color(0x2dd4bf), // Teal
    new THREE.Color(0xe0f2fe), // Bright Ice Blue
  ];

  for (let i = 0; i < totalStars; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 2000;
    positions[i3 + 1] = (Math.random() - 0.5) * 1400;
    positions[i3 + 2] = -Math.random() * 2500;

    const color = palette[Math.floor(Math.random() * palette.length)];
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 14,
    map: starTexture,
    vertexColors: true,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const stars = new THREE.Points(geometry, material);
  scene.add(stars);

  const pointer = new THREE.Vector2();
  const cameraOffset = new THREE.Vector3();

  const onPointer = (e: MouseEvent) => {
    pointer.set((e.clientX / window.innerWidth - 0.5) * 2, (e.clientY / window.innerHeight - 0.5) * 2);
  };

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight, false);
  };

  window.addEventListener("resize", onResize, { passive: true });
  window.addEventListener("mousemove", onPointer, { passive: true });

  let last = performance.now();
  const animate = (now: number) => {
    const delta = Math.min(0.05, (now - last) / 1000);
    last = now;

    // Movimento suave das estrelas
    stars.rotation.z += delta * 0.02;
    stars.position.z += delta * 15;
    if (stars.position.z > 800) {
      stars.position.z = 0;
    }

    cameraOffset.x += (pointer.x * 25 - cameraOffset.x) * delta * 2;
    cameraOffset.y += (-pointer.y * 15 - cameraOffset.y) * delta * 2;
    camera.position.x = cameraOffset.x;
    camera.position.y = cameraOffset.y;
    camera.lookAt(0, 0, -1000);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
}
