const { nanoid } = require('nanoid')

const shortId = {
  type : String,
  default : ()=>nanoid(5),
  required : true,
  index : true,
}

module.exports = shortId