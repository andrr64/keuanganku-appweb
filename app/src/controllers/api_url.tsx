const BASE_URL = import.meta.env.VITE_API_URL;

const getApiEndpoint= (path: string) => {
    return `${BASE_URL}/${path}`
}

export {getApiEndpoint};