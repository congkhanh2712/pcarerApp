import instance from "./AxiosConfig";

const getAllPets = async () => {
    try {
        let getApi = await instance.get('/pets')
        return getApi.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default {
    getAllPets,
};