import React, {Component} from "react"
import  "./HomeSectionFour.scss"
// import LinkButton from '../LinkButton/LinkButton';
// import SmallListPosts from '../SmallListPosts/SmallListPosts';
// import LoadingShape from '../LoadingShape/LoadingShape';
// import { Query } from "react-apollo";
// import gql from "graphql-tag";

// const HOME_POSTS_QUERY = gql`
//   query listView($first: Int!, $after: String!) {
//     posts(first: $first, after: $after where: {categoryId:188}) {
//       edges {
//         node {
//           id
//           title
//           slug
//           date
//           featuredImage {
//             sourceUrl
//           }
//         }
//       }
//     }
//   }
// `;


class HomeSectionFour extends Component {
  
  render(){

    let variables = {
      first: 3,
      after: ''
    }


    return <section className="" id="home-section-four">
      <div className="home-blog-section">
        
        {/* <Query query={HOME_POSTS_QUERY} variables={variables} fetchPolicy="cache-and-network">
          {({ loading, error, data }) => {
            if (loading && !data.posts) return (<div className="large-loader-wrapper"><LoadingShape/></div>);
            if (error) return (<div></div>);
            if (data.posts) return(
              <div>
                <h2>Latest Posts</h2>
                <SmallListPosts data={data.posts.edges || []}/>
                  <div className="jo-more-posts-wrapper">
                    {<LinkButton text="More Posts" to="/blog" />}
                  </div>
              </div>
            )
          }}
        </Query> */}
      </div>
    </section>
  }

}

export default HomeSectionFour
