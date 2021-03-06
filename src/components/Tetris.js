import React from "react";

import { createStage } from "../gameHelpers";
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";

import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <Stage stage={createStage()} />
      <aside>
        <StyledTetris>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </StyledTetris>
        <StartButton />
      </aside>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
