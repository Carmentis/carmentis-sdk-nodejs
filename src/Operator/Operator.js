const OperatorRequest = require('./OperatorRequest');
const OperatorClient = require('./OperatorClient');

class Operator {
    constructor(operatorUrl) {
        this.operatorClient = new OperatorClient(operatorUrl);
    }

    setOperatorUrl(operatorUrl) {
        this.operatorClient = new OperatorClient(operatorUrl);
    }

    getClient() {
        return this.operatorClient;
    }

    async getOperatorVersion() {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.METHOD_GET_OPERATOR_VERSION));
    }

    async saveRecord(data) {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.METHOD_SAVE_RECORD, data));
    }

    async prepareUserApproval(data) {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.METHOD_PREPARE_USER_APPROVAL, data));
    }

    async getApprovalData(data) {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.METHOD_GET_APPROVAL_DATA, data));
    }

    async getRecordData(data) {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.GET_RECORD_DATA, data));
    }

    async confirmRecord(data) {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.METHOD_CONFIRM_RECORD, data));
    }
}

module.exports = Operator;
