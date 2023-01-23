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

module.exports = {
  dummy, totalLikes, favoriteBlog
}