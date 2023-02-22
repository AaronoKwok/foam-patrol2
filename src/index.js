import React from "react" 
import ReactDOM from "react-dom"
import {HashRouter as Router} from "react-router-dom" /* use HashRouter instead of BrowserRouter when hosting on a static file server as per: https://github.com/remix-run/react-router/blob/main/FAQ.md#why-doesnt-my-application-work-when-loading-nested-routes*/
import {ContextProvider} from "./Context"

import App from "./App"

ReactDOM.render(
  <ContextProvider> {/* {children} in Context.js is the <Router> <App /> </Router>*/}
    <Router>
      <App />
    </Router>
  </ContextProvider>, 
document.getElementById("root"))