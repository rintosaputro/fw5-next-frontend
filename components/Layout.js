import Navigation from "./navbar";
import Footer from "./Footer";

const Layout = ({withoutNav, children, fullFooter, ...set}) => {
  return (
    <div>
      {!withoutNav ? <Navigation/> : <></>}
      {children}
      <Footer full={fullFooter}/>
    </div>
  )
}

export default Layout;
