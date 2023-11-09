import React, { memo } from "react";
import img1 from "@assets/images/Category/tea.png";
import Txt from "@components/atoms/Text/Txt";

const ListCategory = () => {
  return (
    <div className="w-full overflow-x-scroll h-max shrink-0">
      <div className="flex items-center w-max">
        {[...new Array(10)].map((item, i) => (
          <div
            className="p-2 flex flex-col items-center justify-center"
            key={i}
          >
            <img alt="" src={img1} className="h-[80px] w-[80px]" />
            <Txt className="" text="Trà" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ListCategory);
