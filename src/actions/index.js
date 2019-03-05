import placeholder from "../api/placeholder"

export const fetchPosts = () => {
	return async dispatch => {
		const response = await placeholder.get("/posts")

		dispatch({ type: "FETCH_POSTS", payload: response })
	}
}
