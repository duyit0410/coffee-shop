// import Icon from "@components/Icon";
// import React, { PropsWithChildren, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Container from "./Content";
// import classNames from "classnames";
// import Txt from "@components/Text/Txt";

// interface ISubmit {
//   onClick: () => void;
//   text: string;
// }
// interface IFooter extends PropsWithChildren {
//   onSubmit?: ISubmit;
// }
// const Footer = ({ children, onSubmit }: IFooter) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const footer = document.getElementById("footer");
//     if (!footer) return;

//     const prevElement = footer.previousElementSibling as HTMLElement;
//     if (!prevElement || prevElement.id !== "content") return;

//     prevElement.style.paddingBottom = footer.clientHeight + "px";
//   }, []);

//   return (
//     <div id="footer" className="fixed pb-8 bottom-0 w-full">
//       <Container>
//       {children}

//       </Container>
//       {/* <Container hfull={false}>
//         <div className="flex h-[56px]">
//           <div
//             className={classNames(
//               "h-[56px] w-[56px]  bg-black/30 flex items-center justify-center",
//               onSubmit ? "rounded-l-xl" : "rounded-rounded-l-xl"
//             )}
//           >
//             <Icon className="icon-back" onClick={() => navigate(-1)} />
//           </div>
//           {children}
//           {onSubmit && (
//             <div
//               className="w-full rounded-r-xl bg-slate-300 uppercase font-bold flex items-center justify-center"
//               onClick={onSubmit.onClick}
//             >
//               <Txt txt={onSubmit.text} sz={20} />
//             </div>
//           )}
//         </div>
//       </Container> */}
//     </div>
//   );
// };

// export default Footer;

import React, { PropsWithChildren, memo } from "react";
import Container from "./Container";
import classNames from "classnames";

interface IFooter extends PropsWithChildren {
  className?: string;
}
const Footer = ({ children, className }: IFooter) => {
  return (
    <div className={classNames(className, "shrink-0 pb-8")}>
      <Container>{children}</Container>
    </div>
  );
};

export default memo(Footer);
