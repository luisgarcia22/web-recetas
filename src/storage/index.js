import { createStore } from 'vuex'
import router from '../router'

const storage = createStore({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setAuthenticated(state, value) {
            state.isAuthenticated = value;
        },
        logout(state)
        {
            router.push('/Login');
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            
        }
    }

});


export default storage