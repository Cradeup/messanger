import './message.css'

export function Message (props) { 
    return( 
        <div style={{alignSelf : (props.styleMove), borderRadius: (props.styleBorder), backgroundColor: (props.styleColor)}} className='message-par'>{props.message.message}</div>
    )
}

