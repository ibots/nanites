const issues = require('./issues/issues.resolvers')

module.exports = (robot) => {
  /**
   * Subscribe an issues event for new opened issue
   */
  robot.on('issues.opened', (context) => {
    return issues.opened(context)
  })

  /**
   * Subscribe an issues event for existing issue
   */
  robot.on('issues.reopened', (context) => {
    return issues.reopened(context)
  })

  /**
   * Subscribe an issues event for closed issue
   */
  robot.on('issues.closed', (context) => {
    return issues.closed(context)
  })
}
