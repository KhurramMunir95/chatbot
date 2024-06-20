import React from 'react'
import { 
    logo, 
    mobLogo, 
    client1, 
    client2, 
    client3, 
    userBg, 
    user1, 
    createIcon, 
    exploreIcon, 
    homeIcon, 
    dotVertical, 
    search, 
    plus, 
    profile, 
    settings, 
    logout,
    pin,
    deleteIcon
} from '../utils/Images'

const LeftMenu = () => {
  return (
    <>
        <div className="left-menu-area">
            <div className="logo">
                <a className="hidden sm:block" href="index.html"><img src={logo} alt="Logo" /></a>
                <a className="block sm:hidden" href="index.html"><img src={mobLogo} alt="Mobile Logo" /></a>
            </div>
            <div className="menu-main">
                <h5 className="hidden md:block">Main</h5>
                <ul>
                    <li className="active">
                        <a href="#" className="flex items-center justify-center sm:justify-start">
                            <img src={homeIcon} alt="Home Icon" />
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center sm:justify-start">
                            <img src={exploreIcon} alt="Explore Icon" />
                            <span>Explore</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center sm:justify-start">
                            <img src={createIcon} alt="Create Icon" />
                            <span>Create</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="user-wrapper">
                <h4 className="hidden sm:flex items-center">User profile
                    <span className="ml-2 dropdown_toogler">
                        <img src={dotVertical} alt="Dropdown Icon" />
                    </span>
                    <div className="profile-dropdown">
                        <div className="profile-box">
                            <ul>
                                <li><a href="#"><img src={profile} alt="Profile Icon" />Profile</a></li>
                                <li><a href="#"><img src={settings} alt="Setting Icon" />Setting</a></li>
                                <li><a href="#"><img src={logout} alt="Logout Icon" />Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </h4>
                <div className="user-slide-active owl-carousel owl-loaded owl-drag">
                    <div className="user-items">
                        <div className="user-img">
                            <img src={userBg} alt="User Background" />
                            <a href="#"><img src={user1} alt="User" /></a>
                        </div>
                        <h4 className="hidden md:block">Alonzo Tiger</h4>
                        <ul className="hidden md:block">
                            <li><a href="#">Followers <br /><span>105</span></a></li>
                            <li><a href="#">Following <br /><span>643</span></a></li>
                            <li><a href="#">Popularity <br /><span>1.9M</span></a></li>
                        </ul>
                    </div>
                    <div className="user-items">
                        <div className="user-img">
                            <img src={userBg} alt="User Background" />
                            <a href="#"><img src={user1} alt="User" /></a>
                        </div>
                        <h4 className="hidden md:block">Alonzo Tiger</h4>
                        <ul className="hidden md:block">
                            <li><a href="#">Followers <br /><span>105</span></a></li>
                            <li><a href="#">Following <br /><span>643</span></a></li>
                            <li><a href="#">Popularity <br /><span>1.9M</span></a></li>
                        </ul>
                    </div>
                    <div className="user-items">
                        <div className="user-img">
                            <img src={userBg} alt="User Background" />
                            <a href="#"><img src={user1} alt="User" /></a>
                        </div>
                        <h4 className="hidden md:block">Alonzo Tiger</h4>
                        <ul className="hidden md:block">
                            <li><a href="#">Followers <br /><span>105</span></a></li>
                            <li><a href="#">Following <br /><span>643</span></a></li>
                            <li><a href="#">Popularity <br /><span>1.9M</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="client-box">
                <div className="client-search hidden md:block">
                    <h4 className="hidden md:block">FOLLOWING</h4>
                    <div className="client-search-active flex items-center">
                        <a href="#"><img src={search} alt="Search Icon" /></a>
                        <a href="#"><img src={plus} alt="Plus Icon" /></a>
                    </div>
                    <ul>
                        <li className="active flex items-center">
                            <a href="#" className="flex items-center">
                                <img src={client1} alt="Client 1" />
                                CreativeGPT
                            </a>
                            <span className="ml-2 dropdown_toogler">
                                <img src={dotVertical} alt="Dropdown Icon" />
                            </span>
                            <div className="profile-dropdown">
                                <div className="profile-box profile-box2">
                                    <ul>
                                        <li><a href="#"><img src={pin} alt="Pin Icon" />Pin to top</a></li>
                                        <li><a href="#"><img src={deleteIcon} alt="Delete Icon" />Unfollow this bot</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="flex items-center">
                                <img src={client2} alt="Client 2" />
                                Stygian Styx
                            </a>
                            <span className="ml-2 dropdown_toogler">
                                <img src={dotVertical} alt="Dropdown Icon" />
                            </span>
                            <div className="profile-dropdown">
                                <div className="profile-box profile-box2">
                                    <ul>
                                        <li><a href="#"><img src={pin} alt="Pin Icon" />Pin to top</a></li>
                                        <li><a href="#"><img src={deleteIcon} alt="Delete Icon" />Unfollow this bot</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="flex items-center">
                                <img src={client3} alt="Client 3" />
                                Just_Shadow-_-
                            </a>
                            <span className="ml-2 dropdown_toogler">
                                <img src={dotVertical} alt="Dropdown Icon" />
                            </span>
                            <div className="profile-dropdown">
                                <div className="profile-box profile-box2">
                                    <ul>
                                        <li><a href="#"><img src={pin} alt="Pin Icon" />Pin to top</a></li>
                                        <li><a href="#"><img src={deleteIcon} alt="Delete Icon" />Unfollow this bot</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="flex items-center">
                                <img src={client2} alt="Client 2" />
                                Stygian Styx
                            </a>
                            <span className="ml-2 dropdown_toogler">
                                <img src={dotVertical} alt="Dropdown Icon" />
                            </span>
                            <div className="profile-dropdown">
                                <div className="profile-box profile-box2">
                                    <ul>
                                        <li><a href="#"><img src={pin} alt="Pin Icon" />Pin to top</a></li>
                                        <li><a href="#"><img src={deleteIcon} alt="Delete Icon" />Unfollow this bot</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="client-search block md:hidden">
                    <ul className="flex flex-col justify-center items-center">
                        <li><a href="#"><img src={client1} alt="Client 1" /></a></li>
                        <li><a href="#"><img src={client2} alt="Client 2" /></a></li>
                        <li><a href="#"><img src={client3} alt="Client 3" /></a></li>
                        <li><a href="#"><img src={client2} alt="Client 4" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default LeftMenu