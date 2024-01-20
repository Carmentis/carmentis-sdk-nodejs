require('./Exceptions/OperatorResponseException');

class OperatorResponse {

    data={};

    constructor(response) {
        response = typeof response === "string" ? JSON.parse(response) : response;

        if(response.success === undefined || response.success === false) {
            throw new OperatorResponseException(response.error ?? 'Invalid response');
        } else {
            if(response.data !== undefined) {
                this.data = response.data;
            }
        }
    }

    getData() {
        return this.data;
    }
}

module.exports = OperatorResponse;
