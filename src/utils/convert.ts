export const szToClass = (sz: ISz) => {
  switch (sz) {
    case 10:
      return "text-[10px]";
    case 12:
      return "text-12";
    case 14:
      return "text-[14px]";
    case 16:
      return "text-16";
    case 20:
      return "text-20";
    case 24:
      return "text-24";
    case 32:
      return "text-[32px]";
  }
};
