import instance from "./AxiosConfig";

const getCarers = async () => {
    try {
        let getApi = await instance.get('/carers')
        return getApi.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default {
    getCarers,
};