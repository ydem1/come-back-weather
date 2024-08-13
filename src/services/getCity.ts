import { ICity } from "src/types/city";
import { instance } from "./api-client";

export const getCity = async (q: string): Promise<ICity> => {
  try {
    const { data } = await instance.get("/geo/1.0/direct", {
      params: {
        q,
        limit: 1,
      },
    });

    return data[0];
  } catch ({ response }) {
    return response?.data?.message;
  }
};
