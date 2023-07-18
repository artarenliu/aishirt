import React, { useState } from 'react';
import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import LandingPage from "./pages/Landingpage";

function App() {
  const [isHomeVisible, setIsHomeVisible] = useState(false);

  const handleNavigate = () => {
    setIsHomeVisible(true);
  };

  return (
    <main className="app transition-all ease-in">
      {!isHomeVisible && <LandingPage onNavigate={handleNavigate} />}
      {isHomeVisible && <Home />}
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App;
