import React from "react";
import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <button>
        <Link to={"/"}>Salir</Link>
      </button>
    </div>
  );
}
