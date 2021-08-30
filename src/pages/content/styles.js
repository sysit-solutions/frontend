import moodle from './img/moodle.png'
import learning from './img/learning.png'

const getStyles = (palette) => {
  return {
    above: {
      padding: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',

      message: {
        fontSize: '3rem',
        width: '50%',
        color: '#666',
        marginRight: 50,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: 30,
      },

      picture: {
        flex: 1,
        height: 500,
        width: '50%',
        backgroundImage: `url("${moodle}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
    what: {
      textAlign: 'center',
      color: '#666',
      fontSize: '4rem',

      explanation: {
        fontSize: '2rem',
        padding: 80,
        paddingTop: 100,
        paddingBottom: 100,
      },
    },

    why: {
      textAlign: 'center',
      color: '#666',
      fontSize: '4rem',
      explanation: {
        backgroundColor: palette.primary.main,
        color: '#ffffff',
        fontSize: '2rem',
        padding: 80,
        paddingTop: 100,
        paddingBottom: 100,
      },
    },

    learn: {
      padding: 50,
      display: 'flex',
      alignItems: 'strertch',
      justifyContent: 'center',
      height: '20vw',

      picture: {
        width: '50%',
        backgroundSize: 'contain',
        backgroundImage: `url("${learning}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },

      text: {
        width: '50%',
        paddingLeft: 20,
        display: 'flex',
        alignItems: 'center',
      },

      paragraph: {
        fontSize: '1.5rem',
      },
    },

    help: {
      title: {
        textAlign: 'center',
        color: '#666',
        fontSize: '4rem',
      },

      content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      inner: {
        padding: 50,
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
      },
    },

    pricing: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 50,
      paddingBottom: 0,

      button: {
        height: 50,
        width: 100,
        marginBottom: 20,
        fontWeight: 'bold',
      },
    },
  }
}

export default getStyles
