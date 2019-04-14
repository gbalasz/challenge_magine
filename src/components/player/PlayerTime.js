import React from 'react'
import PropTypes from 'prop-types'

export default class PlayerTime extends React.Component {
  static propTypes = {
    value: PropTypes.number
  }

  render () {
    let displayValue = ''

    if (this.props.value) {
      const seconds = Math.round(this.props.value % 60)
      let minutes = this.props.value > 60 ? Math.round(this.props.value / 60) : 0
      let hours = 0

      if (minutes > 60) {
        hours = Math.round(minutes / 60)
        minutes = Math.round(minutes % 60)
      }

      if (hours !== 0) {
        displayValue = `${formatUnit(hours)}:`
      }

      displayValue += `${formatUnit(minutes)}:${formatUnit(seconds)}`
    } else {
      displayValue = '00:00'
    }

    return <span className="c-player__time">{ displayValue }</span>
  }
}

function formatUnit (unit) {
  return unit.toString().length < 2 ? '0' + unit : unit
}
