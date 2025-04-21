import apiClient from "./axios";

export const submitCourseRequest = async (data) => {
  try {
    console.log(process.env.NEXT_PUBLIC_BASE_URL);

    const response = apiClient.post("/api/checkout/add", data);
    return response;
  } catch (err) {
    throw err;
  }
};
