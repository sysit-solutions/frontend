const root = {
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  minHeight: '100vh',
}

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

const getStyles = (palette) => {
  return {
    above: {
      ...root,
      text,
      title: { textAlign: 'right' },

      image: {
        ...background,
        backgroundImage:
          'url("https://assets.website-files.com/602aa5676021244054c8c032/608e47e3b61407628f47d411_canvas-promo.jpg")',
      },

      paragraph: {
        textAlign: 'right',
        width: '100%',
      },

      button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
      text,
      title: { width: '100%' },
      pricing: { width: '100%' },
      button: { marginBottom: 20 },

      image: {
        ...background,
        backgroundImage:
          'url("https://assets.website-files.com/602aa5676021244054c8c032/608e47e355a57e37939164c9_blog_articles.jpg")',
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
        backgroundImage:
          'url("https://assets.website-files.com/602aa5676021244054c8c032/608e47e3c11b33d073f071a4_newsletters.jpg")',
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
