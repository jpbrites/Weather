
import { useState } from 'react'
import { AreaInput, ButtonPesquisar, Container, InputCidade } from './styles'
import { useNavigate } from 'react-router-dom';
import { useWeather } from '../../WeatherContext';
import fundo from '../../assets/fundo_home.jpeg'

function Home() {
  const [city, setCity] = useState('')
  const [erro, setErro] = useState(false)
  const { setWeather } = useWeather();

  const navigate = useNavigate();

  const handleChange = (e: any) =>  {
    setCity(e.target.value)
  }
  //82924190462225a08f744f54d8b1690b

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=d2615c3d24db4f54afe185533232111&q=${city}&lang=pt&days=7`)
    .then((response) => {
        if(response.status === 200){
            return response.json()
            .then ((data) => {
              setWeather(data)
              navigate('/city')
      
          })
        }
        else if (response.status === 400){
          setErro(true)
        }
    })
    
  }
  return (
      <Container style={{backgroundImage: `url(${fundo})`}}>
        <AreaInput>
            <span className='title-1'>Verifique agora o tempo na sua cidade!</span>
            <span className='title-2'>Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar</span>
            <InputCidade value={city} onChange={handleChange} placeholder='Cidade'/>
            {
              erro ? <span style={{fontFamily: 'var(--font-family)', color: 'red', paddingTop: '15px', fontSize: '17px'}}>Não foi possível encontrar a cidade</span>
              :
              null
            }
            <ButtonPesquisar onClick={handleSearch}>Pesquisar</ButtonPesquisar>
        </AreaInput>
    </Container>

    /*
    <Container>
        <AreaInput>
            <span className='title-1'>Verifique agora o tempo na sua cidade!</span>
            <span className='title-2'>Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar</span>
            <InputCidade value={city} onChange={handleChange} placeholder='Cidade'/>
            <ButtonPesquisar onClick={handleSearch}>Pesquisar</ButtonPesquisar>
        </AreaInput>
    </Container>*/
  )
}

export default Home