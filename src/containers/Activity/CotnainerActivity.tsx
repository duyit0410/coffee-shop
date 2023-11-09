import TabToggle from "@components/atoms/Tab/TabToggle";
import Container from "@layouts/Container";
import Content from "@layouts/Content";
import Header from "@layouts/Header";
import React, { memo, useState } from "react";

const CotnainerActivity = () => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <Container>
        <TabToggle
          data={["Đang diễn ra", "Lịch sử đặt hàng"]}
          setSelected={setTab}
          selected={tab}
        />
      </Container>
      <Content></Content>
    </>
  );
};

export default memo(CotnainerActivity);
