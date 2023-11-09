import ItemProductSimple from "@components/atoms/Item/ItemProduct/ItemProductSimple";
import Txt from "@components/atoms/Text/Txt";
import WrapperList from "@components/atoms/Wrapper/WrapperList";
import React, { memo } from "react";

const HotSale = () => {
  return (
    <>
      <Txt text="Sản phẩm bấn chạy" className="font-bold px-4 mt-5" sz={20} />
      <WrapperList className="mt-3">
        {[...new Array(10)].map((item, i) => (
          <ItemProductSimple key={i} />
        ))}
      </WrapperList>
    </>
  );
};

export default memo(HotSale);
