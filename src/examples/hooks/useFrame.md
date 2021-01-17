---
name: Rotating Cube
menu: Hooks
---

import { Sandbox } from '../../components/Sandbox'

# A rotating cube

This example is exactly the same as the Basic Cube, but with the addition of a ref for the cube, and a useFrame hook with a callback function that updates the rotation property of the cube.

```js
import React, { useRef } from "react";
import { render } from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import "./styles.css";

const Box = () => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
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

<Sandbox url="rotating-cube-twbxz" />
