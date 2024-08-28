const Tablist = props => {
  const {each, onChangeTab} = props
  const {tabId, displayText} = each
  const changeTablist = () => {
    onChangeTab(tabId)
  }
  return (
    <li>
      <button onClick={changeTablist}>
        <p>{displayText}</p>
      </button>
    </li>
  )
}
export default Tablist
