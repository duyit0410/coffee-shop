import React, { memo } from "react";
import Wrapper1 from "../Wrapper/Wrapper1";
import Icon from "../Icon";
import Txt from "../Text/Txt";

interface IItem1 {
  arrow?: boolean;
  icon: string;
  text: string;
}
const Item1 = ({ icon, text, arrow }: IItem1) => {
  return (
    <Wrapper1 className="flex items-center mt-3 justify-between">
      <div className="flex gap-5 items-center">
        <Icon className={icon} />
        <Txt text={text} />
      </div>
      {arrow && <Icon className="icon-home" />}
    </Wrapper1>
  );
};

export default memo(Item1);
