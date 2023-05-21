import { useSelector } from "react-redux";



export const checkAuthentication = () => {

    const redux_user = useSelector(store => store.user.value)
    
    if (!redux_user) {
        alert("login required.")
        return;
    }
}

