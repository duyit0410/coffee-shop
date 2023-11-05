import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface IContainer extends PropsWithChildren {
  clasName?: string;
}
const Container = ({ clasName, children }: IContainer) => {
  return <div className={classNames("px-4", clasName)}>{children}</div>;
};

Container.displayName = "Container";

export default Container;
