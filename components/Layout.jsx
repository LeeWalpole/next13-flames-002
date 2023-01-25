import NavTop from './NavTop'
import NavBottom from './NavBottom'
import NavLeft from './NavLeft'


export default function Layout({ children }) {
    return (
    <div>
      <div className="app">
        <NavLeft />
        <NavTop />
        <div className="main">
          {children}
          <NavBottom />
        </div>
      </div>
      <div id="modals"></div>
    </div>
    )
  }