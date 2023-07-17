import PropTypes from "prop-types";
import Box from "../Box/index.jsx";
import { YoungerChildNode } from "./index.js";

const OlderChildNode = () => {
  return (
    <>
      <Box className="older" color="#B8E0D2">
        <p>I am OlderChildNode</p>
        <YoungerChildNode />
      </Box>
    </>
  );
};

OlderChildNode.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
};

export { OlderChildNode };
