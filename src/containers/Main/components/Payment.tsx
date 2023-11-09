import Txt from "@components/atoms/Text/Txt";
import Container from "@layouts/Container";
import React, { memo } from "react";
import Card from "./Card";

const Payment = () => {
  return (
    <>
      <Container className="py-4 bg-yellow-200">
        <Card sz="lg" />
        <div className="flex gap-2 mt-3">
          <Card />
          <Card />
        </div>
      </Container>
    </>
  );
};

export default memo(Payment);
