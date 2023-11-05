import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const ButtonClose = styled.button`
  display: inline-block;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 70px;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: teal;
    border-radius: 160px;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: darkTeal;
    transition: all 0.3s;
    border-radius: 160px;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Info = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;
