/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import {
  useParams, Link, Navigate,
} from 'react-router-dom';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';
import colors from '../../utils/style/color';

// styled component

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = Number(questionNumber);

  const [surveyData, setSurveyData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSurvey() {
      try {
        const response = await fetch('http://localhost:8000/survey');
        const { surveyData } = await response.json();
        setSurveyData(surveyData);
        setIsDataLoading(false);
        setError(false);
      }
      catch (err) {
        console.log(error);
        setError(true);
        setSurveyData({});
      }
      finally {
        setIsDataLoading(false);
      }
    }
    fetchSurvey();
  }, []);

  return (
    <SurveyContainer>

      { isDataLoading ? (
        // Loader
        <ThreeDots color="#00BFFF" height={50} width={50} visible={isDataLoading} />
      ) : (
        // If error, don't display the code and display span
        error ? (
          <span>Il y a un problème</span>
        ) : (
          <SurveyContainer>

            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            <QuestionContent>{surveyData[questionNumberInt]}</QuestionContent>

            <LinkWrapper>
              {/* hide previous button if question is 1 */}
              {
              questionNumberInt > 1 && <Link to={`/survey/${questionNumberInt - 1}`}>Précédent</Link>
            }
              {/* hide next button if question is undefined */}
              {
              surveyData[questionNumberInt + 1]
                ? <Link to={`/survey/${questionNumberInt + 1}`}>Suivant</Link>
                : <Link to="/results">Résultats</Link>
            }
              {/* if question doesn't exist, redirect to 404. If question is < 1 or > 6 */}
              {
              (questionNumberInt < 1 || questionNumberInt > 6) && <Navigate to="*" />
            }
            </LinkWrapper>
          </SurveyContainer>
        )
      )}
    </SurveyContainer>
  );
}

export default Survey;
