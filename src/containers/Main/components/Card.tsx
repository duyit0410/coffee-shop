import Txt from "@components/atoms/Text/Txt";
import classNames from "classnames";
import React, { memo } from "react";

interface ICard {
  sz?: "sm" | "lg";
}
const Card = ({ sz = "sm" }: ICard) => {
  return (
    <div
      className={classNames(
        "w-full  bg-red rounded-xl p-2 text-white",
        sz === "lg" && "aspect-[5/2]"
      )}
    >
      <Txt text="duy thanh" className="font-bold" sz={14} />
      <Txt text="thành viên" className="mt-1 uppercase font-bold" sz={14} />
    </div>
  );
};

export default memo(Card);
