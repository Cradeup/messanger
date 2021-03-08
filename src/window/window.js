import './window.css'
import ContactsParrent from './contacts/ContactsParrent'
import ChatParrent from './chat/ChatParrent'
import { connect } from "react-redux";
import { fetchDialogs, setAuthFetchStatusToWaiting } from '../redux/actions';
import { useEffect } from 'react';

function Window(props) {
    let actualUserId = { actualUserId: props.actualUserId }
    function getDialogs() {
            let action = fetchDialogs(actualUserId)
            props.dispatch(action)
    }

    useEffect(() => {
        {
            if (props.dialogsFetchStatus === 'waiting' && props.actualUserId) {
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
        dialogsFetchStatus: state.dialogsReducer.status
    }
}

export default connect(mapStateToProps, null)(Window)