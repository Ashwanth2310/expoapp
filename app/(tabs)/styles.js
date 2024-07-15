// styles.js
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 16px;
  background-color: #fff;
`;

export const TitleContainer = styled.View`
  margin-bottom: 16px;
`;

export const TeamContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;
export const TeamCard = styled.View`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  shadow-offset: 0 2px;
  elevation: 2;
`;
export const TeamName = styled.Text`
  font-size: 18px;
  color: #333; /* Change this color to whatever you want */
`;
