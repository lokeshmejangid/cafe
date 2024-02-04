import axios from "axios";

//base url
const instance = axios.create({
  baseURL: "https://restobillingbackend.onrender.com/",
  //baseURL: "http://localhost:3007",
  headers: {
    'Content-Type': 'application/json',
  }
});

//get all menu data
export const getMenu = async (id) => {
  try {
    const response = await instance.get(`/api/menu/getMenu/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//add menu item
export const addMenu = async (payload) => {
  try {
    const response = await instance.post("/api/menu/addMenuItem", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//update menu item
export const updateMenu = async (payload, id) => {
  try {
    const response = await instance.put(`/api/menu/updateItem/${id}`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//delete menu item
export const deleteMenu = async (id) => {
  try {
    const response = await instance.delete(`/api/menu/deleteItem/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//add customer bill
export const addCustomerBill = async (payload) => {
  try {
    const response = await instance.post("/api/bills/addBill", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//get all customer bill
export const getAllBills = async (payload) => {
  try {
    console.log(payload)
    const response = await instance.get("/api/bills/allBills", { params: payload });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// //user info
// export const getAllBills = async (payload) => {
//   try {
//     const response = await instance.get(`/api/bills/allBills/${payload.userId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

//register user
export const registerUserData = async (payload) => {
  try {
    const response = await instance.post("/api/auth/register", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//login user
export const loginUserData = async (payload) => {
  try {
    const response = await instance.post("/api/auth/login", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//user info
export const getUserInfo = async (payload) => {
  try {
    const response = await instance.get(`/api/info/getInfo`, {params: payload});
    return response.data;
  } catch (error) {
    throw error;
  }
};