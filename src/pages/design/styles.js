import design from './img/design.svg'
import design2 from './img/design2.png'

const getStyles = (palette) => {
  return {
    above: {
      padding: 50,
      paddingTop: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',

      message: {
        fontSize: '2rem',
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
        height: 600,
        width: '50%',
        backgroundImage: `url("${design}")`,
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
      padding: 50,
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
      alignItems: 'stretch',
      justifyContent: 'center',
      minHeight: '20vw',

      picture: {
        width: '50%',
        backgroundSize: 'contain',
        backgroundImage: `url("${design2}")`,
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
