import React from 'react'
import { observer } from 'mobx-react'
import { withTheme, Button, Toolbar, Link } from '@material-ui/core'
import Template from 'templates/default/detail'
import store from 'store'

import data from './data'
import getStyles from './styles'

class Security extends React.Component {
  render() {
    const styles = getStyles(this.props.theme.palette, store.resolution)
    return (
      <Template>
        <div style={styles.above}>
          <div style={styles.above.image} />
          <div style={styles.above.text}>
            <h1 style={styles.above.title}>{data.above.title}</h1>
            <p style={styles.above.paragraph}>{data.above.paragraph}</p>
            <div style={styles.above.button}>
              <Button variant="contained" color="secondary">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
        <Toolbar style={styles.toolbar}>
          <Link href="#storage">
            <Button style={styles.toolbar.button}>storage</Button>
          </Link>
          <Link href="#containers">
            <Button style={styles.toolbar.button}>containers</Button>
          </Link>
        </Toolbar>
        <div style={styles.storage} id="storage">
          <div style={styles.storage.text}>
            <h2 style={styles.storage.title}>{data.storage.title}</h2>
            <p>{data.storage.paragraph}</p>
            <div style={styles.storage.pricing}>
              <Button
                variant="contained"
                color="primary"
                style={styles.storage.button}
              >
                View Pricing
              </Button>
            </div>
          </div>
          <div style={styles.storage.image} />
        </div>
        <div style={styles.containers} id="containers">
          <div style={styles.containers.image} />
          <div style={styles.containers.text}>
            <h2 style={styles.containers.title}>{data.containers.title}</h2>
            <p style={styles.containers.paragraph}>
              {data.containers.paragraph}
            </p>
            <div style={styles.containers.pricing}>
              <Button
                variant="contained"
                color="primary"
                style={styles.containers.button}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </Template>
    )
  }
}

export default withTheme(observer(Security))
