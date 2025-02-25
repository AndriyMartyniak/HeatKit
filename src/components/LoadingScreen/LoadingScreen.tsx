// components/LoadingScreen.tsx
import React from "react";

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontFamily: "sans-serif",
        zIndex: 9999,
      }}
    >
      HeatKit. <span className="loading-text">Loading...</span>
      <style jsx>{`
        .loading-text {
          margin-left: 0.5rem;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
