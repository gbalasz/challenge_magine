import React from 'react'

class PageHeader extends React.Component {
  render () {
    return <header>
      <h1 data-testid="page-header-title">{ this.props.title }</h1>
    </header>
  }
}

export default PageHeader
