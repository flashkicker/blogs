import _ from "lodash"
import placeholder from "../api/placeholder"

export const fetchPostsAndUsers = () => {
	return async (dispatch, getState) => {
		await dispatch(fetchPosts())

		const userIds = _.uniq(_.map(getState().posts, "userId"))
		userIds.forEach(id => {
			dispatch(fetchUser(id))
		})

		// alternate implementation of the above using lodash
		// _.chain(getState().posts)
		// 	.map('userId')
		// 	.uniq()
		// 	.forEach((id) => { dispatch(fetchUser(id)) })
		// 	.execute()
	}
}

export const fetchPosts = () => {
	return async dispatch => {
		const response = await placeholder.get("/posts")
		// Shuffle array
		const shuffledArray = response.data.sort(() => 0.5 - Math.random());

		// Get sub-array of first 10 elements after shuffling
		let selected = shuffledArray.slice(0, 10);

		dispatch({ type: "FETCH_POSTS", payload: selected })
	}
}

export const fetchUser = id => {
	return async dispatch => {
		const response = await placeholder.get(`/users/${id}`)

		dispatch({ type: "FETCH_USER", payload: response.data })
	}
}

// export const fetchUser = id => {
// 	return dispatch => {
// 		_fetchUser(id, dispatch)
// 	}
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await placeholder.get(`/users/${id}`)

// 	dispatch({ type: "FETCH_USER", payload: response.data })
// })
