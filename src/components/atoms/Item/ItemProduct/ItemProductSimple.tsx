import React, { memo } from "react";
import img from "@assets/images/cof1.jpg";
import Txt from "@components/atoms/Text/Txt";

const ItemProductSimple = () => {
  return (
    <div className="p-4 rounded-xl w-[120px] bg-white">
      <img alt="" src={img} className="w-full h-[120px]" />
      <Txt text="Phin sữa đá" />
      <div className="py-1 px-2 rounded-xl bg-app/20">
        <Txt text="23000" />
      </div>
    </div>
  );
};

export default memo(ItemProductSimple);
