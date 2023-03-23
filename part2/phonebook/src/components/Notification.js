/* eslint-disable no-unused-vars */
const Notification = ({ message, type }) => {
  const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }

  if (type === 'success') type = successStyle

  if (message === null) {
    return null
  }

  return (
    <div style={ type }>
      {message}
    </div>
  )
}

export default Notification