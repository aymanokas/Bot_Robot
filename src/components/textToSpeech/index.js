import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextToSpeech extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voices: []
        };
        this.playSpeech = this.playSpeech.bind(this);
    }

    componentWillMount(){
        window.speechSynthesis.onvoiceschanged = () => {
            const voices = window.speechSynthesis.getVoices();

            if (voices.length > 0) {
                this.setState({ voices })
            }
        }
       
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps,this.props)
        if(nextProps.text !== this.props.text){
            this.playSpeech(nextProps.text)
        }
    }
 playSpeech(text) {
    
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }

        const { voice, children, rate, volume } = this.props;
     

      
        let msg = new SpeechSynthesisUtterance();
        if (voice) {
            msg.voice = this.state.voices[10].name;
            msg.lang = this.state.voices[20].lang;
        }

        // Text passed as a prop takes priority, then assume children, and finally ''
        // TODO: Parse out text of children only in the case of using <u> or <i>
        msg.text = text || children || '';
        msg.rate = rate;
        msg.volume = volume;

        if ( this.state.voices.length > 0) {
            window.speechSynthesis.speak(msg);
        }
}
  render() {
    return (
      <div>
        
      </div>
    )
 }
}
TextToSpeech.propTypes = {
    voice: PropTypes.string,
    rate: PropTypes.number,
    volume: PropTypes.number,
    text: PropTypes.string,
    children: PropTypes.any
}
TextToSpeech.defaultProps = {
    rate: 1,
    volume: 1
}
export default TextToSpeech
