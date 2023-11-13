import Title from "@components/atoms/Text/Title";
import Txt from "@components/atoms/Text/Txt";
import Header2 from "@components/oganisms/Header/Header2";
import React, { useMemo, useState } from "react";

interface ISupportData {
  name: string;
  email: string;
  phoneNumber: string;
  type: number;
  desc: string;
}
const defaultData: ISupportData = {
  desc: "",
  email: "",
  name: "",
  phoneNumber: "",
  type: -1,
};

const SupportPage = () => {
  const [data, setData] = useState<ISupportData>({
    ...defaultData,
  });

  const inputData = useMemo(
    () => [
      {
        title: "Tên của bản",
        name: "name",
        value: data.name,
      },
      {
        title: "Số điện thoại",
        name: "phoneNumber",
        value: data.phoneNumber,
      },
      {
        title: "Email",
        name: "email",
        value: data.email,
      },
      {
        title: "Phân loại",
        name: "type",
        value: data.type,
      },
      {
        title: "Thông tin chi tiết (tối đa 1500 kí tự)",
        name: "desc",
        value: data.desc,
      },
    ],
    [data]
  );

  return (
    <>
      <Header2 text="Phản hồi & hỗ trợ" />
      <Txt text="Chúng mình luôn lắng nghe! Hãy cho chúng mình biết cảm nhận của bạn" />
      <div>
        {inputData.map((item, i) => (
          <div className="mt-5">
            <Title text={item.title} />
            <input value={item.value} name={item.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SupportPage;
