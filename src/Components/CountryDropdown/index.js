import { FaAngleDown } from "react-icons/fa";
import Button from '@mui/material/Button';
// import DialogTitle from '@mui/material/DialogTitle';
import { Dialog } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import React, { useContext, useEffect, useState } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";
//import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction= "up" ref={ref} {...props}/>
});


const CountryDropdown=() => {

    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);
   
    const [countryList, setCountryList] = useState([]);
    
  const context = useContext(MyContext);

  const selectCountry=(index,country)=>{
        setselectedTab(index);
        setisOpenModal(false);
        context.setselectedCountry(country)

  }

  useEffect(()=>{
        setCountryList(context.countryList);
  },[])
 const filterList=(e)=>{
    const keyword = e.target.value.toLowerCase();

    if(keyword !==""){
        const list= countryList.filter((item)=>{
            return item.country.toLowerCase().includes(keyword);
        });
        setCountryList(list);
    }else{
        setCountryList(context.countryList);
    }
    
    
 }
  

  
     return(
        <>
           <Button className='countryDrop' onClick={() => setisOpenModal(true)}>
                    <div className='info d-flex flex-column'>
                        <span className='label'>Your Location</span>
                        <span className='name'>{context.selectedCountry !== "" ? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...' : context.selectedCountry : 'Select Location'}</span>

                    </div>
                    <span className='ml-auto'><FaAngleDown/></span>
            </Button>

              <Dialog  open={isOpenModal} onClick={() => setisOpenModal(false)}className='locationModal' TransitionComponent={Transition}>
              <div onClick={(e) => e.stopPropagation()} style={{ padding: "20px" }}>
                   <h4 className='mb-0'>Choose Your Delivery Location</h4>
                   <p>Enter your address and we will specify the offer for your area.</p>
                   <Button className='close_' onClick={() => setisOpenModal(false)}><IoMdClose/></Button>
 
                   <div className='headerSearch w-100' onClick={(e) => e.stopPropagation()}>
        <input type='text' placeholder='Search  your area...' onChange={filterList}/>
        <Button><IoIosSearch/></Button>
    </div>
          <ul className='countryList mt-3'>
            {
                countryList?.length!==0 && countryList?.map((item, index)=>{
                    return(
                        <li key={index}><Button onClick={() => selectCountry(index,item.country)}
                         className={`${selectedTab===index ? 'active' : ''}`}
                        >{item.country}</Button></li>

                    )
                })
            }


          </ul>
          </div>
              </Dialog>
        </>
     )
}

export default CountryDropdown;




{/* <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Set backup account</DialogTitle>
                <List sx={{ pt:0 }}>
                    {emails.map((email)=>(
                        <ListItem disableGutters key={email}>
                            <ListItemButton onClick={() => handleListItemClick(email)}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: blue[100], color: blue[600]}}>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={email}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disableGutters>
                        <ListItemButton autoFocusonClick={() => handleListItemClick('addAccount')}>
                            <ListItemAvatar>
                                <Avatar><AddIcon/></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Add account"/>
                        </ListItemButton>
                    </ListItem>
                </List>
              </Dialog> */}