import apiClient from "@api";

export const apiLoginGoogle = async ({ username }) => {
  try {
    const url = "user/login-by-google";
    const res = await apiClient.post(url, {
      username,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const apiLogin = async ({ username, password }) => {
  try {
    const url = "user/login";
    const res = await apiClient.post(url, {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const apiRegister = async ({ username, password }) => {
  try {
    const url = "user/register";
    const res = await apiClient.post(url, {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
