function OperatorException(message) {
    const error = new Error(message);
    error.name = "OperatorException";
    return error;
}

export default OperatorException;
