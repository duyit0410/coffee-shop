import Icon from "@components/atoms/Icon";
import Input from "@components/atoms/Input";
import Txt from "@components/atoms/Text/Txt";
import Container from "@layouts/Container";
import Content from "@layouts/Content";
import Header from "@layouts/Header";
import React, { memo } from "react";
import ItemStore from "./ItemStore";
import classNames from "classnames";
import HeaderSimple from "@components/oganisms/Header/HeaderSimple";

const ContainerStore = () => {
  return (
    <>
      <Container className="mt-3">
        <div className="flex items-center justify-between gap-5">
          <Input
            className="shadow-1"
            placeholder="Tìm địa chỉ"
            right={<Icon className="icon-search" />}
          />
          <div className="flex items-center gap-1">
            <Icon className="icon-home" />
            <Txt className="whitespace-nowrap" text="Bản đồ" />
          </div>
        </div>
      </Container>
      <Content className="mt-5">
        {[...new Array(10)].map((item, i) => (
          <ItemStore key={i} className={classNames(i !== 0 && "mt-2")} />
        ))}
      </Content>
    </>
  );
};

export default memo(ContainerStore);
