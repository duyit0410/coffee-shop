import React, { PropsWithChildren, memo } from "react";
import classNames from "classnames";
import Container from "./Container";

interface IContent extends PropsWithChildren {
  className?: string;
  hfull?: boolean;
  noPadding?: boolean;
}
const Content = ({ className, children, noPadding }: IContent) => {
  return (
    <div
      id="content"
      className={classNames(className, "h-full overflow-scroll pb-5")}
    >
      <Container noPadding={noPadding}>{children}</Container>
    </div>
  );
};

export default memo(Content);
