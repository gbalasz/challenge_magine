import React from 'react'
import { connect } from 'react-redux'
import { Loading } from '../loading/Loading'
import { Player } from '../player/Player'
import actions from '../../store/actions'

class StageComponent extends React.Component {
  render () {
    return <section className="c-stage">
      {this.renderContent()}
    </section>
  }

  renderContent () {
    if (!this.props.show.manifest) {
      return this.renderLoading()
    }

    const playerProps = {
      id: this.props.show.idMovie,
      src: this.props.show.manifest,
      play: this.props.show.videoPlayState,
      fullScreen: this.props.show.fullScreenState,
      onTimeUpdate: (currentTime) => {
        const deltaTime = this.props.show.videoDuration - currentTime

        if (deltaTime < 1 / 1000) {
          return
        }

        this.props.updateTime(currentTime)
      }
    }

    if (this.props.show.videoDuration === this.props.show.videoPosition) {
      playerProps.play = false
    }

    if (this.props.show.videoPosition) {
      playerProps.currentTime = this.props.show.videoPosition
    }

    return (<div>
      <Player {...playerProps} />
    </div>)
  }

  renderLoading () {
    return (<div className="c-stage_loader">
      <Loading />
    </div>)
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
    stop: () => dispatch(showActions.videoFinished())
  }
}

export const Stage = connect(mapStateToProps, mapDispatchToProps)(StageComponent)
