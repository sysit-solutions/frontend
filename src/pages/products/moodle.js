import React from 'react'
import { Link } from 'react-router-dom'
import { Button, withTheme } from '@material-ui/core'
import Template from 'templates/default/detail'
import moodle from './img/moodle.png'
import moodle2 from './img/moodle2.png'
import learning from './img/learning.png'

class Moodle extends React.Component {
  render() {
    return (
      <Template style={{}}>
        <div
          style={{
            padding: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
          }}
        >
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              width: '50%',
              color: '#666',
              marginRight: 50,
              flex: 1,
              padding: 30,
            }}
          >
            Online courses can be so much more than just video and text. With
            Moodle, you can create engaging lectures that your learners will
            love.
          </p>
          <div
            style={{
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: 500,
              width: '50%',
              backgroundImage: `url("${moodle}")`,
              flex: 1,
            }}
          />
        </div>
        <h1 style={{ textAlign: 'center', color: '#666', fontSize: '4rem' }}>
          What is Moodle?
        </h1>
        <div
          style={{
            backgroundColor: this.props.theme.palette.primary.main,
            color: '#ffffff',
            fontSize: '2rem',
            padding: 50,
            paddingTop: 100,
            paddingBottom: 100,
          }}
        >
          Moodle has been the world's most popular open-source learning
          management system since 2005 because it is easy to use, affordable and
          adaptable to any educational environment. Today, Moodle has grown into
          one of the most popular LMSs in the world with over 18 million users
          and 15 thousand schools using it every day.
        </div>
        <h1 style={{ textAlign: 'center', color: '#666', fontSize: '4rem' }}>
          How to make interactive Moodle courses?
        </h1>
        <div
          style={{
            padding: 50,
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            height: '20vw',
          }}
        >
          <div
            style={{
              width: '50%',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url("${learning}")`,
            }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '50%',
              paddingLeft: 20,
            }}
          >
            <p>
              Many educators are looking for new ways to engage their students
              and make learning more interactive. But creating fun courses
              shouldn't be that difficult. That's why we chose to add H5P
              plug-in to all of our Moodle installations. We believe that H5P
              can be a valuable tool in your course development. This
              open-source project contains a diverse group of tools that allow
              you to create interactive courses with no programming skills
              required, giving teachers or instructional designers the ability
              to integrate multimedia content into their lessons easily and
              without additional costs.
            </p>
          </div>
        </div>
        <h1 style={{ textAlign: 'center', color: '#666', fontSize: '4rem' }}>
          How can we help?
        </h1>
        <div
          style={{
            padding: 50,
            display: 'flex',
            alignItems: 'strertch',
            justifyContent: 'center',
            height: '20vw',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '50%',
              paddingLeft: 20,
            }}
          >
            <p>
              If Moodle sounds like something you might be interested in, but
              want help getting started with the whole process, let us know. We
              are here to help! We can take care of everything from setting up
              your account to customizing it so that it matches your specific
              needs. Our team of Moodle experts can also walk you through the
              process from start to finish so your business or school gets
              exactly what they need - at an affordable price. If you want to
              learn more about our offers, check out our prices and see which
              one best suits your needs.
            </p>
          </div>
          <div
            style={{
              width: '50%',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundImage: `url("${moodle2}")`,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link to="/pricing">
            <Button
              style={{
                height: 50,
                width: 100,
                marginBottom: 20,
                fontWeight: 'bold',
              }}
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

export default withTheme(Moodle)
