import { useCallback } from "react";
import { useAppDispatch } from "./useRedux";
import { setAppLoading } from "@redux/app/slice";

const useHandle = () => {
  const dispatch = useAppDispatch();
  const setLoading = useCallback((boo: boolean) => {
    dispatch(setAppLoading(boo));
  }, []);

  const onErr = useCallback((error) => {
    if (typeof error === "object") {
      error = JSON.stringify(error);
    }
    console.log("err", error);
  }, []);

  return {
    setLoading,
    onErr,
  };
};

export default useHandle;
