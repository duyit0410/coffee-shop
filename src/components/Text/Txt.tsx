import { szToClass } from "@utils/convert";
import classNames from "classnames";
import React, { ReactNode } from "react";

interface ITxt {
  sz?: ISz;
  className?: string;
  onClick?: () => void;
  text: ReactNode;
}
const Txt = ({ className, onClick, sz = 16, text }: ITxt) => {
  return (
    <p className={classNames(szToClass(sz), className)} onClick={onClick}>
      {text}
    </p>
  );
};

export default Txt;
