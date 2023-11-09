import ItemProductRow from "@components/atoms/Item/ItemProduct/ItemProductRow";
import HeaderList from "@components/oganisms/Header/HeaderList";
import ListCategory from "@components/oganisms/List/ListCategory";
import Container from "@layouts/Container";
import Content from "@layouts/Content";
import React, { useState } from "react";

const ContainerBook = () => {
  const [type, setType] = useState(0);

  return (
    <>
      <ListCategory />
      <Container clasName="pb-5">
        <HeaderList title="thức uống khác" onSetRenderType={setType} />
      </Container>
      <Content>
        {[...new Array(11)].map((item, i) => (
          <ItemProductRow key={i} />
        ))}
      </Content>
    </>
  );
};

export default ContainerBook;
