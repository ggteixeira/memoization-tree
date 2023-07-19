import PropTypes from "prop-types";
import Box from "../Box/index.jsx";

const OlderChildNode = ({ treeColor, blink, toggleBlink }) => {
  return (
    <>
      <Box blink={blink} toggleBlink={toggleBlink} color={treeColor}>
        <p>I am OlderChildNode</p>
      </Box>
    </>
  );
};

OlderChildNode.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  treeColor: PropTypes.string,
  toggleBlink: PropTypes.bool,
  blink: PropTypes.boolean,
};

export { OlderChildNode };
