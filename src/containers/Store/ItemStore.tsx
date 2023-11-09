import React, { memo } from "react";
import sotreImg from "@assets/images/avt.jpg";
import Txt from "@components/atoms/Text/Txt";
import Icon from "@components/atoms/Icon";
import classNames from "classnames";
import Wrapper from "@components/atoms/Wrapper";

interface IItemStore {
  className?: string;
}
const ItemStore = ({ className }: IItemStore) => {
  return (
    <div
      className={classNames(
        "p-2 rounded-xl bg-white flex gap-2 text-black/50",
        className
      )}
    >
      <img src={sotreImg} alt="" className="h-[100px] w-[100px]" />
      <div className=" w-full flex flex-col justify-around">
        <div className="flex justify-between items-center">
          <Txt text="359 Lê Quang Định" className="font-bold" />
          <Txt className="" text="752m" />
        </div>
        <Txt
          text="359 Lê Quang Định p5 q binh thanh"
          sz={12}
          className="max-w-[180px]"
        />
        <div className="flex items-center gap-2">
          <Icon className="icon-home" sz={12} />
          <Txt sz={12} text="0903140685" />
        </div>
        <div className="flex items-center gap-2">
          <Wrapper className="bg-green-500">
            <Txt text="Mở" sz={12} className="text-white" />
          </Wrapper>
          <Txt text="7:00 - 23:00" sz={12} />
        </div>
      </div>
    </div>
  );
};

export default memo(ItemStore);
