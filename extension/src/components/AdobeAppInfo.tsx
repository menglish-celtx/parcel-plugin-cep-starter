import { getApplicationID, } from 'cep-interface'
import * as React from 'react'
import { useExtension } from '../hooks/useExtension'

const debugPorts = JSON.parse(process.env.DEBUG_PORTS)
const debugPort = debugPorts[getApplicationID()]

export default function AdobeAppInfo() {
  const { isInCEPEnvironment, version, extensionPath, openURLInDefaultBrowser } = useExtension();

  return (
    <div className="AdobeAppInfo">
      <h3>Adobe App Info</h3>
      {!isInCEPEnvironment && (<p>Not in CEP environment.</p>)}
      <ul>
        <li>Id: {process.env.BUNDLE_ID}</li>
        <li>Version: {version}</li>
        <li>Extension Path: {extensionPath}</li>
      </ul>
      <button onClick={() => openURLInDefaultBrowser(`http://localhost:${debugPort}`)}>Open debugger</button>
    </div>
  )
}