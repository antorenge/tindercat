import { FETCH_CATS, ADD_LIKE, ADD_DISLIKE } from './actionTypes';

export const fetchCats = () => dispatch => {
    let headers = { 'x-api-key': '2d8798c4-3822-4b44-b8a6-4e05e78d5a5a' };
    const url = 'https://api.thecatapi.com/v1/images/search?limit=20';

    fetch(url, { headers })
        .then((res) => res.json())
        .then(cats => dispatch({
            type: FETCH_CATS,
            payload: cats
        }));
};

export const addLike = (likedCat) => dispatch => {
    dispatch({ type: ADD_LIKE, id: likedCat.id, payload: likedCat });
};

export const addDislike = (dislikedCat) => dispatch => {
    dispatch({ type: ADD_DISLIKE, id: dislikedCat.id, payload: dislikedCat });
};