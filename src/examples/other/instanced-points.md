---
name: Instanced Points
menu: Other
---

import { Sandbox } from '../../components/Sandbox'

# Instanced Points

Instanced sprites at vertex point

```js
import * as THREE from "three";
import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { Stats } from "@react-three/drei/Stats";
import "./styles.css";

const Stars = ({ i, j }) => {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  const sprite = new THREE.TextureLoader().load("/star.png");

  for (let count = 0; count < 10000; count++) {
    const x = 2000 * Math.random() - 1000;
    const y = 2000 * Math.random() - 1000;
    const z = 2000 * Math.random() - 1000;

    vertices.push(x, y, z);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  return (
    <points args={[geometry]}>
      <pointsMaterial
        size={35}
        sizeAttenuation={true}
        map={sprite}
        alphaTest={0.5}
        transparent={true}
      />
    </points>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 600, width: 600 }}>
      <Stars i={350} j={350} />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

### Working example (You can edit this code.)

<Sandbox url="instanced-points-x6ip8" />
