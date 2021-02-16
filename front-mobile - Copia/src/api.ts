import axios from "axios";
import { useEffect } from "react";


const API_URL = 'http://localhost:8080'


export function fetchOrders(){
    
    return axios(`${API_URL}/orders`);
}


export function confirmDelivery(orderId: number){
    
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}
