---
name: Wireframe
menu: Materials
---

import { Sandbox } from '../../components/Sandbox'

# Wireframe

A basic cube, but this time rendered as a wireframe. Note the addition of the `wireframe` prop in the lineBasicMaterial component.

```js
import React from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";
import "./styles.css";

const Box = () => {
  return (
    <mesh rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <lineBasicMaterial color={"yellow"} wireframe />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <Box />
    </Canvas>
  );
};

render(<App />, document.getElementById("root"));

```

### Working example (You can edit this code.)

<Sandbox url="minimal-cube-example-wireframe-j7dou" />
