import './wantedContact.css'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

function WantedContact(props) {
    let wantedContactDialogId = props.dialogs.find(dialog => dialog.dialog.members.includes(props.props.id || props.actualUserId)).dialog.id
    return (
        <Link to={wantedContactDialogId}>
            <div className='searched-contact-parrent'>
                <div className='searched-profile-img-par'>
                    <img className='searched-profile-img' src={props.props.profileImage} />
                </div>
                <div className='searched-content-par'>
                    <div className='searched-profile-name'>
                        {props.props.firstName + ' '}
                        {props.props.secondName}
                    </div>
                </div>
            </ div>
        </Link>
    )
}

function mapStateToProps(state) {
    return {
        users: state.chatReducer.users,
        actualUserId: state.authReducer.actualUserId,
        dialogs: state.dialogsReducer.dialogs,
    }
}

export default connect(mapStateToProps, null)(WantedContact)