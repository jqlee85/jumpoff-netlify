/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import Layout from './src/components/Layout'
import ApolloWrapRootElement from './src/apollo/wrap-root-element'
import AppContextWrapRootElement from './src/context/wrap-root-element'

export const wrapRootElement = ({ element }) => {
    return <AppContextWrapRootElement>
        <ApolloWrapRootElement element={element}/>
    </AppContextWrapRootElement> 
}

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}