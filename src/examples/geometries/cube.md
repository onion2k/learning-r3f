---
name: Basic Cube
menu: Geometries
---

import { Sandbox } from '../../components/Sandbox'

# A basic cube

An example of a single cube, with a red material, rotated by 45 degrees.

```js
import React from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";

const Box = () => {
  return (
    <mesh rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
      <boxBufferGeometry args={[2, 2, 2]} />
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

### Working example (You can edit this code.)

<Sandbox url="minimal-cube-example-n71si" />
