import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import Container from "./Container";

interface IHeader extends PropsWithChildren {
  className?: string;
}
const Header = ({ children, className }: IHeader) => {
  return (
    <div className={classNames(className)}>
      <Container>{children}</Container>
    </div>
  );
};

export default Header;
