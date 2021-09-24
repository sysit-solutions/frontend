import paper from './img/paper.png'
import search from './img/search.png'
import mobile from './img/mobile.png'

const background = {
  width: '50%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}

const text = {
  width: '50%',
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

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
      flexDirection: resolution.width < 1200 ? 'column' : 'row',

      text: {
        ...text,
        width: resolution.width < 1200 ? '100%' : '50%',
        padding: resolution.width < 1200 ? null : 20,
      },

      title: {
        textAlign: resolution.width < 1200 ? 'center' : 'right',
      },

      image: {
        ...background,
        marginTop: resolution.width < 1200 ? 0 : 150,
        marginBottom: resolution.width < 1200 ? 0 : 150,
        backgroundImage: `url("${paper}")`,
        width: resolution.width < 1200 ? '100%' : '50%',
        height: resolution.width < 1200 ? 800 : null,
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

    curriculum: {
      ...root,
      flexDirection: resolution.width < 1200 ? 'column' : 'row',

      text: {
        ...text,
        width: resolution.width < 1200 ? null : '50%',
      },

      title: { width: '100%' },
      pricing: { width: '100%' },
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage: `url("${search}")`,
        width: resolution.width < 1200 ? '100%' : '50%',
        height: resolution.width < 1200 ? 500 : null,
      },
    },

    video: {
      ...root,
      text,
      paragraph: { textAlign: 'right' },
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage:
          'url("https://assets.website-files.com/602aa5676021244054c8c032/608e47e33583f540683ea1e9_landing_page.jpg")',
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

    sound: {
      ...root,
      text,
      title: { width: '100%' },
      paragraph: { width: '100%' },
      pricing: { width: '100%' },
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage:
          'url("https://assets.website-files.com/602aa5676021244054c8c032/608e47e3c11b33d073f071a4_newsletters.jpg")',
      },
    },

    scorm: {
      ...root,
      text,
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage:
          'url("https://assets.website-files.com/602aa5676021244054c8c032/608e47e475add137fc75c5c6_social_media.jpg")',
      },

      title: {
        textAlign: 'right',
        width: '100%',
      },

      paragraph: {
        textAlign: 'right',
        width: '100%',
      },
    },

    blog: {
      ...root,
      text,
      title: { width: '100%' },
      paragraph: { width: '100%' },
      pricing: { width: '100%' },
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage: `url("${mobile}")`,
      },
    },

    h5p: {
      ...root,
      text,
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage:
          'url("https://assets.website-files.com/602aa5676021244054c8c032/608e47e475add137fc75c5c6_social_media.jpg")',
      },

      title: {
        textAlign: 'right',
        width: '100%',
      },

      paragraph: {
        textAlign: 'right',
        width: '100%',
      },
    },
  }
}

export default getStyles
