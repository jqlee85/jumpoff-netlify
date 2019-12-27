import React, {useState, useEffect} from 'react'
import {graphql} from 'gatsby'
import Seo from '../components/Seo'
import LinkButton from '../components/LinkButton'
import ListPosts from '../components/ListPosts'
import LoadingShape from '../components/LoadingShape'
// import { useQuery } from '@apollo/react-hooks'
// import gql from 'graphql-tag'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

const Blog = ({data}) => {
    
  // TODO Get page query variable

    // const [queryVariables, setQueryVariables] = useState({
    //     first: 5,
    //     after: ''
    // })

    console.log('data',data)


    const [posts,setPosts] = useState(data.latestPosts.posts)
    const [postsStatus,setPostsStatus] = useState('loaded')

    useEffect(()=>{
        setPosts(data.latestPosts.posts)
    },[data.latestPosts])

    console.log('posts',posts)
        
    return <StyledBlog className="blog latest-posts">
        <Seo title="Blog" />
        <div className="jo-row">
            <div className="jo-content">
            <h1 className="standard-title">Latest Posts</h1>
            
                <>
                <ListPosts posts={posts.edges || []}/>
                { posts?.pageInfo?.hasNextPage && 
                    <div className="jo-more-posts-wrapper">
                    { postsStatus === 'loading' && <div className="large-loader-wrapper"><LoadingShape/></div>}
                    { postsStatus !== 'loading' && <LinkButton 
                        transparent={true} 
                        linkType="custom" 
                        text="More Posts" 
                        onClick={() =>
                            console.log('clicked more posts')
                            // fetchMore({
                            //     query: LATEST_POSTS_QUERY,
                            //     variables: {
                            //     first: 5,
                            //     after: data.posts.pageInfo.endCursor
                            //     },
                            //     updateQuery: (prev, { fetchMoreResult }) => {
                            //     fetchMoreResult.posts.edges.unshift(...prev.posts.edges);
                            //     if (!fetchMoreResult) return prev;
                            //     return fetchMoreResult
                            //     }
                            // })
                        }
                    />}
                    </div>
                }
                </>
            
            
            {/* <Query query={LATEST_POSTS_QUERY} variables={queryVariables} fetchPolicy="cache-and-network">
                {({ loading, error, data, fetchMore }) => {
                if (loading && !data.posts) return (<div className="large-loader-wrapper"><LoadingShape/></div>);
                if (error) return (<p>Error Loading Posts</p>);
                if (data.posts) return(
                    <div>
                    <ListPosts data={data.posts.edges || []}/>
                    {data.posts.pageInfo.hasNextPage && 
                        <div className="jo-more-posts-wrapper">
                        {loading && <div className="large-loader-wrapper"><LoadingShape/></div>}
                        {!loading && <LinkButton 
                            transparent={true} 
                            linkType="custom" 
                            text="More Posts" 
                            onClick={() =>
                            fetchMore({
                                query: LATEST_POSTS_QUERY,
                                variables: {
                                first: 5,
                                after: data.posts.pageInfo.endCursor
                                },
                                updateQuery: (prev, { fetchMoreResult }) => {
                                fetchMoreResult.posts.edges.unshift(...prev.posts.edges);
                                if (!fetchMoreResult) return prev;
                                return fetchMoreResult
                                }
                            })
                            }
                        />}
                        </div>
                    }
                    </div>
                )
                }}
            </Query> */}
            </div>
        </div>
    </StyledBlog>
}

//TODO: pass page query variable into query
export const query = graphql`
    query blogPageQuery {
        latestPosts: wpgraphql {
            posts(
                first: 3, 
                where: {
                    orderby: {field: DATE, order: DESC},
                    categoryId: 188
                }
            ) {
                edges {
                    node {
                        id
                        title
                        slug
                        date
                        excerpt
                        featuredImage {
                            sourceUrl
                        }
                    }
                }
                pageInfo {
                    hasNextPage
                    endCursor
                }
                
            }
        }
    }
`

// const LATEST_POSTS_QUERY = gql`
//   query listView($first: Int!, $after: String!) {
//     wpgraphql {
//      posts(first: $first, after: $after where: {categoryId:188}) {
//       pageInfo {
//         hasNextPageg
//         endCursor
//       }
//       edges {
//         node {
//           id
//           title
//           slug
//           date
//           excerpt
//           featuredImage {
//             sourceUrl
//           }
//         }
//       }
//      }
//     }
//   }
// `;

// class Blog extends Component {

//   render(){
    
//     let variables = {
//       first: 5,
//       after: ''
//     }

//     return (
//     <section className="blog latest-posts">
//       <div className="jo-row">
//         <div className="jo-content">
//           <h1 className="standard-title">Latest Posts</h1>
//           <Query query={LATEST_POSTS_QUERY} variables={variables} fetchPolicy="cache-and-network">
//             {({ loading, error, data, fetchMore }) => {
//               if (loading && !data.posts) return (<div className="large-loader-wrapper"><LoadingShape/></div>);
//               if (error) return (<p>Error Loading Posts</p>);
//               if (data.posts) return(
//                 <div>
//                   <ListPosts data={data.posts.edges || []}/>
//                   {data.posts.pageInfo.hasNextPage && 
//                     <div className="jo-more-posts-wrapper">
//                       {loading && <div className="large-loader-wrapper"><LoadingShape/></div>}
//                       {!loading && <LinkButton 
//                         transparent={true} 
//                         linkType="custom" 
//                         text="More Posts" 
//                         onClick={() =>
//                           fetchMore({
//                             query: LATEST_POSTS_QUERY,
//                             variables: {
//                               first: 5,
//                               after: data.posts.pageInfo.endCursor
//                             },
//                             updateQuery: (prev, { fetchMoreResult }) => {
//                               fetchMoreResult.posts.edges.unshift(...prev.posts.edges);
//                               if (!fetchMoreResult) return prev;
//                               return fetchMoreResult
//                             }
//                           })
//                         }
//                       />}
//                     </div>
//                   }
//                 </div>
//               )
//             }}
//           </Query>
//         </div>
//       </div>
//     </section>);
//   }
// }

export default Blog

const StyledBlog = styled.section`

    h1 {
        text-align: center;
    }

    .jo-content {
        display: block;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    
    .jo-blog-loading {
        font-size: 2.5em;;
        -webkit-animation: white-rainbow 6s infinite;
        -ms-animation: white-rainbow 6s infinite;
        -o-animation: white-rainbow 6s infinite;
        animation: white-rainbow 6s infinite;
        
        @media ${screen.sm} {
            font-size: 5em;
        }
    }
    
    .jo-more-posts-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 3em 0 6em;
    }
    
`