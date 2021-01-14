---
name: Basic Cube
menu: Basics
---

# A cube

An example of a single cube, with a red material, pointing at the camera.

```js
import React from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";

const Box = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"red"} />
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
