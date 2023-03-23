const Filter = ({ filter, handler }) => (
  <>
    <p>find countries <input value={ filter } onChange={ handler } /> </p>
  </>
)

export default Filter