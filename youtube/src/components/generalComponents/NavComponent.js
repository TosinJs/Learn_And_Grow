import logo from "../../assets/yt_logo_rgb_light.png";
import hamburger from "../../assets/outline_menu_black_24dp.png";
import searcButton from "../../assets/outline_search_black_36dp.png";
import microphone from "../../assets/outline_mic_black_24dp.png";
import apps from "../../assets/outline_apps_black_24dp.png";
import settings from "../../assets/outline_more_vert_black_24dp.png";
import accountImage from "../../assets/account_circle_black_24dp.svg";

const NavComponent = () => {
    return (
        <nav className="flex box-border h-14 content-center justify-between items-center p-4 pr-8 bg-white bg-opacity-95">
            {/** Icon Section */}
            <div className="nav-section gap-4">
                <div className="nav-btn">
                    <img src={hamburger} alt="menu button" />
                </div>
                <div className="h-6 w-24 mr-8 cursor-pointer">
                    <img src={logo} alt="youtube logo"/>
                </div>
            </div>
            {/** SearxhBar Section */}
            <div className="w-2/5 nav-section gap-x-4">
                <form className="w-full flex items-center relative">
                    <input className="h-10 w-10/12 border border-gray-400 p-4 text-lg focus:outline-none focus:border-2 focus:border-blue-800" type="text" placeholder="Search" />
                    <button className="h-10 w-2/12 border border-l-0 border-gray-400 flex justify-center items-center bg-gray-50">
                        <img className="w-6 h-6" src={searcButton} alt="search button" />
                    </button>
                </form>
                <button className="nav-btn bg-gray-50">
                    <img src={microphone} alt="text to speech" />
                </button>
            </div>
            {/** SigIn Section */}
            <div className="nav-section gap-4">
                <button className="nav-btn">
                    <img src={apps} alt="youtube applications" />
                </button>
                <button className="nav-btn">
                    <img src={settings} alt="Your settings" />
                </button>
                <button className="w-32 h-10 border-blue-600 border flex justify-center items-center gap-4">
                    <img src={accountImage} alt="Log In" />
                    <p className="text-blue-600 font-medium text-base">Sign In</p>
                </button>
            </div>
        </nav>
    )
}

export default NavComponent;