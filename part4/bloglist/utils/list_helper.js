const dummy = (blogs) => (1)

const totalLikes = (blogs) => {
  const reducer = (sum, item) => {
    return sum + item.likes
  }

  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.length === 0
    ? null
    : blogs.reduce((max, item) => max.likes > item.likes ? max : item)
}

const mostBlogs = (blogs) => {
  if (blogs.length !== 0) {
    const authors = blogs.reduce((author, blog) => {
      author[blog.author] = (author[blog.author] || 0) + 1
      return author
    }, {})
    return {
      author,
      blogs
    }
  } else {
    return null
  }
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs
}