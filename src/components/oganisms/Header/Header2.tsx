import Icon from "@components/atoms/Icon";
import Txt, { ITxt } from "@components/atoms/Text/Txt";
import Header from "@layouts/Header";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

interface IHeader2 {
  text: string;
}
const Header2 = ({ text }: IHeader2) => {
  const navigate = useNavigate();
  return (
    <Header>
      <div className="flex justify-center py-3 items-center relative">
        <Icon
          className="icon-back absolute left-0 bottom-1/2 translate-y-1/2"
          onClick={() => navigate(-1)}
        />
        <Txt text={text} className="font-bold" sz={20} />
      </div>
    </Header>
  );
};

export default memo(Header2);
