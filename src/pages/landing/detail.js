import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  TextField,
} from '@material-ui/core'
import { errors } from '@freenit-framework/core'
import Template from 'templates/default/detail'
import store from 'store'
import graph from './img/hosting.svg'
import moodle from './img/moodle.png'
import opigno from './img/opigno.png'
import learndash from './img/learndash.png'
import logo from './img/logo.png'

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
    return (
      <Template style={{}}>
        <div
          style={{
            height: 'calc(100vh - 65px)',
            backgroundColor: '#d5d9ec',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              paddingLeft: 50,
              paddingRight: 50,
            }}
          >
            <p style={{ color: '#46474b', width: '100%', fontSize: '2rem' }}>
              Offering affordable and reliable open source education hosting
              solutions designed specifically for your needs.
            </p>
            <Button variant="contained" color="primary">
              Calculator
            </Button>
          </div>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundSize: '90% 90%',
              backgroundImage: `url("${graph}")`,
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: 50,
            alignItems: 'stretch',
            height: '250',
          }}
        >
          <Card style={{ width: '100%' }}>
            <CardActionArea>
              <CardMedia
                image={moodle}
                style={{ height: 250 }}
              />
              <CardContent>
                <Typography variant="h5">Moodle Hosting</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/hosting">
                <Button variant="outlined">More</Button>
              </Link>
            </CardActions>
          </Card>
          <Card style={{ width: '100%', marginLeft: 50, marginRight: 50 }}>
            <CardActionArea>
              <CardMedia
                image={opigno}
                style={{ height: 250, backgroundSize: '100% 100%' }}
              />
              <CardContent>
                <Typography variant="h5">Opigno Hosting</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/hosting">
                <Button variant="outlined">More</Button>
              </Link>
            </CardActions>
          </Card>
          <Card style={{ width: '100%' }}>
            <CardActionArea>
              <CardMedia
                image={learndash}
                style={{ height: 250 }}
              />
              <CardContent>
                <Typography variant="h5">LearnDash Hosting</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/hosting">
                <Button variant="outlined">More</Button>
              </Link>
            </CardActions>
          </Card>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: 350,
            alignItems: 'center',
            padding: 50,
          }}
        >
          <div
            style={{
              width: '48%',
              backgroundImage: `url("${logo}")`,
              backgroundSize: '100% 100%',
              height: '100%',
            }}
          />
          <div style={{ width: '100%', paddingLeft: 50, fontSize: '1.5rem' }}>
            <p>
              Welcome to SysIT Solutions. With our help teachers, students and
              business professionals from all around the world would be able to
              create their own e-learning content without having to worry about
              technical issues like security updates, backups or server
              maintenance.
            </p>
            <p>
              Our mission is to make online education accessible for everyone.
              We do this by offering affordable solutions that are easy to use
              and provide you with all the tools necessary for running your own
              online classroom or a coaching service in just a few clicks!
            </p>
          </div>
        </div>
        <div
          style={{
            padding: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <form style={{ maxWidth: 450, width: '100%' }} onSubmit={this.submit}>
            <h2 style={{ textAlign: 'center' }}>Send Us a Message</h2>
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
            <Button type="submit" style={{ marginTop: 10 }} variant="outlined">
              Send
            </Button>
          </form>
        </div>
      </Template>
    )
  }
}

export default Landing
