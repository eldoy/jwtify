const jwt = require('jsonwebtoken')
const DEFAULT_SECRET = '5299e7ecd6d16372015de6c1b9104521ea296fe312986aacbe583c4a56ba5f78814de5f8abdb23b7ce00a6518d09c3a7'

class Tokenizer {

  constructor (options = {}) {
    this.secret = options.secret || DEFAULT_SECRET
    this.field = options.field || 'authorization'
  }

  // Set jwt token
  setToken (data) {
    try {
      return jwt.sign(data, this.secret)
    } catch (err) {
      console.log('JWT Sign error: ', err)
    }
  }

  // Get jwt token
  getToken (req) {
    let token = req.headers[this.field]
    if (token) {
      try {
        return jwt.verify(token, this.secret)
      } catch (err) {
        console.log('JWT verify error: ', err)
      }
    }
  }
}

module.exports = Tokenizer
