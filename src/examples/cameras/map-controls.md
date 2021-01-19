---
name: Panning
menu: Cameras
---

import { Sandbox } from '../../components/Sandbox'

# Panning with MapControls

Panning the camera around using Map Controls and screenspace panning.

```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { MapControls } from "@react-three/drei/MapControls";
import { Stats } from "@react-three/drei/Stats";
import "./styles.css";

const Sphere = (props) => {
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.x += 0.03;
    sphereRef.current.rotation.y += 0.03;
  });

  return (
    <mesh ref={sphereRef} position={props.position}>
      <sphereBufferGeometry args={[0.25, 24, 24]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

function Grid() {
  const x = 10;
  const y = 10;

  const spheres = Array(x * y)
    .fill()
    .map((s, i) => {
      return (
        <Sphere
          position={[x * -0.5 + Math.floor(i / x), y * -0.5 + (i % y), 0]}
        />
      );
    });

  return spheres;
}

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <Grid />
      <MapControls screenSpacePanning />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

### Working example (You can edit this code.)

<Sandbox url="mapcontrols-screenspacepanning-6t9vc" />
