import classNames from "classnames";
import React, { PropsWithChildren, memo } from "react";

interface IWrapperList extends PropsWithChildren {
  className?: string;
}
const WrapperList = ({ children, className }: IWrapperList) => {
  return (
    <div className={classNames("w-full overflow-x-scroll", className)}>
      <div className="flex gap-2 px-4 w-max">{children}</div>
    </div>
  );
};

export default memo(WrapperList);
