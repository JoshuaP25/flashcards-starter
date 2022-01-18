import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

const quizzes = { quizzes: {} };

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: quizzes,
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds
            }
        }
    }
});

export const createNewQuiz = (payload) => {
    const {name,topicId,cardIds,id} = payload;
    return (dispatch) => {
      // dispatch multiple actions here
      dispatch(addQuiz({ id, name, topicId, cardIds}));
      dispatch(addQuizId({ quizId: id, topicId: topicId }));
    };
}

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
