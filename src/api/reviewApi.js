import instance from "./AxiosConfig";

const getCarerReview = async (carerId) => {
    try {
        let getApi = await instance.get('/reviews')
        if (getApi.status == 200) {
            let reviewArr = getApi.data.filter(item => item.carer_id == carerId);
            return reviewArr;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default {
    getCarerReview
};