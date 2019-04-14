import { showTypes } from '../types'

export const selectMovie = idMovie => {
  const manifestQuery = `{
    movie (id: "${idMovie}") {
      manifest
    }
  }`

  return async dispatch => {
    dispatch({ type: showTypes.SHOW_SELECT_MOVIE, idMovie })

    try {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ query: manifestQuery })
      })

      const responseData = await response.json()

      setTimeout(() => dispatch(manifestRecieved(responseData.data.movie.manifest)), 500)
    } catch (e) {
      console.log(e)
    }
  }
}

export const videoDuration = duration => {
  return { type: showTypes.SHOW_VIDEO_DURATION, duration }
}

export const setVideoPosition = position => {
  return { type: showTypes.SHOW_VIDEO_POSITION, position }
}

export const toggleVideoPlayState = () => {
  return { type: showTypes.SHOW_VIDEO_STATE_TOGGLE }
}

export const videoFinished = () => {
  return { type: showTypes.SHOW_VIDEO_FINISHED }
}

function manifestRecieved (manifest) {
  return { type: showTypes.SHOW_MANIFEST_RECEIVED, manifest }
}
