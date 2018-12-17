import React from 'react'
import {replyStyle} from './reply.style'
import injectSheet from 'react-jss'
import reactor from '../../reactor.png'
const Reply = (props) => {
    let {classes} = props
    return (
        <div className={classes.replyGroup}>
            <img className={classes.avatarBot} src={reactor} alt='reactor'/>
            <p className={classes.replyText}>{props.text}</p>
        </div>
    )
}

export default injectSheet(replyStyle)(Reply)
