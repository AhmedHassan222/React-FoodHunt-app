import style from "../Styles/Search.module.scss"
export default function Search() {
    return <>
        <div className="vh-100 py-5">
            <form className="d-flex w-75 mx-auto" role="search">
                <input className={`w-100 me-2 p-2 `} type="search" placeholder="Search For Anything" aria-label="Search" />
                <button className={`btn  ${style.buttonStyle} px-3 text-white`} type="submit">Search</button>
            </form>
        </div>
    </>
}