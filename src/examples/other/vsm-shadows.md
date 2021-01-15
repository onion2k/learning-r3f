---
name: VSM Shadows
menu: Other
---

import { Sandbox } from '../../components/Sandbox'

# VSM Shadows

Shadows using VSM Shadow

```js
import * as THREE from "three";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { Stats } from "@react-three/drei/Stats";
import "./styles.css";

const Box = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} castShadow receiveShadow>
      <cubeGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

const Sphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.z -= 0.01;
  });

  return (
    <group ref={sphereRef}>
      <mesh castShadow receiveShadow position={[-2, 1, 0]}>
        <sphereGeometry args={[0.25, 24, 24]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </group>
  );
};

const Ground = () => {
  const groundRef = useRef();

  return (
    <mesh
      ref={groundRef}
      rotation={[Math.PI * -0.5, 0, 0]}
      position={[0, -3, 0]}
      receiveShadow
    >
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial color={"#eeeeee"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      shadowMap={{ type: THREE.VSMShadowMap }}
    >
      <directionalLight
        position={[0, 5, 5]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={10}
        shadow-bias={-0.0001}
      />
      <Box />
      <Sphere />
      <Ground />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### Working example (You can edit this code.)

<Sandbox url="vsm-shadows-j9879" />
