import React from 'react'
import { Link } from 'react-router-dom'
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
import getStyles from './styles'

class Content extends React.Component {
  render() {
    const styles = getStyles(this.props.theme.palette)
    return (
      <Template style={{}}>
        <div style={styles.above}>
          <p style={styles.above.message}>
            Have you ever been frustrated with a learning experience? Have you
            ever found yourself in this situation: "I'm not sure what the point
            of this lesson is. What are they trying to teach me?" Don't make the
            same mistake with your course.
          </p>
          <div style={styles.above.picture} />
        </div>
        <h1 style={styles.what}>What Is Instructional Design?</h1>
        <div style={styles.what.explanation}>
          Instructional design is a pedagogical field that focuses on creating
          engaging web-based courses and developing the materials to improve
          digital experiences for online learners. Our Instructional Design
          expertise in instructional theory, multimedia production, gamification
          techniques and more - all with one goal: making learning better!
        </div>
        <h1 style={styles.why}>Why do you need Instructional Designer?</h1>
        <div style={styles.why.explanation}>
          If you are an expert in your field or need somebody to help you
          systematize your thoughts, then instructional design might be for you.
          Our instructional designer can help you create lessons that make sense
          and motivate your audience to learn more effectively.
        </div>
        <div style={styles.learn}>
          <div style={styles.learn.picture} />
          <div style={styles.learn.text}>
            <p style={styles.learn.paragraph}>
              It is all about making sure your students can get what they need
              while also having fun with it! We are here to help you understand
              the process of personalized learning needs. The most important
              goal for us is to make your learners active participants in their
              learning process. We will use various tools such as simulations,
              videos, demonstrations, games, and worksheets to engage learners
              based on their individual needs and goals. In this way, learners
              can better achieve success with any given task or objective set
              before them and you will get another satisfied client.
            </p>
          </div>
        </div>
        <h1 style={styles.help.title}>How can we help?</h1>
        <div style={styles.help.content}>
          <div style={styles.help.data}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Initial Course Development Phase</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    Identifying your audience and their level of expertise
                  </li>
                  <li>Claryfying your goals and objetives</li>
                  <li>Writing course goals and objectives</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Curriculum Development</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>Creating course outline and hirerarhy</li>
                  <li>Specifying Modules and Lessons</li>
                  <li>Creating course content strategy</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Content Development Phase</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>Writing lessons and scripts for videos</li>
                  <li>Designing visual elements</li>
                  <li>Recording & editing course videos and audio</li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Web Administration Phase</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>Choosing the right platform for you</li>
                  <li>Creating and uploading courses to LMS</li>
                  <li>Creating user profiles and asigning them to courses</li>
                </ul>
              </AccordionDetails>
            </Accordion>
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

export default withTheme(Content)
