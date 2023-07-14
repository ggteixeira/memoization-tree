import PropTypes from "prop-types";
import Box from "../Box/index.jsx";

const YoungerChildNode = () => {
  return (
    <Box className="younger" color="#FFEAD2">
      <p>I am YoungerChildNode</p>
    </Box>
  );
};

YoungerChildNode.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
};

export { YoungerChildNode };
