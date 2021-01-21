import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationdata, Product } from './types';

function Orders() {
    const [product, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">

            <StepsHeader />
            <ProductsList product={product} />
            <OrderLocation onChangeLocation={
                location => setOrderLocation(location)
            } />
        </div>
    )
}

export default Orders;