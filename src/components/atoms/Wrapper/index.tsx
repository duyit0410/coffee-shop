import classNames from "classnames";
import React, { PropsWithChildren, memo } from "react";

interface IWrapper extends PropsWithChildren {
  className?: string;
}
const Wrapper = ({ children, className }: IWrapper) => {
  return (
    <div className={classNames("rounded-xl px-2 w-max", className)}>
      {children}
    </div>
  );
};

export default memo(Wrapper);
