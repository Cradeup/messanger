import './window.css'
import ContactsParrent from './contacts/ContactsParrent'
import ChatParrent from './chat/ChatParrent'
import { connect } from "react-redux";
import { fetchDialogs } from '../redux/actions';
import { useEffect } from 'react';
import { withRouter } from 'react-router';

function Window(props) {
    let actualUserId = { actualUserId: props.actualUserId }

    if (!props.actualUserId) {
        props.history.push('/auth')
    }
    function getDialogs() {
        let action = fetchDialogs(actualUserId)
        props.dispatch(action)
    }

    useEffect(() => {
        {
            if (props.dialogsFetchStatus === 'waiting' && props.authFetchStatus === 'loaded') {
                getDialogs()
            }
        }
    })
    if (props.dialogsFetchStatus === 'loaded') {
        return (
            <div className='window-parrent'>
                <ContactsParrent />
                <ChatParrent />
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}
function mapStateToProps(state) {
    return {
        actualUserId: state.authReducer.actualUserId,
        dialogsFetchStatus: state.dialogsReducer.status,
        authFetchStatus: state.authReducer.status
    }
}

export default connect(mapStateToProps, null)(withRouter(Window))