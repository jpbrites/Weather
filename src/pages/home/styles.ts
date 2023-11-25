import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
 
  `;

export const AreaInput = styled.div`

  width: 550px;
  height: 55%;
  background: linear-gradient(163deg, #5b39ba 0%, #11AEE2 50%, #0DF4B8 100%);
  border-radius: 15px;   
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s ease;
  .title-1{
    font-size: 31px;
    font-family: var(--font-family);
    font-weight: bold;
    color: white;
  }
  .title-2{
    padding-top: 23px;
    font-size: 19px;
    font-family: var(--font-family);
    text-align: center;
    color: white;
  }
`;

export const InputCidade = styled.input`

  width: 50%;
  margin-top: 100px;

  padding-bottom: 8px;
  font-size: 18px;
  font-family: var(--font-family);
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white; /* Cor e largura da borda inferior */
  outline: none; /* Remove a borda ao clicar no input */
  color: white;
  text-align: center; 

  &::placeholder {
    color: white; /* Cor desejada para o texto do placeholder */
  }
`;

export const ButtonPesquisar = styled.button`
  margin-top: 100px;
  width: 170px;
  height: 42px;
  background-color: transparent;
  border: 2px solid white;
  font-family: var(--font-family);
  font-weight: 600;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;

`;