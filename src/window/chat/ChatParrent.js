import './chat-parrent.css'
import { connect } from "react-redux";
import SelectChat from './selectChat';
import { Route, Switch } from 'react-router-dom';
import Chat from './chat';

function ChatParrent(props) {
    return (
        <div className='chat-parrent'>
            <div>
                <Switch>
                    <Route path="/:id" render={() => <Chat />} />
                    <Route path="/" render={() => <SelectChat />} />
                </Switch>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        users: state.chatReducer.users,
        actualUserId: state.authReducer.actualUserId
    }
}

export default connect(mapStateToProps, null)(ChatParrent)