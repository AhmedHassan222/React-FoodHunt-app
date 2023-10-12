import aboutImage from "../assets/images/AboutImage.jpg"
export default function About() {
    return <>
        <div className="d-flex justify-content-center align-items-center vh-100 w-100">
            <div className="w-50">
                <img className="w-100 rounded-2" src={aboutImage} alt="" />
                <div className="my-3">
                    <h3 className="text-center">Foody 🍔</h3>
                    <p>Foody is a food ordering web application built with React.js ⚛ and Swiggy's API.</p>
                </div>
            </div>

        </div>
    </>
}