import React, { Component } from 'react';
import Conversation from './components/conversation'
import injectSheet from 'react-jss'
import { appStyle } from './App.style'
import TextToSpeech from './components/textToSpeech'
import WebcamReact from './components/webcamReact'
import Speech from './components/speechToText'
import matrix from './matrix.gif'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      conversation: [],
      inputValue: '',
      reply: ''
    }
  }

  receiveTranscript = (transcript) => {
    this.setState({ inputValue: transcript })
    let c = this.state.conversation
    if (transcript !== '') c.push({ type: 'message', text: this.state.inputValue })
    this.setState({
      conversation: c,
      inputValue: transcript,
    })
    transcript.trim() !== '' && fetch('http://localhost:3001/message',
      {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ "message": this.state.inputValue })
      })
      .then((res) => {
        res.json().then(
          body => {
            let newReply = this.state.conversation
            newReply.push(body)
            this.setState({
              conversation: newReply,
              reply: body.text
            })
          })
      })
  }
  
  render() {
    let { classes } = this.props
    return (
      <div className={classes.container}>
        <h1 className={classes.headerText}>Test interactive robot V 0.0.1 </h1>
        <header className={classes.AppHeader}>
          <TextToSpeech text={this.state.reply} />
          <div className={classes.speechAndCam}>
            <Speech handleTranscript={(transcript) => this.receiveTranscript(transcript)} />
            <div className={classes.webcamWrapper}>
              <WebcamReact />
            </div>
            <img className={classes.matrixGif} src={matrix} alt='matrix'/>
          </div>
          <div className={classes.conversation}>
            <Conversation
              conversation={this.state.conversation}
              inputValue={this.state.inputValue}
              handleChange={(e) => {
                this.setState({ inputValue: e.target.value })
              }}
              handleKeyPress={(e) => {
                if (e.key === 'Enter') {
                  let c = this.state.conversation
                  if (e.target.value !== '') c.push({ type: 'message', text: this.state.inputValue })
                  this.setState({
                    conversation: c,
                    inputValue: '',
                    didChange: true
                  })
                  fetch('http://localhost:3001/message', {
                    method: "POST",
                    headers: {
                      'Content-type': 'application/json'
                    },
                    body: JSON.stringify({ "message": this.state.inputValue })
                  })
                    .then((res) => {
                      res.json().then(
                        body => {
                          console.log(body)
                          let newReply = this.state.conversation
                          newReply.push(body)
                          this.setState({
                            conversation: newReply,
                            reply: body.text
                          })
                        })
                    })
                }
              }}
            />
          </div>
        </header>
      </div>
    )
  }
}

export default injectSheet(appStyle)(App);
