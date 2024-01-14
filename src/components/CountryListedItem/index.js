import './index.css'

const CountryListedItem = props => {
  const {eachCountryItem, onCountryVisit} = props
  const {id, name, isVisited} = eachCountryItem

  const countryVisit = () => {
    onCountryVisit(id)
  }

  return (
    <li className="li-country-listed-item">
      <div className="country-listed-item">
        <p className="country-listed-name">{name}</p>
        {isVisited ? (
          <p className="visited-text">Visited</p>
        ) : (
          <button onClick={countryVisit} className="visit-btn" type="button">
            Visit
          </button>
        )}
      </div>
    </li>
  )
}

export default CountryListedItem
