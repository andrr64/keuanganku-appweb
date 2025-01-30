import axios from 'axios';
import { ControllerResponse } from './controller_response';
import { getApiEndpoint } from './api_url';

// Fungsi untuk login user
async function userLogin(username: string, password: string): Promise<ControllerResponse> {
    try {
        const response = await axios.post(getApiEndpoint('user/login'), {
            username,
            password,
        }, {
            timeout: 2000  // Timeout 5 detik
        });

        if (response.data.status === true) {
            return new ControllerResponse({
                status: true,
                detail: response.data.detail,
                data: response.data.data
            });
        }
    } catch (error: any) {
        if (error.code === 'ECONNABORTED') {
            return new ControllerResponse({
                status: false,
                data: null,
                detail: "Request timed out"
            });
        }
        const response = error.response;
        return new ControllerResponse({
            status: false,
            data: null,
            detail: response?.data?.detail || "An error occurred"
        });
    }
    return new ControllerResponse({
        status: false,
        detail: "Something went wrong (server?)",
        data: null
    });
}

async function userRegister(name: string, username: string, password: string): Promise<ControllerResponse> {
    try {
        const response = await axios.post(getApiEndpoint('user/register'), {
            name,
            username,
            password,
        }, {
            timeout: 2000  // Timeout 5 detik
        });
        if (response.data.status === true) {
            return new ControllerResponse({
                status: true,
                detail: response.data.detail,
                data: null
            });
        }
    } catch (error: any) {
        if (error.code === 'ECONNABORTED') {
            return new ControllerResponse({
                status: false,
                data: null,
                detail: "Request timed out"
            });
        }
        const response = error.response;
        return new ControllerResponse({
            status: false,
            data: null,
            detail: response?.data?.detail || "An error occurred"
        });
    }
    return new ControllerResponse({
        status: false,
        detail: "Something went wrong (server?)",
        data: null
    });
}

async function userVerif(): Promise<ControllerResponse>{
    try {
        const response = await axios.get(getApiEndpoint('user/verify-token'), {
            timeout: 2000  // Timeout 5 detik
        });
        if (response.data.status === true) {
            return new ControllerResponse({
                status: true,
                detail: response.data.detail,
                data: null
            });
        }
    } catch (error: any) {
        if (error.code === 'ECONNABORTED') {
            return new ControllerResponse({
                status: false,
                data: null,
                detail: "Request timed out"
            });
        }
        const response = error.response;
        return new ControllerResponse({
            status: false,
            data: null,
            detail: response?.data?.detail || "An error occurred"
        });
    }
    return new ControllerResponse({
        status: false,
        detail: "Something went wrong (server?)",
        data: null
    });
}

export {userLogin, userRegister, userVerif};