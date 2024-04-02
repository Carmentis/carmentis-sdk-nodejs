require('./Exceptions/OperatorRequestException');

class OperatorRequest {
    static METHOD_GET_OPERATOR_VERSION = "getOperatorVersion";
    static METHOD_SAVE_RECORD = "saveRecord";
    static METHOD_PREPARE_USER_APPROVAL = "prepareUserApproval";
    static METHOD_GET_APPROVAL_DATA = "getApprovalData";
    static GET_RECORD_DATA = "getRecordData";
    static GET_RECORD_INFO = "getRecordInformation";
    static METHOD_CONFIRM_RECORD = "confirmRecord";

    constructor(method, data) {
        switch (method){
            case OperatorRequest.METHOD_GET_OPERATOR_VERSION:
            case OperatorRequest.METHOD_SAVE_RECORD:
            case OperatorRequest.METHOD_PREPARE_USER_APPROVAL:
            case OperatorRequest.METHOD_GET_APPROVAL_DATA:
            case OperatorRequest.GET_RECORD_DATA:
            case OperatorRequest.GET_RECORD_INFO:
            case OperatorRequest.METHOD_CONFIRM_RECORD:
                break;
            default:
                throw new OperatorRequestException("Invalid method");
        }

        /**
         * @type {string}
         */
        this.method = method;

        /**
         * @type {Object}
         */
        this.data = data;
    }
}

module.exports = OperatorRequest;
