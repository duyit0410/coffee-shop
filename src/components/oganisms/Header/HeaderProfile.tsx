import Icon from "@components/atoms/Icon";
import Txt from "@components/atoms/Text/Txt";
import Header from "@layouts/Header";
import React, { memo } from "react";

const HeaderProfile = () => {
  return (
    <Header className="bg-app py-6">
      <div className="flex gap-2 items-center">
        <div className="rounded-full h-[80px] w-[80px] bg-red"></div>
        <div>
          <div className="flex h-max font-bold">
            <Txt text="duy thanh" />
            <div className="h-full w-[2px] bg-black" />
            <Txt text="thành viên" className="uppercase" />
          </div>
          <Line icon={"icon-home"} value={0} label={"DRIPS"} />
          <Line icon={"icon-home"} value={0} label={"Trả trước"} />
        </div>
      </div>
    </Header>
  );
};
const Line = ({ label, value, icon }) => (
  <div className="flex gap-1 items-center w-full">
    <Icon className={icon} />
    <Txt text={label + ":"} />
    <Txt text={value} className="font-bold" />
  </div>
);

export default memo(HeaderProfile);
