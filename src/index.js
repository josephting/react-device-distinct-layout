import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserView, MobileView} from 'react-device-detect'

class Index extends React.Component {
  render() {
    return (
      <div className="main">
        <div>
          <BrowserView><h1 className="browser">Welcome browser</h1></BrowserView>
          <MobileView><h1 className="mobile">Welcome mobile</h1></MobileView>
          <p>The appearance of the title above will change based on the type of device being used to load this page.</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)

export {Index}
