 import Logo from '../../assests/images/logo.png.webp';
 import { Link } from 'react-router-dom';
 import Button from '@mui/material/Button';
 import CountryDropdown from '../CountryDropdown';
//  import { IoIosSearch } from "react-icons/io";
 import { CiUser } from "react-icons/ci";
 import { MdOutlineShoppingBag } from "react-icons/md";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import {useContext} from 'react';
import { MyContext } from '../../App';

 const  Header =() => {

    const context = useContext(MyContext)
    return(
    <>
        <div className= "headerWrapper">
            <div className="top-strip bg-blue">
                <div className = "container">
                <p className="mb-0 mt-0 text-center">Enjoy free shipping on all orders above $50!</p>
                </div>
                </div> 

                <header className="header">
                    <div className="container">
                        <div className ="row">
                            <div className= "logoWrapper d-flex align-items-center col-sm-1">
                                    <Link to = {'/'}><img src = {Logo} alt='Logo'/></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                {
                                    context.countryList.length!==0 &&  <CountryDropdown/>
                                }
                                 
                                  { /* Header search start here*/}
                                    <SearchBox/>
                                  { /* Header search end here*/}

                                  <div className='part3 d-flex align-items-center ml-auto'>
                                      <Button className='circle mr-3'><CiUser/></Button>
                                      <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ml-2'>
                                        <Button className='circle'><MdOutlineShoppingBag/></Button>
                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>

                                      </div>
                                  </div>
                            </div>
                        </div>
                    </div>

                </header>
                {/* Navgation replace in new nav folder */}
                <Navigation/>
        </div>
    </>
    );
 }

 export default Header ;