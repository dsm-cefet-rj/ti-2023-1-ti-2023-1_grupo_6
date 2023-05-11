import { Api } from "../ApiCondig";
import { ApiException } from "../ApiException";

const getAll = async () => {
    try{
        const { data } = await Api().get('/consumerData');
        return data;
    } catch(err){
        return new ApiException(err || 'erro ao consultar consumidores');
    }
};

const create = async (dataUser) =>{
    try{
        await Api().post('/consumerData', dataUser);
        return true;
    }catch(err){
        return new ApiException(err || 'erro ao criar consumidor');
    }
};

const updateById = async (dataUser) =>{
    try{
        await Api().put(`/consumerData/${dataUser.id}`, dataUser);
        return true;
    }catch(err){
        return new ApiException(err || 'erro ao alterar consumidor');
    }
};

const deleteById = async (id) => {
    try{
        await Api().delete(`/consumerData/${id}`);
        return true;
    }catch(err){
        return new ApiException(err || 'erro ao deletar consumidor');
    }
}

export const UserInformation = {
    getAll,
    create,
    updateById,
    deleteById,
};