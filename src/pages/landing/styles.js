import graph from './img/hosting.svg'
import logo from './img/logo.png'

const styles = {
  root: {
    height: 'calc(100vh - 65px)',
    backgroundColor: '#d5d9ec',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      paddingLeft: 50,
      paddingRight: 50,
    },

    paragraph: {
      color: '#46474b',
      width: '100%',
      fontSize: '2rem',
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
    height: 350,
    alignItems: 'center',
    padding: 50,

    logo: {
      width: '48%',
      backgroundImage: `url("${logo}")`,
      backgroundSize: '100% 100%',
      height: '100%',
    },

    paragraph: {
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

export default styles
