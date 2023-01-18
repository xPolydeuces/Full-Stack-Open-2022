const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

if (process.argv.length > 5) {
  console.log('Please provide the new person information as such: node mango.js <password> name number\n',
              'If you are using full name, remember to enclose it in quotes as such: node mango.js <password> "Example Name" number')
              process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://admin:${password}@phonebook.ysdrvkf.mongodb.net/phonebookApp?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

mongoose
  .connect(url)
  .then(() => {
    if (process.argv.length === 5) {
      const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
      })
      .save()
      .then(result => {
        console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
        mongoose.connection.close()
      })
    } else {
      Person.find({})
      .then(result => {
        console.log('phonebook:')
        result.forEach(person => {
          console.log(person['name'], person['number'])
        })
        mongoose.connection.close()
      })
    }
  })
  .catch((err) => console.log(err))