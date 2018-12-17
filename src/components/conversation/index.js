import React from 'react'
import {conversationStyle} from './conversation.style'
import Message from '../message'
import Reply from '../reply'
import injectSheet from 'react-jss'

const Conversation = (props) => {
    let {classes} = props
    return (
       <div>
            <div className={classes.conversationGroup}>
                <div className={classes.textGroup}>
                    {
                      props.conversation.map((message,index) => {
                      return message.type === 'message' ?  
                      <Message key={index} text={message.text}/> :
                      <Reply key={index} text= {message.text}/>  
                 })
             }
             </div>
            </div>
             <input 
                  value={props.inputValue} 
                  onChange={props.handleChange} 
                  onKeyPress={props.handleKeyPress} 
                 className={classes.inputText} type="text" />
        </div>
    )
}

export default injectSheet(conversationStyle)(Conversation)
