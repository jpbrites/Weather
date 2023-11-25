
import { useWeather } from '../../WeatherContext';
import { BlockConditions, ConditionsArea, ConjuntoConditions, ConjuntoDaily, ConjuntoDays, Container, Daily, DailyArea, Divisoria, TemperaturaArea, ThreeDays, ThreeDaysArea, TitleArea, WeatherArea } from './styles';
import { FiWind } from "react-icons/fi";
import { FaThermometerHalf } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';


function WeatherCity() {
  const { weatherData } = useWeather();
  console.log(weatherData)
  const isday = weatherData.current.is_day


  const FormatarHora = (horaapi: any) => {
    const dataHoraAPI = horaapi
    const dataHoraObjeto = new Date(dataHoraAPI);
    const hora = dataHoraObjeto.getHours();
    const minutos = dataHoraObjeto.getMinutes();
    const horaFormatada = hora.toString().padStart(2, '0');
    const minutosFormatados = minutos.toString().padStart(2, '0');
    const horaFinal = `${horaFormatada}:${minutosFormatados}`;
    return horaFinal;
  }
  

  const FormatarData = (dataapi: any) => {

    const [dataPart, horaPart] = dataapi.split(' ');

    // Parse da string da data usando parseISO
    const dataFormatadaExibicao = format(parseISO(dataPart), 'dd/MM');
    
    return dataFormatadaExibicao;
  }



  return (
    <Container valor = {isday}>
        <WeatherArea valor = {isday}>
            <TitleArea valor = {isday}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span className='title'>{weatherData.location.name}</span>
                    <span className='subtitle'>{weatherData.location.region}, {weatherData.location.country}</span>
                </div>
                <img src={weatherData.current.condition.icon}/>
            </TitleArea>
            <span className='clima'>CLIMA ATUAL - {FormatarData(weatherData.location.localtime)}</span>
            <span className='hora'>{FormatarHora(weatherData.location.localtime)}</span>
            <TemperaturaArea valor = {isday}>
              <span className='temperatura_numero'>{weatherData.current.temp_c} ° <sup style={{fontSize: '75px'}}>c</sup></span>
            </TemperaturaArea>
            <span className='descricao-clima'>{weatherData.current.condition.text}</span>
        </WeatherArea>

        <ConditionsArea valor = {isday}>
          <BlockConditions>

            <ConjuntoConditions valor = {isday}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <FaThermometerHalf size={30} className='icone-condition'/>
                  <span className='name-condition'>Sensação</span>
                </div>
                <span className='valor-condition pq'><br/>{weatherData.current.feelslike_c} ° <sup>c</sup></span>
            </ConjuntoConditions>

            <ConjuntoConditions valor = {isday}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <FiWind size={30} className='icone-condition'/>
                  <span className='name-condition'>Vento</span>
                </div>
                <span className='valor-condition'><br/>{weatherData.current.wind_kph} km/h</span>
            </ConjuntoConditions>

            <ConjuntoConditions valor = {isday}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <WiHumidity size={30} className='icone-condition'/>
                  <span className='name-condition'>Umidade</span>
                </div>
                <span className='valor-condition pq'><br/>{weatherData.current.humidity} %</span>
            </ConjuntoConditions>

            <ConjuntoConditions valor = {isday}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <TiWeatherWindyCloudy size={30} className='icone-condition'/>
                  <span className='name-condition'>Pressão</span>
                </div>
                <span className='valor-condition'><br/>{weatherData.current.pressure_mb}mbar</span>
            </ConjuntoConditions>
            

          </BlockConditions>
        </ConditionsArea>

        <ThreeDaysArea valor = {isday}>
          <span className='title-3days'>PREVISÃO PARA 5 DIAS</span>
          <ThreeDays>
              <ConjuntoDays valor = {isday}>
                <span className='data-days'>{FormatarData(weatherData.forecast.forecastday[1].date)}</span>
                <img className='icon-days' src={weatherData.forecast.forecastday[1].day.condition.icon}/>
                <span className='description-days'>{weatherData.forecast.forecastday[1].day.condition.text}</span>
                <span className='temperatura-days'>{weatherData.forecast.forecastday[1].day.maxtemp_c}° / {weatherData.forecast.forecastday[1].day.mintemp_c}°</span>
              </ConjuntoDays>
              
              <ConjuntoDays valor = {isday}>
                <span className='data-days'>{FormatarData(weatherData.forecast.forecastday[2].date)}</span>
                <img className='icon-days' src={weatherData.forecast.forecastday[2].day.condition.icon}/>
                <span className='description-days'>{weatherData.forecast.forecastday[2].day.condition.text}</span>
                <span className='temperatura-days'>{weatherData.forecast.forecastday[2].day.maxtemp_c}° / {weatherData.forecast.forecastday[2].day.mintemp_c}°</span>
              </ConjuntoDays>

              <ConjuntoDays valor = {isday}>
                <span className='data-days'>{FormatarData(weatherData.forecast.forecastday[3].date)}</span>
                <img className='icon-days' src={weatherData.forecast.forecastday[3].day.condition.icon}/>
                <span className='description-days'>{weatherData.forecast.forecastday[3].day.condition.text}</span>
                <span className='temperatura-days'>{weatherData.forecast.forecastday[3].day.maxtemp_c}° / {weatherData.forecast.forecastday[3].day.mintemp_c}°</span>
              </ConjuntoDays>

              <ConjuntoDays valor = {isday}>
                <span className='data-days'>{FormatarData(weatherData.forecast.forecastday[4].date)}</span>
                <img className='icon-days' src={weatherData.forecast.forecastday[4].day.condition.icon}/>
                <span className='description-days'>{weatherData.forecast.forecastday[4].day.condition.text}</span>
                <span className='temperatura-days'>{weatherData.forecast.forecastday[4].day.maxtemp_c}° / {weatherData.forecast.forecastday[4].day.mintemp_c}°</span>
              </ConjuntoDays>

              <ConjuntoDays valor = {isday}>
                <span className='data-days'>{FormatarData(weatherData.forecast.forecastday[5].date)}</span>
                <img className='icon-days' src={weatherData.forecast.forecastday[5].day.condition.icon}/>
                <span className='description-days'>{weatherData.forecast.forecastday[5].day.condition.text}</span>
                <span className='temperatura-days'>{weatherData.forecast.forecastday[5].day.maxtemp_c}° / {weatherData.forecast.forecastday[5].day.mintemp_c}°</span>
              </ConjuntoDays>
          </ThreeDays>
        </ThreeDaysArea>
        
        <DailyArea valor = {isday}>
          <span className='title-daily'>PREVISÃO DE HOJE</span>
          <Daily>
            <ConjuntoDaily valor = {isday}>
              <span className='hour-daily'>{FormatarHora(weatherData.forecast.forecastday[0].hour[6].time)}</span>
              <img className='icon-daily' src={weatherData.forecast.forecastday[0].hour[6].condition.icon}/>
              <span className='temperatura-daily'>{weatherData.forecast.forecastday[0].hour[6].temp_c} °</span>
            </ConjuntoDaily>
            <Divisoria valor = {isday}/>
            <ConjuntoDaily valor = {isday}>
              <span className='hour-daily'>{FormatarHora(weatherData.forecast.forecastday[0].hour[9].time)}</span>
              <img className='icon-daily' src={weatherData.forecast.forecastday[0].hour[9].condition.icon}/>
              <span className='temperatura-daily'>{weatherData.forecast.forecastday[0].hour[9].temp_c} °</span>
            </ConjuntoDaily>
            <Divisoria valor = {isday}/>
            <ConjuntoDaily valor = {isday}>
              <span className='hour-daily'>{FormatarHora(weatherData.forecast.forecastday[0].hour[12].time)}</span>
              <img className='icon-daily' src={weatherData.forecast.forecastday[0].hour[12].condition.icon}/>
              <span className='temperatura-daily'>{weatherData.forecast.forecastday[0].hour[12].temp_c} °</span>
            </ConjuntoDaily>
            <Divisoria valor = {isday}/>
            <ConjuntoDaily valor = {isday}>
              <span className='hour-daily'>{FormatarHora(weatherData.forecast.forecastday[0].hour[15].time)}</span>
              <img className='icon-daily' src={weatherData.forecast.forecastday[0].hour[15].condition.icon}/>
              <span className='temperatura-daily'>{weatherData.forecast.forecastday[0].hour[15].temp_c} °</span>
            </ConjuntoDaily>
            <Divisoria valor = {isday}/>
            <ConjuntoDaily valor = {isday}>
              <span className='hour-daily'>{FormatarHora(weatherData.forecast.forecastday[0].hour[18].time)}</span>
              <img className='icon-daily' src={weatherData.forecast.forecastday[0].hour[18].condition.icon}/>
              <span className='temperatura-daily'>{weatherData.forecast.forecastday[0].hour[18].temp_c} °</span>
            </ConjuntoDaily>
            <Divisoria valor = {isday}/>
            <ConjuntoDaily valor = {isday}>
              <span className='hour-daily'>{FormatarHora(weatherData.forecast.forecastday[0].hour[21].time)}</span>
              <img className='icon-daily' src={weatherData.forecast.forecastday[0].hour[21].condition.icon}/>
              <span className='temperatura-daily'>{weatherData.forecast.forecastday[0].hour[21].temp_c} °</span>
            </ConjuntoDaily>
            <Divisoria valor = {isday}/>
            <ConjuntoDaily valor = {isday}>
              <span className='hour-daily'>{FormatarHora(weatherData.forecast.forecastday[0].hour[23].time)}</span>
              <img className='icon-daily' src={weatherData.forecast.forecastday[0].hour[23].condition.icon}/>
              <span className='temperatura-daily'>{weatherData.forecast.forecastday[0].hour[23].temp_c} °</span>
            </ConjuntoDaily>
          
            
          </Daily>
        </DailyArea>

        
    </Container>
  )
}

export default WeatherCity