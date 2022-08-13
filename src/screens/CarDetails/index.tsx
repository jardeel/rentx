import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { 
  Container, 
  Header, 
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About
} from './styles';

export function CarDetails(){
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}}/>
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>Audi A3</Name>
          </Description>

          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Vitae vel similique iusto numquam. Voluptatibus molestiae 
          quod quisquam debitis atque! Voluptatibus sequi in ullam 
          blanditiis ut.
        </About>
      </Content>
    </Container>
  )
}