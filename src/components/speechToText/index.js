'use strict'
import React, { Component } from "react"
import injectSheet from 'react-jss'
import { speechToTextStyle } from './speechToText.style';
//------------------------SPEECH RECOGNITION-----------------------------
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'
//------------------------COMPONENT-----------------------------
class Speech extends Component {
  constructor() {
    super()
    this.state = {
      listening: true
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }
  componentWillMount(){
    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        recognition.start()
      }
    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }
    recognition.onstart = () => {
      console.log("Listening!")
    }
    let finalTranscript = ''
    let context = this
    recognition.onresult = event => {
     let interimTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' '
        else interimTranscript += transcript
      }
      // document.getElementById('interim').innerHTML = interimTranscript
      // document.getElementById('final').innerHTML = finalTranscript
      context.props.handleTranscript(finalTranscript)
      finalTranscript= ''
    //-------------------------COMMANDS------------------------------------
      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)
      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening'){
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          this.setState({listening : false})
          console.log('STOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOPED')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          // document.getElementById('final').innerHTML = finalText
        }
      }
    }
  //-----------------------------------------------------------------------
    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }
}

  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)
  }

  handleListen() {
    console.log('listening?', this.state.listening)
    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }
    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
      }
    }
    recognition.onstart = () => {
      console.log("Listening!")
    }
    let finalTranscript = ''
    recognition.onresult = event => {
       let interimTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      // document.getElementById('interim').innerHTML = interimTranscript
      // document.getElementById('final').innerHTML = finalTranscript
    //-------------------------COMMANDS------------------------------------
      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)
      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening'){
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          this.setState({listening : false})
          console.log('STOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOPED')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          // document.getElementById('final').innerHTML = finalText
        }
      }
    }
  //-----------------------------------------------------------------------
    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error)
    }
  }

  render() {
    let {classes} = this.props
    return (
      <div className={classes.container}>
      <h1 className={classes.SpeechText}>Speech Recognition toggle</h1>
       {this.state.listening ? <button id='microphone-btn' className={classes.button} onClick={this.toggleListen}/> : <button id='microphone-btn' className={classes.button2} onClick={this.toggleListen} />}
        {/* <div id='interim' style={interim}></div>
        <div id='final' style={final}></div> */}
      </div>
    )
  }
}

export default injectSheet(speechToTextStyle)(Speech)
