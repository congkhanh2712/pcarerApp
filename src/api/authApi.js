import instance from "./AxiosConfig";


const login = async (payload) => {
    try {
        let postApi = await instance.get('/users')
        if (postApi.status == 200) {
            let user = postApi.data.filter(item => item.email == payload.email && item.password == payload.password);
            if (user.length != 0) {
                return {
                    data: user[0],
                    succeed: true,
                    message: 'Logged in successfully!'
                }
            } else {
                return {
                    data: null,
                    succeed: false,
                    message: 'Username or Password is not correct!'
                }
            }
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default {
    login,
};