import Icon from "@components/atoms/Icon";
import Item1 from "@components/atoms/Item/Item1";
import Title from "@components/atoms/Text/Title";
import Txt from "@components/atoms/Text/Txt";
import Wrapper1 from "@components/atoms/Wrapper/Wrapper1";
import Header2 from "@components/oganisms/Header/Header2";
import Content from "@layouts/Content";
import React, { memo } from "react";

const SettingPage = () => {
  return (
    <>
      <Header2 text="Cài đặt" />
      <Content>
        <Title text="Cài đặt tài khoản" />
        <Item1 icon="icon-home" text="Xóa tài khoản" />

        <div className="mt-5">
          <Title text="Bảo mật" />
          <Item1 text="Thay đổi mật khẩu" icon="icon-home" arrow />
        </div>
      </Content>
    </>
  );
};

export default memo(SettingPage);
