import classNames from "classnames";
import React, { memo, useMemo } from "react";

type ISz = 16 | 20 | 24;
interface IIcon {
  sz?: ISz;
  className?: string;
  onClick?: () => void;
}
const Icon = ({ onClick, sz, className }: IIcon) => {
  const size = useMemo(() => {
    switch (sz) {
      case 16:
        return "text-16";
      case 20:
        return "text-20";
      case 24:
        return "text-24";
    }
  }, [sz]);

  return <i className={classNames(className, size)} onClick={onClick} />;
};

export default memo(Icon);
