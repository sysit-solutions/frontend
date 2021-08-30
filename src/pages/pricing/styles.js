const getStyles = (palette) => {
  return {
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
  }
}

export default getStyles
