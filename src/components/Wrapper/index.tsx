import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface IWrapper extends PropsWithChildren {
  className?: string;
}
const Wrapper = ({ children, className }: IWrapper) => {
  return (
    <div className={classNames("rounded-xl bg-white px-3", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
