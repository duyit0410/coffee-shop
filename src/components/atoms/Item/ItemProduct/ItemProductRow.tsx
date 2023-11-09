import React, { memo } from "react";
import Txt from "../../Text/Txt";
import Wrapper from "../../Wrapper";
import img from "@assets/images/cof2.jpg";

const ItemProductRow = () => {
  return (
    <div className="flex  justify-between gap-x-5 py-3 border-solid border-b-[1px] border-black/10">
      <div className="flex gap-3">
        <img src={img} alt="" className="h-[80px] w-[80px]" />
        <div className="flex flex-col justify-between ">
          <Txt text="Chanh nong" className="font-bold" />
          <Txt
            sz={14}
            text="aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa"
            className="my-truncate my-truncate-line-2 text-black/70"
          />

          <Wrapper className="bg-green-500 mt-1">
            <Txt text="Mở" sz={12} className="text-white" />
          </Wrapper>
        </div>
      </div>
      <Txt text="55,000" />
    </div>
  );
};

export default memo(ItemProductRow);
