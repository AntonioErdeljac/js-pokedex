import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styled = {
  Card: styled(Card)`
    cursor: pointer;
    img {
      transition: 0.2s padding;
    }

    &:hover {
      img {
        padding: 16px !important;
      }
    }
  `,
};

export default Styled;
