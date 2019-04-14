import { showTypes } from '../types'

const initialState = {
  idMovie: null,
  manifest: null,
  videoDuration: null,
  videoPosition: null,
  videoPlayState: false,
  fullScreenState: false
}

export const show = (state = initialState, action) => {
  switch (action.type) {
    case showTypes.SHOW_SELECT_MOVIE:
      return {
        ...initialState,
        idMovie: state.idMovie
      }

    case showTypes.SHOW_MANIFEST_RECEIVED:
      return {
        ...state,
        videoPosition: initialState.videoPosition,
        videoDuration: initialState.videoDuration,
        manifest: action.manifest
      }

    case showTypes.SHOW_VIDEO_DURATION:
      return {
        ...state,
        videoDuration: action.duration
      }

    case showTypes.SHOW_VIDEO_POSITION:
      return {
        ...state,
        videoPosition: state.videoPosition === -1 ? -1 : action.position
      }

    case showTypes.SHOW_VIDEO_STATE_TOGGLE:
      return {
        ...state,
        videoPlayState: !state.videoPlayState,
        videoPosition: state.videoPlayState ? state.videoPosition : 0
      }

    case showTypes.SHOW_VIDEO_FINISHED:
      return {
        ...state,
        videoPlayState: false,
        videoPosition: 0
      }

    default:
      return state
  }
}
