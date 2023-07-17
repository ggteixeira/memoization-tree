import { ParentNode } from "../nodes";
import Box from "../Box";
import { useEffect, useState } from "react";

const Tree = () => {
  return (
    <>
      <Box className="tree" color="#809BCE">
        <p>I am Tree </p>
        <ParentNode />
      </Box>
    </>
  );
};

export default Tree;
