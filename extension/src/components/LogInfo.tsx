import * as React from 'react'
import { useLogger } from "../hooks/useLogger";

export default function LogInfo() {
  const { openLog, logMessage, logPath } = useLogger();

  return (
    <div className="LogInfo">
      <h3>Log Info</h3>
      <ul>
        <li>Path: {logPath}</li>
      </ul>
      {/* {readFileSync('./dist/.debug').toString()} */}
      {process.platform == 'darwin' && (
        <button onClick={openLog}>Open Log</button>
      )}
      <button onClick={logMessage.bind(this, 'info')}>Log Info</button>
      <button onClick={logMessage.bind(this, 'error')}>Log Error</button>
    </div>
  )
}