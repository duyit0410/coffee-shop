import Icon from "@components/Icon";
import Txt from "@components/Text/Txt";
import ContainerProfile from "@containers/Profile/ContainerProfile";
import Content from "@layouts/Content";
import Footer from "@layouts/Footer";
import classNames from "classnames";
import React, { useMemo, useState } from "react";

const PageHome = () => {
  const [step, setStep] = useState(0);

  const footerData = useMemo(
    () => [
      {
        icon: "icon-home",
        text: "Trang chủ",
      },
      {
        icon: "icon-home",
        text: "Đặt hàng",
      },
      {
        icon: "icon-home",
        text: "Hoạt động",
      },
      {
        icon: "icon-home",
        text: "Cửa hàng",
      },
      {
        icon: "icon-home",
        text: "Khác",
      },
    ],
    []
  );

  return (
    <>
      <ContainerProfile />

      <Footer className="shadow-1">
        <div className="flex py-3">
          {footerData.map((item, i) => (
            <div
              key={i}
              onClick={() => setStep(i)}
              className={classNames(
                "flex-1 flex flex-col items-center",
                step === i && "font-bold"
              )}
            >
              <Icon
                className={classNames(item.icon, step === i && "font-bold")}
              />
              <Txt className="mt-1" sz={12} text={item.text} />
            </div>
          ))}
        </div>
      </Footer>
    </>
  );
};

export default PageHome;
