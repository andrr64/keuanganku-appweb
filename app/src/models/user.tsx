class ModelUser {
    username: string;
    name: string;

    constructor(data_json: any){
        this.username = data_json.username;
        this.name = data_json.name;
    }
}

export default ModelUser;