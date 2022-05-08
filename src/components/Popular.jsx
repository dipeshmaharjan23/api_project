import { useEffect, useState } from "react";
import styled from "styled-components";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

    const check =localStorage.getItem('popular');

    if(check){
      setPopular(JSON.parse(check))
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
        localStorage.setItem('popular',JSON.stringify(data.results))
      setPopular(data.results);
    }

  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <br />
        <br />
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((result) => {
            return (
              <SplideSlide key={result.id}>
                <Card>
                  <Link to={'/recipe/'+result.id}>
                  <p>{result.title}</p>
                  <img src={result.image} alt={result.title} />
                  </Link>
                  <Gradient/>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 1rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height:100%;
    object-fit: cover;
}
p{
    position:absolute;
    z-index:10;
    color:white;
    font-weight:700;
    display:flex;
    justify-content: center;
    align-items: center;
    left:50%;
    top:70%;
    text-align:center;
    width: 100%;
    transform: translate(-50%,0);
}
`

const Gradient =styled.div`
z-index : 3;
position: absolute;
width: 100%;
height:100%;
background : linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`;
