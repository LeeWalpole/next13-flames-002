import './globals.css'
import './globals.css'
import SideLeft from './SideLeft'
import Footer from './Footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <div>
<div id="app" class="app">
    <SideLeft />
  {children}
    {/* <Footer /> */}
</div>
<div id="modals"></div>
</div>
      </body>
    </html>
  )
}



