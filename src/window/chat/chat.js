import './chat.css'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { Message } from './message';
import ChatInput from './chat-input/chat-input';
import ChatCompanionCard from './chatCompanionCard';
import React, { useEffect, useRef } from 'react'
import { fetchMessages } from '../../redux/actions';

function Chat(props) {
    const chat = useRef(null)
    let dialogId = props.match.params.id
    let data = { actualUserId: props.actualUserId, dialogId: dialogId }
    function getMessages() {
        let action = fetchMessages(data)
        props.dispatch(action)
    }

    useEffect(() => {
        if (chat.current) {
            chat.current.scrollTop = chat.current.scrollHeight;
        }

    })
    useEffect(() => {
        getMessages()
    }, [dialogId])






    let dialog
    if (props.messagesStatus === 'loaded' && props.dialogsStatus === 'loaded') {
        dialog = props.chat.messages.map(message => { if (props.actualUserId !== message.senderId) { return <Message styleMove={"flex-start"} styleBorder={"12px 12px 12px 0px"} message={message} key={message.messageId} /> } else { return <Message styleMove={"flex-end"} styleBorder={"12px 12px 0px 12px"} styleColor={"#ededed"} message={message} key={message.messageId} /> } })
    }

    let companion = props.companion




    return (
        <div className="chat-parrent-inner">
            <div className="chat-header">
                <ChatCompanionCard props={companion} />
            </div>
            <div className='chat-inner'>
                <div ref={chat} className='chat' id="chat">
                    {dialog}
                </div>
                <ChatInput />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        chat: state.chatReducer.chat,
        companion: state.chatReducer.companion,
        actualUserId: state.authReducer.actualUserId,
        dialogs: state.dialogsReducer.dialogs,
        dialogsStatus: state.dialogsReducer.status,
        users: state.chatReducer.users,
        messagesStatus: state.chatReducer.status
    }
}

export default connect(mapStateToProps, null)(withRouter(Chat))