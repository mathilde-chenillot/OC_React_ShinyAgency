/* eslint-disable linebreak-style */
import {
  useContext,
} from 'react';
import {
  useParams, Link, Navigate,
} from 'react-router-dom';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';
import colors from '../../utils/style/color';
import { SurveyContext } from '../../utils/context/surveyContext';
import { useFetch } from '../../utils/hooks/useFetch';
import { useTheme } from '../../utils/hooks/useTheme';

// styled component

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const QuestionContent = styled.span`
  margin: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
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
  background-color: ${({ theme }) => (theme === 'light' ? colors.backgroundLight : colors.backgroundDark)};
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

  const { answers, saveAnswers } = useContext(SurveyContext);

  const { theme } = useTheme();

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

          <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
          <QuestionContent theme={theme}>
            {surveyData && surveyData[questionNumberInt]}
          </QuestionContent>

          {/* display answer if exists */}
          { answers && (

          <ReplyWrapper>
            <ReplyBox
              onClick={() => saveReply(true)}
              isSelected={answers[questionNumber] === true}
              theme={theme}
            >
              Oui
            </ReplyBox>
            <ReplyBox
              onClick={() => saveReply(false)}
              isSelected={answers[questionNumber] === false}
              theme={theme}
            >
              Non
            </ReplyBox>
          </ReplyWrapper>
          )}

          <LinkWrapper theme={theme}>
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
