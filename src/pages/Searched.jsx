import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Searched = () => {
    const[searchedRecipies,setSearchedRecipies] = useState([]);
    const params = useParams();

    const getSearched = async(name)=>{
        const data = await  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        setSearchedRecipies(recipes.results);


    }
    useEffect(()=>{
        getSearched(params.search);
    },[params.search])
    return (
    <Grid option={{
        page:4,
    }}>
        {searchedRecipies.map((item)=>{
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

export default Searched ;


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