import React           from 'react'
import { makeStyles }  from '@material-ui/core/styles'
import Navbar          from '../components/Navigation/Navbar'
import Footer          from '../components/Navigation/Footer'
import { ScrollToTop } from '../components/Navigation/ScrollToTop'


const useStyles = makeStyles( {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: '1 0 auto'
  }
} )

const Layout = ({children}) => {

  const classes = useStyles()

  return (
    <div className={ classes.layout }>
      <ScrollToTop showBelow={500}/>
      <Navbar />
      <div className={classes.main}>
        { children }
      </div>
      <Footer title={"Cele mai interesante"
                                                 + " curiozități"}/>
    </div>
  )
}

export default Layout
