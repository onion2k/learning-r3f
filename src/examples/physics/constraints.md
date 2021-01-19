---
name: useCannon Constraints
menu: Physics
---

import { Sandbox } from '../../components/Sandbox'

# useCannon constraints

A chain of three balls constrained to move together on clicking.

```js
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Physics, useSphere, useDistanceConstraint } from "@react-three/cannon";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei/OrbitControls";
import { Stats } from "@react-three/drei/Stats";
import Ball from "./ball";
import Ground from "./ground";
import "./styles.css";

function Chain() {
  const [link1] = useSphere(() => ({
    mass: 0,
    position: [0, 6, 0]
  }));

  const [link2, api2] = useSphere(() => ({
    mass: 1,
    position: [0, 4, 0]
  }));

  const [link3, api3] = useSphere(() => ({
    mass: 1,
    position: [0, 2, 0]
  }));

  useDistanceConstraint(link1, link2, {
    distance: 2
  });

  useDistanceConstraint(link2, link3, {
    distance: 2
  });

  return (
    <group>
      <group ref={link1}>
        <Ball color={"red"} />
      </group>
      <group
        ref={link2}
        onClick={() => {
          api2.applyImpulse([3, 3, 3], [0, 0, 0]);
        }}
      >
        <Ball color={"yellow"} />
      </group>
      <group
        ref={link3}
        onClick={() => {
          api3.applyImpulse([3, 3, 3], [0, 0, 0]);
        }}
      >
        <Ball color={"green"} />
      </group>
    </group>
  );
}

const App = () => {
  return (
    <Canvas
      style={{ height: 600, width: 600 }}
      camera={{ position: [0, 5, 10] }}
    >
      <pointLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Physics>
          <Chain />
          <Ground />
        </Physics>
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

This scene uses two imported components, ball and ground.

ball.js
```js
import * as THREE from "three";
import React from "react";
import { useLoader } from "react-three-fiber";
import { useSphere } from "@react-three/cannon";

const Ball = ({ position, color }) => {
  const [ballRef] = useSphere(() => ({ mass: 1, position: position }));

  const bw = useLoader(THREE.TextureLoader, "/bw.png");
  bw.wrapS = THREE.RepeatWrapping;
  bw.wrapT = THREE.RepeatWrapping;
  bw.repeat.set(3, 3);

  return (
    <mesh ref={ballRef} position={position} receiveShadow castShadow>
      <sphereGeometry args={[1, 36, 36]} />
      <meshPhysicalMaterial
        color={color}
        map={bw}
        roughness={0.8}
        metalness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.35}
      />
    </mesh>
  );
};

export default Ball;
```

ground.js
```js
import React from "react";
import { usePlane } from "@react-three/cannon";

export default function Ground(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial color={"#dddddd"} />
    </mesh>
  );
}
```

### Working example (You can edit this code.)

<Sandbox url="usecannon-constraints-nvc5o" />
