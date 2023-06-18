import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  font-size: 25px;
  padding-top: 10px;
`
export const Image = styled.img`
  height: 250px;
  width: 280px;
`

export const ImageElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`
export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  min-height: 50vh;
  min-width: 25vw;
  margin-left: 30px;
  border: 1px solid #334155;
  border-radius: 9px;
`
export const ButtonsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0px;
  margin-left: 1px;
  padding: 0px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 5px;
  margin-bottom: 0px;
  color: ${props => props.color};
`
export const HrLine = styled.hr`
  border: 1px solid #334155;
  width: 100%;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  resize: vertical;
  border: none;
  outline: none;
  font-family: 'Roboto';
  color: #f1f5f9;
  font-size: 16px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
