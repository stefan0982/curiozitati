import React                   from 'react';
import { graphql }             from 'gatsby'
import PostCard                from '../components/Feed/PostCard'
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import GatsbyGramModal         from '../components/GatsbyGramModal'
import PostModalPage           from '../components/Feed/PostModalPage'
import PostDetail              from '../components/Postdetail'

export default function PostTemplate({location, data}) {

  return (
    <ModalRoutingContext.Consumer>
      {({ modal }) => {
        return (
          modal ? (
            <GatsbyGramModal
              location={ location }
            >
              <PostDetail post={data}/>
            </GatsbyGramModal>
          ) : (
            <PostCard
              img={ data.info.imagine }
              title={ data.info.imagine.title }
              description={ data.info.imagine.description }
              avatar={ data.info.categoria[0].avatar }
              categoria={ data.info.categoria[0].denumirea }
              data={ data.info.data }
              key={ data.info.linkId }
            />
          )
        )
      }}
    </ModalRoutingContext.Consumer>

  );
}


export const query = graphql`
  query($id: String!) {
    info:contentfulCuriozitati(id: {eq: $id}) {
        id
        data:createdAt
        linkId:createdAt(formatString: "DDMMYYHHmmss", locale: "ro")
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
`

