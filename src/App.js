import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { Style } from 'radium'
import { StoreContext, StoreProvider } from '@freenit-framework/core'
import ScrollToTop from 'react-router-scroll-top'

import store from 'store'
import Routing from 'routing'
import theme from 'theme'
import styles from 'styles'

const App = () => {
  store.auth.init('/api/v1')
  return (
    <ThemeProvider theme={theme}>
      <Style rules={styles} />
      <Router>
        <ScrollToTop>
          <StoreProvider store={store} />
          <StoreContext.Provider value={store}>
            <Routing />
          </StoreContext.Provider>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  )
}

export default App
