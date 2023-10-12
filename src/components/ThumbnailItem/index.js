import './index.css'

const ThumbnailItem = props => {
  const {imageList, updateThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageList

  const onClickButton = () => {
    updateThumbnail(id)
  }
  const activeTabBtnClassName = isActive ? 'active-thumb-btn' : 'thumb-btn'
  return (
    <li className="list-card">
      <button
        type="button"
        className={activeTabBtnClassName}
        onClick={onClickButton}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="s-image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
