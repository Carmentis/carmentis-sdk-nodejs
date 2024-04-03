import OperatorException from "./Exceptions/OperatorException.js";

function createOperatorRequest(method, data) {
    const validMethods = [
        "getOperatorVersion",
        "saveRecord",
        "prepareUserApproval",
        "getApprovalData",
        "getRecordData",
        "getRecordInformation",
        "confirmRecord"
    ];

    if (!validMethods.includes(method)) {
        throw OperatorException("Invalid method");
    }

    return { method, data };
}

export default createOperatorRequest;
