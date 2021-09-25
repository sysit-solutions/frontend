import paper from './img/paper.png'
import blog from './img/blog.png'
import sound from './img/sound.png'
import curiculum from './img/curiculum.png'
import h5p from './img/h5p.svg'

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

    curriculum: {
      ...root,
      flexDirection: resolution.width < 1200 ? 'column-reverse' : 'row',

      text,
      title: { width: '100%' },
      pricing: { width: '100%' },
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage: `url("${curiculum}")`,
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
      flexDirection: resolution.width < 1200 ? 'column-reverse' : 'row',

      text,
      title: { width: '100%' },
      paragraph: { width: '100%' },
      pricing: { width: '100%' },
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage: `url("${sound}")`,
        marginTop: resolution.width < 1200 ? 0 : 80,
        marginBottom: resolution.width < 1200 ? 0 : 80,
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
      flexDirection: resolution.width < 1200 ? 'column-reverse' : 'row',

      text,
      title: { width: '100%' },
      paragraph: { width: '100%' },
      pricing: { width: '100%' },
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage: `url("${blog}")`,
      },
    },

    h5p: {
      ...root,
      text,
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage: `url("${h5p}")`,
        marginLeft: resolution.width < 1200 ? 0 : 50,
        marginRight: resolution.width < 1200 ? 0 : 50,
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
