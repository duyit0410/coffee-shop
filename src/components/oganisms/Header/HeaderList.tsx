import Icon from "@components/atoms/Icon";
import Txt from "@components/atoms/Text/Txt";
import React, { memo } from "react";

interface IHeaderList {
  title: string;
  onSetRenderType: (val: number) => void;
}
const HeaderList = ({ title, onSetRenderType }: IHeaderList) => {
  return (
    <div className="flex items-center justify-between">
      <Txt className="font-bold" text={title} />
      <div className="flex items-center gap-3">
        {["icon-home", "icon-home"].map((item, i) => (
          <Icon className={item} key={i} onClick={() => onSetRenderType(i)} />
        ))}
      </div>
    </div>
  );
};

export default memo(HeaderList);
