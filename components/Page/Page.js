import React from 'react'
import SectionBody from './SectionBody'
import PageHeader from '../atoms/PageHeader'
import SectionHead from './SectionHead'

function Page(props) {
  return (
    <main id="main" role="main">
      <PageHeader title="Projects" />
      <section className="box-shadow [ bg-white text-1-5 ]">
        <SectionHead>{props.head}</SectionHead>
        <SectionBody elems={props.body} />
      </section>
    </main>
  )
}

export default Page
