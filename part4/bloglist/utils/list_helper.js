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

module.exports = {
  dummy, totalLikes, favoriteBlog
}