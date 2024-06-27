import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';



function Header(savatlar) {
  //
  return (
    <div className="header">
        <div className="middle-wrapper">
        <NavLink style={{textDecoration:'none', color:'black'}} to={'/'} ><h1>Wester Shop</h1></NavLink>
            
            <Badge badgeContent={savatlar.length} color="warning">
            <Button LinkComponent={NavLink} to='/cart'  className='cart-btn' variant="text"><ShoppingBagOutlinedIcon style={{fontSize:16}}/> Savatcha</Button>
          </Badge>
        </div>
    </div>
  )
}

export default Header