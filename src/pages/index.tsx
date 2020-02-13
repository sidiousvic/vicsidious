import React from "react";
import Scene from "../components/Scene";
import { Link } from "gatsby";

const MOTHERBOARD: React.FC = () => {
  return (
    <>
      <Link
        to="/the-vicelog"
        style={{
          color: "lime",
          position: "absolute",
          top: "50%",
          right: "25%",
          zIndex: 99
        }}
      >
        VICELOG
      </Link>
      <Scene />
    </>
  );
};

export default MOTHERBOARD;
