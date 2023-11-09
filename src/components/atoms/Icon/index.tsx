import { szToClass } from "@utils/convert";
import classNames from "classnames";
import React, { memo, useMemo } from "react";

interface IIcon {
  sz?: ISz;
  className?: string;
  onClick?: () => void;
}
const Icon = ({ onClick, sz = 20, className }: IIcon) => {
  return (
    <i className={classNames(className, szToClass(sz))} onClick={onClick} />
  );
};

export default memo(Icon);
