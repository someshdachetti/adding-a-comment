// Write your code here
import './index.css'

const CommentItem = props => {
  const {comment, onDelete} = props
  const {INPUT, TEXTAREA} = comment
  const Name = INPUT[0]

  const ondeleting = () => {
    onDelete()
  }

  return (
    <div className="commented-Card">
      <h1>{INPUT}</h1>
      <p>{TEXTAREA}</p>
      <div className="likeDelete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
          alt="liked"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          onClick={ondeleting}
        />
      </div>
    </div>
  )
}
export default CommentItem
