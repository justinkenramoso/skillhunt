import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import {PortfolioList} from '../data/DataList'


const CardStyle = styled(Card)`
      min-height: 350px;
      min-width: 300px;
      margin-left: 30px;
`;

const ImageStyle = styled(CardMedia)`
      max-width: 60%;
`;

const Flex = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
`;


export default function Portfolio() {

  const [portfolio, setPortfolio] = useState(PortfolioList)

  useEffect(()=> {
    
  }, [portfolio])
 
  return (
    <Flex >        
        {portfolio.map((person)=>(
            <CardStyle sx={{ maxWidth: 345}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={require('../images/feeling_proud.png')}
                    alt={person.name}
                />
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="Flex">
                      {person.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {person.skill1},<br/>
                      {person.skill2},<br/>
                      {person.skill3}                
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Portfolio</Button>
                  <Button size="small">Resume</Button>
                </CardActions>       
            </CardStyle>
          ))}      
    </Flex>    
  )
}
