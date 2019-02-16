import React, { Component } from 'react';
import ActionButton from '../components/homeComponents/actionButtonComponent.js'

class CallToAction extends Component {

  render () {
    return (
      <div>
      <ActionButton text={'Need Services?'} />
      <ActionButton text={'Provide Services?'} />
      </div>
    )
  }
}

export default CallToAction
