import placeholder from "../api/placeholder"

export const fetchPosts = () => {
	return async dispatch => {
		const response = await placeholder.get("/posts")

		dispatch({ type: "FETCH_POSTS", payload: response.data })
	}
}

export const fetchUser = id => {
	return async dispatch => {
		const response = await placeholder.get(`/users/${id}`)

		dispatch({ type: "FETCH_USER", payload: response.data.name })
	}
}
