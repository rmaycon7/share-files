export default {
    SET_USER: (state, user) => {
        let {
            email,
            id
        } = user
        state.email = email
        state.id = id
    }
}