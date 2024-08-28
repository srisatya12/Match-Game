import './index.css'
const TabItem = props => {
  const {each, matchImage} = props
  const {id, thumbnailUrl, imageUrl} = each
  const onClickChange = () => {
    matchImage(id)
  }
  return (
    <div>
      <button onClick={onClickChange}>
        <img className="tablistimage" src={thumbnailUrl} />
      </button>
    </div>
  )
}

export default TabItem
