---
name: HTML Labels
menu: Other
---

import { Sandbox } from '../../components/Sandbox'

# HTML Labels

Applying an HTML label to an object

```js
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { Stats } from "@react-three/drei/Stats";
import { Html } from "@react-three/drei/Html";
import "./styles.css";

const Torus = (props) => {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.x += 0.01;
    groupRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={groupRef}>
      <mesh {...props}>
        <torusGeometry args={[1, 0.2, 12, 36]} />
        <meshStandardMaterial color={"red"} />
        <Html>
          <div class="label">Torus</div>
        </Html>
      </mesh>
    </group>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <Torus position={[2, 0, 0]} />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### Working example (You can edit this code.)

<Sandbox url="html-labels-d05zm" />
