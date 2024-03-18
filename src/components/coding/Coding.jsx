import "./Coding.scss";
import BinaryTree from '../binary-tree/BinaryTree';
import { Container } from '../../styled-components/StyledComponent';
import Focus from "../focus/Focus";
import Contenders from "../contenders/Contenders";

const Coding = () => {
  return (
    <div id="screen" className='coding__wrapper'>
      <Container>
        <BinaryTree />
        <Focus />
        <Contenders />
      </Container>
    </div>
  )
}

export default Coding