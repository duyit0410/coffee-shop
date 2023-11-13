import Icon from "@components/atoms/Icon";
import Txt from "@components/atoms/Text/Txt";
import HeaderSimple from "@components/oganisms/Header/HeaderSimple";
import CotnainerActivity from "@containers/Activity/CotnainerActivity";
import ContainerBook from "@containers/Book/ContainerBook";
import ContainerMain from "@containers/Main/ContainerMain";
import ContainerProfile from "@containers/Profile/ContainerProfile";
import ContainerStore from "@containers/Store/ContainerStore";
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
      {step !== 4 && <HeaderSimple />}
      {step === 0 && <ContainerMain />}
      {step === 1 && <ContainerBook />}
      {step === 2 && <CotnainerActivity />}
      {step === 3 && <ContainerStore />}
      {step === 4 && <ContainerProfile />}

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
