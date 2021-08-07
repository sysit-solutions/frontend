import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Template from 'templates/default/detail'
import moodle from './img/moodle.png'
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
              fontSize: '3.5rem',
              width: '50%',
              color: '#666',
              marginRight: 50,
              flex: 1,
            }}
          >
            Online courses can be so much more than just video and text. With
            Moodle, you can create engaging lectures that your learners will
            love.
          </p>
          <div
            style={{
              backgroundSize: '100% 100%',
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
            backgroundColor: '#277EAE',
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
              backgroundSize: '100% 100%',
              backgroundImage: `url("${learning}")`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
          }}
        >
          <div style={{ width: '50%', paddingRight: 20 }}>
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
              backgroundSize: '100% 100%',
              backgroundImage:
                'url(data:image/png;base64,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)',
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

export default Moodle
