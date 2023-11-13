import Button from "@components/atoms/Button";
import Table from "@components/oganisms/Table";
import Txt from "@components/atoms/Text/Txt";
import Content from "@layouts/Content";

import React, { useMemo } from "react";
import HeaderProfile from "@components/oganisms/Header/HeaderProfile";

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
            text: "Chính sách",
            onClick: () => {},
          },
          {
            icon: "icon-home",
            text: "CT Thành Viên",
            onClick: () => {},
          },
          {
            icon: "icon-home",
            text: "Phiên bản ứng dụng",
            onClick: () => {},
          },
        ],
      },
      {
        title: "Thông tin trợ giúp",
        data: [
          {
            icon: "icon-home",
            text: "câu hỏi thường gặp",
            onClick: () => {},
          },
          {
            icon: "icon-home",
            text: "Phản hồi & hỗ trợ",
            onClick: () => {},
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      <HeaderProfile />
      <Content>
        {data.map((item, i) => (
          <Session key={i} {...item} />
        ))}
        <Button text="Đăng xuất" className="mt-5" />
      </Content>
    </>
  );
};

const Session = ({ title, data }) => (
  <div className="mt-5">
    <Txt text={title} sz={20} className="font-bold" />
    <Table data={data} />
  </div>
);

export default ContainerProfile;
