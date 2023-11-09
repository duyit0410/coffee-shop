import ItemPromo from "@components/atoms/Item/ItemPromo";
import WrapperList from "@components/atoms/Wrapper/WrapperList";
import React, { memo } from "react";

const Promo = () => {
  return (
    <WrapperList>
      {[...new Array(10)].map((item, i) => (
        <ItemPromo key={i} />
      ))}
    </WrapperList>
  );
};

export default memo(Promo);
