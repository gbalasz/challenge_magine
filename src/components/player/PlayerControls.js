import React from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import actions from '../../store/actions'
import PlayerTime from './PlayerTime'
import { Loading } from '../loading/Loading'

const svgs = {
  play: (<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>),

  pause: (<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>)

}

class PlayerControlsComponent extends React.Component {
  render () {
    const duration = this.props.show.videoDuration === null ? 0 : this.props.show.videoDuration

    if (duration === 0) {
      return <div className="c-controls">
        <span></span>
        <div className="u-text--center"><Loading /></div>
      </div>
    }

    const position = this.props.show.videoPosition === null ? 0 : this.props.show.videoPosition

    return <div className="c-controls">
      <div className="c-controls__button">
        <i style={{ display: 'inline-block', width: '2rem' }} onClick={this.props.togglePlayState}>
          {svgs[this.props.show.videoPlayState ? 'pause' : 'play']}
        </i>
      </div>

      <div className="c-controls__slider">
        <span className="c-controls__duration u-text--center">
          <PlayerTime value={position} />
        </span>
        <Slider
          min={0}
          max={duration}
          step={0.1}
          defaultValue={0}
          value={position}
          onChange={this.props.sliderChanged} />
        <span className="c-controls__duration u-text--center">
          <PlayerTime value={duration} />
        </span>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  const { show } = state

  return {
    show
  }
}

const mapDispatchToProps = (dispatch) => {
  const showActions = actions.showActions

  return {
    sliderChanged: position => dispatch(showActions.setVideoPosition(position)),
    togglePlayState: () => dispatch(showActions.toggleVideoPlayState())
  }
}

export const PlayerControls = connect(mapStateToProps, mapDispatchToProps)(PlayerControlsComponent)
