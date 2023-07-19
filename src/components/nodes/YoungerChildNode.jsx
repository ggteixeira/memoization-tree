import PropTypes from "prop-types";
import Box from "../Box/index.jsx";

const YoungerChildNode = () => {
  return (
    <Box className={["younger"]} color="#EAC4D5">
      <p>I am YoungerChildNode</p>
    </Box>
  );
};

YoungerChildNode.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
};

export { YoungerChildNode };
