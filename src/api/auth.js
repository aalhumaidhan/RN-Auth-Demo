import instance from ".";
import { setToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post("/auth/login", userInfo);
  setToken(data.token);
  return data;
};

const register = async (userInfo, image) => {
  const formData = new FormData();
  for (key in userInfo) {
    formData.append(key, userInfo[key]);
  }

  formData.append("image", {
    name: "image.jpg",
    type: "image/jpeg",
    uri: image,
  });
  const { data } = await instance.post("/auth/register", formData);
  setToken(data.token);
  console.log(data);
  return data;
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

export { login, register, me, getAllUsers };
