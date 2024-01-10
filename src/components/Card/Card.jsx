import { Button } from "antd";
import React from "react";
import {ShoppingCartOutlined} from '@ant-design/icons';
import Rating from '@mui/material/Rating';
import { Rate } from 'antd'
const Card = (props) => {
  const { title, rating, description, price, image, category} = props.item;

  function titlelength(ftitle) {
    if (ftitle.length > 13) {
      return ftitle.slice(0, 13) + "...";
    } else {
      return ftitle;
    }
  }

  function deslength(ftitle) {
    if (ftitle.length > 50) {
      return ftitle.slice(0, 50) + "...";
    } else {
      return ftitle;
    }
  }
  console.log(props.item)
  return (
    
    <div className="box">
      <img src={image} alt="" />
      <p className="category">{category}</p>
      <h1>{titlelength(title)}</h1>
      <p>{deslength(description)}</p>
      <span><Rate disabled defaultValue={rating.rate} /></span>
      <h1>{price}$</h1>
      <Button icon={<ShoppingCartOutlined />}>Savatga</Button>
    </div>
  );
};

export default Card;
