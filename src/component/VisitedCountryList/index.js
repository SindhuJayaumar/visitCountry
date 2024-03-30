import './index.css'

const VisitedCountryList = props => {
  const {visitedCountryListed, removeButton} = props
  const {id, name, imageUrl} = visitedCountryListed

  const onClickRemoveButton = () => {
    removeButton(id)
  }

  return (
    <div className="visitedCountryList">
      <ul className="ul-listedItems">
        <li>
          <img src={imageUrl} alt="thumbnail" className="image" />
          <div className="text">
            <p className="content">{name}</p>
            <button type="button" className="btn" onClick={onClickRemoveButton}>
              Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default VisitedCountryList
