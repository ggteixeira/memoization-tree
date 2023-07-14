import PropTypes from "prop-types";
import * as S from "./styles.js";

const Box = ({ color, fill, children, className }) => {
  return (
    <S.BoxContainer className={className} fill={fill} color={color}>
      {children}
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
