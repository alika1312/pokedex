import PropTypes from "prop-types";
import Navbar from "@components/navbar";

function Layout({ children }) {
  return (
    <div className="div flex flex-col w-full h-full">
      <Navbar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
