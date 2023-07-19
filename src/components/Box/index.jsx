import PropTypes from "prop-types";
import * as S from "./styles.js";

const Box = ({ color, children, blink, toggleBlink }) => {
  const handleBlink = () => {
    toggleBlink(() => 1);
  };

  const handleUnblink = () => {
    toggleBlink(false);
  };

  setTimeout(() => {
    if (blink === 1) handleUnblink();
  }, 2000);

  return (
    <S.BoxContainer blink={blink ? 1 : 0} color={color}>
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
