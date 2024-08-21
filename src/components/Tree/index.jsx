import { OlderChildNode, YoungerChildNode } from "../nodes";
import Box from "../Box";
import * as S from "./styles";
import { useState } from "react";

const Tree = () => {
  const [blink, setBlink] = useState(false);

  return (
    <>
      <Box color="809BCE" blink={blink} setBlink={setBlink}>
        <p>I am the Tree</p>
      </Box>

      <S.TreeContainer>
        <OlderChildNode blink={blink} setBlink={setBlink} color="809BCE" />
        <YoungerChildNode blink={blink} className="younger" />
      </S.TreeContainer>
    </>
  );
};

export default Tree;
