// import Button from '@mui/material/Button';
// import { IoIosMenu } from "react-icons/io";
// import { FaAngleDown } from "react-icons/fa6";
// import { Link } from 'react-router-dom';


// const Navigation= () => {
//     return(
        
//             <nav>
//                      <div className='container'>
//                          <div className='row'>
//                            <div className='col-sm-2 navPart1'>
//                             <div className="catwrapper">
//                                   <Button className='allCatTab align-items-center'>
//                                     <span className='icon1 mr-2'><IoIosMenu/></span>
//                                      <span class="text">ALL CATEGORIES</span>
//                                      <span className='icon2 ml-2'><FaAngleDown/></span>
//                                   </Button>
                                  
//                                   </div>   
//                                 </div>  
                               
//                               </div>
                              
                           
//                            <div className='col-sm-10 navPart2 d-flex align-items-center'>
//                                     <div className='list list-inline width-100'>

//                                       <ul>
//                                       <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
//                                       <li className='list-inline-item'><Link to="/"><Button>men</Button></Link>
//                                                 <div className='submenu shadow'>
//                                                   <Link to="/"><Button>clothing</Button></Link>
//                                                   <Link to="/"><Button>footwear</Button></Link>
//                                                   <Link to="/"><Button>watches</Button></Link>
//                                                   <Link to="/"><Button>clothing</Button></Link>
//                                                   <Link to="/"><Button>footwear</Button></Link>
//                                                   <Link to="/"><Button>watches</Button></Link>
//                                                 </div>
//                                       </li>
//                                       <div  className='list-inline-item'><Link to="/"><Button>women</Button></Link>
//                                       <div className='submenu shadow'>
//                                                   <Link to="/"><Button>clothing</Button></Link>
//                                                   <Link to="/"><Button>footwear</Button></Link>
//                                                   <Link to="/"><Button>watches</Button></Link>
//                                                   <Link to="/"><Button>clothing</Button></Link>
//                                                   <Link to="/"><Button>footwear</Button></Link>
//                                                   <Link to="/"><Button>watches</Button></Link>
//                                                 </div>
                                                
//                                       <li className='list-inline-item'><Link to="/"><Button>beauty</Button></Link>
//                                       <div className='submenu shadow'>
//                                                   <Link to="/"><Button>clothing</Button></Link>
//                                                   <Link to="/"><Button>footwear</Button></Link>
//                                                   <Link to="/"><Button>watches</Button></Link>
//                                                   <Link to="/"><Button>clothing</Button></Link>
//                                                   <Link to="/"><Button>footwear</Button></Link>
//                                                   <Link to="/"><Button>watches</Button></Link>
//                                                 </div></li>
//                                       <li className='list-inline-item'><Link to="/"><Button>watches</Button></Link>
//                                       <div className='submenu shadow'>
//                                                   <Link to="/"><Button>clothing</Button></Link>
//                                                   <Link to="/"><Button>footwear</Button></Link>
//                                                   <Link to="/"><Button>watches</Button></Link>
//                                                   <Link to="/"><Button>clothing</Button></Link>
//                                                   <Link to="/"><Button>footwear</Button></Link>
//                                                   <Link to="/"><Button>watches</Button></Link>
//                                                 </div></li>
//                                       <li className='list-inline-item'><Link to="/"><Button>kids</Button></Link>
//                                       </li>
//                                       <li className='list-inline-item'><Link to="/"><Button>mobiles</Button></Link>
//                                       </li>
//                                       <li className='list-inline-item'><Link to="/"><Button>blog</Button></Link>
//                                       </li>

//                                       <li className='list-inline-item'><Link to="/"><Button>Contact Us</Button>
//                                       </Link></li>
//                                  </div>
//                                   </ul>   
                            
//                          </div>
//                          </div>
//                      </div>
//                 </nav>     
//     );
// }
// export default Navigation;



import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
 <nav>
     <div className='container'>
       <div className='row'>
         <div className='col-sm-3 navPart1'>
             <Button className='allCatTab'>
             <span className='icon1 mr-2'><IoIosMenu/></span>
              <span class="text">ALL CATEGORIES</span>
              <span className='icon2 ml-2'><FaAngleDown/></span>
             </Button>
         </div>

         <div className='col-sm-9 navPart2'>

         </div>
       </div>
     </div>
 </nav>
  );
};

export default Navigation;
