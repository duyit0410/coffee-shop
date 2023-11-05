import { useCallback } from "react";
import useHandle from "./useHandle";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { apiLogin, apiLoginGoogle, apiRegister } from "@api/Auth";
import { localStorageKey } from "@config";
import { useAppDispatch } from "./useRedux";
import { setToken } from "@redux/app/slice";
import { useNavigate } from "react-router-dom";

const { TOKEN } = localStorageKey;

const useWelcome = (cb: () => void) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { onErr, setLoading } = useHandle();
  const onLoginByGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        setLoading(false);
        const { email_verified, email } = res.data;
        if (email_verified) {
          const username = "gg." + email.split("@")[0];
          setLoading(true);
          const res = await apiLoginGoogle({
            username,
          });
          setLoading(false);
          handle(res);
        } else {
          onErr("Email is not verified");
        }
      } catch (error) {
        onErr(error);
      }
    },
    onError: (error) => onErr(error),
  });

  const onLogin = useCallback(async ({ username, password }) => {
    const res = await apiLogin({
      username,
      password,
    });
    handle(res);
  }, []);

  const onRegister = useCallback(async ({ password, username }) => {
    const res = await apiRegister({
      password,
      username,
    });
    handle(res);
  }, []);

  const handle = useCallback(
    (res) => {
      if (res.success) {
        cb();
        localStorage.setItem(TOKEN, res.data);
        dispatch(setToken(res.data));
        navigate("/home");
      } else {
        onErr(res);
      }
    },
    [cb]
  );

  return {
    onLoginByGoogle,
    onRegister,
    onLogin,
  };
};

export default useWelcome;
