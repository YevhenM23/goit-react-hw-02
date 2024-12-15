import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'


function App() {
  const [feedback, setFeedback] = useState({
	good: 0,
	neutral: 0,
	bad: 0
  });

  useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (storedFeedback && typeof storedFeedback === 'object') {
      setFeedback(storedFeedback);
    }
  }, []);
    

  useEffect(() => {
    if (feedback.good || feedback.neutral || feedback.bad) {
      localStorage.setItem('feedback', JSON.stringify(feedback));
    }
  }, [feedback]);

    
  
  
 const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));}
    
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

return (
    <>
      <Description />
      <Options handleClick={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
      <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback } />) : (
          <Notification message="No feedback yet"/>
        )
      }
       
    </>
  )
}

export default App



