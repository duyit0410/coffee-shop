import Icon from "@components/atoms/Icon";
import Input from "@components/atoms/Input";
import Title from "@components/atoms/Text/Title";
import Txt from "@components/atoms/Text/Txt";
import HeaderProfile from "@components/oganisms/Header/HeaderProfile";
import Content from "@layouts/Content";
import classNames from "classnames";
import React, { useCallback, useMemo, useState } from "react";
import flagImg from "@assets/images/flag/vietnam.png";
import Header2 from "@components/oganisms/Header/Header2";

interface IUserData {
  name: string;
  surname: string;
  gender: number;
  birthday: string;
  phoneNumber: string;
  email?: string;
}
const defaultData: IUserData = {
  name: "",
  surname: "",
  birthday: "",
  gender: 0,
  phoneNumber: "",
  email: "",
};

const css = "rounded-md py-3 h-max px-4 bg-white";

const PageProfile = () => {
  const [data, setData] = useState<IUserData>({ ...defaultData });

  const { email } = data;

  const nameData = useMemo(
    () => [
      {
        name: "name",
        value: data.name,
        placeholder: "Tên",
      },
      {
        name: "surname",
        value: data.surname,
        placeholder: "Họ",
      },
    ],
    [data]
  );

  const otherData = useMemo(
    () => [
      {
        right: <Txt text="Chọn" />,
        value: data.gender,
        placeholder: "Giới tính",
      },
      {
        right: <Icon className="icon-home" />,
        value: data.birthday,
        placeholder: "Sinh nhật",
      },
    ],
    [data]
  );

  const onChange = useCallback(
    (e) => {
      console.log("data", data);
      const { name, value } = e.target;
      data[name] = value;
      setData({ ...data });
    },
    [data]
  );

  return (
    <>
      <Header2 text="Hồ sơ" />
      <HeaderProfile />
      <Content>
        <div>
          <div className="flex justify-between items-center">
            <Title text={"Thông tin chung"} />
            <Txt text="Lưu" />
          </div>
          <div className="flex gap-2 mt-3">
            {nameData.map((item, i) => (
              <Input {...item} onChange={onChange} className={css} key={i} />
            ))}
          </div>
          {otherData.map((item, i) => (
            <Box {...item} key={i} />
          ))}
        </div>
        <Wrapper>
          <Title text={"Số điện thoại"} />
          <div className="flex gap-2 mt-3">
            <div className={classNames("flex gap-1 w-max shrink-0", css)}>
              <img alt="" src={flagImg} className="h-6 w-auto" />
              <Txt className="" text="+84" />
            </div>
            <div className={classNames(css, "w-full flex justify-between")}>
              <Txt text="0901430063" />
              <Icon className="icon-home" />
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <Title text={"Email"} />
          <div className={classNames(css)}>
            <Txt text={email || "Email"} className={colorPlaceholder(email)} />
          </div>
        </Wrapper>
        <div></div>
      </Content>
    </>
  );
};
const Wrapper = ({ children }) => <div className="mt-5">{children}</div>;

const Box = ({ value, right, placeholder }) => (
  <div className={classNames(css, "flex justify-between items-center  mt-3")}>
    <Txt
      text={value || placeholder}
      className={classNames(colorPlaceholder(value))}
    />
    {right}
  </div>
);

const colorPlaceholder = (str?: string) => {
  if (!str) return "text-black/50";
};

export default PageProfile;
