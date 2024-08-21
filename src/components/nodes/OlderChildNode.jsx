import PropTypes from "prop-types";
import Box from "../Box/index.jsx";

const OlderChildNode = ({ color, blink, setBlink }) => {
  return (
    <Box blink={blink} setBlink={setBlink} color={color}>
      <p>I am OlderChildNode</p>
    </Box>
  );
};

OlderChildNode.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  color: PropTypes.string,
  setBlink: PropTypes.function,
  blink: PropTypes.boolean,
};

export { OlderChildNode };
