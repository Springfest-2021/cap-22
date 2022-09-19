import axios from 'axios'
export const HTTP = axios.create({
    baseURL: 'https://mainapi.springfest.in',
});

export const setHeaders = (token, email, name) => {
    localStorage.setItem('token', token);
    localStorage.setItem("email",email);
    localStorage.setItem("name", name);
    localStorage.setItem("pic", 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
};
