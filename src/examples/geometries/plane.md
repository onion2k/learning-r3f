---
name: Basic Plane
menu: Geometries
---

import { Sandbox } from '../../components/Sandbox'

# A basic plane

A basic plane geometry. Note that in this example the plane has no 'height', so it's necessary to move the camera in order to see it, by adding `camera={{ position: [0, 15, 15] }}` to the Canvas component.

```js
import React from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";

const Box = () => {
  return (
    <mesh rotation-x={Math.PI * -0.5}>
      <planeBufferGeometry args={[20, 20]} />
      <meshStandardMaterial color={"pink"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [0, 15, 15] }}
    >
      <pointLight position={[5, 5, 5]} />
      <Box />
    </Canvas>
  );
};

render(<App />, document.getElementById("root"));

```

### Working example (You can edit this code.)

<Sandbox url="basic-plane-00zsz" />
