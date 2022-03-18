import Navigation from "./navbar";
import Footer from "./Footer";

const Layout = ({withoutNav, children, ...set}) => {
  return (
    <div>
      {!withoutNav ? <Navigation/> : <></>}
      {children}
      <Footer/>
    </div>
  )
}

export default Layout;
