export const appStyle = {
  container:{
    height:'100vh',
    backgroundColor:'black',
    overflow:'hidden'
  },
  headerText:{
    marginTop:0,
    paddingTop:15,
    paddingBottom:15,
    textAlign:'center',
    fontSize: 22,
    fontWeight: 400,
    color:'white',
    backgroundColor:'black'
  },
  webcamText:{
    marginTop:0,
    paddingTop:15,
    paddingBottom:15,
    textAlign:'center',
    fontSize: 22,
    fontWeight: 400,
    color:'#62E75AB'
  },
  AppHeader :{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingTop:10,
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  webcamWrapper:{
    '& video':{
      border: '1px solid',
      borderRadius:7,
      borderColor:'#62E75A',
      height:185,
      width:246
    }
  },
  matrixGif:{
    position:'absolute',
    bottom:0,
    left:0,
    height: 165,
    animation: 'move 20s ease infinite'
  },

  '@keyframes move':{
    '10%' :{
       transform:' translate(20px, 0px )'
   },
  '20%' :{
      transform:' translate(50px, -30px )'
   },
  '30%' :{
    transform:' translate(70px, 0px )'
  },
  '40%' :{
    transform:' translate(90px, -30px )'
  },
  '50%' :{
    transform:' translate(110px, 0px )'
  },
  '60%' :{
    transform:' translate(130px, -30px )'
  },
  '70%' :{
    transform:' translate(150px, 0px )'
  },
  '80%' :{
    transform:' translate(170px, -30px )'
  },
  '90%' :{
    transform:' translate(190px, 0px )'
  },
  '100%' :{
      transform:' translate(210px, -30px )'
    },
  },
  conversation:{
    marginRight:300
}
  
 
}

