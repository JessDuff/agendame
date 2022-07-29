import { create } from "apisauce";

const apiClient = create({
    //baseURL: "	https://webhook.site/20f899d6-563c-4d78-b921-8309404c697e",
    baseURL: "http://192.168.0.8:9000/api",
});

export default apiClient;