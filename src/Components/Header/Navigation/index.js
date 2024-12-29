import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {

// const [isopenSidebarVal, setisopenSidebarVal] = useState(true);
 const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  return (
 <nav>
     <div className='container'>
       <div className='row'>
         <div className='col-sm-3 navPart1'>
          <div className='catWrapper'>
             <Button className='allCatTab align-items-center' onClick={() =>setisopenSidebarVal(!isopenSidebarVal)}>
             <span className='icon1 mr-2'><IoIosMenu/></span>
              <span className="text">ALL CATEGORIES</span>
              <span className='icon2 ml-2'><FaAngleDown/></span>
             </Button>

             <div className={`sidebarNav ${isopenSidebarVal  ? 'open' : ''}`}>
             <ul>
                  <li><Link to ="/"><Button>men</Button></Link></li>
                  <li><Link to ="/"><Button>women</Button></Link></li>
                  <li><Link to ="/"><Button>beauty</Button></Link></li>
                  <li><Link to ="/"><Button>watches</Button></Link></li>
                  <li><Link to ="/"><Button>kids</Button></Link></li>
                  <li><Link to ="/"><Button>gifts</Button></Link></li>
                  <li><Link to ="/"><Button>men</Button></Link></li>
                  <li><Link to ="/"><Button>women</Button></Link></li>
                  <li><Link to ="/"><Button>beauty</Button></Link></li>
                  <li><Link to ="/"><Button>watches</Button></Link></li>
                  <li><Link to ="/"><Button>kids</Button></Link></li>
                  <li><Link to ="/"><Button>gifts</Button></Link></li>
             </ul>
             </div>
         </div>
         </div>
         <div className='col-sm-9 navPart2 d-flex align-items-center'>
            <ul className = 'list list-inline '>
              <li className = 'list-inline-item'><Link to ="/"><Button>Home</Button></Link></li>
              <li className = 'list-inline-item'>
                <Link to ="/"><Button>Men</Button></Link>
                  <div className='submenu shadow'>
                  <Link to ="/"><Button>clothing</Button></Link>
                  <Link to ="/"><Button>footwear</Button></Link>
                  <Link to ="/"><Button>watches</Button></Link>
                  <Link to ="/"><Button>clothing</Button></Link>
                  <Link to ="/"><Button>footwear</Button></Link>
                  <Link to ="/"><Button>watches</Button></Link>
                  </div>
              </li>
              <li className = 'list-inline-item'><Link to ="/"><Button>Women</Button></Link>
              <div className='submenu shadow'>
                  <Link to ="/"><Button>clothing</Button></Link>
                  <Link to ="/"><Button>footwear</Button></Link>
                  <Link to ="/"><Button>watches</Button></Link>
                  <Link to ="/"><Button>clothing</Button></Link>
                  <Link to ="/"><Button>footwear</Button></Link>
                  <Link to ="/"><Button>watches</Button></Link>
                  </div></li>
              <li className = 'list-inline-item'><Link to ="/"><Button>Beauty</Button></Link>
              <div className='submenu shadow'>
                  <Link to ="/"><Button>clothing</Button></Link>
                  <Link to ="/"><Button>footwear</Button></Link>
                  <Link to ="/"><Button>watches</Button></Link>
                  <Link to ="/"><Button>clothing</Button></Link>
                  <Link to ="/"><Button>footwear</Button></Link>
                  <Link to ="/"><Button>watches</Button></Link>
                  </div></li>
              <li className = 'list-inline-item'><Link to ="/"><Button>watches</Button></Link>
              <div className='submenu shadow'>
                  <Link to ="/"><Button>clothing</Button></Link>
                  <Link to ="/"><Button>footwear</Button></Link>
                  <Link to ="/"><Button>watches</Button></Link>
                  <Link to ="/"><Button>clothing</Button></Link>
                  <Link to ="/"><Button>footwear</Button></Link>
                  <Link to ="/"><Button>watches</Button></Link>
                  </div></li>
              <li className = 'list-inline-item'><Link to ="/"><Button>Kids</Button></Link>
              </li>
              <li className = 'list-inline-item'><Link to ="/"><Button>Gift</Button></Link>
              </li>
              <li className = 'list-inline-item'><Link to ="/"><Button>blog</Button></Link>
              </li>
              <li className = 'list-inline-item'><Link to ="/"><Button>Contact</Button></Link></li>




            </ul>

         </div>
       </div>
     </div>
 </nav>
  );
};

export default Navigation;
