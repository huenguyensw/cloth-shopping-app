import Footer from '../Footer' 
import Header from '../Header'

const Layout: React.FC<{children: any}> = ({children}) => {
    
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;