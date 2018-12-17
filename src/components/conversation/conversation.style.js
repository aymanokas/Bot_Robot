export const conversationStyle = {
    conversationGroup: {
        width: 500,
        maxHeight:620,
        height:620,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        boxShadow: '0 3px 4px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)',
        transition: 'all 0.1s linear',
        position: 'relative',
        overflow: 'scroll',
        padding: [8, 9],
        marginTop: 2,
        '&::-webkit-scrollbar': {
          width: 4
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#C9CED6',
          borderRadius: 2
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#314455'
        },
        border:'1px solid #62E75A'
        
      },
      inputText:{
        wordWrap: 'break-word',
        width: 479,
        height: 50,
        backgroundColor: '#23272f',
        border: 0,
        borderRadius: 10,
        padding: [5, 20],
        color: '#314455',
        fontSize: 22,
        '&:focus':{
            outline: 'none'
        }
      },
      textGroup:{
       
        display: 'flex',
        flexDirection: 'column'
      }
}