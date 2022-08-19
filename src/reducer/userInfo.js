const initialState = {
    email: "none",
    userId: "none", 
    accessToken: "none",
    refreshToken: "none",
    role : "none"
}
const userInfo = (state = initialState, action) => {   
    switch(action.type){
        case 'userInfo/Update': return {
            ...action.payload,
        }
        default: return state;
    }
}
export default userInfo;