import classNames from "classnames";
import React, { memo } from "react";
import Txt from "../Text/Txt";

interface ITabToggle {
  selected: number;
  data: string[];
  setSelected: (val: number) => void;
}
const TabToggle = ({ data, selected, setSelected }: ITabToggle) => {
  return (
    <div className="flex w-full relative">
      {data.map((item, i) => (
        <div
          key={i}
          className="w-1/2 flex items-center  justify-center "
          onClick={() => setSelected(i)}
        >
          <Txt
            text={item}
            className={classNames(
              "py-2 duration-100 flex items-center justify-center",
              i === selected && "font-bold"
            )}
          />
        </div>
      ))}
      <div
        className="h-1 w-1/2 absolute bottom-0  bg-app translate-y-full duration-100"
        style={{
          transform: `translateX(${100 * selected}%)`,
        }}
      />
    </div>
  );
};

export default memo(TabToggle);
