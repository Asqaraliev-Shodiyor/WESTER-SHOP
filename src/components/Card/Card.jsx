import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css'
import { useNavigate } from 'react-router-dom';

export default function ProductCard({item}) {
    const  navigate = useNavigate()
    function details(){
        navigate('/detail',{ state: item})
    }
  return (
    <Card className='card'>
      <CardMedia
        component="img"
        alt="green iguana"
        style={{objectFit:"contain"}}
        height="140"
        image={'https://backoffice.samarashop.uz' + item?.photo[0]?.photo}
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          <p className='card-title'>{item.name.slice(0.25)}...</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p>• Bloqdagi soni: {item.quantity_in_box}</p>
        <p>• Bir dona narxi:{item.price_per_peace} so`m</p>
        </Typography>
        <Typography variant="body2" className='price'>
          <h3>{item.price_per_box} so`m  </h3> 
          <h3 className='price2'>  / Blog narxi </h3>
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button variant="contained" className='btn' onClick={()=>details(item)} >Batafsil</Button>
      </CardActions>
    </Card>
  );
}
