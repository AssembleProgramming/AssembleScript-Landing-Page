import { ContactShadows, Environment, Float, OrbitControls, Text } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BlackPanther } from "./Black_panther";
import { HulkBuster } from "./Hulkbuster";
import { SpiderMan } from "./Spider-man";
import { UltronModel } from "./Ultron";
import { AntMan } from "./Ant-man";
import { Bucky } from "./Winter_soldier";
import { Falcon } from "./Falcon";
import { IronMan } from "./Iron_man";
import { Capsy } from "./Captain_america";
import { Vision } from "./Vision";


const options = ["BlackPanther", "HulkBuster", "SpiderMan", "Ultron", "AntMan", "Bucky", "Falcon", "IronMan", "Capsy", "Vision"];
export const Experience = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeElapsed = useRef(0);
  let itemDisplayed =
  {
    value: "BlackPanther"
  }

  itemDisplayed.value = options[currentIndex];
  useFrame((state, delta) => {
    timeElapsed.current += delta; // Increment the time elapsed
    if (timeElapsed.current >= 10) {
      const nextIndex = (currentIndex + 1) % options.length; // Calculate the next index sequentially
      itemDisplayed.value = options[nextIndex];
      setCurrentIndex(nextIndex);
      timeElapsed.current = 0; // Reset the time elapsed
    }
  });

  const [visibleItem, setVisibleItem] = useState(itemDisplayed.value);

  const onFadeOut = () => setVisibleItem(itemDisplayed.value);
  return (
    <>
      <OrbitControls enablePan={false} enableZoom={false}/>
      {visibleItem === "BlackPanther" &&
        (
          <>
            <BlackPanther
              scale={1.9}
              position-y={-1.8}
              dissolveVisible={itemDisplayed.value === "BlackPanther"}
              onFadeOut={onFadeOut}
            />
            <Float
              speed={2.7}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[0.3, 0.4]}
            >
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, -0.9, -2]}
                color={"#664EAE"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={3}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                Wakanda Forever
              </Text>
            </Float >
          </>
        )
      }
      {visibleItem === "HulkBuster" &&
        (
          <>
            <HulkBuster
              scale={1.4}
              position-y={-1.8}
              dissolveVisible={itemDisplayed.value === "HulkBuster"}
              onFadeOut={onFadeOut}
            />
            <Float
              speed={2.7}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[0.3, 0.4]}
            >
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, -0.9, -2]}
                color={"#6a0c0b"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={3}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                Hulk Buster
              </Text>
            </Float >
          </>
        )
      }
      {visibleItem === "SpiderMan" &&
        (
          <>
            <SpiderMan
              scale={2.1}
              position-y={-1.8}
              dissolveVisible={itemDisplayed.value === "SpiderMan"}
              onFadeOut={onFadeOut}
            />
            <Float
              speed={2.7}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[0.3, 0.4]}
            >
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, -0.9, -2]}
                color={"#4558ca"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={2.7}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                Amazing Spiderman
              </Text>
            </Float >
          </>
        )
      }
      {visibleItem === "Ultron" &&
        (
          <>
            <UltronModel
              scale={1.8}
              position-y={-1.8}
              dissolveVisible={itemDisplayed.value === "Ultron"}
              onFadeOut={onFadeOut}
            />
            <Float
              speed={2.7}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[0.3, 0.4]}
            >
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, -0.9, -2]}
                color={"#fd3d00"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={3.5}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                Ultron
              </Text>
            </Float >
          </>
        )
      }
      {visibleItem === "AntMan" &&
        (
          <>
            <AntMan
              scale={2.0}
              position-y={-1.8}
              dissolveVisible={itemDisplayed.value === "AntMan"}
              onFadeOut={onFadeOut}
            />
            <Float
              speed={2.7}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[0.3, 0.4]}
            >
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, -0.9, -2]}
                color={"#e2292a"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={3}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                AntMan
              </Text>
            </Float >
          </>
        )
      }
      {visibleItem === "Bucky" &&
        (
          <>
            <Bucky
              scale={1.7}
              position-y={-1.8}
              dissolveVisible={itemDisplayed.value === "Bucky"}
              onFadeOut={onFadeOut}
            />
            <Float
              speed={2.7}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[0.3, 0.4]}
            >
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, -1.5, -2]}
                color={"#808fac"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={3}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                Winter Soldier
              </Text>
            </Float >
          </>
        )
      }
      {visibleItem === "Falcon" &&
        (
          <>
            <Falcon
              scale={1.7}
              position-y={-1.8}
              dissolveVisible={itemDisplayed.value === "Falcon"}
              onFadeOut={onFadeOut}
            />
            <Float
              speed={2.7}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[0.3, 0.4]}
            >
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, -1.5, -2]}
                color={"#4f4339"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={3}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                The Falcon
              </Text>
            </Float >
          </>
        )
      }
      {visibleItem === "IronMan" &&
        (
          <>
            <IronMan
              scale={1.9}
              position-y={-1.8}
              dissolveVisible={itemDisplayed.value === "IronMan"}
              onFadeOut={onFadeOut}
            />
            <Float
              speed={2.7}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[0.3, 0.4]}
            >
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, -0.9, -2]}
                color={"#a73331"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={3}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                Tony Stark
              </Text>
            </Float >
          </>
        )
      }
      {visibleItem === "Capsy" &&
        (
          <>
            <Capsy
              scale={1.9}
              position-y={-1.8}
              dissolveVisible={itemDisplayed.value === "Capsy"}
              onFadeOut={onFadeOut}
            />
            <Float
              speed={2.7}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[0.3, 0.4]}
            >
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, 0.4, -2]}
                color={"#a73331"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={3}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                Captain
              </Text>
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, -2.2, -2]}
                color={"#2b577c"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={3}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                America
              </Text>
            </Float >
          </>
        )
      }
      {visibleItem === "Vision" &&
        (
          <>
            <Vision
              scale={1.9}
              position-y={-1.8}
              dissolveVisible={itemDisplayed.value === "Vision"}
              onFadeOut={onFadeOut}
            />
            <Float
              speed={3}
              rotationIntensity={0.5}
              floatIntensity={0.1}
              floatingRange={[0.3, 0.4]}
            >
              <Text
                font='./fonts/font.ttf'
                position={[-1.2, -0.9, -2]}
                color={"#723c51"}
                scale={0.6}
                maxWidth={0.5}
                fontSize={4}
                rotation-x={0}
                rotation-y={0.6}
                rotation-z={0}
                lineHeight={1.1}
              >
                Vision
              </Text>
            </Float >
          </>
        )
      }
      <Environment preset="sunset" />
      <ContactShadows position-y={-1.8} />
    </>
  );
};
