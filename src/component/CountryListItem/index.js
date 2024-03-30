import './index.css'

const CountryListItem = props => {
  const {countryListDetails, visitIdBtn} = props
  const {id, name, isVisited} = countryListDetails
  const visitedButton = isVisited === false ? 'Visit' : 'Visited'

  const onVisitButton = () => {
    visitIdBtn(id)
  }

  return (
    <div className="country-card">
      <ul className="ul-items">
        <li className="list-items">
          <p className="content">{name}</p>
          {isVisited === false ? (
            <button type="button" className="btn" onClick={onVisitButton}>
              {visitedButton}
            </button>
          ) : (
            <p className="transparent-btn" onClick={onVisitButton}>
              {visitedButton}
            </p>
          )}
        </li>
        <hr className="line" />
      </ul>
    </div>
  )
}

export default CountryListItem
