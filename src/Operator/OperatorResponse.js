import OperatorException from "./Exceptions/OperatorException.js";

function createOperatorResponse(response) {
    response = typeof response === "string" ? JSON.parse(response) : response;
    let data = {};

    if (response.success === undefined || response.success === false) {
        throw new OperatorException(response.error ?? 'Invalid response');
    } else {
        if (response.data !== undefined) {
            data = response.data;
        }
    }

    function getData() {
        return data;
    }

    return { getData };
}

export default createOperatorResponse;
