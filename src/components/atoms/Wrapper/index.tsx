import classNames from "classnames";
import React, { PropsWithChildren, memo } from "react";

interface IWrapper extends PropsWithChildren {
  className?: string;
  wfull?: boolean;
}
const Wrapper = ({ children, className, wfull }: IWrapper) => {
  return (
    <div
      className={classNames(
        "rounded-xl px-2 ",
        wfull ? "w-full" : "w-max",
        className
      )}
    >
      {children}
    </div>
  );
};

export default memo(Wrapper);
