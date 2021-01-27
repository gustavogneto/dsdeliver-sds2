import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, View, ScrollView, Alert,Text, TouchableWithoutFeedback} from 'react-native';

import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

export default function Orders() {
    const[orders,setOrders]= useState<Order[]>([]);
    const[isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert('Houve um erro aos listar os pedidos '))
            .finally(()=>setIsLoading(false));
    },[]);
        
    
    
    

    const handleOnPress = () => {

    }
    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
             {isLoading ? (
                 <Text>Buscando pedidos</Text>
             ) : (orders.map(order =>(
                <TouchableWithoutFeedback key={order.id}>
                    <OrderCard order={order}/>
                </TouchableWithoutFeedback>
            )))}             
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingRight: '5%',
        paddingLeft: '5%'
    }

});
