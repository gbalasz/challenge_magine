import React from 'react'
import { MainNav, PageHeader } from '../../components'

export default props => (
  <div className="wrapper">
    <PageHeader title="Gabi Balasz - Challenge for Magine" />
    <section className="container">
      <MainNav type="vertical" />
    </section>
    <footer className="u-text--center">Please select a movie</footer>
  </div>
)
