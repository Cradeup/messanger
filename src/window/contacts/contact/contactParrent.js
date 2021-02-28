import './contact-parrent.css'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function ContactParrent(props) {
    let { firstName, secondName, profileImage } = props.users.find(user => user.id === props.dialog.members.find(member => member !== props.actualUserId))
    let lastMessageImageSrc = props.users.find(user => user.id === props.dialog.lastMessage.id).profileImage
    
    return (
        <Link to={props.dialog.id}>
            <div className='contact-parrent'>
                <div>
                    <div className='dialogs-profile-img-par'>
                        <img className='dialogs-profile-img' src={profileImage}/>
                    </div>
                    <div className='dialog-content-par'>
                        <div className='dialog-profile-name'>
                            {firstName + ' '}
                            {secondName}
                        </div>
                        <div className='last-message-img-par'>
                            <img className='last-message-img' src={lastMessageImageSrc} />
                        </div>
                        <div className='dialog-profile-last-message'>
                            {props.dialog.lastMessage.message}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

function mapStateToProps(state) {
    return {
        users: state.chatReducer.users,
        actualUserId: state.chatReducer.actualUserId
    }
}

export default connect(mapStateToProps, null)(ContactParrent)