import './App.css'
import pochaccoGif from "./assets/pochacco-icegif-61-ezgif.com-loop-count.gif";
import confetti from "canvas-confetti";
import { useEffect } from 'react';

function App() {
    useEffect(() => {
    // a few bursts looks nicer than one big blast
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    confetti({ particleCount: 80, spread: 90, origin: { y: 0.8 } });
  }, []);


  return (
    <div className="container">
      <h1 className = "title">YAYYYYYYYYYYYYYYYYYYYYYYYYY </h1>
      <img src={pochaccoGif} alt="Pochacco gif" className="gif" />
    </div>
  );
}

export default App