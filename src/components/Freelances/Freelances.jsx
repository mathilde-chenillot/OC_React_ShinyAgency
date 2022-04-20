/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';
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

function Freelances() {
  const [freelancesData, setFreelancesData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFreelances() {
      try {
        const response = await fetch('http://localhost:8000/freelances');
        const { freelancersList } = await response.json();
        setFreelancesData(freelancersList);
        setIsDataLoading(false);
        setError(false);
      }
      catch (err) {
        console.log('freelances error', err);
        setError(true);
        setFreelancesData([]);
      }
      finally {
        setIsDataLoading(false);
      }
    }
    fetchFreelances();
  }, []);

  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</PageSubtitle>
      <CardsContainer>
        {
          error && <span>Il y a un problème</span>
        }
        {
          isDataLoading ? <ThreeDots color="#00BFFF" height={50} width={50} visible={isDataLoading} />
            : (

              freelancesData.map((profile) => (
                <Card
                  key={profile.id}
                  label={profile.job}
                  picture={profile.picture}
                  title={profile.name}
                />
              ))
            )
        }
      </CardsContainer>
    </div>
  );
}

export default Freelances;
