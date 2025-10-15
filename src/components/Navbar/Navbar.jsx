import Logo from "../../assets/logo.svg"

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light primary-bg-color" style={{ height: "60px" }} >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img
              src={Logo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            /> */}
            <img src={Logo} alt="Logo" className="w-25" />
          </a>
        </div>
      </nav>
    </>
  );
}
