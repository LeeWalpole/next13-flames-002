import NavTop from './NavTop'
import NavBottom from './NavBottom'

export default function Layout({ children }) {
    return (
    <div>
      <div id="app" class="app">
        <h1>Sidebar Left</h1>
        <main class="main">
          <NavTop />
          {children}
          <NavBottom />
        </main>
        <h1>Sidebar Right</h1>
        </div>
    </div>
    )
  }




