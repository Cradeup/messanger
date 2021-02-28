import { withRouter } from 'react-router-dom'
import './selectChat.css'

function SelectChat() {
    return (
        <div className='select-chat-par'>
            <div className="select-chat-header">
            </div>
            <div className="select-chat-text">
                Select chat to start messaging
            </div>
        </div>
    )
}

export default withRouter(SelectChat)