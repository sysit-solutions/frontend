import design from './img/design.svg'
import design2 from './img/design2.png'

const getStyles = (palette, resolution) => {
  const root = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const pale = {
    fontSize: '2rem',
    color: '#666',
  }

  const message = {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    marginBottom: 10,
    marginRight: resolution.width < 1200 ? null : 50,
  }

  return {
    above: {
      ...root,
      minHeight: '100vh',
      flexDirection: resolution.width < 1200 ? 'column-reverse' : 'row',

      content: { padding: 30 },
      main: { ...pale, ...message },
      message,

      picture: {
        height: 500,
        backgroundImage: `url("${design}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: resolution.width < 1200 ? '100%' : '50%',
      },
    },
    what: {
      title: {
        textAlign: 'center',
      },

      explanation: {
        padding: 20,
        paddingBottom: 100,
      },
    },

    why: {
      title: {
        textAlign: 'center',
        padding: 50,
      },

      explanation: {
        backgroundColor: palette.primary.main,
        color: '#ffffff',
        padding: 50,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 100,
      },
    },

    learn: {
      ...root,
      flexDirection: resolution.width < 1200 ? 'column' : 'row',
      padding: 50,
      minHeight: '20vw',

      picture: {
        height: 500,
        backgroundSize: 'contain',
        backgroundImage: `url("${design2}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: resolution.width < 1200 ? '100%' : '50%',
      },

      text: {
        paddingLeft: 20,
        display: 'flex',
        alignItems: 'center',
        width: resolution.width < 1200 ? '100%' : '50%',
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
