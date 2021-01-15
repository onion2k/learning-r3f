---
name: glTF
menu: Models
---

import { Sandbox } from '../../components/Sandbox'

# A basic cube

An example of a single cube, with a red material, rotated by 45 degrees.

```js
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { Stats } from "@react-three/drei/Stats";

import Plane from "./model";

const App = () => (
  <Canvas style={{ height: 400, width: 800 }}>
    <pointLight position={[5, 5, 5]} />
    <Suspense fallback={null}>
      <Plane rotation={[0, Math.PI * 1.25, 0]} />
    </Suspense>
    <OrbitControls />
    <Stats />
  </Canvas>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

The actual modal is loaded in model.js. This file is generated by gltfjsx from https://github.com/pmndrs/gltfjsx

```js
import React from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

export default function Plane(props) {
  const { nodes, materials } = useGLTF("/small-airplane-v3.gltf");

  return (
    <group {...props}>
      <group scale={[0.5, 0.5, 0.5]}>
        <mesh
          material={materials.White}
          geometry={nodes["buffer-0-mesh-0"].geometry}
        />
        <mesh
          material={materials.Red}
          geometry={nodes["buffer-0-mesh-0_1"].geometry}
        />
        <mesh
          material={materials.Gray}
          geometry={nodes["buffer-0-mesh-0_2"].geometry}
        />
        <mesh
          material={materials.Black}
          geometry={nodes["buffer-0-mesh-0_3"].geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/small-airplane-v3.gltf");
```

### Working example (You can edit this code.)

<Sandbox url="gltf-model-loader-rz79v" />