import React from "react";

import Hello from './MyComponent1';
import World from './MyComponent2';

function App() {
  return (
    <div>
      <h1>Hello React</h1>

      {/* (3-2) Hello와 World라는 이름의 컴포넌트 출력 */}
      <Hello></Hello>
      <World />
    </div>
  );
}

export default App;
