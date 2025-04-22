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

export const getAllCoupons = async () => {
  try {
    const response = apiClient.get("/api/coupon/get-all");
    return response;
  } catch (err) {
    throw err;
  }
};

export const verifyCoupon = async (coupon) => {
  try {
    const response = await apiClient.get(`/api/coupon/check/${coupon}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
