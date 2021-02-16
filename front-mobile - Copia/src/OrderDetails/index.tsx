import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, StyleSheet, Text, View, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

type Props = {
    route: {
        params: {
            order: Order
        }
    }
}


export default function OrderDetails({ route }: Props) {
    const { order } = route.params;
    const navigation = useNavigation();

   const handleOnCancel = () => {
        navigation.navigate('Orders');
    }

    const handleOnConfirmDelivery = () => {
        confirmDelivery(order.id)
        .then(()=> {
            Alert.alert(`Pedido${order.id} confirmado com sucesso!`);
            navigation.navigate('Orders');
        })
        .catch(()=>{
            Alert.alert(`Houve um problema com o pedido ${order.id}`);
        })
    }

    const handleStartNavigationGoogle = () => {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
    }

    const handleStartNavigationWaze = () => {
        Linking.openURL(`https://www.waze.com/ul?ll=${order.latitude}%2C${order.longitude}&navigate=yes&zoom=17$`)
    }
    return (
        <>
        <Header />
        <View style={styles.container}>
            
            <OrderCard order={order} />
            <RectButton style={styles.button}>
                <Text style={styles.buttonText} onPress={handleStartNavigationGoogle}>INICIAR NAVEGAÇÃO GOOGLE</Text>

            </RectButton>
            <RectButton style={styles.button}>
                <Text style={styles.buttonText} onPress={handleStartNavigationWaze}>INICIAR NAVEGAÇÃO WAZE</Text>

            </RectButton>
            <RectButton style={styles.button}>
                <Text style={styles.buttonText} onPress={handleOnConfirmDelivery}>CONFIRMAR ENTREGA</Text>
            </RectButton>
            <RectButton style={styles.button}>
                <Text style={styles.buttonText} onPress={handleOnCancel}>CANCELAR</Text>
            </RectButton>
        </View>
        </>
    );
}

const styles = StyleSheet.create(

    {
        container: {
            paddingRight: '5%',
            paddingLeft: '5%'
        },
        button: {
            backgroundColor: '#DA5C5C',
            flexDirection: 'row',
            borderRadius: 10,
            marginTop: 40,
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonText: {
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 50,
            paddingRight: 50,
            fontWeight: 'bold',
            fontSize: 18,
            color: '#FFF',
            letterSpacing: -0.24,
            fontFamily: 'OpenSans_700Bold'
        }
    }

);
