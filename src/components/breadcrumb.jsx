
import "../components/styles/breadcrumb.css"
function Breadcrumb(props) {
    return (
        <div className="container">
        <div className="breadcrumb-wrapper">
          <nav className="woocommerce-breadcrumb">
            <a
              href="https://www.kodamakoifarm.com/"
              className="breadcrumb-link"
            >
              Home
            </a>
            / {props.title}
          </nav>
        </div>
      </div>
    )
}
export default Breadcrumb;