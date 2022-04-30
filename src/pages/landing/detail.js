import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  TextField,
  withTheme,
} from '@material-ui/core'
import { errors } from '@freenit-framework/core'
import Template from 'templates/default/detail'
import store from 'store'
import moodle from './img/moodle.png'
import opigno from './img/opigno.png'
import learndash from './img/learndash.png'
import getStyles from './styles'

class Landing extends React.Component {
  state = {
    email: '',
    subject: '',
    message: '',
  }

  change = (field) => (event) => {
    this.setState({ [field]: event.target.value })
  }

  submit = async (event) => {
    event.preventDefault()
    const { feedback, notification } = store
    const result = await feedback.send(this.state)
    if (!result.ok) {
      const error = errors(result)
      notification.show(error.message)
    } else {
      notification.show('Your message was successfully sent!')
    }
    this.setState({
      email: '',
      subject: '',
      message: '',
    })
  }

  render() {
    const styles = getStyles(this.props.theme.palette, store.resolution)
    return (
      <Template style={{}}>
        <div style={styles.root}>
          <div style={styles.first.left}>
            <p style={styles.first.paragraph}>
              Offering affordable and reliable open-source education hosting
              solutions designed specifically for your needs.
            </p>
            <Link to="/pricing">
              <Button
                variant="contained"
                color="primary"
                style={styles.first.button}
              >
                Pricing
              </Button>
            </Link>
          </div>
          <div style={styles.first.graph} />
        </div>
        <div style={styles.second}>
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia image={moodle} style={styles.card.media} />
              <CardContent>
                <Typography variant="h5">Moodle Hosting</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/products/moodle">
                <Button variant="outlined">More</Button>
              </Link>
            </CardActions>
          </Card>
          <Card style={{ ...styles.card, marginLeft: 50, marginRight: 50 }}>
            <CardActionArea>
              <CardMedia image={opigno} style={styles.card.media} />
              <CardContent>
                <Typography variant="h5">Opigno Hosting</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/products/opigno">
                <Button variant="outlined">More</Button>
              </Link>
            </CardActions>
          </Card>
          <Card style={styles.card}>
            <CardActionArea>
              <CardMedia image={learndash} style={styles.card.media} />
              <CardContent>
                <Typography variant="h5">LearnDash Hosting</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/products/learndash">
                <Button variant="outlined">More</Button>
              </Link>
            </CardActions>
          </Card>
        </div>
        <div style={styles.about}>
          <div style={styles.about.left}>
            <div style={styles.about.logo} />
            <p style={styles.about.title}>SysIT Solutions</p>
          </div>
          <div style={styles.about.right}>
            <p>
              Welcome to SysIT Solutions. With our help, teachers, students, and
              business professionals worldwide would be able to create their
              e-learning content without worrying about technical issues like
              security updates, backups, or server maintenance.
            </p>
            <p>
              Our mission is to make online education accessible for everyone.
              We do this by offering affordable solutions that are easy to use
              and provide you with all the tools necessary for running your
              online classroom or a coaching service in just a few clicks!
            </p>
          </div>
        </div>
        <div style={styles.contact}>
          <form style={styles.contact.form} onSubmit={this.submit}>
            <h2 style={styles.contact.title}>Send Us a Message</h2>
            <TextField
              label="email"
              required
              fullWidth
              onChange={this.change('email')}
            />
            <TextField
              label="subject"
              required
              fullWidth
              onChange={this.change('subject')}
            />
            <TextField
              label="message"
              required
              fullWidth
              multiline
              rows={4}
              onChange={this.change('message')}
            />
            <Button
              type="submit"
              style={styles.contact.button}
              variant="outlined"
            >
              Send
            </Button>
          </form>
        </div>
      </Template>
    )
  }
}

export default withTheme(observer(Landing))
