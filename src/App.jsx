import { useState } from 'react'

import {CustomerReviews, Footer, Hero, Services, Subscribe, SpecialOffer, PopularProducts, SuperQuality} from './sections'
import Nav from './components/Nav'

function App() {


  return (
    <main className='relative text-slate-700'>
        <Nav/>
        <section className="xl:p-10 p-10">
            <Hero/>
        </section>
        <section className="p-10">
            <PopularProducts/>
        </section>
        <section className="p-10">
            <SuperQuality/>
        </section>
        <section className="p-10">
            <Services/>
        </section>
        <section className="p-10">
            <SpecialOffer/>
        </section>
        <section className="p-10">
            <CustomerReviews/>
        </section>
        <section className="p-10">
            <Subscribe/>
        </section>
        <footer className="p-10 bg-slate-500">
            <Footer/>
        </footer>
    </main>
  )
}

export default App
