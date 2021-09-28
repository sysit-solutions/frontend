import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  withTheme,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Template from 'templates/default/detail'
import store from 'store'
import getStyles from './styles'
import data from './data'

class Design extends React.Component {
  render() {
    const styles = getStyles(this.props.theme.palette, store.resolution)
    return (
      <Template style={{}}>
        <div style={styles.above}>
          <div style={styles.above.content}>
            <p style={styles.above.main}>{data.above.main}</p>
            <p style={styles.above.message}>{data.above.message}</p>
          </div>
          <div style={styles.above.picture} />
        </div>

        <h1 style={styles.what.title}>{data.what.title}</h1>
        <div style={styles.what.explanation}>{data.what.explanation}</div>

        <h1 style={styles.why.title}>{data.why.title}</h1>
        <div style={styles.why.explanation}>{data.why.explanation}</div>

        <div style={styles.learn}>
          <div style={styles.learn.picture} />
          <div style={styles.learn.text}>
            <p>{data.learn.paragraph}</p>
          </div>
        </div>

        <h1 style={styles.help.title}>{data.help.title}</h1>
        <div style={styles.help.content}>
          <div style={styles.help.data}>
            {data.help.data.map((item) => (
              <Accordion key={item.title}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
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

export default withTheme(observer(Design))
