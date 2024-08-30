const success = (res, message, data, code) => {
  const codeStatus = code || 200;
  const response = {
    success: true,
    message: message,
    data: data,
    code: codeStatus,
  };

  res.status(codeStatus).json(response);
};

const error = (res, message, errorDetails, code) => {
  const codeStatus = code || 500;
  const error = {
    success: false,
    message: message,
    errorDetails: errorDetails,
    code: codeStatus,
  };

  res.status(codeStatus).json(error);
};

module.exports = {
  success,
  error,
};
