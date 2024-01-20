const axios = require('axios').default;
const OperatorResponseException = require('./Exceptions/OperatorResponseException');

class OperatorClient {

    httpClient = {};
    constructor(operatorUrl) {
        this.httpClient = axios.create({
            baseURL: operatorUrl,
            timeout: 1000,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    /**
     * @param {OperatorRequest} operatorRequest
     * @returns {Promise<OperatorResponse>}
     */
    async sendRequest(operatorRequest) {
        try {
            const response = await this.httpClient.post(operatorRequest.method, operatorRequest.data);
            return response.data;
        } catch (error) {
            throw new OperatorResponseException(`${error.message}`);
        }
    }
}

module.exports = OperatorClient;
