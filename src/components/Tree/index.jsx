import { OlderChildNode, YoungerChildNode } from "../nodes";
import Box from "../Box";
import * as S from "./styles";
import { useState } from "react";

const Tree = () => {
  const [blink, setBlink] = useState(0);

  const treeProps = {
    color: "809BCE",
    blink: blink,
    toggleBlink: setBlink,
  };

  return (
    <>
      <Box treeProps={treeProps}>
        <p>I am the Tree </p>
      </Box>

      <S.TreeContainer>
        <OlderChildNode
          blink={blink}
          toggleBlink={setBlink}
          treeColor={treeProps.color}
        />
        <YoungerChildNode blink={blink} className="younger" />
      </S.TreeContainer>
    </>
  );
};

export default Tree;
