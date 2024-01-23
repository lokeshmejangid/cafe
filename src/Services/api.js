import axios from "axios";

//base url
const instance = axios.create({
  baseURL: "http://localhost:3005",
});

//get all menu data
export const getMenu = async () => {
  try {
    const response = await instance.get("/api/menu/getMenu");
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
export const getAllBills = async () => {
  try {
    const response = await instance.get("/api/bills/allBills");
    return response.data;
  } catch (error) {
    throw error;
  }
};
