import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Button, withTheme } from '@material-ui/core'
import Template from 'templates/default/detail'
import store from 'store'
import getStyles from './styles'
import data from './data'

const { opigno } = data

class Opigno extends React.Component {
  render() {
    const styles = getStyles(this.props.theme.palette, store.resolution)
    return (
      <Template style={{}}>
        <div style={styles.above}>
          <p style={styles.above.message}>{opigno.above.message}</p>
          <div style={styles.above.picture} />
        </div>

        <h1 style={styles.what.title}>{opigno.what.title}</h1>
        <div style={styles.what.explanation}>{opigno.what.explanation}</div>

        <h1 style={styles.how.title}>{opigno.how.title}</h1>
        <div style={styles.how.explanation}>
          <p>{opigno.how.explanation}</p>
        </div>

        <h1 style={styles.help.title}>{opigno.help.title}</h1>
        <div style={styles.help.content}>
          <div style={styles.help.explanation}>
            <p>{opigno.help.explanation}</p>
          </div>
          <div style={styles.help.picture} />
        </div>

        <div style={styles.pricing}>
          <Link to="/pricing">
            <Button
              style={styles.pricing.button}
              color="primary"
              variant="contained"
            >
              Pricing
            </Button>
          </Link>
        </div>
      </Template>
    )
  }
}

export default withTheme(observer(Opigno))
