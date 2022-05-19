/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import Navigation from './navbar';
import Navigation from './Navbar';
import Footer from './Footer';

function Layout({
  withoutNav, children, fullFooter, ...set
}) {
  return (
    <div>
      {!withoutNav ? <Navigation /> : <div />}
      {children}
      <Footer full={fullFooter} />
    </div>
  );
}

export default Layout;
