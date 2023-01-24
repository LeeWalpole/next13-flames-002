import NavBottom from './NavBottom'
import NavLeft from './NavLeft'

export default function Layout({ children }) {
    return (
    <div>
      <div class="app">
        <NavLeft />
        <div class="main">
          {children}
          <NavBottom />
        </div>
      </div>
      <div id="modals"></div>
    </div>
    )
  }
