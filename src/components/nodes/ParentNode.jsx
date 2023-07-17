import PropTypes from "prop-types";
import Box from "../Box/index.jsx";
import { OlderChildNode } from "./index.js";

const ParentNode = () => {
  return (
    <>
      <Box className="parent" color="#95B8D1">
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
