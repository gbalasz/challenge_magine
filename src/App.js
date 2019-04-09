import React from 'react'
import { MainNav, PageHeader } from './components'
// import { connect } from 'react-redux'
// import { stores } from './stores'

class App extends React.Component {
  render () {
    return <div className="wrapper">
      <PageHeader title="Gabi Balasz - Challenge for Magine" />
      <section className="container">
        <MainNav />
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
