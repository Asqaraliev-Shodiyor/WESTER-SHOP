import React, { useState } from 'react'
import './detail.css'
import Slider from './Slider'
import { useLocation } from 'react-router-dom'
import { ButtonGroup, Button} from '@mui/material'
import { NavLink } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Detail({setsavatlar, savatlar}) {
  const [count, setCount] = useState(1)
  const location = useLocation()
  let item = location.state
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  function Savatchaga(){
    item.count = count
    setsavatlar([...savatlar,item])
    localStorage.setItem('savat',JSON.stringify(savatlar))
    handleClick()
  }
  console.log(savatlar)
  
  function plus(){
    setCount(count + 1)
  }
  function minus(){
    if(count==0){

    }else{
      setCount(count - 1)
    }
  }
  return (
    <div className='detail-container'>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {item.name} savatchaga qo'shildi
        </Alert>
      </Snackbar>
        <div className="detail-wrapper">
            <div className="left-detail">
            <Slider pics={item.photo} />
            </div>
            <div className="right-detail">
                <h3>{item.name}</h3>
                <p>O'lchovi: {item.measurement}</p>
                <p>O'girligi: {item.weight} KG</p>
                <p>Quti narxi: {item.price_per_box} so'm</p>
                <p>Dona narxi: {item.price_per_peace} so'm</p>
                <p>Qutidagi soni: {item.quantity_in_box} ta</p>
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                  <Button onClick={minus}>-</Button>
                  <Button>{count}</Button>
                  <Button onClick={plus}>+</Button>
                </ButtonGroup>
            <h2>{count*item.price_per_box} so'm</h2>
            <h3>Jami qutini ichida: {count*item.quantity_in_box} ta</h3>
              <div className="harid-btn">
                <Button variant='contained'onClick={Savatchaga} >Savatchaga solish</Button>
                <Button  LinkComponent={NavLink} to='/cart'   variant='contained'>Haridlarga o'tish</Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Detail