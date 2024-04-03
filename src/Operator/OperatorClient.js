import axios from 'axios';
import OperatorException from "./Exceptions/OperatorException.js";

function createOperatorClient(operatorUrl) {
    const httpClient = axios.create({
        baseURL: operatorUrl,
        timeout: 1000,
        headers: { 'Content-Type': 'application/json' }
    });

    async function sendRequest(operatorRequest) {
        try {
            const response = await httpClient.post(operatorRequest.method, operatorRequest.data);
            return response.data;
        } catch (error) {
            throw OperatorException(`${error.message}`);
        }
    }

    return { sendRequest };
}

export default createOperatorClient;
