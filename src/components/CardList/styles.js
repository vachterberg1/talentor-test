import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 550px;
  background-color: red;
  padding: 16px;
  border-radius: 10px;
  overflow-y: scroll;
  background-color: #C0C0C0;
  margin-top: 25px;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
      width: 11px;
  }
  ::-webkit-scrollbar:horizontal {
      height: 11px;
  }
  ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 2px solid white; /* should match background, can't be transparent */
      background-color: rgba(0, 0, 0, .5);
      height: 50px;
  }
  ::-webkit-scrollbar-track { 
      background-color: #fff; 
      border-radius: 8px; 
  } 
  &:last-child{
    margin-bottom: 25px;
  }
`

export const ListCard =  styled.div`
background-color: #fff;
display: flex;
align-items: center;
padding: 20px;
border-radius: 10px;
`

export const ImageProduct = styled.img`
width: 130px;
height: 130px;
background-color: yellow;
margin: 0 20px;
border-radius: 50%;`

export const InfosProducts = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 50%;

h1 {
    font-size: 16px;
    color: #04183E;
    font-weight: bold;
  }

  span {
    font-size: 14px;
    text-align: start;
    color: #04183E;
    margin-right: 15px;
  }

  h2 {
    font-size: 16px;
    color: #04183E;
    font-weight: bold;
    margin-top: 15px;
  }
`

export const RatingInfo = styled.div`
  h1 {
    font-size: 16px;
    color: #04183E;
    font-weight: bold;
  }
  display: flex;
  align-items: flex-start;
  height: 100px;
`


  