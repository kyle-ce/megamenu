import { useState } from "react";
import Megamenu from "./components/Megamenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Megamenu />
    </main>
  );
}

export default App;
