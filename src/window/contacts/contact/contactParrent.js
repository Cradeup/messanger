import './contact-parrent.css'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function ContactParrent(props) {
    let dialogId = props.dialog.dialog.id
    let name = props.dialog.user.firstName + ' ' + props.dialog.user.secondName
    let lastMessage = props.dialog.dialog.lastMessage.message
    let profileImage = props.dialog.user.profileImage
    
    return (
        <Link to={dialogId}>
            <div className='contact-parrent'>
                <div>
                    <div className='dialogs-profile-img-par'>
                        <img className='dialogs-profile-img' src={profileImage}/>
                    </div>
                    <div className='dialog-content-par'>
                        <div className='dialog-profile-name'>
                            {name}
                        </div>
                        <div className='last-message-img-par'>
                            {/* <img className='last-message-img' src={lastMessageImageSrc} /> */}
                        </div>
                        <div className='dialog-profile-last-message'>
                            {lastMessage}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

function mapStateToProps(state) {
    return {
        actualUserId: state.authReducer.actualUserId
    }
}

export default connect(mapStateToProps, null)(ContactParrent)