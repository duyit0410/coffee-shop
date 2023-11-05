import React, { InputHTMLAttributes, ReactNode, memo } from "react";
import classnames from "classnames";

interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "style"> {
  inputClass?: string;
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
  style?: boolean;
  border?: boolean;
}
const Input = ({
  inputClass,
  left,
  right,
  className,
  style,
  border,
  ...rest
}: IInput) => {
  return (
    <div
      className={classnames(
        "flex items-center ",
        style ?? " gap-2 w-full px-3 h-10 sm:h-[60px] bg-white rounded-2xl",
        border ?? "border-1 border-solid border-black",
        className
      )}
    >
      {left}
      <input
        className={classnames(
          "bg-transparent h-full w-full focus:outline-none rounded-[inherit]",
          inputClass
        )}
        {...rest}
      />
      {right}
    </div>
  );
};

export default memo(Input);
