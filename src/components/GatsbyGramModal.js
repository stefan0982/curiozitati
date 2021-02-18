import React                              from 'react'
import findIndex                          from 'lodash/findIndex'
import mousetrap                          from 'mousetrap'
import { navigate, StaticQuery, graphql } from 'gatsby'
import TransitionsModal                   from './Modal'
import PostModalPage                      from './Feed/PostModalPage'

let posts

class GatsbyGramModal
  extends React.Component {

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

  render() {
    return (
      <StaticQuery
        query={ graphql`
          {
            curiozitati:allContentfulCuriozitati {
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
          // console.log(posts)
          return (
            <TransitionsModal
              onClose={ () => navigate( `/`, { state: { noScroll: true } } ) }
            >
              <>
                <div
                  onClick={() => navigate(`/`, { state: { noScroll: true }})}
                  css={{
                    display: `flex`,
                    position: `relative`,
                    height: `100vh`,
                  }}
                >
                  <div
                    css={{
                      display: `flex`,
                      alignItems: `center`,
                      justifyItems: `center`,
                      maxWidth: 960,
                      // maxWidth: rhythm(40.25), // Gets it right around Instagram's maxWidth.
                      margin: `auto`,
                      width: `100%`,
                    }}
                  >
                    <div
                      css={{
                        cursor: `pointer`,
                        fontSize: `50px`,
                        color: `rgba(255,255,255,0.7)`,
                        userSelect: `none`,
                      }}
                      onClick={e => this.previous(e)}
                    >left</div>
                    {this.props.children}
                    <div
                      data-testid="next-post"
                      css={{
                        cursor: `pointer`,
                        fontSize: `50px`,
                        color: `rgba(255,255,255,0.7)`,
                        userSelect: `none`,
                      }}
                      onClick={e => this.next(e)}
                    >right</div>
                  </div>
                  <div
                    onClick={() => navigate(`/`, { state: { noScroll: true }})}
                    css={{
                      cursor: `pointer`,
                      color: `rgba(255,255,255,0.8)`,
                      fontSize: `30px`,
                      position: `absolute`,
                      top: 10,
                      right: 10,
                    }}
                  >close</div>
                </div>
                {/*<PostModalPage { ...data.curiozitati } next={ this.next } />*/}
                {/*<div onClick={ e => this.next(e) }>next</div>*/}
                {/*<div onClick={ e => this.previous(e) }>prev</div>*/}
              </>
            </TransitionsModal>
          )
        } }
      />
    )
  }
}

export default GatsbyGramModal
