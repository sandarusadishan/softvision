import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

export const Starfield = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      // Warp speed effect
      ref.current.position.z += delta * 0.5; // Slowed down a bit for this section
      if (ref.current.position.z > 5) ref.current.position.z = -5;

      // Mouse parallax effect
      const { pointer } = state;
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * Math.PI * 0.05, 0.02);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, pointer.y * Math.PI * 0.05, 0.02);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={props.color || "#ffffff"}
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};