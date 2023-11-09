import ListCategory from "@components/oganisms/List/ListCategory";
import React, { memo } from "react";
import Payment from "./components/Payment";
import MySwiper from "@components/atoms/MySwiper";
import img from "@assets/images/logo_notext.jpg";
import Promo from "./components/Promo";
import HotSale from "./components/HotSale";
import Content from "@layouts/Content";

const ContainerMain = () => {
  return (
    <>
      <Content noPadding>
        <Payment />
        <ListCategory />
        <MySwiper data={[img, img]} />
        <Promo />
        <HotSale />
      </Content>
    </>
  );
};

export default memo(ContainerMain);
