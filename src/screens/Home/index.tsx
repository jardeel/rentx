import React from "react";
import { StatusBar } from 'react-native';
import { RFValue} from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Container, Header, TotalCars, HeaderContent } from './styles';

import { Car }  from '../../components/Car';

export function Home(){
  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  }

  const carDataTwo = {
    brand: 'porsche ',
    name: 'Panamera ',
    rent: {
      period: 'AO DIA',
      price: 340,
    },
    thumbnail: 'https://i.pinimg.com/originals/69/54/c2/6954c273d9f969214fb3777c4b995f63.png'
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(100)} height={RFValue(12)}/>
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <Car data={carDataOne}/>
      <Car data={carDataTwo}/>
    </Container>
  )
}


