import React from "react";
import ReactDOM from "react-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { BrowserRouter, Route } from 'react-router-dom'
import Post from './components/Post'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:post_id' component={Post} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App


