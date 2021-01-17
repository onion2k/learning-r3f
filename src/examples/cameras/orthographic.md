---
name: Orthographic Camera
menu: Cameras
---

import { Sandbox } from '../../components/Sandbox'

# An orthographic projection camera

A simple orthographic projection (flat 3D instead of perspective) camera. This is useful for 2D games and UIs.

```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { OrthographicCamera } from "@react-three/drei/OrthographicCamera";

const Box = (props) => {
  const boxRef = useRef();

  return (
    <mesh ref={boxRef} {...props}>
      <boxGeometry args={[100, 100, 100]} />
      <meshStandardMaterial attach="material" color={"red"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <ambientLight intensity={0.25} />
      <pointLight intensity={0.75} position={[500, 500, 1000]} />

      <Box position={[70, 70, 0]} />
      <Box position={[-70, 70, 0]} />
      <Box position={[70, -70, 0]} />
      <Box position={[-70, -70, 0]} />

      <OrbitControls />

      <OrthographicCamera
        makeDefault
        zoom={1}
        top={200}
        bottom={-200}
        left={200}
        right={-200}
        near={1}
        far={2000}
        position={[0, 0, 200]}
      />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### Working example (You can edit this code.)

<Sandbox url="orthographic-camera-h5un7" />
