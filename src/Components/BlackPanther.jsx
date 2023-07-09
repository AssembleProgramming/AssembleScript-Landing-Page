import React, { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Float, Text } from '@react-three/drei';
import gsap from 'gsap';


const BlackPanther = () => {
    const tchalla = useRef();

    const model = useLoader(GLTFLoader, './black_panther.glb');

    const animateOnScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        if (scrollY >= 700) {
            gsap.to(tchalla.current.rotation, { y: 0.2, duration: 2, delay: 0.5 });
        }
    };

    useEffect(() => {
        let requestId;

        const handleScroll = () => {
            if (!requestId) {
                requestId = requestAnimationFrame(() => {
                    animateOnScroll();
                    requestId = undefined;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (requestId) {
                cancelAnimationFrame(requestId);
            }
        };
    }, []);

    const handlePointerEnter = () => {
        gsap.to(tchalla.current.rotation, { y: -0.5, duration: 1, delay: 0 });
    };

    const handlePointerLeave = () => {
        gsap.to(tchalla.current.rotation, { y: 0.2, duration: 1, delay: 0 });
    };

    return (
        <>
            <Float
                speed={3} // Animation speed, defaults to 1
                rotationIntensity={0} // XYZ rotation intensity, defaults to 1
                floatIntensity={1.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[0.2, 0.4]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]>
            >
                <primitive
                    ref={tchalla}
                    object={model.scene}
                    scale={0.024}
                    position={[0, -3.5, 0]}
                    rotation-x={-0.1}
                    rotation-z={-0.1}
                    rotation-y={-0.5}
                    onPointerOver={handlePointerEnter}
                    onPointerOut={handlePointerLeave}
                />
                <ambientLight intensity={11} />
            </Float >
            <Float
                speed={1} // Animation speed, defaults to 1
                rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
                floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                floatingRange={[0.3, 0.4]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]>
            >
                <Text
                    font='./fonts/font.ttf'
                    position={[1, -1, -2.5]}
                    color={"#664EAE"}
                    scale={0.6}
                    maxWidth={0.5}
                    fontSize={3}
                    rotation-x={0}
                    rotation-y={-0.6}
                    rotation-z={0}
                    lineHeight={1.1}
                >
                    Wakanda Forever
                </Text>
            </Float >
        </>

    );
};

export default BlackPanther;