import './window.css'
import ContactsParrent from './contacts/ContactsParrent'
import ChatParrent from './chat/ChatParrent'
import { fetchJSON } from '../fetch-json'

function Window() {
    return (
        <div className='window-parrent'>
            <ContactsParrent />
            <ChatParrent />
        </div>
    )
}

export default Window;