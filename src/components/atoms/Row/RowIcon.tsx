import Icon from "@components/atoms/Icon";
import Txt from "@components/atoms/Text/Txt";
import classNames from "classnames";
import React, { memo } from "react";

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

export default memo(RowIcon);