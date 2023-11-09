import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface IContainer extends PropsWithChildren {
  className?: string;
  noPadding?: boolean;
}
const Container = ({ className, children, noPadding }: IContainer) => {
  return (
    <div className={classNames("w-full", noPadding ?? "px-4", className)}>
      {children}
    </div>
  );
};

Container.displayName = "Container";

export default Container;
