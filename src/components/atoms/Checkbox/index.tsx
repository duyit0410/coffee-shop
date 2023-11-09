import classNames from 'classnames';
import React, { memo } from 'react';

interface ICheckbox {
  className?: string,
  noSize?: boolean,
  onClick?: () => void,
  isCheck?: boolean,
  iconSize?: string
}
const Checkbox = ({
className,
noSize,
onClick,
isCheck,
iconSize
}:ICheckbox) => {


  return (
    <div className={classNames('aa', className, noSize ?? "flex items-center justify-center h-[18px] w-[18px] bg-transparent border-[3px] border-black border-solid rounded-sm")}
    onClick={onClick}
    >
      {isCheck && < i className={classNames('icon-check text-black', iconSize ?? 'text-20')}/>}
    </div>
  );
};

export default memo(Checkbox);