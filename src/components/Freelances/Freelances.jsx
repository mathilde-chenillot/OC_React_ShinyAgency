/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import colors from '../../utils/style/color';
import DefaultPicture from '../../assets/profile.png';
import Card from '../Card/Card';

const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
];

function Freelances() {
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
      <CardsContainer>
        {
        freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))
      }
      </CardsContainer>
    </div>
  );
}

export default Freelances;
