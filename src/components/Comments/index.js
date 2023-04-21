import {Component} from 'react'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      INPUT: '',
      TEXTAREA: '',
      addComment: [],
    }
  }

  inputs = event => {
    const {INPUT} = this.state
    this.setState({INPUT: event.target.value})
  }

  textarea = event => {
    const {TEXTAREA} = this.state
    this.setState({TEXTAREA: event.target.value})
  }

  onSubmitButton = event => {
    event.preventDefault()
    const {INPUT, TEXTAREA} = this.state
    const addingComments = {
      INPUT,
      TEXTAREA,
    }

    this.setState(prevState => ({
      addComment: [...prevState.addComment, addingComments],
      INPUT: '',
      TEXTAREA: '',
      isLiked: false,
    }))
  }

  onDelete = index => {
    this.setState(prevState => ({
      addComment: prevState.addComment.filter((_, i) => i !== index),
    }))
  }

  render() {
    const {INPUT, TEXTAREA, addComment} = this.state

    return (
      <div className="bgCard">
        <form className="" onSubmit={this.onSubmitButton}>
          <div className="comment-Card">
            <div className="writingComment">
              <h1>Comments</h1>
              <p>Say Somthing about 4.o technologies</p>
              <input
                type="text"
                placeholder="your Name"
                onChange={this.inputs}
              />
              <textarea
                rows="10"
                cols="30"
                placeholder="Your Comment"
                onChange={this.textarea}
              />
              <button type="submit">Add Comment</button>
            </div>
          </div>
          <p>{addComment.length} comment</p>
          <div className="commented-card">
            {addComment.map((each, index) => (
              <CommentItem
                key={each.INPUT}
                comment={each}
                onDelete={() => this.onDelete(index)}
              />
            ))}
          </div>
        </form>
      </div>
    )
  }
}
export default Comments
