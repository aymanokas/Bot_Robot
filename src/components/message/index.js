import React from 'react'
import {messageStyle} from './message.style'
import injectSheet from 'react-jss'
const Message = (props) => {
    let {classes} = props
    return (
        <div className={classes.messageGroup}>
            <p className={classes.messageText}>{props.text}</p>
        </div>
    )
}

export default injectSheet(messageStyle)(Message)
