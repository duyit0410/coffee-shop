import classNames from "classnames";
import React, { PropsWithChildren, memo } from "react";

interface IWrapper1 extends PropsWithChildren {
  className?: string;
}
const Wrapper1 = ({ className, children }: IWrapper1) => {
  return (
    <div
      className={classNames("rounded-md py-3 h-max px-4 bg-white", className)}
    >
      {children}
    </div>
  );
};

export default memo(Wrapper1);
