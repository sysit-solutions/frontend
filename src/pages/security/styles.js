import paper from './img/paper.png'
import storage from './img/storage.png'
import containers from './img/containers.png'

const getStyles = (palette, resolution) => {
  const root = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    minHeight: resolution.width < 1200 ? null : '100vh',
    flexDirection: resolution.width < 1200 ? 'column' : 'row',
  }

  const background = {
    width: '50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: resolution.width < 1200 ? '100%' : '50%',
    height: resolution.width < 1200 ? 500 : null,
  }

  const text = {
    width: '50%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: resolution.width < 1200 ? null : '50%',
  }

  return {
    above: {
      ...root,

      text,

      title: {
        textAlign: resolution.width < 1200 ? 'center' : 'right',
      },

      image: {
        ...background,
        marginTop: resolution.width < 1200 ? 0 : 150,
        marginBottom: resolution.width < 1200 ? 0 : 150,
        backgroundImage: `url("${paper}")`,
      },

      paragraph: {
        width: '100%',
        textAlign: resolution.width < 1200 ? 'center' : 'right',
      },

      button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: resolution.width < 1200 ? 50 : null,
      },
    },

    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f4f8f9',
      button: { color: '#727b92' },
    },

    storage: {
      ...root,
      flexDirection: resolution.width < 1200 ? 'column-reverse' : 'row',

      text,
      title: { width: '100%' },
      pricing: { width: '100%' },
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage: `url("${storage}")`,
      },
    },

    containers: {
      ...root,
      text,
      paragraph: { textAlign: 'right' },
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage: `url("${containers}")`,
      },

      title: {
        textAlign: 'right',
        width: '100%',
      },

      pricing: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      },
    },
  }
}

export default getStyles
