import Navigation from "./navbar";
import Footer from "./Footer";

const Layout = ({children, ...set}) => {
  return (
    <div className="mt-5">
      <Navigation/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout;
