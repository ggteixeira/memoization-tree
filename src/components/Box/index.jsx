import PropTypes from "prop-types";
import * as S from "./styles.js";
import { useCallback, useEffect } from "react";

const Box = (treeProps) => {
  const { color, blink, toggleBlink, children } = treeProps;

  const handleBlink = () => {
    toggleBlink(() => 1);
  };

  const handleUnblink = useCallback(() => {
    toggleBlink(false);
  }, [toggleBlink]);

  useEffect(() => {
    setTimeout(() => {
      if (blink === 1) handleUnblink();
    }, 2000);
  }, [blink, handleUnblink]);

  return (
    <S.BoxContainer blink={blink ? 1 : 0} color={`#${color}`}>
      {children}

      <S.ButtonsContainer color={color}>
        <button onClick={handleBlink} type="button">
          Blink {blink === 1 ? "ON" : "OFF"}
        </button>

        <button onClick={handleUnblink} type="button">
          Reset
        </button>
      </S.ButtonsContainer>
    </S.BoxContainer>
  );
};

Box.propTypes = {
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  color: PropTypes.string,
  toggleBlink: PropTypes.func,
  blink: PropTypes.number,
};

export default Box;
