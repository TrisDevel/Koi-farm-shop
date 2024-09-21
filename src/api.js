import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Địa chỉ API của bạn

export const fetchKoiList = () => {
    return axios.get(`${API_URL}/koi`);
};

export const fetchKoiDetails = (id) => {
    return axios.get(`${API_URL}/koi/${id}`);
};

export const placeOrder = (orderData) => {
    return axios.post(`${API_URL}/order`, orderData);
};

// Thêm các hàm API khác