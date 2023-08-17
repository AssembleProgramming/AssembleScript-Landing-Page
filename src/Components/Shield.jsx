import React, { useEffect, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Shield = () => {
  const mousePos = useRef({ x: 900, y: 500 });
  const shield = useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePos.current.x = event.clientX;
      mousePos.current.y = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const model = useLoader(GLTFLoader, './shield.glb');

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    shield.current.rotation.z = a * 3;
    shield.current.rotation.y = (mousePos.current.x * 0.001) - 1.5;
    shield.current.rotation.x = (mousePos.current.y * 0.001) - 1;
  });

  return (
    <>
      <primitive
        ref={shield}
        object={model.scene}
        scale={2}
        position={[2, 0, 1]}
        rotation-y={-0.5}
        rotation-z={0}
        rotation-x={-0.3}
      />
      <directionalLight position={[-1, 0, -0.5]} intensity={5} />
      <directionalLight position={[1, 0, -0.5]} intensity={4} />
      <directionalLight position={[0, 1, -0.2]} intensity={4} />
      <directionalLight position={[0, -0.5, 0.2]} intensity={4} />
      <directionalLight position={[1, -1, 1]} intensity={2} />
      <ambientLight intensity={10} />
    </>
  );
};

export default Shield;
