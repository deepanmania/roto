module.exports = Object.freeze({
  USERNOTAVAILABLE: {
    status: 401,
    errorMsg: 'User not available'
  },
  INTERNALSEVERERROR: {
    status: 500,
    errorMsg: 'Internal Server Error'
  },
  PLANEXPIRED: {
    status: 402,
    errorMsg: 'Payment required, Subscription ended'
  }
})
