import Icon from "@components/atoms/Icon";
import Header from "@layouts/Header";
import React, { memo } from "react";

const HeaderSimple = () => {
  return (
    <Header className="bg-white py-2">
      <div className="flex items-center justify-between ">
        <div className="h-8 w-8 rounded-full bg-slate-900"></div>
        <Icon className="icon-search" sz={24} />
      </div>
    </Header>
  );
};

export default memo(HeaderSimple);
