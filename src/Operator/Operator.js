import OperatorRequest from './OperatorRequest.js';
import createOperatorClient from './OperatorClient.js';
import createOperatorRequest from "./OperatorRequest.js";

function Operator(operatorUrl) {
    let operatorClient = createOperatorClient(operatorUrl);

    function setOperatorUrl(newOperatorUrl) {
        operatorClient = createOperatorClient(newOperatorUrl);
    }

    function getClient() {
        return operatorClient;
    }

    async function getOperatorVersion() {
        return operatorClient.sendRequest(createOperatorRequest("getOperatorVersion"));
    }

    async function saveRecord(application, field) {
        return operatorClient.sendRequest(createOperatorRequest("saveRecord", { application, field }));
    }

    async function prepareUserApproval(application, authentication, field, messageName, approvingEmailFieldName, redirect, flowId = null) {
        return operatorClient.sendRequest(
            createOperatorRequest("prepareUserApproval", {
                application,
                authentication: {
                    method: authentication.method,
                    id: authentication.id
                },
                redirect: {
                    success: redirect.success,
                    cancel: redirect.cancel,
                },
                field,
                message: messageName,
                approvingEmailFieldName,
                flowId
            })
        );
    }

    async function getApprovalData(merkleHash) {
        return operatorClient.sendRequest(createOperatorRequest("getApprovalData", { merkleHash }));
    }

    async function getRecordData(merkleHash, accessRules = ['*']) {
        return operatorClient.sendRequest(createOperatorRequest("getRecordData", { merkleHash, accessRules: accessRules.join(',') }));
    }

    async function getRecordInformation(merkleHash) {
        return operatorClient.sendRequest(createOperatorRequest("getRecordInformation", { merkleHash }));
    }

    async function confirmRecord(merkleHash) {
        return operatorClient.sendRequest(createOperatorRequest("confirmRecord", { merkleHash }));
    }

    // Expose public methods
    return {
        getOperatorVersion,
        saveRecord,
        prepareUserApproval,
        getApprovalData,
        getRecordData,
        getRecordInformation,
        confirmRecord,
    };
}

export default Operator;
