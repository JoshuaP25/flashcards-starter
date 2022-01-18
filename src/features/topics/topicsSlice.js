import { createSlice } from '@reduxjs/toolkit';

// {
//   topics: {
//     topics: {
//       '123': {
//         id: '123',
//         name: 'example topic',
//         icon: 'icon url',
//         quizIds: ['456']
//       }
//     }
//   },
//   quizzes: {
//     quizzes: {
//       '456': {
//         id: '456',
//         topicId: '123',
//         name: 'quiz for example topic',
//         cardIds: ['789', '101', '102']
//       }
//     }
//   },
//   cards: {
//     cards: {
//       '789': {
//         id: '789',
//         front: 'front text',
//         back: 'back text'
//       },
//       '101': {
//         id: '101',
//         front: 'front text',
//         back: 'back text'
//       },
//       '102': {
//         id: '102',
//         front: 'front text',
//         back: 'back text'
//       },
//     }
//   }
// }

const topics = { topics: {} };

const topicsSlice = createSlice({
    name: 'topics',
    initialState: topics,
    reducers: {
      //add a topic to topics object keyed by id and add quizIds property that has a value of an empty array.
      addTopic: (state, action) => {
        const { id, name, icon } = action.payload
        state.topics[id] = {
          id,
          name,
          icon,
          quizIds: []
        }
      },
      //add quiz id to topics quizIds property
      addQuizId: (state, action) => {
        
        const { quizId, topicId } = action.payload;
        state.topics[topicId].quizIds.push(quizId);
      }
    }
});


export const selectTopics = state => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
