import React, { useRef } from 'react'
import Seo from '../components/Seo'
import NotFound from '../components/NotFound'

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <NotFound/>
  </>
)

export default NotFoundPage
