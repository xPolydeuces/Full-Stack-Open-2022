/* eslint-disable no-unused-vars */
const dummy = blogs => (1)

const totalLikes = blogs => {
  const reducer = (sum, blog) => (sum + blog.likes)

  return blogs.length === 0
    ? 0
    : blogs.reduce(reducer, 0)
}

const favoriteBlog = blogs => {
  if (blogs.length === 0) { return {} }

  const getMaxLikes = (maxLikes, blog) => Math.max(maxLikes, blog.likes)
  const MaxLikes = blogs.reduce(getMaxLikes, 0)
  const maxLikesBlog = blogs.find(blog => blog.likes === MaxLikes)
  const { _id, url, __v, ...favBlog } =  maxLikesBlog

  return favBlog
}

const mostBlogs = blogs => {
  if (blogs.length === 0) { return {} }

  const blogCount = blogs.reduce((count, blog) => {
    count[blog.author] = (count[blog.author] || 0) + 1
    return count
  }, {})

  const topAuthor = Object.keys(blogCount).reduce((a, b) => (
    blogCount[a] > blogCount[b] ? a : b
  ))

  return { author: topAuthor, blogs: blogCount[topAuthor] }
}

function mostLikes(blogs) {
  if (blogs.length === 0) { return {} }

  const likeCount = blogs.reduce((count, blog) => {
    count[blog.author] = (count[blog.author] || 0) + blog.likes
    return count
  }, {})

  const [topAuthor, maxLikes] = Object.entries(likeCount).reduce(([a, b], [author, count]) => (
    count > b ? [author, count] : [a, b]
  ), ['', 0])

  return { author: topAuthor, likes: maxLikes }
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}