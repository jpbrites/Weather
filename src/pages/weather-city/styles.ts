import styled from "styled-components";

export const Container = styled.div<{valor: boolean}>`

  width: 100vw;
  height: 100vh;
  padding-top: 20px;
  display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 1rem;
    justify-content: center;
    background-color: ${({valor}) => valor ? '#F5F5F5': '#0B131E'};


`;

export const WeatherArea = styled.div<{valor: boolean}>`
  width: auto;
  max-width: 460px;
  height: 50%;
  background-color: ${({valor}) => valor ? '#e6e8eb': '#161e29'};
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s ease;

  .clima{
    padding-top: 10px;
    font-family: var(--font-family);
    color: ${({valor}) => valor ? '#202B3B': 'white'};
    font-size: 16px;
  }

  .hora{
    font-family: var(--font-family);
    color:${({valor}) => valor ? '#202B3B': 'white'};
    font-size: 16px;
    padding-top: 5px;
  }
  .descricao-clima{
    font-family: var(--font-family);
    color: ${({valor}) => valor ? '#202B3B': 'white'};
    font-size: 21px;
  }

`;
export const TitleArea = styled.div<{valor: boolean}>`

  display: flex;
  flex-direction: row;
  align-items: center;
  
  .title{
    font-size: 49px;
    font-weight: bold;
    font-family: var(--font-family);
    color: ${({valor}) => valor ? '#202B3B': 'white'};
  }

  .subtitle{
    font-size: 27px;
    font-family: var(--font-family);
    color: ${({valor}) => valor ? '#202B3B': 'white'};
    padding-top: 0px;
  }

  img{
    
    padding-left: 15px;
    width: 130px;
    height: 130px;
  }

`;

export const TemperaturaArea = styled.div<{valor: boolean}>`

  display: flex;
  flex-direction: row;
  align-items: center;
  
  
  .temperatura_numero{
    font-family: var(--font-family);
    color: ${({valor}) => valor ? '#202B3B': 'white'};
    font-weight: 500;
    font-size:90px;
  }
`;

export const ConditionsArea = styled.div<{valor: boolean}>`
  width: auto;
  max-width: 420px;
  height: 50%;
  background-color: ${({valor}) => valor ? '#e6e8eb': '#161e29'};
  padding: 20px;
  display: flex;
  border-radius: 15px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s ease;

  
`;

export const BlockConditions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas com largura igual */
  grid-template-rows: auto auto; /* Duas linhas com altura automática */
  column-gap: 6rem;
  justify-content: center;
  div:nth-child(1) {
    margin-top: 1rem;
}
  div:nth-child(2) {
    margin-top: 1rem;
}
  div:nth-child(3) {

    margin-top: 2rem;
}
div:nth-child(4) {
  margin-top: 2rem;
}
align-items: flex-start;
`;

export const ConjuntoConditions = styled.div<{valor: boolean}>`
  display: flex;
  flex-direction: column;
  .icone-condition{
    color: ${({valor}) => valor ? '#202B3B': 'white'};
    
  }
  
  .name-condition{
    font-family: var(--font-family);
    font-size: 21px;
    padding-left: 10px;
    color: ${({valor}) => valor ? '#202B3B': 'white'};
  }
  .valor-condition{
    font-family: var(--font-family);
    font-size: 25px;
    font-weight: 600;
    color: ${({valor}) => valor ? '#202B3B': 'white'};
  } 
  .pq{
    padding-left: 8px;
  }

`;

export const ThreeDaysArea = styled.div<{valor: boolean}>`
  width: auto;
  max-width: 480px;
  height: 50%;
  background-color: ${({valor}) => valor ? '#e6e8eb': '#161e29'};
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s ease;
  
  align-items: flex-start;
  .title-3days{
    font-family: var(--font-family);
    font-size: 17px;
    font-weight: 600;
    color: ${({valor}) => valor ? '#202B3B': 'white'};
  }
  
`;

export const ThreeDays = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 1.1rem;

  
  
`;

export const ConjuntoDays = styled.div<{valor: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  
  
  .data-days{
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 17px;
    color: ${({valor}) => valor ? '#202B3B': 'white'};
    
  }

  .icon-days{
    width: 60px;
    height: auto;
    padding-left: 10px;
  }

  .description-days{
    font-family: var(--font-family);
    font-size: 16px;
    padding-left: 10px;
    color: ${({valor}) => valor ? '#202B3B': 'white'};
  }

  .temperatura-days{
    font-family: var(--font-family);
    font-size: 16px;
    padding-left: 25px;
    color: ${({valor}) => valor ? '#202B3B': 'white'};

  }

`;

export const DailyArea = styled.div<{valor: boolean}>`
  width: auto;
 
  height: 25%;
  background-color: ${({valor}) => valor ? '#e6e8eb': '#161e29'};
  padding: 20px;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s ease;
  .title-daily{
    font-family: var(--font-family);
    font-size: 17px;
    font-weight: 600;
    color: ${({valor}) => valor ? '#202B3B': 'white'};
  }
`;

export const Daily = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  padding-top: 2rem;
`;

export const ConjuntoDaily = styled.div<{valor: boolean}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 41px;
  .hour-daily{
    font-family: var(--font-family);
    font-size: 17px;
    color: ${({valor}) => valor ? '#202B3B': 'white'};
  }

  .icon-daily{
    width: 70px;
    height: auto;
  }

  .temperatura-daily{
    font-family: var(--font-family);
    font-size: 18px;
    color: ${({valor}) => valor ? '#202B3B': 'white'};
  }
 
`;

export const Divisoria = styled.div<{valor: boolean}>`
  width: 0.2px;
  height: 100%;
  background-color: ${({valor}) => valor ? 'rgba(0,0,0,0.5)': 'rgba(255,255,255,0.4)'};
  margin-right: 41px;

 
`;
