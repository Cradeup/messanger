import './actualuser.css'
import { connect } from "react-redux";

function ActualUser(props) {
    let nickName = ''
    if (props.actualUser) {
        nickName = props.actualUser.nickName
    }
    return (
        <div className="actual-user-nickname-par">
            <div className="actual-user-nickname">
                {nickName}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        actualUser: state.dialogsReducer.actualUser,
    }
}

export default connect(mapStateToProps, null)(ActualUser)