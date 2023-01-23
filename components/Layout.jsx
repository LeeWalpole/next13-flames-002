import NavTop from './NavTop'
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



  /*
  
    <div>
    <div id="app" class="app">
      <SideLeft />
      <div class="main">
        <slot />
        <NavBottom />
      </div>
    </div>
    <div id="modals"></div>
  </div>

  */








/*
      <div><NavTop />
          <div id="app" class="app">
            <NavLeft />
            <div class="main">
          
              <NavBottom />
            </div>
          </div>
          <NavBottom />
        <div id="modals"></div>
      </div>
*/



