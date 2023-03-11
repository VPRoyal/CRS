import { Component } from 'react'
import Thread from './Thread'
import styles from './TContainer.module.css'
export default class TContainer extends Component {
  constructor(){
    super()
    this.state={
      file:null
    }
  }
  render() {
    return (
      <div className={styles.container} >
        <div className={styles.head} >
          <h2>Conversation Thread</h2>
        </div>
        <div className={styles.TBox} >
          <Thread type="authority" />
          <Thread type="student" />
          <Thread type="system" />
          <Thread type="authority" />
          <Thread type="student" />
        </div>
        <div className={styles.AnsBox}>
          <div className={styles.inputbox} >
            <div className={styles.input} > <input type="text" name="" placeholder='Write your reply' /></div>
            <div className={styles.file} >
              <div>
              <input type="file" name="" id={styles.fileinput}  onChange={(e) => { this.setState({file:e.target.files[0]}) }} />
              <label for={styles.fileinput} style={{color:this.state.file?"var(--blue)":"var(--grey_black)"}} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
              </svg>
              </label>
              </div>
              <div style={{display:this.state.file?"flex":"none"}} >
              <span onClick={() => { this.setState({file:null}) }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            </span>
                <span>{this.state.file ? this.state.file.name : ""}</span>
              </div>
            </div>

          </div>
          <div className={styles.iconbox} >
            <div className={styles.icon}><span>Level Up</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
            </svg></span></div>
            <div className={styles.icon}><span>Send</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg></span></div>
          </div>
        </div>
      </div>
    )
  }
}
