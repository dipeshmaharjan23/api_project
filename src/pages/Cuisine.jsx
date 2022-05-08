import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import {Link,useParams} from 'react-router-dom';


export const Cuisine = () => {
  const[cuisine,setCuisine] = useState([]);
  let params=useParams();
  
  const getCuisine = async(name)=>{
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&couisine=${name}`)
      const Recipies = await data.json();
        setCuisine(Recipies.results)
  }
  
  useEffect(()=>{
      getCuisine(params.type);
  },[]);
  
    return (
        <Grid>
            {cuisine.map((item)=>{
                return(
                    <Card key ={item.id}>
                        <img src={item.image} />
                        <h4>{item.title}</h4>
                    </Card>
                )
            })}
        </Grid>
   
  )
}

const Grid =styled.div`
    display: grid;
    grid-template-columns : repeat(auto-fit,minmax(10rem,1fr));
    grid-gap: 3rem;
    margin-top: 2rem;
`;

const Card = styled.div`
    img{
        width:100% ;
        border-radius : 2rem;
       

    }
    a{
        text-decoration:none;

    }
    h4{
        text-align:center ;
        padding :1rem ;
    }
`