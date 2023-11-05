import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classnames from "classnames";
import classNames from "classnames";
import Txt from "@components/Text/Txt";

const BottomNav = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const visible = useMemo(() => {
    return bottomTabData.find((item) => item.path === pathname);
  }, [pathname]);

  if (!visible) return <></>;
  return (
    <div
      className={`flex w-full h-[52px] shrink-0 border-t-[2px] border-solid border-app`}
    >
      {bottomTabData.map((item, i) => (
        <div
          onClick={() => navigate(item.path)}
          key={i}
          className={classnames(
            " w-full flex flex-col items-center justify-center",
            item.path === pathname && `font-bold text-main`
          )}
        >
          <i className={classNames(item.icon, "text-20")} />
          <Txt sz={12} txt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default React.memo(BottomNav);

export const bottomTabData = [
  {
    title: "Trang chủ",
    path: "/home",
    icon: "icon-home",
  },
  {
    title: "Đặt hàng",
    path: "/catergories",
    icon: "icon-cate",
  },
  {
    title: "Hoạt động",
    path: "/cart",
    icon: "icon-cart",
  },
  {
    title: "Cửa hàng",
    path: "/notification",
    icon: "icon-bell",
  },
  {
    title: "Khác",
    path: "/profile",
    icon: "icon-user",
  },
];
