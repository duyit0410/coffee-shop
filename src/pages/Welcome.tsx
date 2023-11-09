import Icon from "@components/atoms/Icon";
import Input from "@components/atoms/Input";
import Txt from "@components/atoms/Text/Txt";
import Container from "@layouts/Content";
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import logoImg from "@assets/images/logo.jpg";
import Checkbox from "@components/atoms/Checkbox";
import classNames from "classnames";
import useWelcome from "@hooks/useWelcome";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import useHandle from "@hooks/useHandle";
import { apiLogin, apiLoginGoogle } from "@api/Auth";
import { localStorageKey } from "@config";

const { REMEMBER_PASSWORD } = localStorageKey;

const Welcome = () => {
  const { onErr, setLoading } = useHandle();
  const [isLogin, setIsLogin] = useState(true);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [remember, setRemember] = useState(false);

  const onRememberPass = useCallback(() => {
    if (remember && isLogin) {
      localStorage.setItem(REMEMBER_PASSWORD, data.password);
    }
  }, [data, remember, isLogin]);

  const { onLoginByGoogle, onLogin, onRegister } = useWelcome(onRememberPass);

  const render = useMemo(() => {
    const { password, username, confirmPassword } = data;
    const postData = {
      username,
      password,
    };
    if (isLogin) {
      return {
        btn: "Sign in",
        forgot: "Forgot password?",
        desc: "Don't have an account?",
        link: "Sign up",
        onClick: () => onLogin(postData),
      };
    }
    return {
      btn: "Sign up",
      desc: "Alredy have an account?",
      link: "Sign in",
      onClick: () => onRegister(postData),
    };
  }, [isLogin, data]);

  const IconShow = useMemo(
    () => (
      <Icon
        className={show ? "icon-view" : "icon-hide"}
        onClick={() => setShow(!show)}
      />
    ),
    [show]
  );

  const inputData = useMemo(() => {
    const arr = [
      {
        name: "username",
        placeholder: "Username",
        left: <Icon className="icon-user" />,
      },
      {
        name: "password",
        placeholder: "Password",
        left: <Icon className="icon-lock" />,
        type: show ? "text" : "password",
        right: IconShow,
      },
    ];
    const confirm = {
      name: "confirmPassword",
      placeholder: "Confirm password",
      left: <Icon className="icon-lock" />,
      type: show ? "text" : "password",
      right: IconShow,
    };
    if (!isLogin) arr.push(confirm);
    return arr;
  }, [show, isLogin]);

  const buttonData = useMemo(
    () => [
      {
        icon: "icon-google ",
        bg: "bg-red",
        onClick: () => onLoginByGoogle(),
      },
    ],
    []
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      data[name] = value;
      setData({
        ...data,
      });
    },
    [data]
  );

  useEffect(() => {
    const a = apiLogin({
      password: "sd",
      username: "asgd",
    });
    console.log("aaaaaaaaaaaaaaaa", a);
  }, []);
  return (
    <>
      <Container className="flex flex-col items-center">
        <img src={logoImg} className="h-[300px] w-[300px]" />
        <Txt
          sz={24}
          txt={(isLogin ? "Login to" : "Create") + " your account"}
          className="font-bold"
        />
        {inputData.map((item, i) => (
          <Input
            key={i}
            {...item}
            className="mt-3"
            value={data[item.name]}
            onChange={onChange}
          />
        ))}
        {isLogin && (
          <div className="flex gap-3 mt-3 items-center w-full pl-2">
            <Checkbox
              className=""
              isCheck={remember}
              onClick={() => setRemember(!remember)}
            />
            <Txt txt="Remember me" />
          </div>
        )}
        <button
          className="mt-5 bg-app rounded-3xl py-2 px-4 w-full text-white font-bold"
          onClick={render.onClick}
        >
          {render.btn}
        </button>
        <Txt
          txt={render.forgot || ""}
          className="font-medium text-app underline"
        />
        <div className="flex items-center w-full gap-3 my-10 px-12">
          <div className="bg-black/20 h-[1px] flex-1" />
          <Txt
            txt="Or continue with"
            className="whitespace-nowrap text-black/50"
          />
          <div className="bg-black/20 h-[1px] flex-1" />
        </div>
        <div className="text-16 flex items-center gap-2">
          <span>{render.desc}</span>
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-app font-bold"
          >
            {render.link}
          </span>
        </div>
        <div className="flex gap-3 mt-3">
          {buttonData.map((item, i) => (
            <div
              onClick={item.onClick}
              className={classNames(
                "flex items-center justify-center h-10 w-10 rounded-xl",
                item.bg
              )}
              key={i}
            >
              <Icon className={`${item.icon} text-white`} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Welcome;
