---
name: Boilerplate
menu: Basics
---

import { Sandbox } from '../../components/Sandbox'

# A minimal r3f scene

A minimal example of an r3f scene.

```js
import React from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <mesh rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </Canvas>
  );
};

render(<App />, document.getElementById("root"));
```

### Working example (You can edit this code.)

<Sandbox url="r3f-minimal-utq7f" />
