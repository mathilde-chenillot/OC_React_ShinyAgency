/* eslint-disable linebreak-style */
import { useState, useEffect } from 'react';
import {
  useParams, Link, Navigate,
} from 'react-router-dom';
import styled from 'styled-components';
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

  useEffect(() => {
    fetch('http://localhost:8000/survey')
      .then((response) => response.json())
      .then((data) => {
        setSurveyData(data.surveyData);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log('questions', surveyData);

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      <QuestionContent>{surveyData[questionNumberInt]}</QuestionContent>

      <LinkWrapper>
        {/* hide previous button if question is 1 */}
        {
          questionNumberInt > 1 && <Link to={`/survey/${questionNumberInt - 1}`}>Précédent</Link>
        }
        {/* hide next button if question is 10 */}
        {
          questionNumberInt < 10 && <Link to={`/survey/${questionNumberInt + 1}`}>Suivant</Link>
        }
        {/* button result if question is 10 */}
        {
          questionNumberInt === 10 && <Link to="/results">Résultats</Link>
          // <Link to="results">Résultats</Link>
        }
        {/* if question doesn't exist, redirect to 404. If question is < 1 or > 10 */}
        {
          (questionNumberInt < 1 || questionNumberInt > 10) && <Navigate to="*" />
        }
      </LinkWrapper>
    </SurveyContainer>
  );
}

export default Survey;
