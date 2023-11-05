import React, { PropsWithChildren, memo } from "react";
import classNames from "classnames";
import Container from "./Container";

interface IContent extends PropsWithChildren {
  className?: string;
  hfull?: boolean;
}
const Content = ({ className, children, hfull = true }: IContent) => {
  return (
    <div
      id="content"
      className={classNames(className, "h-full overflow-scroll")}
    >
      <Container>{children}</Container>
    </div>
  );
};

export default memo(Content);
