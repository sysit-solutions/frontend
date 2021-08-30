import React from 'react'
import { withTheme } from '@material-ui/core'
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core'
import Template from 'templates/default/detail'
import getStyles from './styles'

class Pricing extends React.Component {
  render() {
    const styles = getStyles(this.props.theme.palette)
    return (
      <Template style={{}}>
        <h1 style={styles.title}>Server Pricing</h1>
        <div style={styles.content}>
          <Paper style={styles.paper}>
            <h2 style={styles.subtitle}>XS</h2>
            <h3>$10/month</h3>
            <p>1 CPU</p>
            <p>1GB RAM</p>
            <p>1TB Bandwidth</p>
            <p>25GB Disk</p>
          </Paper>
          <Paper style={styles.paper}>
            <h2 style={styles.subtitle}>S</h2>
            <h3>$20/month</h3>
            <p>1 CPU</p>
            <p>2GB RAM</p>
            <p>2TB Bandwidth</p>
            <p>55GB Disk</p>
          </Paper>
          <Paper style={styles.paper}>
            <h2 style={styles.subtitle}>M</h2>
            <h3>$40/month</h3>
            <p>2 CPU</p>
            <p>4GB RAM</p>
            <p>3TB Bandwidth</p>
            <p>80GB Disk</p>
          </Paper>
          <Paper style={styles.paper}>
            <h2 style={styles.subtitle}>L</h2>
            <h3>$80/month</h3>
            <p>4 CPU</p>
            <p>8GB RAM</p>
            <p>4TB Bandwidth</p>
            <p>160GB Disk</p>
          </Paper>
          <Paper style={styles.paper}>
            <h2 style={styles.subtitle}>XL</h2>
            <h3>$160/month</h3>
            <p>6 CPU</p>
            <p>16GB RAM</p>
            <p>5TB Bandwidth</p>
            <p>320GB Disk</p>
          </Paper>
          <Paper style={styles.paper}>
            <h2 style={styles.subtitle}>2XL</h2>
            <h3>$320/month</h3>
            <p>8 CPU</p>
            <p>32GB RAM</p>
            <p>6TB Bandwidth</p>
            <p>640GB Disk</p>
          </Paper>
          <Paper style={styles.paper}>
            <h2 style={styles.subtitle}>3XL</h2>
            <h3>$640/month</h3>
            <p>16 CPU</p>
            <p>64GB RAM</p>
            <p>10TB Bandwidth</p>
            <p>1.28TB Disk</p>
          </Paper>
          <Paper style={styles.paper}>
            <h2 style={styles.subtitle}>4XL</h2>
            <h3>$1280/month</h3>
            <p>24 CPU</p>
            <p>96GB RAM</p>
            <p>15TB Bandwidth</p>
            <p>1.6TB Disk</p>
          </Paper>
        </div>
      </Template>
    )
  }
}

export default withTheme(Pricing)
