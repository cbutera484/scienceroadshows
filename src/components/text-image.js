import styled from "styled-components";
import Img from "react-image";

const TextImage = styled( Img )`
  border-radius: 30px;
  background-color: #ccc;
  max-width: 50%;

  float: right;
  height: auto;
  width: auto;
  margin: 20px;
  display: block;
  box-shadow: 3px 7px 14px #666;
`;

export default TextImage;
