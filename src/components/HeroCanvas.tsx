import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Stars } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { featuredProducts } from '../data/products';

interface CoinProps {
  product: typeof featuredProducts[0];
  index: number;
  total: number;
  mouse: THREE.Vector2;
}

function Coin({ product, index, total, mouse }: CoinProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const radius = 5.5;
  const angle = (index / total) * Math.PI * 2;
  const baseX = Math.sin(angle) * radius;
  const baseZ = Math.cos(angle) * radius;
  const floatOffset = index * 0.5;

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    const targetX = baseX + mouse.x * 2;
    const targetZ = baseZ + mouse.y * 2;
    const targetY = Math.sin(time * 1.5 + floatOffset) * 0.4;
    
    groupRef.current.position.lerp(
      new THREE.Vector3(targetX, targetY, targetZ),
      0.05
    );
    
    groupRef.current.rotation.y += delta * 0.25;
    groupRef.current.rotation.x = Math.sin(time * 0.5 + floatOffset) * 0.08;
    
    const scale = hovered ? 1.25 : 1;
    groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
  });

  const hexColor = product.color.replace('#', '0x');
  
  const coinGeometry = new THREE.CylinderGeometry(0.7, 0.7, 0.5, 32);
  const edgeGeometry = new THREE.TorusGeometry(0.7, 0.15, 16, 32);
  
  const coinMaterial = new THREE.MeshPhysicalMaterial({
    color: parseInt(hexColor),
    metalness: 0.9,
    roughness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    emissive: parseInt(hexColor),
    emissiveIntensity: hovered ? 0.3 : 0.1,
  });
  
  const edgeMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffd700,
    metalness: 1,
    roughness: 0,
    emissive: 0xffd700,
    emissiveIntensity: 0.5,
  });

  const glowGeometry = new THREE.RingGeometry(2.4, 3.2, 32);
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: parseInt(hexColor),
    transparent: true,
    opacity: 0.15,
    side: THREE.DoubleSide,
  });

  const popularOption = product.prices.find(p => p.badge === 'Popular') || product.prices[1] || product.prices[0];

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => window.dispatchEvent(new CustomEvent('coin-click', { detail: product }))}
    >
      <mesh geometry={coinGeometry} material={coinMaterial} position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow />
      <mesh geometry={coinGeometry} material={coinMaterial} position={[0, -0.15, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow />
      <mesh geometry={edgeGeometry} material={edgeMaterial} position={[0, 0.15, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={edgeGeometry} material={edgeMaterial} position={[0, -0.15, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={glowGeometry} material={glowMaterial} position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      
      <Html
        transform
        position={[0, -3.2, 0]}
        style={{
          pointerEvents: 'none',
          textAlign: 'center',
          minWidth: '180px',
        }}
      >
        <div style={{
          background: 'rgba(10, 10, 15, 0.9)',
          border: `1px solid ${product.color}40`,
          borderRadius: '12px',
          padding: '8px 12px',
          backdropFilter: 'blur(10px)',
          boxShadow: `0 0 20px ${product.color}40`,
        }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            color: product.color,
            textShadow: `0 0 10px ${product.color}`,
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.5px',
            whiteSpace: 'nowrap',
          }}>
            {product.game}
          </div>
          <div style={{
            fontSize: '11px',
            color: '#888',
            marginTop: '2px',
            whiteSpace: 'nowrap',
            fontFamily: 'JetBrains Mono, monospace',
          }}>
            {product.name}
          </div>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            color: '#ffd700',
            marginTop: '6px',
            fontFamily: 'JetBrains Mono, monospace',
            textShadow: '0 0 10px #ffd700',
          }}>
            {popularOption.amount.toLocaleString()} {popularOption.currency}
          </div>
          <div style={{
            fontSize: '11px',
            fontWeight: 600,
            color: product.color,
            marginTop: '4px',
            textShadow: `0 0 8px ${product.color}`,
          }}>
            ${popularOption.price.toFixed(2)}
          </div>
        </div>
      </Html>
    </group>
  );
}

function CoinsScene() {
  const mouse = useRef(new THREE.Vector2(0, 0));
  
  const handleMouseMove = (e: React.MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <group onPointerMove={handleMouseMove}>
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} />
      
      <ambientLight intensity={0.5} color="#00ff88" />
      <ambientLight intensity={0.3} color="#ff006e" />
      <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={1} color="#00d4ff" />
      <pointLight position={[0, 3, 0]} intensity={2} color="#00ff88" distance={20} decay={2} />
      <pointLight position={[4, 2, 4]} intensity={1} color="#ff006e" distance={15} decay={2} />
      <pointLight position={[-4, 2, -4]} intensity={1} color="#00d4ff" distance={15} decay={2} />
      
      {featuredProducts.map((product, index) => (
        <Coin
          key={product.id}
          product={product}
          index={index}
          total={featuredProducts.length}
          mouse={mouse.current}
        />
      ))}
      
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[15, 64]} />
        <meshStandardMaterial
          color="#0a0a0f"
          transparent
          opacity={0.3}
          metalness={0}
          roughness={1}
        />
      </mesh>
    </group>
  );
}

export function HeroCanvas() {
  return (
    <div className="relative w-full min-h-full h-full" style={{ touchAction: 'none' }}>
      <Canvas
        camera={{ position: [0, 3, 12], fov: 45 }}
        shadows
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x050508, 1);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.2;
        }}
      >
        <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-cyber-neon font-mono">LOADING...</div>}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.3}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
          <CoinsScene />
        </Suspense>
      </Canvas>
      
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cyber-darker/80 to-transparent pointer-events-none" />
    </div>
  );
}
