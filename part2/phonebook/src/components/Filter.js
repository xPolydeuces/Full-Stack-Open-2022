const Filter = ({ filter, handler }) => (
  <>
    <p>filter shown with <input value={ filter } onChange={ handler } /> </p>
  </>
)

export default Filter