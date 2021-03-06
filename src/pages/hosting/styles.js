import graph from './img/graph.jpg'

const getStyles = (palette, resolution) => {
  return {
    above: {
      padding: 50,
      display: 'flex',
      aligntItems: 'center',
      justifyContent: 'center',
      flexDirection: resolution.width < 1200 ? 'column-reverse' : 'row',

      text: {
        fontSize: '5rem',
        width: '50%',
        color: '#666',
        width: resolution.width < 1200 ? '100%' : '50%',
      },

      picture: {
        height: 500,
        backgroundImage: `url("${graph}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: resolution.width < 1200 ? '100%' : '50%',
      },
    },

    hosting: {
      title: {
        textAlign: 'center',
        color: '#666',
        fontSize: '4rem',
      },

      content: {
        backgroundColor: palette.primary.main,
        color: '#ffffff',
        fontSize: '2rem',
        padding: 50,
        paddingTop: 100,
        paddingBottom: 100,
      },
    },

    services: {
      display: 'grid',
      gridGap: '1vw',
      gridTemplateColumns: 'repeat(3, 32%)',
      padding: 50,

      paper: {
        padding: 10,
      },
    },

    pricing: {
      title: {
        textAlign: 'center',
        color: '#666',
        fontSize: '4rem',
      },

      content: {
        padding: 50,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, auto)',
        gridGap: '1vw 1vw',
        backgroundColor: palette.primary.main,
      },

      paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        flexDirection: 'column',
      },

      subtitle: {
        fontSize: '3rem',
      },
    },

    locations: {
      padding: 50,

      title: {
        color: '#666',
        fontSize: '4rem',
        textAlign: 'center',
      },

      content: {
        display: 'grid',
        gridGap: 20,
        gridTemplateColumns: 'repeat(5, auto)',
      },

      flag: {
        backgroundSize: '100% 100%',
        height: 150,
      },
    },
  }
}

export default getStyles
