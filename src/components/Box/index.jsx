import PropTypes from "prop-types";
import * as S from "./styles.js";
import { useCallback, useEffect } from "react";

const Box = ({ color, blink, setBlink, children }) => {
  const handleBlink = () => setBlink(true);

  const handleUnblink = useCallback(() => {
    setBlink(false);
  }, [setBlink]);

  useEffect(() => {
    setTimeout(() => {
      if (blink === true) handleUnblink();
    }, 2000);
  }, [blink, handleUnblink]);

  return (
    <S.BoxContainer blink={blink ? true : false} color={`#${color}`}>
      {children}

      <S.ButtonsContainer color={color}>
        <button onClick={handleBlink} type="button">
          Blink {blink === true ? "ON" : "OFF"}
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
  setBlink: PropTypes.func,
  blink: PropTypes.bool,
};

export default Box;
