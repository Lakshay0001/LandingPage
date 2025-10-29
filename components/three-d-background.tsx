"use client";

import React from 'react';

const Moving2DBackground = () => {
  // The main container now uses bg-black
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden bg-black z-[-1]"
    >
      {/* BLOB ONE: Large Gold/Amber blob, slow, default animation */}
      <div 
        className="shape-blob absolute rounded-full bg-amber-500 w-[500px] h-[500px] top-[10%] left-[5%] opacity-15 blur-2xl" 
        style={{ animation: 'move-blob 18s infinite alternate' }}
      ></div>

      {/* BLOB TWO: Medium White blob, reversed animation for opposition */}
      <div 
        className="hidden md:block shape-blob absolute rounded-full bg-white w-[400px] h-[400px] top-[45%] left-[70%] opacity-15 blur-2xl"
        style={{ animation: 'move-blob 15s infinite alternate reverse' }}
      ></div>

      {/* BLOB THREE: Large Gold/Amber blob, slower animation */}
      <div 
        className="shape-blob absolute rounded-full bg-amber-500 w-[550px] h-[550px] top-[-10%] left-[38%] opacity-15 blur-2xl"
        style={{ animation: 'move-blob 22s infinite alternate' }}
      ></div>
    </div>
  );
};

export default Moving2DBackground;