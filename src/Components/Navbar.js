

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-lg">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ms-auto text-white">
                        <li className="nav-item">
                            <a href="/" className="nav-link text-light">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/search" className="nav-link">Search Another City</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>  
        </div>
    );
}

export default Navbar;
