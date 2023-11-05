import Txt from "@components/Text/Txt";
import classNames from "classnames";
import React, { ButtonHTMLAttributes, memo } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
const Button = ({ text, ...props }: IButton) => {
  return (
    <button
      {...props}
      className={classNames(
        "bg-app text-white font-bold w-full py-1 rounded-3xl"
      )}
    >
      <Txt text={text} sz={24} />
    </button>
  );
};

export default memo(Button);
