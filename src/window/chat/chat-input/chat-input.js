import React, { useRef } from 'react'
import './chat-input.css'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { onChatInputChangeReducer, onChatINputSubmit } from '../../../redux/actions';

function ChatInput(props) {
    const chatInputElement = useRef(null)
    const sendMessageButton = useRef(null)
    let dialogId = props.match.params.id
    function chatInput(event) {
        if (chatInputElement.current && sendMessageButton.current) {
            if (chatInputElement.current.value) {
                sendMessageButton.current.style.display = "block";
            } else {
                sendMessageButton.current.style.display = "none";
            }
        }
    }

    function onChatInputChange() {
        let inputChatText = chatInputElement.current.value
        let message =
        {
            value: inputChatText,
            dialogId: dialogId,
            actualUserId: props.actualUserId
        }
        let action = onChatInputChangeReducer(message)
        props.dispatch(action)

    }

    function onChatInputSubmit() {
        if (chatInputElement.current) {
            if (chatInputElement.current.value) {
                let action = onChatINputSubmit(dialogId)
                props.dispatch(action);
                chatInputElement.current.value = ''
            }
        }
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            if (sendMessageButton.current) {
                sendMessageButton.current.click()
            }
        }
    })
    return (
        <div className="chat-input-parrent">
            <div className="chat-input">
                <input ref={chatInputElement} autoComplete="off" id="chat-input-element" onInput={(event) => chatInput(event)} onChange={onChatInputChange} value={props.newMessage.message} type="text" placeholder="Введите сообщение..." className="chat-input-element">
                </input>
                <div ref={sendMessageButton} onClick={onChatInputSubmit} id='input-button-parrent' className="input-button-parrent">
                    Отправить
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        actualUserId: state.authReducer.actualUserId,
        newMessage: state.chatReducer.newMessage
    }
}

export default connect(mapStateToProps, null)(withRouter(ChatInput))