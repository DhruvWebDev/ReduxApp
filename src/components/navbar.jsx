import { useSelector } from "react-redux"

export default function Navbar() {
    const state = useSelector(state => state.amount)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mg-0 fixed-top mt-100 navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="me-500">
                <a className="navbar-brand me-5" href="/" >
                    <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
                    Bootstrap
                </a>
                </div>
                
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-danger" type="submit" disabled = {true}>BanK Balance:0</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}