import axios from "axios";
import { useEffect } from "react";


const API_URL = 'https://delivernew.herokuapp.com'
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

export function fetchOrders(){
    
    return axios(`${API_URL}/orders`);
}

export function fetchLocalMapBox(local:string ){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

