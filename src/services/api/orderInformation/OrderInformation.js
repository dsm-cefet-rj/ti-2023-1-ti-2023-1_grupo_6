import { Api } from "../ApiCondig";
import { ApiException } from "../ApiException";

const getOrder = async () => {
    try{
        const { data } = await Api().get(`/order`);
        return data;
    } catch(err){
        return new ApiException(err || 'erro ao consultar consumidores');
    }
};

const createOrder = async (orderData) =>{
    try{
        await Api().post('/order', dataUser);
        return true;
    }catch(err){
        return new ApiException(err || 'erro ao criar consumidor');
    }
};

const updateById = async () =>{
};

const deleteById = async () => {
    
};

export const OrderInformation = {
    getOrder,
    createOrder,
    updateById,
    deleteById,
};