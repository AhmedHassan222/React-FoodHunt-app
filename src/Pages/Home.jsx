import image1 from '../assets/images/2632e9f5522e1836670e40abcfbdfee6.png'
import image2 from '../assets/images/2ee91b9d383dfc5ee274dda248c64265.png'
import image3 from '../assets/images/3e0bb76dfb8650b0c4c456588b4fa0fd.png'
import image4 from '../assets/images/70712689205fe5b828df8e0ac94ce70f.png'
import image5 from '../assets/images/Biryani_2.jfif'
import image6 from '../assets/images/Burger.jfif'
import image7 from '../assets/images/Cakes.jfif'
import image8 from '../assets/images/Chinese.jfif'
import image9 from '../assets/images/Chole_Bature.jfif'
import image10 from '../assets/images/Desserts_2.jfif'
import image11 from '../assets/images/Dosa.jfif'
import image12 from '../assets/images/Idli.jfif'
import image13 from '../assets/images/Kebabs.jfif'
import image14 from '../assets/images/Lassi.jfif'
import image15 from '../assets/images/Noodles.jfif'
import image16 from '../assets/images/North_Indian_4.jfif'
import image17 from '../assets/images/Paratha.jfif'
import image18 from '../assets/images/Pav_Bhaji.jfif'
import image19 from '../assets/images/Pizza.jfif'
import image20 from '../assets/images/Poori.jfif'
import image21 from '../assets/images/Pure_Veg.jfif'
import image22 from '../assets/images/Rolls.jfif'
import image23 from '../assets/images/Shakes.jfif'
import image24 from '../assets/images/South_Indian_4.jfif'

import style from '../Styles/Home.module.scss'
export default function Home() {


    return <>
        <header>
            <div className="container py-5">
                <div className="d-flex justify-content-between">
                    <h3>Best offers for you</h3>
            

                </div>
                <div id='sliderOne' className={`row py-2 g-2 flex-nowrap ${style.slider} `}>
                    <div className="col-6 col-md-4 col-lg-4">
                        <img className='w-100' src={image1} alt="" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <img className='w-100' src={image2} alt="" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <img className='w-100' src={image3} alt="" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-4">
                        <img className='w-100' src={image4} alt="" />
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="d-flex justify-content-between">
                    <h3>What's on your mind?</h3>


                </div>
                <div  className={`row py-2 g-2 flex-nowrap ${style.slider}`}>
                    <div className="col-2 ">
                        <img className='w-100' src={image5} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image6} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image7} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image8} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image9} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image10} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image11} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image12} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image13} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image14} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image15} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image16} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image17} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image18} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image19} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image20} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image21} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image22} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image23} alt="" />
                    </div>
                    <div className="col-2 ">
                        <img className='w-100' src={image24} alt="" />
                    </div>

                </div>
            </div>
            <div className="container py-5">
                <form className="d-flex w-100 mx-auto" role="search">
                    <input className="w-100 me-2 p-2" type="search" placeholder="Search For Anything" aria-label="Search" />
                    <button className={`btn  ${style.buttonStyle} px-3 text-white`} type="submit">Search</button>
                </form>
            </div>
            <div className="container py-5">
                <h3>Restaurants near you</h3>
                <div className="row">
                    <div className="col-6 col-md-4 col-lg-3">
                        {/* Loop will come from API >>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        {/* >>>>>>>>>>>>>>>>>>>>>>!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                    </div>
                </div>
            </div>
        </header>

    </>
}