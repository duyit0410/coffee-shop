import RowIcon, { IRowIcon } from "@components/atoms/Row/RowIcon";
import Wrapper from "@components/atoms/Wrapper";
import classNames from "classnames";
import React, { memo } from "react";

interface ITable {
  data: IRowIcon[];
  className?: string;
}
const Table = ({ data, className }: ITable) => {
  return (
    <Wrapper className={classNames(className, "mt-3 bg-white")}>
      {data.map((item, i) => (
        <RowIcon
          {...item}
          key={i}
          className={classNames(
            "py-2",
            i !== 0 && "border-t-1 border-solid border-black/30"
          )}
        />
      ))}
    </Wrapper>
  );
};

export default memo(Table);
