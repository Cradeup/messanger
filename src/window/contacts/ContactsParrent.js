import ContactParrent from './contact/contactParrent'
import './contacts-parrent.css'
import { connect } from "react-redux";
import React, { useRef } from 'react'
import { fetchDialogs, onContactsSearchInputChange } from '../../redux/actions';
import WantedContact from './contact/wantedContacts';

function ContactsParrent(props) {

    function getDialogs() {
        if (props.dialogsFetchStatus === 'waiting') {
            let action = fetchDialogs()
            props.dispatch(action)
        }
    }


    getDialogs();

    const contactsSearchInput = useRef(null)
    let findedContacts = []
    let dialogs
    props.users.map((user) => {
        if (user.id !== props.actualUserId) {
            if (user.nickName.toLowerCase().includes(props.contactsWanted.toLowerCase()) || (user.firstName.toLowerCase() + ' ' + user.secondName.toLowerCase()).includes(props.contactsWanted.toLowerCase())) {
                findedContacts.push(props.users.find(userFromState => userFromState.id === user.id))
            }
        }
    })
    if (props.dialogsFetchStatus === 'loaded') {
        dialogs = props.dialogs.map(dialog => <ContactParrent dialog={dialog} key={dialog.id} />)
    }
    if (contactsSearchInput.current) {
        if (props.contactsWanted !== '') {
            dialogs = findedContacts.map(findedContact => <WantedContact props={findedContact} key={findedContact.id} />)
        }
    }

    function searchedContacts(event) {
        if (contactsSearchInput.current) {
            let wanted = contactsSearchInput.current.value
            let action = onContactsSearchInputChange(wanted)
            props.dispatch(action)

        }
    }
    return (
        <div className='contacts-parrent'>
            <div className='contacts-par-header'></div>
            <div className="contacts-search">
                <input ref={contactsSearchInput} onInput={(event) => searchedContacts(event)} className="contacts-search-input" placeholder="Найти..."></input>
            </div>
            {dialogs}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        dialogs: state.dialogsReducer.dialogs,
        users: state.chatReducer.users,
        contactsWanted: state.chatReducer.contactsWanted,
        actualUserId: state.chatReducer.actualUserId,
        dialogsFetchStatus: state.dialogsReducer.status
    }
}

export default connect(mapStateToProps, null)(ContactsParrent)