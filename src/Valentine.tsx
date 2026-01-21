import { useState } from 'react'
import './App.css'
import pochaccoGif from "./assets/pochacco-icegif-6-ezgif.com-loop-count.gif";
import { useNavigate } from "react-router-dom";

function Valentine() {
  const [yesHeight, setYesHeight] = useState(52);
  const [yesWidth, setYesWidth] = useState(100); //px

  const handleNoClick = () => {
    setYesWidth((w) => Math.min(w + 30, 50000000));
    setYesHeight((h) => Math.min(h + 20, 24000));
  };

  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate("/success");
  };


  return (
    <div className="container">
      <h1 className = "title">Will you be my Valentine? </h1>
      <div className="stack">   
      <img src={pochaccoGif} alt="Pochacco gif" className="gif" />

       <div className="row"> 
        <button
          className = "yes-button"
          onClick={handleYesClick}
          style={{
            width: yesWidth,
            height: yesHeight,
          }}
        >
          YES
        </button>
        <button onClick={handleNoClick} className = "no-button">
          NO
        </button>
        </div>
      </div>
    </div>
  );
}

export default Valentine
