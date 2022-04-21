/* eslint-disable linebreak-style */
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

import { useFetch } from '../../utils/hooks/useFetch';
import { useTheme } from '../../utils/hooks/useTheme';
import colors from '../../utils/style/color';
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
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function Freelances() {
  const { theme } = useTheme();
  const { data, isDataLoading, error } = useFetch('http://localhost:8000/freelances');
  const { freelancersList } = data;

  if (error) {
    return <span>Il y a un problème</span>;
  }

  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
      {
          isDataLoading ? (
            <LoaderWrapper>
              <ThreeDots color="#00BFFF" height={50} width={50} visible={isDataLoading} />
            </LoaderWrapper>
          )
            : (
              <CardsContainer>
                {
                  freelancersList.map((profile) => (
                    <Card
                      key={profile.id}
                      label={profile.job}
                      picture={profile.picture}
                      title={profile.name}
                    />
                  ))
                }
              </CardsContainer>
            )
        }
    </div>
  );
}

export default Freelances;
