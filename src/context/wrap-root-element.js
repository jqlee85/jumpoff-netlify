import React from 'react'
import AppState from './AppState'

const AppContextWrapRootElement = ({ children }) => (
    <AppState>{children}</AppState>
)
export default AppContextWrapRootElement