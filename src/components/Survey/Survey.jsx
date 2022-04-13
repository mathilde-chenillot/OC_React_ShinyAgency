/* eslint-disable linebreak-style */
import {
  useParams, useNavigate, Link, Navigate,
} from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = Number(questionNumber);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question {questionNumber}</h2>

      <div>
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
          questionNumberInt === 10 && <button type="button" onClick={() => navigate('/results')}>Résultats</button>
          // <Link to="results">Résultats</Link>
        }
        {/* if question doesn't exist, redirect to 404. If question is < 1 or > 10 */}
        {
          (questionNumberInt < 1 || questionNumberInt > 10) && <Navigate to="*" />
        }
      </div>
    </div>
  );
}

export default Survey;
