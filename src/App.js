import React from 'react'
// import { connect } from 'react-redux'
// import { stores } from './stores'

class App extends React.Component {
  render () {
    return <div className="wrapper">
      <header>
        <h1>Gabi Balasz - Challenge for Magine</h1>
      </header>
      <section className="container">
        {this.renderNavigation()}
      </section>
      <footer></footer>
    </div>
  }

  renderNavigation () {
    return <nav>
      <a href="javascript:void(0);">Link</a>
    </nav>
  }
}

export default App
