import './index.css'
const RandomImage = props => {
  const {each} = props
  const {id, imageUrl, category} = each
  return (
    <div>
      <img className="randomImage" src={imageUrl} />
    </div>
  )
}
export default RandomImage
