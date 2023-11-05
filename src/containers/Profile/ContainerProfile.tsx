import Button from "@components/Button";
import Icon from "@components/Icon";
import Table from "@components/Table";
import Txt from "@components/Text/Txt";
import Content from "@layouts/Content";
import Footer from "@layouts/Footer";
import Header from "@layouts/Header";
import React, { useMemo } from "react";

const ContainerProfile = () => {
  const data = useMemo(
    () => [
      {
        title: "Tài khoản",
        data: [
          {
            icon: "icon-home",
            text: "Hồ sơ",
            onClick: () => {},
          },
          {
            icon: "icon-home",
            text: "Hồ sơ",
            onClick: () => {},
          },
        ],
      },
      {
        title: "Tương tác",
        data: [
          {
            icon: "icon-home",
            text: "Hồ sơ",
            onClick: () => {},
          },
        ],
      },
      {
        title: "Thông tin chung",
        data: [
          {
            icon: "icon-home",
            text: "Hồ sơ",
            onClick: () => {},
          },
          {
            icon: "icon-home",
            text: "Hồ sơ",
            onClick: () => {},
          },
          {
            icon: "icon-home",
            text: "Hồ sơ",
            onClick: () => {},
          },
        ],
      },
      {
        title: "Thông tin trợ giúp",
        data: [
          {
            icon: "icon-home",
            text: "Hồ sơ",
            onClick: () => {},
          },
          {
            icon: "icon-home",
            text: "Hồ sơ",
            onClick: () => {},
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <Header className="bg-app">
        <div className="flex gap-2 items-center">
          <div className="rounded-full h-[80px] w-[80px] bg-red"></div>
          <div>
            <div className="flex h-max font-bold">
              <Txt text="duy thanh" />
              <div className="h-full w-[2px] bg-black" />
              <Txt text="thành viên" className="uppercase" />
            </div>
            <Line icon={"icon-home"} value={0} label={"DRIPS"} />
            <Line icon={"icon-home"} value={0} label={"Trả trước"} />
          </div>
        </div>
      </Header>
      <Content>
        {data.map((item, i) => (
          <Session key={i} {...item} />
        ))}
      </Content>
      <Footer>
        <Button text="Đăng xuất" />
      </Footer>
    </>
  );
};

const Line = ({ label, value, icon }) => (
  <div className="flex gap-1 items-center">
    <Icon className={icon} />
    <Txt text={label + ":"} />
    <Txt text={value} className="font-bold" />
  </div>
);

const Session = ({ title, data }) => (
  <div className="mt-5">
    <Txt text={title} sz={20} className="font-bold" />
    <Table data={data} />
  </div>
);

export default ContainerProfile;
