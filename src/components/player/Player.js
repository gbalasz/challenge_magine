import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import shaka from 'shaka-player'
import { PlayerControls } from './PlayerControls'
import actions from '../../store/actions'

let syncTimeout = null

class PlayerComponent extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    currentTime: PropTypes.number,
    onLoadedMetaData: PropTypes.func, // used to get duration
    onTimeUpdate: PropTypes.func, // used to get current time
    play: PropTypes.bool
  }

  render () {
    const videoProps = {
      ref: 'video',
      width: 640,
      poster: '//shaka-player-demo.appspot.com/assets/poster.jpg'
    }

    if (this.props.play) {
      videoProps.autoPlay = true
    }

    return <div className="c-video">
      <video {...videoProps}></video>
      <input
        type="hidden"
        ref="progress"
        value={this.props.currentTime}
        onChange={this.props.onTimeUpdate}
      />
      <PlayerControls />
    </div>
  }

  componentDidMount () {
    shaka.polyfill.installAll()

    if (syncTimeout !== null) {
      stopSyncing()
    }

    if (shaka.Player.isBrowserSupported()) {
      this.init()
    } else {
      console.error('Browser not supported!')
    }
  }

  componentDidUpdate () {
    const elVideo = this.refs.video

    this.updatePlayState()

    if (typeof this.props.currentTime === 'undefined') {
      return
    }

    if (Math.round(elVideo.currentTime) !== Math.round(this.props.currentTime)) {
      elVideo.currentTime = this.props.currentTime
    }
  }

  init () {
    const self = this
    const elVideo = this.refs.video
    var player = new shaka.Player(elVideo)

    player.addEventListener('error', this.onErrorEvent)
    elVideo.addEventListener('ended', () => {
      this.props.videoFinished()
    })
    player.load(this.props.src)
      .then(() => {
        self.props.setVideoDuration(elVideo.duration)
      }).catch(this.onError)
  }

  updatePlayState () {
    const self = this
    const elVideo = this.refs.video

    if (this.props.play && elVideo.paused) {
      elVideo.play()
      syncTimeout = window.setInterval(() => {
        if (self.props.onTimeUpdate) {
          self.props.onTimeUpdate(elVideo.currentTime)
        }
      }, 10)
    }

    if (!this.props.play && !elVideo.paused) {
      elVideo.pause()
      stopSyncing()
    }
  }

  updateFullScreenState () {
    const elVideo = this.refs.video
    const fullScreenState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen

    if (this.props.fullScreen && !fullScreenState) {
      if (elVideo.requestFullscreen) {
        elVideo.requestFullscreen()
      } else if (elVideo.mozRequestFullScreen) {
        elVideo.mozRequestFullScreen()
      } else if (elVideo.webkitRequestFullscreen) {
        elVideo.webkitRequestFullscreen()
      }
    }

    if (!this.props.fullScreen && fullScreenState) {
      document.exitFullscreen()
    }
  }

  onError (e) {
    console.log(e)
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
    setVideoDuration: (duration) => dispatch(showActions.videoDuration(duration)),
    updateTime: (time) => dispatch(showActions.setVideoPosition(time)),
    videoFinished: () => {
      stopSyncing()
      dispatch(showActions.videoFinished())
    }
  }
}

export const Player = connect(mapStateToProps, mapDispatchToProps)(PlayerComponent)

function stopSyncing () {
  window.clearInterval(syncTimeout)
  syncTimeout = null
}
