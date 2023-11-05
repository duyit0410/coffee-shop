import Icon from "@components/Icon";
import Txt from "@components/Text/Txt";
import classNames from "classnames";
import React from "react";

export interface IRowIcon {
  icon: string;
  text: string;
  className?: string;
  onClick: () => void;
}
const RowIcon = ({ icon, onClick, text, className }: IRowIcon) => {
  return (
    <div
      className={classNames("flex justify-between items-center", className)}
      onClick={onClick}
    >
      <div className="flex gap-3 items-center">
        <Icon className={icon} />
        <Txt text={text} />
      </div>
      <Icon className="icon-home" />
    </div>
  );
};

export default RowIcon;
