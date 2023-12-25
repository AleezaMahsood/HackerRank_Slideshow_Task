import React from "react";
import { useState } from "react";
//import { SLIDES } from "../components/slideData";
import "../App.css";
const Slide = ({slides}) => {
   const [currentSlide,setCurrentSlide]=useState(0);
   const [restartVal, setRestartVal]= useState(false)
   const [prevSlide,setPrevSlide]=useState(false);
   const [nextSlide,setNextSlide]=useState(true);
    const restart=()=>{
      setCurrentSlide(0);
      setRestartVal(false);
      setPrevSlide(false);
      setNextSlide(true)
    }
    const previous=()=>{
      if(currentSlide<2){
        setPrevSlide(false)
        setRestartVal(false)
        setNextSlide(true)
        
      }
      else{
        setRestartVal(true)
        setPrevSlide(true)
        setNextSlide(true)
      }
      setCurrentSlide(currentSlide-1)
    }
    const next=()=>{
      if(currentSlide<slides.length-1){
        setCurrentSlide(currentSlide + 1);
        setPrevSlide(true);
        setNextSlide(true);
        setRestartVal(true);
    }else {
      setNextSlide(false)
      setRestartVal(true)
      setPrevSlide(true)
     }
  }
  return (
    <div className="container">
      <div className="containerBtn">
        <button onClick={restart} disabled={!restartVal}>Restart</button>
        <button onClick={previous} disabled={!prevSlide}>Prev</button>
        <button onClick={next} disabled={!nextSlide}>Next</button>
      </div>
      <div className="text">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].text}</p>
      </div>
    </div>
  );
};

export default Slide;
