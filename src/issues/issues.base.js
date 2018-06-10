const createComment = (context, message) => {
  const params = context.issue({
    body: message
  })

  return context.github.issues.createComment(params)
}

module.exports = {
  createComment
}
