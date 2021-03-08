import './chatCompanionCard.css'

function ChatCompanionCard(props) {

    return (
        <div className="chat-companion-card-parrent">
                <img className="chat-companion-img" src={props.props.profileImage} />
            <div className="chat-companion-name">
                {props.props.firstName + ' ' + props.props.secondName}
            </div>
        </div>
    )
}

export default ChatCompanionCard