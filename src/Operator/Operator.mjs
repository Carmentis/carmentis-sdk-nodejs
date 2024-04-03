import OperatorRequest from './OperatorRequest';
import OperatorClient from './OperatorClient';

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

    /**
     * Get the version of the operator server you're connected to
     * @async
     * @returns {Promise<OperatorResponse>}
     */
    async getOperatorVersion() {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.METHOD_GET_OPERATOR_VERSION));
    }

    /**
     * Save a record to the carmentis network
     * @param application
     * @param field
     * @returns {Promise<OperatorResponse>}
     */
    async saveRecord(application, field) {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.METHOD_SAVE_RECORD, {application, field}));
    }

    /**
     * Prepare a user approval for a record
     * @param application
     * @param {object} authentication
     * @param field
     * @param messageName
     * @param approvingEmailFieldName
     * @param {object} redirect
     * @param flowId
     * @returns {Promise<OperatorResponse>}
     */
    async prepareUserApproval(application, authentication, field, messageName, approvingEmailFieldName, redirect, flowId = null) {
        return this.operatorClient.sendRequest(
            new OperatorRequest(
                OperatorRequest.METHOD_PREPARE_USER_APPROVAL,
                {
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
                    flowId
                }
            )
        );
    }

    /**
     * Get the approval data for a record
     * @param merkleHash
     * @returns {Promise<OperatorResponse>}
     */
    async getApprovalData(merkleHash) {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.METHOD_GET_APPROVAL_DATA, {merkleHash}));
    }

    /**
     * Get the data for a record
     * @param merkleHash
     * @param accessRules - list of fields to decipher in order to be display to the current service provider's user (in a proof page for example). Use * to decipher all fields (default). You (as a service provider) should set it in accordance with your user's role & permissions.
     * @returns {Promise<OperatorResponse>}
     */
    async getRecordData(merkleHash, accessRules=['*']) {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.GET_RECORD_DATA, {merkleHash, accessRules: accessRules.join(',')}));
    }

    /**
     * Get the information for a record
     * @param merkleHash
     * @returns {Promise<OperatorResponse>}
     */
    async getRecordInformation(merkleHash) {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.GET_RECORD_INFO, {merkleHash}));
    }

    /**
     * Confirm a record
     * @param merkleHash
     * @returns {Promise<OperatorResponse>}
     */
    async confirmRecord(merkleHash) {
        return this.operatorClient.sendRequest(new OperatorRequest(OperatorRequest.METHOD_CONFIRM_RECORD, {merkleHash}));
    }
}

export default Operator
