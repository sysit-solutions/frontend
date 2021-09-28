import moodle from './img/moodle.png'
import moodle2 from './img/moodle2.png'
import learning from './img/learning.png'

const getStyles = (palette, resolution) => {
  const root = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    minHeight: resolution.width < 1200 ? null : '100vh',
  }

  return {
    above: {
      ...root,
      padding: 50,
      flexDirection: resolution.width < 1200 ? 'column-reverse' : 'row',

      message: {
        fontSize: '3rem',
        color: '#666',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: 30,
        width: resolution.width < 1200 ? null : '50%',
        marginRight: resolution.width < 1200 ? null : 50,
      },

      picture: {
        width: resolution.width < 1200 ? '100%' : '50%',
        height: resolution.width < 1200 ? 500 : null,
        backgroundImage: `url("${moodle}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
    what: {
      title: {
        textAlign: 'center',
        color: '#666',
        fontSize: '4rem',
      },

      explanation: {
        color: 'white',
        fontSize: '2rem',
        padding: 80,
        paddingTop: 100,
        paddingBottom: 100,
        backgroundColor: palette.primary.main,
      },
    },

    how: {
      title: {
        textAlign: 'center',
        color: '#666',
        fontSize: '4rem',
        marginTop: 100,
      },

      explanation: {
        fontSize: '2rem',
        padding: 80,
        paddingTop: 0,
        paddingBottom: 100,
      },

      picture: {
        width: '50%',
        backgroundSize: '100% 100%',
        backgroundImage: `url("${learning}")`,
      },

      content: {
        display: 'flex',
        alignItems: 'center',
        width: '50%',
        paddingLeft: 20,
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
        flexDirection: resolution.width < 1200 ? 'column-reverse' : 'row',
      },

      explanation: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 50,
        width: resolution.width < 1200 ? null : '50%',
      },

      picture: {
        height: 500,
        backgroundSize: 'contain',
        backgroundImage: `url("${moodle2}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: resolution.width < 1200 ? '100%' : '50%',
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
