/* eslint-disable linebreak-style */
import {
  useState, useEffect, useContext,
} from 'react';
import {
  useParams, Link, Navigate,
} from 'react-router-dom';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';
import colors from '../../utils/style/color';
import { SurveyContext } from '../../utils/context/surveyContext';
import { useFetch } from '../../utils/hooks/useFetch';

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

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) => (props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none')};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

// Component

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = Number(questionNumber);

  // const [surveyData, setSurveyData] = useState({});
  // const [isDataLoading, setIsDataLoading] = useState(true);
  // const [error, setError] = useState(null);

  const { answers, saveAnswers } = useContext(SurveyContext);

  const saveReply = (answer) => {
    saveAnswers({ [questionNumber]: answer });
  };

  const { data, isDataLoading, error } = useFetch('http://localhost:8000/survey');
  const { surveyData } = data;

  if (error) {
    return <SurveyContainer>Il y a un problème</SurveyContainer>;
  }

  return (
    <SurveyContainer>

      { isDataLoading ? (
        // Loader
        <ThreeDots color="#00BFFF" height={50} width={50} visible={isDataLoading} />
      ) : (
        <SurveyContainer>

          <QuestionTitle>Question {questionNumber}</QuestionTitle>
          <QuestionContent>
            {surveyData && surveyData[questionNumberInt]}
          </QuestionContent>

          {/* display answer if exists */}
          { answers && (

          <ReplyWrapper>
            <ReplyBox
              onClick={() => saveReply(true)}
              isSelected={answers[questionNumber] === true}
            >
              Oui
            </ReplyBox>
            <ReplyBox
              onClick={() => saveReply(false)}
              isSelected={answers[questionNumber] === false}
            >
              Non
            </ReplyBox>
          </ReplyWrapper>
          )}

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
      )}
    </SurveyContainer>
  );
}

export default Survey;
