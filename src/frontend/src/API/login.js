import axios from '../axios';

const loginAPI = (value) => {
    return {
        status: 200,
        data: {
            success: true,
            user_id: 1
        }
    };
    // Todo: Uncomment this and remove the test API response once API is up and running
    // return axios.post('/login', {
    //     email: value.email,
    //     password: value.pass
    // });
}
export default loginAPI;
