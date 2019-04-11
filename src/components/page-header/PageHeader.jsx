import React from 'react'

class PageHeader extends React.Component {
  render () {
    return <header className="c-page-header">
      <h1 id="PageTitle" data-testid="page-header-title" className="u-text--center">{ this.props.title }</h1>
    </header>
  }
}

export default PageHeader
