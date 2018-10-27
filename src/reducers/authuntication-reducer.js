const initialState={
    email : '',
    password : '',
    user: {},
    error: '',
    loading: false
};

export default (state = initialState, action) =>{
    switch(action.type){
        case 'AUTH_INPUT_CHANGE':
            return { ...state, [action.payload.field]: action.payload.value};

        case 'LOADING':
            return { ...state, loading: true};
        case 'LOGIN_SUCESS':
        console.log("sucess");
            return {...state, user:action.payload, loading:false};
        
        case 'LOGIN_FAILURE':
        console.log("Failure");
            return {...state, error: 'AUTHUNTICATION FAILURE' , loading: false}

        default:
            return state;
    }
}