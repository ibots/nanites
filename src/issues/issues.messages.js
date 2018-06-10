/**
 * Message configurations for GitHub issues
 */
const {
  beginAppreciate,
  reviewSoon,
  feelFree
} = require('../_common/common.messages').message

module.exports = {
  message: {
    // New issue got opened
    opened: `${beginAppreciate} you for taking time to log the issue. ${reviewSoon}. `,

    // Existing issue got reopened
    reopened: `${beginAppreciate} you for reopening this issue. ${reviewSoon}.`,

    // Issue got closed
    closed: `${beginAppreciate} you for closing this issue. ${feelFree} reopen this issue in case you find the issue still exist.`
  }
}
