import './styles/App.scss'

import { Main } from './components/Main/Main'
import { Menu } from './components/Menu/Menu'

function App() {
  return (
    <>
      <header className="section_header">
        <Menu />
      </header>
      <section className="section_main">
        <Main />
      </section>
      <section className="section_sobre" id="Sobre">
        Sessão sobre
      </section>
      <section id="Habilidades" style={{paddingTop: '400px'}}>
        Sessão habilidades
      </section>
      <section id="Portifolio" style={{paddingTop: '400px'}}>
        Sessão portifólio
      </section>
    </>
  )
}

export default App
