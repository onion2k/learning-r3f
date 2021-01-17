---
name: Environment Lighting
menu: Lighting
---

import { Sandbox } from '../../components/Sandbox'

# Environment Lighting

Using Drei's `Environment` component for nice looking lighting.

```js
import React, { Suspense } from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { Stats } from "@react-three/drei/Stats";
import { Environment } from "@react-three/drei/Environment";

const Ball = ({ position, children }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 24, 24]} />
      {children}
    </mesh>
  );
};

const App = () => {
  const materials = [
    <meshStandardMaterial metalness={0.9} roughness={0.1} />,
    <meshStandardMaterial metalness={0.6} roughness={0.3} />,
    <meshStandardMaterial metalness={0.5} roughness={0.5} />,
    <meshStandardMaterial metalness={0.3} roughness={0.6} />,
    <meshPhysicalMaterial clearcoat={0.6} roughness={0.1} />
  ];
  return (
    <Canvas style={{ height: 400, width: 600 }}>
      <Suspense fallback={null}>
        {materials.map((mat, i) => (
          <Ball key={`ball-${i}`} position={[-4 + 2 * i, 0, 0]}>{mat}</Ball>
        ))}
        <Environment files={"colorful_studio_1k.hdr"} path={"/"} />
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

render(<App />, document.getElementById("root"));
```

### Working example (You can edit this code.)

<Sandbox url="pbr-environment-map-pjp65" />
