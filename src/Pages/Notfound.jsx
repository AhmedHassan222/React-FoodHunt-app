import { Link } from "react-router-dom"
export default function Notfound() {
    return <>
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <div>
                <h3 className="h1">OOPS!!</h3>
                <h5 className="h3">404: Not Found</h5>
                <p>Return To <Link to={''}>Home</Link>
                </p>
            </div>

        </div>
    </>
}