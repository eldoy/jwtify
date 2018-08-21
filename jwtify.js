const jwt = require('jsonwebtoken')
const secret = '5299e7ecd6d16372015de6c1b9104521ea296fe312986aacbe583c4a56ba5f78814de5f8abdb23b7ce00a6518d09c3a7'

const tokenizer = {}

// Set jwt token
tokenizer.setToken = (data) => {
  try {
    return jwt.sign(data, secret)
  } catch (err) {
    console.log('JWT Sign error: ', err)
  }
}

// Get jwt token
tokenizer.getToken = (req) => {
  let token = req.headers.authorization
  if (token) {
    try {
      const data = jwt.verify(token, secret)
      return data
    } catch (err) {
      console.log('JWT verify error: ', err)
    }
  }
  return null
}

module.exports = tokenizer
