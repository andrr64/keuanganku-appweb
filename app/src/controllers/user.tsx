import axios from 'axios';
import { ControllerResponse } from './controller_response';

// Fungsi untuk login user
async function userLogin(username: string, password: string): Promise<ControllerResponse> {
    try {
        // Melakukan request POST ke API
        const response = await axios.post('http://192.168.1.8:8000/user/login', {
            username,
            password,
        });
        if (response.data.status == true) {
            return new ControllerResponse({
                status: true,
                detail: response.data.detail,
                data: response.data.data
            });
        } 
    } catch (error: any) {
        const response = error.response;
        return new ControllerResponse({
            status: false,
            data: null,
            detail: response.data.detail
        })
    }
    return new ControllerResponse({
        status: false,
        detail: "Something wrong",
        data: null
    })
}

export default userLogin;