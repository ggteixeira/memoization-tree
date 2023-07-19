import { OlderChildNode, YoungerChildNode } from "../nodes";
import Box from "../Box";
import * as S from "./styles";
import { useState } from "react";

const Tree = () => {
  const treeColor = "#809BCE";
  const [blink, setBlink] = useState(0);

  return (
    <>
      <Box blink={blink} toggleBlink={setBlink} color={treeColor}>
        <p>I am the Tree </p>
      </Box>

      <S.TreeContainer>
        <OlderChildNode
          blink={blink}
          toggleBlink={setBlink}
          treeColor={treeColor}
        />
        <YoungerChildNode className="younger" />
      </S.TreeContainer>
    </>
  );
};

export default Tree;
