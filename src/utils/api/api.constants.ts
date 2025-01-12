import { IoptionAPI } from "./api.interface";

export const apiGetTask = ({
  method = "get",
  url = "posts",
  isAuth = true,
  params,
}: IoptionAPI): IoptionAPI => {
  return { method, url, isAuth, ...(params && { params }) };
};
