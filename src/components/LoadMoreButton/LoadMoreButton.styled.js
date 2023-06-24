import styled from "@emotion/styled";



export const Button= styled.button`
 align-items: center;
  appearance: none;
  background-color: #3EB2FD;
  margin-left:30px;
  margin-right:30px;
  background-image: linear-gradient(1deg, #4F58FD, #149BF3 99%);
  background-size: calc(100% + 20px) calc(100% + 20px);
  border-radius: 100px;
  border-width: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-flex;
  font-family: CircularStd,sans-serif;
  font-size: 1.8rem;
  height: auto;
  justify-content: center;
  line-height: 1.8;
  padding: 16px 40px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color .2s,background-position .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  &:active,
  &:focus {
  outline: none;
}
&:hover {
  background-position: -20px -20px;
  color:#abccdc;
}

&:not(:active) {
  box-shadow: rgba(40, 170, 255, 0.25) 0 0 0 .125em;
}
`;