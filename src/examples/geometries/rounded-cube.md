---
name: Rounded Cube
menu: Geometries
---

import { Sandbox } from '../../components/Sandbox'

# Rounded Cube

A rounded cube created using Drei

```js
import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { Stats } from "@react-three/drei/Stats";
import { RoundedBox } from "@react-three/drei/RoundedBox";
import "./styles.css";

const App = () => {
  return (
    <Canvas style={{ height: 600, width: 600 }}>
      <pointLight position={[5, 5, 5]} />
      <RoundedBox args={[3, 3, 0.25]} radius={0.1}>
        <meshLambertMaterial attach="material" color={"grey"} />
      </RoundedBox>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

### Working example (You can edit this code.)

<Sandbox url="rounded-box-r3rpz" />
