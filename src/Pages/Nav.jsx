import style from "../Styles/Nav.module.scss"
import { Link } from "react-router-dom"
export default function Nav() {
    return <>
        <nav className="navbar navbar-expand-lg  py-3">
            <div className="container">
                <Link className={`   ${style.linkStyle}    navbar-brand fw-bold`} to="">
                    🍔 FoodHunt
                </Link>
                <button className={`bg-transparent fs-5 border-0 ${style.btnMenu}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="">
                        <i class="fa-solid fa-bars"></i>
                    </span>
                </button>
                <div className={`collapse ${style.menu} navbar-collapse`} id="navbarSupportedContent">
                    <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`   ${style.linkStyle}    nav-link  text-black   mx-3`} aria-current="page" to={'search'}>
                                <i className="fa-solid fa-magnifying-glass me-2"></i>
                                <span> Search</span>

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`   ${style.linkStyle}    nav-link  text-black  mx-3 active`} aria-current="page" to={''}>
                                <i className="fa-solid fa-house me-2"></i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`   ${style.linkStyle}    nav-link  text-black  mx-3 `} aria-current="page" to={'about'}>
                                <i class="fa-solid fa-question me-2"></i>
                                <span>About</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`   ${style.linkStyle}    nav-link  text-black  mx-3  `} aria-current="page" to={'contact'}>
                                <i className="fa-solid fa-phone me-2"></i>
                                <span>Contact</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`   ${style.linkStyle}    nav-link  text-black  mx-3`} aria-current="page" to={'cart'}>
                                <i className="fa-solid fa-bag-shopping me-2"></i>
                                <span>Cart</span>
                                <span className="p-1 bg-danger text-white rounded-circle ms-2">0</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${style.linkStyle}    nav-link    mx-3 ${style.loginButton} btn px-3`} aria-current="page" to={'login'}>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
}