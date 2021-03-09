import { Link } from "react-router-dom";
import './auth.css'
import React, { useEffect, useRef } from 'react'
import { connect } from "react-redux";
import { fetchAuthData, onAuthInputChangeReducer, setDialogsFetchStatusToWaiting, setAuthFetchStatusToWaiting } from "../../redux/actions";

function Auth(props) {
    const authLoginInput = useRef(null)
    const authPasswordInput = useRef(null)
    function onAuthInputChange() {
        let authLoginInputValue = authLoginInput.current.value
        let authPasswordInputValue = authPasswordInput.current.value
        let loginPassword = { login: authLoginInputValue, password: authPasswordInputValue }
        let action = onAuthInputChangeReducer(loginPassword)
        props.dispatch(action)
    }
    useEffect(() => {
        if (props.authFetchStatus !== 'waiting') {
            let action = setAuthFetchStatusToWaiting()
            props.dispatch(action)
        }
    })


    function onAuthSubmit() {
        if (props.authFetchStatus === 'waiting') {
            let action = fetchAuthData({ login: props.login, password: props.password })
            props.dispatch(action)
        }
        {
            let action = setDialogsFetchStatusToWaiting()
            props.dispatch(action)
        }
    }

    return (
        <div className="auth-parent">
            Авторизация
            <form>
                <label >Логин</label>
                <input ref={authLoginInput} onChange={onAuthInputChange} value={props.login} type="text" />
                <label >Пароль</label>
                <input ref={authPasswordInput} onChange={onAuthInputChange} value={props.password} type="text" />
                <Link to={'/'}>
                    <input type="submit" onClick={onAuthSubmit} value="Submit" />
                </Link>
            </form>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        login: state.authReducer.login,
        password: state.authReducer.password,
        actualUserId: state.authReducer.actualUserId,
        authFetchStatus: state.authReducer.status
    }
}

export default connect(mapStateToProps, null)(Auth)