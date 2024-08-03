import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-[100vh] overflow-hidden">
      <Header />
    </main>
  );
}

export default App;
