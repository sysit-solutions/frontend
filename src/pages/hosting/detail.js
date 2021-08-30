import React from 'react'
import { withTheme } from '@material-ui/core'
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core'
import Template from 'templates/default/detail'
import getStyles from './styles'

class Hosting extends React.Component {
  render() {
    const styles = getStyles(this.props.theme.palette)
    return (
      <Template style={{}}>
        <div style={styles.above}>
          <p style={styles.above.text}>
            Take charge of your own data with full disk encryption
          </p>
          <div style={styles.above.picture} />
        </div>
        <h1 style={styles.hosting.title}>Hosting</h1>
        <div style={styles.hosting.content}>
          We are your reliable data management solution. With our knowledge of
          compliance, security and flexibility, we will help your employees or
          students have a safe way of collaborating with one another, as well as
          accessing the right information at any given moment. You can be
          certain that your data will NEVER be shared with a third party while
          providing flexibility for future needs from international students and
          mobile workforces in an always-on 24/7 culture.
        </div>
        <div style={styles.services}>
          <Paper style={styles.services.paper}>
            <h2>Moodle</h2>
            <p>Open Source Learning Management System</p>
          </Paper>
          <Paper style={styles.services.paper}>
            <h2>Learn Dash</h2>
            <p>WordPress e-learning plugin</p>
          </Paper>
          <Paper style={styles.services.paper}>
            <h2>Opigno</h2>
            <p>Drupal based e-learning</p>
          </Paper>
          <Paper style={styles.services.paper}>
            <h2>NextCloud</h2>
            <p>Private cloud solution</p>
          </Paper>
          <Paper style={styles.services.paper}>
            <h2>WordPress</h2>
            <p>Popular blogging platform</p>
          </Paper>
          <Paper style={styles.services.paper}>
            <h2>PeerTube</h2>
            <p>Video archive, search, stream and playlists</p>
          </Paper>
        </div>
        <h1 style={styles.pricing.title}>Server Pricing</h1>
        <div style={styles.pricing.content}>
          <Paper style={styles.pricing.paper}>
            <h2 style={styles.pricing.subtitle}>XS</h2>
            <h3>$10/month</h3>
            <p>1 CPU</p>
            <p>1GB RAM</p>
            <p>1TB Bandwidth</p>
            <p>25GB Disk</p>
          </Paper>
          <Paper style={styles.pricing.paper}>
            <h2 style={styles.pricing.subtitle}>S</h2>
            <h3>$20/month</h3>
            <p>1 CPU</p>
            <p>2GB RAM</p>
            <p>2TB Bandwidth</p>
            <p>55GB Disk</p>
          </Paper>
          <Paper style={styles.pricing.paper}>
            <h2 style={styles.pricing.subtitle}>M</h2>
            <h3>$40/month</h3>
            <p>2 CPU</p>
            <p>4GB RAM</p>
            <p>3TB Bandwidth</p>
            <p>80GB Disk</p>
          </Paper>
          <Paper style={styles.pricing.paper}>
            <h2 style={styles.pricing.subtitle}>L</h2>
            <h3>$80/month</h3>
            <p>4 CPU</p>
            <p>8GB RAM</p>
            <p>4TB Bandwidth</p>
            <p>160GB Disk</p>
          </Paper>
          <Paper style={styles.pricing.paper}>
            <h2 style={styles.pricing.subtitle}>XL</h2>
            <h3>$160/month</h3>
            <p>6 CPU</p>
            <p>16GB RAM</p>
            <p>5TB Bandwidth</p>
            <p>320GB Disk</p>
          </Paper>
          <Paper style={styles.pricing.paper}>
            <h2 style={styles.pricing.subtitle}>2XL</h2>
            <h3>$320/month</h3>
            <p>8 CPU</p>
            <p>32GB RAM</p>
            <p>6TB Bandwidth</p>
            <p>640GB Disk</p>
          </Paper>
          <Paper style={styles.pricing.paper}>
            <h2 style={styles.pricing.subtitle}>3XL</h2>
            <h3>$640/month</h3>
            <p>16 CPU</p>
            <p>64GB RAM</p>
            <p>10TB Bandwidth</p>
            <p>1.28TB Disk</p>
          </Paper>
          <Paper style={styles.pricing.paper}>
            <h2 style={styles.pricing.subtitle}>4XL</h2>
            <h3>$1280/month</h3>
            <p>24 CPU</p>
            <p>96GB RAM</p>
            <p>15TB Bandwidth</p>
            <p>1.6TB Disk</p>
          </Paper>
        </div>
        <div style={styles.locations}>
          <h2 style={styles.locations.title}>Server Locations</h2>
          <div style={styles.locations.content}>
            <Paper
              style={{
                ...styles.locations.flag,
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png")',
              }}
            />
            <Paper
              style={{
                ...styles.locations.flag,
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_South_Korea_(1949%E2%80%931984).svg/1280px-Flag_of_South_Korea_(1949%E2%80%931984).svg.png")',
              }}
            />
            <Paper
              style={{
                ...styles.locations.flag,
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1024px-Flag_of_Singapore.svg.png")',
              }}
            />
            <Paper
              style={{
                ...styles.locations.flag,
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png")',
              }}
            />
            <Paper
              style={{
                ...styles.locations.flag,
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png")',
              }}
            />
            <Paper
              style={{
                ...styles.locations.flag,
                backgroundImage:
                  'url("https://images.creativemarket.com/0.1.0/ps/3695729/1820/1214/m1/fpnw/wm0/germany-.jpg?1512567401&s=b073983c5c75802d336fe3deee337275")',
              }}
            />
            <Paper
              style={{
                ...styles.locations.flag,
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png")',
              }}
            />
            <Paper
              style={{
                ...styles.locations.flag,
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png")',
              }}
            />
            <Paper
              style={{
                ...styles.locations.flag,
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1024px-Flag_of_Canada.svg.png")',
              }}
            />
            <Paper
              style={{
                ...styles.locations.flag,
                backgroundImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/1024px-Flag_of_Australia.svg.png")',
              }}
            />
          </div>
        </div>
      </Template>
    )
  }
}

export default withTheme(Hosting)
