import PropTypes from "prop-types";
import * as S from "./styles.js";
import { useState } from "react";

const Box = ({ color, fill, children, className }) => {
  const [counter, setCounter] = useState(0);

  const handleKnock = () => setCounter((counter) => counter + 1);
  const handleReset = () => setCounter(0);

  return (
    <S.BoxContainer
      key={className}
      className={className}
      fill={fill}
      color={color}
    >
      {children}

      <S.ButtonsContainer color={color}>
        <button onClick={handleKnock} type="button" name="oibebe">
          Knocked {counter} times!
        </button>

        <button onClick={handleReset} type="button" name="oibebe">
          Reset
        </button>
      </S.ButtonsContainer>
    </S.BoxContainer>
  );
};

Box.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  fill: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Box;
