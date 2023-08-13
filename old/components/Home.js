import React from 'react';
import Questions from './Quesations/Questions';
import AnswersProvider from '../context/AnswersProvider'
import { HairQuestions } from './HairQuestions';

export const Home = () => {
	return(
		<div>
			<AnswersProvider>		
				<HairQuestions />
			</AnswersProvider>
		</div>
	);
}

export default Home;