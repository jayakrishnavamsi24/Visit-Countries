import './index.css'

const VisitedCountryItem = props => {
  const {eachVisitedCountry, onCountryRemoveVisit} = props
  const {id, name, imageUrl} = eachVisitedCountry

  const countryRemoveVisit = () => {
    onCountryRemoveVisit(id)
  }

  return (
    <li className="li-visited-country-item">
      <div className="visited-country-item">
        <img src={imageUrl} alt="thumbnail" />
        <div className="country-thumbnail-item">
          <p className="visited-country-name">{name}</p>
          <button
            onClick={countryRemoveVisit}
            className="remove-btn"
            type="button"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountryItem
