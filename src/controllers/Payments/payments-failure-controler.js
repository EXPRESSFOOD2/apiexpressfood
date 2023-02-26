const paymentsFailureProcess = async (failureResponse) => {
  let redirectUrl = process.env.CUSTOMER_DEV_URL_FAILURE || process.env.CUSTOMER_DEPLOY_URL_FAILURE;
  return await `${redirectUrl}${failureResponse}`
};

module.exports = { paymentsFailureProcess };
