import React from 'react'
import { Link } from 'react-router-dom'
import { Button, withTheme } from '@material-ui/core'
import Template from 'templates/default/detail'
import getStyles from './styles'

class LearnDash extends React.Component {
  render() {
    const styles = getStyles(this.props.theme.palette)
    return (
      <Template style={{}}>
        <div style={styles.above}>
          <p style={styles.above.message}>
            Online courses can be so much more than just video and text. With
            LearnDash, you can create engaging lectures that your learners will
            love.
          </p>
          <div style={styles.above.picture} />
        </div>
        <h1 style={styles.what}>What is LearnDash?</h1>
        <div style={styles.what.explanation}>
          LearnDash has been the world's most popular open-source learning
          management system since 2005 because it is easy to use, affordable and
          adaptable to any educational environment. Today, LearnDash has grown
          into one of the most popular LMSs in the world with over 18 million
          users and 15 thousand schools using it every day.
        </div>
        <h1 style={styles.how}>How to make interactive LearnDash courses?</h1>
        <div style={styles.how.explanation}>
          <p>
            Many educators are looking for new ways to engage their students and
            make learning more interactive. But creating fun courses shouldn't
            be that difficult. That's why we chose to add H5P plug-in to all of
            our LearnDash installations. We believe that H5P can be a valuable
            tool in your course development. This open-source project contains a
            diverse group of tools that allow you to create interactive courses
            with no programming skills required, giving teachers or
            instructional designers the ability to integrate multimedia content
            into their lessons easily and without additional costs.
          </p>
        </div>
        <h1 style={styles.help.title}>How can we help?</h1>
        <div style={styles.help.content}>
          <div style={styles.help.inner}>
            <p>
              If LearnDash sounds like something you might be interested in, but
              want help getting started with the whole process, let us know. We
              are here to help! We can take care of everything from setting up
              your account to customizing it so that it matches your specific
              needs. Our team of LearnDash experts can also walk you through the
              process from start to finish so your business or school gets
              exactly what they need - at an affordable price. If you want to
              learn more about our offers, check out our prices and see which
              one best suits your needs.
            </p>
          </div>
          <div style={styles.help.picture} />
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

export default withTheme(LearnDash)
