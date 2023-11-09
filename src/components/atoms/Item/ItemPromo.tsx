import React, { memo } from "react";
import img from "@assets/images/logo.jpg";
import Txt from "../Text/Txt";
import Icon from "../Icon";

const ItemPromo = () => {
  return (
    <div className="w-[140px] bg-red">
      <img alt="" src={img} className="w-full h-[160px]" />
      <div className="flex gap-2 items-center">
        <Icon className="icon-home" sz={16} />
        <Txt
          text="ngon đậm chất chất"
          className="font-medium uppercase truncate w-full"
          sz={14}
        />
      </div>
      <Txt text="02/11 - 30/11" sz={12} />
    </div>
  );
};

export default memo(ItemPromo);
