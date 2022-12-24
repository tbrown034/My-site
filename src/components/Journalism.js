import * as React from "react";

import Clips from "./Clips";
import Experience from "./Timeline";
import Awards from "./Awards"

const Journalism = () => {
  return (
    <>
      <h1>Award-Winning Journalist</h1>
      <Experience />
        <h2>Clips</h2>
        <Clips />
        <h2>Awards</h2>
        <Awards />

    </>
  );
};
export default Journalism;
