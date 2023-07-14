import './styles/App.scss'

import { useEffect, useState } from 'react'

import { Main } from './components/Main/Main'
import { Menu } from './components/Menu/Menu'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Footer } from './components/Footer/Footer'
import { BtnToTop } from './components/BtnToTop/BtnToTop'

function App() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 1100) {
        setShowBtnUp(true)
      }else {
        setShowBtnUp(false)
      }
    })
  }, [])

  const [showBtnUp, setShowBtnUp] = useState<boolean>(false)

  const scrollToTop = () => {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
  }

  return (
    <>
      <header className="section_header">
        <Menu />
      </header>
      <section className="section_main">
        <Main />
      </section>
      <section className="section_about" id="Sobre">
        <div className="title">
          <h1>Sobre</h1>
        </div>
        <About />
      </section>
      <section className="section_skills" id="Habilidades">
        <div className="title">
          <h1>Habilidades</h1>
        </div>
        <Skills />
      </section>
      <section className="section_portfolio" id="Portifolio">
        <div className="title">
          <h1>Portifólio</h1>
        </div>
        <Portfolio />
      </section>
      <footer className="section_footer">
        <Footer />
      </footer>

      {showBtnUp !== false &&
        <BtnToTop click={scrollToTop} />
      }
    </>
  )
}

export default App
