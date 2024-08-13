/// <reference path="index.d.ts" />
import './console'
import './loadExtendscript'
import './index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement)
