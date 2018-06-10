const { createComment } = require('./issues.base')
const { message } = require('./issues.messages')

const issues = {
  opened (context) {
    return createComment(context, message.opened)
  },

  reopened (context) {
    return createComment(context, message.reopened)
  },

  closed (context) {
    return createComment(context, message.closed)
  }
}

module.exports = {
  issues
}
