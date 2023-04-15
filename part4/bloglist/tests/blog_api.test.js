const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

beforeEach(async () => {
  await Blog.deleteMany({})

  for (let blog of helper.initialBlogs) {
    let blogObject = new Blog(blog)
    await blogObject.save()
  }
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('correct amount of blogs is returned', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body).toHaveLength(helper.initialBlogs.length)
})

test('unique identifier property is named id', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body[0].id).toBeDefined()
})

test('POST operation is successful', async () => {
  const testBlog = {
    title: 'Test blog',
    author: 'Test-Chan',
    url: 'https://testingpost.com/',
    likes: 21
  }
  await api.post('/api/blogs')
    .send(testBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()

  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
})

test('if the likes property is missing, it will default to 0', async () => {
  const testBlog = {
    title: 'Test blog',
    author: 'Test-Chan',
    url: 'https://testingpost.com/'
  }

  await api.post('/api/blogs').send(testBlog)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd[blogsAtEnd.length - 1].likes).toBe(0)
})

test('if the title or url properties are missing, responds with the status code 400 Bad Request', async () => {
  const testBlog = {
    author: 'Test-Chan',
    likes: 21
  }

  await api.post('/api/blogs')
    .send(testBlog)
    .expect(400)
})


afterAll(async () => {
  await mongoose.connection.close()
})