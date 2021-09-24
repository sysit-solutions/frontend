import React from 'react'
import { observer } from 'mobx-react'
import { withTheme, Button, Toolbar, Link } from '@material-ui/core'
import Template from 'templates/default/detail'
import getStyles from './styles'
import store from 'store'

class Page extends React.Component {
  render() {
    console.log(store.resolution)
    const styles = getStyles(this.props.theme.palette, store.resolution)
    return (
      <Template>
        <div style={styles.above}>
          <div style={styles.above.image} />
          <div style={styles.above.text}>
            <h1 style={styles.above.title}>
              No matter what kind of educational content you need, SysIT has the
              tools to make it happen.
            </h1>
            <p style={styles.above.paragraph}>
              We partner with schools, universities, and companies to develop
              interactive, cross-platform content and media specially crafted
              for your learners.
            </p>
            <div style={styles.above.button}>
              <Button variant="contained" color="secondary">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
        <Toolbar style={styles.toolbar}>
          <Link href="#curriculum">
            <Button style={styles.toolbar.button}>curriculum writing</Button>
          </Link>
          <Link href="#video">
            <Button style={styles.toolbar.button}>
              video recording & editing
            </Button>
          </Link>
          <Link href="#sound">
            <Button style={styles.toolbar.button}>
              sound recording & editing
            </Button>
          </Link>
          <Link href="#scorm">
            <Button style={styles.toolbar.button}>SCORM development</Button>
          </Link>
          <Link href="#blog">
            <Button style={styles.toolbar.button}>blog writing</Button>
          </Link>
          <Link href="#h5p">
            <Button style={styles.toolbar.button}>H5P content</Button>
          </Link>
        </Toolbar>
        <div style={styles.curriculum} id="curriculum">
          <div style={styles.curriculum.text}>
            <h2 style={styles.curriculum.title}>Curriculum Writing</h2>
            <p>
              The use of an innovative curriculum in eLearning is an integral
              part of every course creation process. Curriculum writing can be a
              complex undertaking, but when done correctly, it will help to
              ensure that students are empowered to explore their world and
              develop meaningful skills. There are many benefits to writing your
              personalized curriculum crafted to provide students with
              individualized learning opportunities: utilizing the most
              up-to-date research; having autonomy at work and feeling
              accomplished. Developing curricula is not easy, but with our help,
              it should be much easier!
            </p>
            <div style={styles.curriculum.pricing}>
              <Button
                variant="contained"
                color="primary"
                style={styles.curriculum.button}
              >
                View Pricing
              </Button>
            </div>
          </div>
          <div style={styles.curriculum.image} />
        </div>
        <div style={styles.video} id="video">
          <div style={styles.video.image} />
          <div style={styles.video.text}>
            <h2 style={styles.video.title}>Video Recording & Editing</h2>
            <p style={styles.video.paragraph}>
              Do you have an idea for a course but don't want to be in front of
              the camera? We got you covered. With our solution, you can focus
              entirely on creating great content without worrying about being on
              screen yourself. We can provide you with a recording studio and an
              actor to read your script and edit the video with elegant
              graphics, intros, and transitions.
            </p>
            <div style={styles.video.pricing}>
              <Button
                variant="contained"
                color="primary"
                style={styles.video.button}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
        <div style={styles.sound} id="sound">
          <div style={styles.sound.text}>
            <h2 style={styles.sound.title}>Sound Recording & Editing</h2>
            <p style={styles.sound.paragraph}>
              It is essential for educators to take advantage of available
              multimedia tools to engage learners and make courses more
              interactive. Sound effects, voiceovers, music, or dialogue can
              make your course stand out from the rest. But your sound material
              needs to be recorded and edited in a professional studio. This is
              where we step in. With a professional voice actor and a
              cutting-edge studio, your content will be much easier to follow.
              Perfect sound will help students better understand course
              materials and create an environment that mimics real-life
              situations.
            </p>
            <div style={styles.sound.pricing}>
              <Button
                variant="contained"
                color="primary"
                style={styles.sound.button}
              >
                View Pricing
              </Button>
            </div>
          </div>
          <div style={styles.sound.image} />
        </div>
        <div style={styles.scorm} id="scorm">
          <div style={styles.scorm.image} />
          <div style={styles.scorm.text}>
            <h2 style={styles.scorm.title}>SCORM development</h2>
            <p style={styles.scorm.paragraph}>
              The best way to create an engaging online course is by
              implementing SCORM, which stands for Shareable Content Object
              Reference Model. It will ensure that your content will be
              interactive and can be customized for the learners' needs. It also
              makes it more likely that students will have a positive experience
              with your course. Implementing SCORM in your online courses lets
              you specify how the material should appear on different devices,
              so if they are using a mobile device or desktop computer, your
              content can be appropriately optimized for a better learning
              experience.
            </p>
            <div style={styles.scorm.pricing}>
              <Button
                variant="contained"
                color="primary"
                style={styles.scorm.button}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
        <div style={styles.blog} id="blog">
          <div style={styles.blog.text}>
            <h2 style={styles.blog.title}>Blog Writing</h2>
            <p style={styles.blog.paragraph}>
              You may be thinking, "why do I need a blog post for my online
              course?" Blog posts are the perfect way to engage your audience.
              It is a great way to provide additional information and support
              outside of the content in your video lectures. They can also help
              you give feedback on what students find interesting or important.
              You might even use them as mini-lessons that supplement what you
              teach in the class!
            </p>
            <div style={styles.blog.pricing}>
              <Button
                variant="contained"
                color="primary"
                style={styles.blog.button}
              >
                View Pricing
              </Button>
            </div>
          </div>
          <div style={styles.blog.image} />
        </div>
        <div style={styles.h5p} id="h5p">
          <div style={styles.h5p.image} />
          <div style={styles.h5p.text}>
            <h2 style={styles.h5p.title}>H5P content</h2>
            <p style={styles.h5p.paragraph}>
              Every day, educators are trying to find innovative ways to make
              their courses more engaging. One way you can do this is by adding
              H5P content into your course. It offers various media formats that
              will help students stay engaged with the material and allow them
              to have a break from reading through long paragraphs of text that
              they might not otherwise enjoy. If you don't have enough time to
              create a detailed SCORM package, try using H5P. It's much faster
              and doesn't require any authoring tools.
            </p>
            <div style={styles.h5p.pricing}>
              <Button
                variant="contained"
                color="primary"
                style={styles.h5p.button}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </Template>
    )
  }
}

export default withTheme(observer(Page))
