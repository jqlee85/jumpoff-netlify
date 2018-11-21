import React from 'react'

const OPTIONS = {passive: false}

class NonPassiveTouchTarget extends React.Component {
  componentDidMount () {
    this.node.addEventListener('touchmove', this.props.onTouchMove, OPTIONS)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.onTouchMove !== this.props.onTouchMove) {
      this.node.removeEventListener('touchmove', prevProps.onTouchMove, OPTIONS)
      this.node.addEventListener('touchmove', this.props.onTouchMove, OPTIONS)
    }
  }

  componentWillUnmount () {
    this.node.removeEventListener('touchmove', this.props.onTouchMove, OPTIONS)
  }

  ref = (node) => {
    this.node = node
  }

  render () {
    const {component: Component, onTouchMove, ...rest} = this.props
    return (
      <Component
        ref={this.ref}
        {...rest}
      />
    )
  }
}

NonPassiveTouchTarget.defaultProps = {
  component: 'div',
  onTouchMove () {}
}

export default NonPassiveTouchTarget
