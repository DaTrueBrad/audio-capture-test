import React from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'

const Recorder = () => {
  const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({audio: true})
  console.log(mediaBlobUrl)
  return (
    <div>
      <h3>Status: <span className='colored-text'>{status}</span></h3>
      <button onClick={status !== 'recording' ? startRecording : stopRecording}>{status !== 'recording' ? "Record" : "Stop"}</button>
      <a href={mediaBlobUrl} download>download</a>
    </div>
  )
}

export default Recorder