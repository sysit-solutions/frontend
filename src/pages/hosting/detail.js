import React from 'react'
import { observer } from 'mobx-react'
import { withTheme } from '@material-ui/core'
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core'
import Template from 'templates/default/detail'
import store from 'store'
import getStyles from './styles'
import data from './data'

class Hosting extends React.Component {
  render() {
    const styles = getStyles(this.props.theme.palette, store.resolution)
    return (
      <Template style={{}}>
        <div style={styles.above}>
          <p style={styles.above.text}>{data.above.text}</p>
          <div style={styles.above.picture} />
        </div>

        <h1 style={styles.hosting.title}>{data.hosting.title}</h1>
        <div style={styles.hosting.content}>{data.hosting.content}</div>

        <div style={styles.services}>
          {data.services.map((service) => (
            <Paper style={styles.services.paper} key={service.title}>
              <h2>{service.title}</h2>
              <p>{service.paragraph}</p>
            </Paper>
          ))}
        </div>

        <h1 style={styles.pricing.title}>{data.pricing.title}</h1>
        <div style={styles.pricing.content}>
          {data.pricing.content.map((price) => (
            <Paper style={styles.pricing.paper} key={price.subtitle}>
              <h2 style={styles.pricing.subtitle}>{price.subtitle}</h2>
              <h3>{price.price}</h3>
              <p>{price.cpu}</p>
              <p>{price.ram}</p>
              <p>{price.bandwidth}</p>
              <p>{price.disk}</p>
            </Paper>
          ))}
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

export default withTheme(observer(Hosting))
