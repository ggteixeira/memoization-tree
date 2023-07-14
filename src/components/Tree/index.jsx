import { ParentNode } from "../nodes";
import Box from "../Box";

const Tree = () => {
  return (
    <>
      <Box className="tree" color="#8294C4">
        <p>I am Tree</p>
        <ParentNode />
      </Box>
    </>
  );
};

export default Tree;
