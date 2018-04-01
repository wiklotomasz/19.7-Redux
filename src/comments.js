import { CREATE_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actions';
import uuid from uuid;

export function comments(state = initialState, action) {
    switch(action.type) {

        case ADD_COMMENT:
           return [{
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state];

        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            })

        case EDIT_COMMENT:
            return Object.assign({}, state, { 
            	comments: [
                {
                    id: action.id,
                    text: action.text
                }
                , ...state]
			})

        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {...comment, votes: comment.votes + 1}
                }
                return comment;
            });

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
               if (comment.id === action.id) {
                    return {...comment, votes: comment.votes - 1}
                }
                return comment; 
            });

        default:
            return state
	}
}