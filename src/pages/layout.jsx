import Footer from "@components/Footer";
import Navbar from "@components/navbar";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div className="div flex flex-col w-full h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
