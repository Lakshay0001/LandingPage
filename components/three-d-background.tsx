"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, Box, Torus } from "@react-three/drei"
import type * as THREE from "three"

function FloatingElements() {
  const group1Ref = useRef<THREE.Group>(null)
  const group2Ref = useRef<THREE.Group>(null)
  const group3Ref = useRef<THREE.Group>(null)

  useFrame(() => {
    if (group1Ref.current) {
      group1Ref.current.rotation.x += 0.0001
      group1Ref.current.rotation.y += 0.0002
    }
    if (group2Ref.current) {
      group2Ref.current.rotation.x -= 0.00015
      group2Ref.current.rotation.z += 0.0001
    }
    if (group3Ref.current) {
      group3Ref.current.rotation.y += 0.0003
    }
  })

  return (
    <>
      {/* Left floating sphere */}
      <group ref={group1Ref} position={[-3, 1, -2]}>
        <Sphere args={[0.8, 32, 32]}>
          <meshPhongMaterial
            color="#d4af37"
            emissive="#8b7500"
            wireframe={false}
            shininess={100}
            opacity={0.15}
            transparent
          />
        </Sphere>
      </group>

      {/* Right floating torus */}
      <group ref={group2Ref} position={[3, -1, -2]}>
        <Torus args={[1, 0.3, 16, 100]}>
          <meshPhongMaterial color="#ffffff" emissive="#666666" wireframe={false} opacity={0.1} transparent />
        </Torus>
      </group>

      {/* Center subtle box */}
      <group ref={group3Ref} position={[0, 0, -3]}>
        <Box args={[1.5, 1.5, 1.5]}>
          <meshPhongMaterial color="#d4af37" emissive="#5a4a00" wireframe={false} opacity={0.08} transparent />
        </Box>
      </group>

      {/* Ambient particles */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[Math.random() * 6 - 3, Math.random() * 4 - 2, -4]}>
          <Sphere args={[0.1, 16, 16]}>
            <meshPhongMaterial color="#d4af37" emissive="#8b7500" opacity={0.3} transparent />
          </Sphere>
        </mesh>
      ))}
    </>
  )
}

export default function ThreeDBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, 10]} intensity={0.4} color="#d4af37" />
      <pointLight position={[0, 0, 5]} intensity={0.3} color="#ffffff" />
      <FloatingElements />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  )
}
