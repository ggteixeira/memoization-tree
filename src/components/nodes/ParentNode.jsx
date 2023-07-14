import PropTypes from "prop-types";
import Box from "../Box/index.jsx";
import { OlderChildNode } from "./index.js";

const ParentNode = () => {
  return (
    <>
      <Box className="parent" color="#ACB1D6">
        <p>I am ParentNode</p>
        <OlderChildNode />
      </Box>
    </>
  );
};

ParentNode.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
};

export { ParentNode };
