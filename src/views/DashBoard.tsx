import React from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <button>
        <Link to={"/createQuote"}>Add quote</Link>
      </button>
      <button>
        <Link to={"/"}>Volver</Link>
      </button>
    </div>
  );  
}
