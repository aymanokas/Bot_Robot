export const speechToTextStyle = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  SpeechText:{
    marginTop:0,
    paddingBottom:15,
    textAlign:'center',
    fontSize: 22,
    fontWeight: 400,
    color:'#62E75A'
  },
  button: {
    width: '60px',
    height: '60px',
    background: '#62E75A',
    borderRadius: '50%',
    margin: '0em 0 2em 0',
    animation: 'blinker 0.8s infinite '
  },
  button2:{
    width: '60px',
    height: '60px',
    background: 'red',
    borderRadius: '50%',
    margin: '0em 0 2em 0'
  },
  '@keyframes blinker' :{
      '0%' :{
        opacity: 0
      },
      '100%' :{
        opacity: 1
      }
  },
  interim: {
    color: 'gray',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
   
  },

  final: {
    color: 'white',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  }
}