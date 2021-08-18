import graph from './img/hosting.svg'
import logo from './img/logo.svg'

const getStyles = (resolution, palette) => {
  return {
    root: {
      height: 'calc(100vh - 65px)',
      backgroundColor: '#d5d9ec',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: resolution.width < 1200 ? 'column-reverse' : 'row',
    },

    first: {
      graph: {
        width: '100%',
        height: '100%',
        backgroundSize: '90% 90%',
        backgroundImage: `url("${graph}")`,
        backgroundRepeat: 'no-repeat',
      },

      left: {
        width: '90%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: resolution.width < 1200 ? 'flex-start' : 'center',
        flexDirection: 'column',
        paddingLeft: 50,
        textAlign: 'center',
      },

      paragraph: {
        color: '#46474b',
        width: '100%',
        fontSize: '3rem',
      },

      button: {
        height: 70,
        width: 150,
        fontSize: '1.5rem',
      },
    },

    second: {
      display: 'flex',
      flexDirection: 'row',
      padding: 50,
      alignItems: 'stretch',
      height: '250',
    },

    card: {
      width: '100%',
      media: {
        height: 250,
        backgroundSize: '100% 100%',
      },
    },

    about: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50,

      left: {
        width: '48%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: palette.primary.main,
      },

      logo: {
        backgroundSize: '100% 100%',
        backgroundImage: `url("${logo}")`,
        width: 300,
        height: 300,
      },

      title: {
        textAlign: 'center',
        fontSize: '3rem',
      },

      right: {
        width: '100%',
        paddingLeft: 50,
        fontSize: '1.5rem',
      },
    },

    contact: {
      padding: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      form: {
        maxWidth: 450,
        width: '100%',
      },

      title: {
        textAlign: 'center',
      },

      button: {
        marginTop: 10,
      },
    },
  }
}

export default getStyles
