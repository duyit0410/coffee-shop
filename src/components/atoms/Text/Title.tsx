import React, { memo } from "react";
import Txt from "./Txt";

const Title = ({ text }) => {
  return <Txt text={text} className="font-bold" sz={20} />;
};

export default memo(Title);
