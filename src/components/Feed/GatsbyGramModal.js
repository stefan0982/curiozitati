import React                              from 'react'
import findIndex                          from 'lodash/findIndex'
import mousetrap                          from 'mousetrap'
import { navigate, StaticQuery, graphql } from 'gatsby'
import Backdrop                           from '@material-ui/core/Backdrop'
import Fade                               from '@material-ui/core/Fade'
import Modal                              from '@material-ui/core/Modal'
import Card                               from '@material-ui/core/Card'
import CardActions                        from '@material-ui/core/CardActions'
import Button                             from '@material-ui/core/Button'
import KeyboardArrowLeft
                                          from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight
                                          from '@material-ui/icons/KeyboardArrowRight'


let posts

class GatsbyGramModal extends React.Component {

  componentDidMount() {
    mousetrap.bind( `left`, () => this.previous() )
    mousetrap.bind( `right`, () => this.next() )
    mousetrap.bind( `spacebar`, () => this.next() )
  }

  componentWillUnmount() {
    mousetrap.unbind( `left` )
    mousetrap.unbind( `right` )
    mousetrap.unbind( `spacebar` )
  }

  findCurrentIndex() {
    let index
    index = findIndex( posts,
      post => post.id === this.props.location.pathname.split( `/` )[1],
    )
    return index
  }

  next(e) {
    if (e) {
      e.stopPropagation()
    }
    const currentIndex = this.findCurrentIndex()
    if (currentIndex || currentIndex === 0) {
      let nextPost
      // Wrap around if at end.
      if (currentIndex + 1 === posts.length) {
        nextPost = posts[0]
      }
      else {
        nextPost = posts[currentIndex + 1]
      }
      navigate( `/${ nextPost.id }/`, { state: { modal: true } } )
    }
  }

  previous(e) {
    if (e) {
      e.stopPropagation()
    }
    const currentIndex = this.findCurrentIndex()
    if (currentIndex || currentIndex === 0) {
      let previousPost
      // Wrap around if at start.
      if (currentIndex === 0) {
        previousPost = posts.slice( -1 )[0]
      }
      else {
        previousPost = posts[currentIndex - 1]
      }
      navigate( `/${ previousPost.id }/`, { state: { modal: true } } )
    }
  }

  state = {
    isOpen: true,
  }

  render() {

    return (
      <StaticQuery
        query={ graphql`
          {
            curiozitati:allContentfulCuriozitati(sort: {fields: createdAt, order: DESC}) {
              edges {
                node {
                  id:createdAt(formatString: "DDMMYYHHmmss", locale: "ro")
                  imagine {
                    fluid {
                      ...GatsbyContentfulFluid
                    }
                    title
                    description
                  }
                  categoria {
                    avatar {
                      fixed(width: 40, height: 40) {
                        ...GatsbyContentfulFixed_tracedSVG
                      }
                    }
                    denumirea
                  }
                }
              }
            }
          }
        ` }
        render={ data => {
          if (!posts) {
            posts = data.curiozitati.edges.map( e => e.node )
          }
          // onClick={() => navigate(`/`, { state: { noScroll: true }})} inchide
          // onClick={e => this.next(e)}  urmatoarea
          // onClick={e => this.previous(e)} precedent
          return (
            <Modal
              style={ {
                display       : 'flex',
                alignItems    : 'center',
                justifyContent: 'center',
              } }
              open={ this.state.isOpen }
              onClose={ () => navigate( `/`, { state: { noScroll: true } } ) }
              closeAfterTransition
              BackdropComponent={ Backdrop }
              BackdropProps={ {
                timeout: 500,
              } }
            >
              <Fade in={ this.state.isOpen }>
                  <Card style={{ maxWidth: '80vh' }}>
                    { this.props.children }
                    <CardActions style={{ justifyContent: 'space-between' }} onClick={ e => this.previous( e ) }>
                      <Button size="small" color="primary">
                        <KeyboardArrowLeft />
                      </Button>
                      <Button size="small" color="primary" onClick={ e => this.next( e ) }>
                        <KeyboardArrowRight />
                      </Button>
                    </CardActions>
                  </Card>
              </Fade>
            </Modal>
          )
        } }
      />
    )
  }
}

export default GatsbyGramModal
