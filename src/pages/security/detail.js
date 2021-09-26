import React from 'react'
import { observer } from 'mobx-react'
import { withTheme, Button, Toolbar, Link } from '@material-ui/core'
import Template from 'templates/default/detail'
import getStyles from './styles'
import store from 'store'

class Security extends React.Component {
  render() {
    const styles = getStyles(this.props.theme.palette, store.resolution)
    return (
      <Template>
        <div style={styles.above}>
          <div style={styles.above.image} />
          <div style={styles.above.text}>
            <h1 style={styles.above.title}>
              Hosting on industry leading opeating system for servers, network
              and storage apliances
            </h1>
            <p style={styles.above.paragraph}>
              FreeBSD is an operating system used to power modern servers,
              desktops, and embedded platforms. A large community has
              continually developed it for more than thirty years. Its advanced
              networking, security, and storage features have made FreeBSD the
              platform of choice for many of the busiest web sites and most
              pervasive embedded networking and storage devices.
            </p>
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
            <h2 style={styles.storage.title}>Storage</h2>
            <p>
              There is no substitute for lost data hence we chose ZFS as
              industry leading storage file system to store your data. With
              snapshots and every piece of data checksummed, you wll never loose
              any data with ZFS. Full disc encryption makes it very hard for
              malitious individuals to get to your data, even when they physicly
              own your machine.
            </p>
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
            <h2 style={styles.containers.title}>Containers</h2>
            <p style={styles.containers.paragraph}>
              FreeBSD jails are an effective way to increase the security of a
              server. They are the oldest implementation of containers and hence
              most mature option in the IT world. Together with ZFS jails make
              migration of services between servers piece of cake, which is
              pefect for cloud environment.
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
