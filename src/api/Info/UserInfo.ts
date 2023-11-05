import apiClient from "@api";

export const apiGetUserInfo = async () => {
  const url = "user/info";
  const res = await apiClient.get(url);
  return res.data;
};

export const apiUpdateUserInfo = async (data: IUser) => {
  const url = "user/update";
  const res = await apiClient.post(url, data);
  return res.data.data;
};
