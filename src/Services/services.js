import {HTTP} from './config.js';
import axios from 'axios';

export const checkRegister = (data) => 
    HTTP.post('cap/user/checkregister', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        return res.data
    }).catch(err => {
        //console.log(err);
        return null;
    });

export const login = (data) => 
    HTTP.post('cap/user/login', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        return res.data
    }).catch(err => {
        //console.log(err);
        return null;
    });

export const getMessages = (data) => 
    HTTP.post('cap/messages/getforca', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        return res.data
    }).catch(err => {
        //console.log(err);
        return null;
    });

export const sendMessage = (data) => 
    HTTP.post('cap/messages/sendforadmin', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        return res.data
    }).catch(err => {
        //console.log(err);
        return null;
    });

export const getFacebookProfilePicture = (data) => 
    axios.get("https://graph.facebook.com/" + data.fb_link + "?fields=picture.width(1000).height(1000)&access_token=" + data.access_token).then(
        (response) => {
            return response;
        },
        (error) => {
            //console.log(error);
            return null;
        }
    ).catch(err => {
        //console.log(err);
        return null;
    })

export const facebookDataUser = (data) => 
    axios.get('https://graph.facebook.com/v3.1/springfest.iitkgp/posts?fields=object_id&limit=15&access_token=' + data).then(
        (response) => {
            //console.log(response);
            return response.data.data
        },
        (error) => {
            //console.log(error);
            return null;
        }
    ).catch(err => {
        //console.log(err);
        return null;
    })

export const facebookDataPosts = (id, data) => 
    axios.get('https://graph.facebook.com/v3.1/'+id+'/posts?limit=25&access_token='+data).then(
        (response) => {
           let id = response.data.data.map((post,index) => {
            return post.id.substring(post.id.indexOf("_")+1);
        })
        return id;
        }
    ).catch(err => {
        //console.log(err);
        return null;
      });

export const getNotifications = (data) => 
    HTTP.post('cap/notifications/get', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(
        (response) => {
            return response.data
        }
    ).catch(err => {
        //console.log(err);
        return null;
    });

export const getUserDetails = (data) => 
    HTTP.post('cap/user/alldata', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(
        (response) => {
            return response.data
        }
    ).catch(err => {
        //console.log(err);
        return null;
      });

export const getCollegeList = () => 
    HTTP.get('api/get_colleges', {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(
        (response) => {
            return response.data
        }
    ).catch(err => {
        //console.log(err);
        return null;
    });

export const userRegister = (data) => 
    HTTP.post('cap/user/register', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(
        (response) => {
            return response.data
        }
    ).catch(err => {
        //console.log(err);
        return null;
      });

export const addIdeas = (data) => 
    HTTP.post('cap/ideas/add', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(
        (response) => {
            return response.data
        }
    ).catch(err => {
        //console.log(err);
        return null;
    });

export const addVenue = (data) => 
    HTTP.post('cap/venue/add', data, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(
        (response) => {
            return response.data
        }
    ).catch(err => {
        //console.log(err);
        return null;
      });

export const getFBPosts = () => 
    HTTP.post('cap/posts/get_fbposts', {
        'Content-Type': 'application/json'
    }).then((response) => {
        return response.data;
    }).catch(err => {
        //console.log(err);
        return null;
    })

export const addContacts = (data) => 
    HTTP.post('cap/contacts/add', data, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(
        (response) => {
            return response.data
        }
    ).catch(err => {
        //console.log(err);
        return null;
    });

export const scoreboard = (data) => 
    HTTP.post('cap/scoreboard/addshare', JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(
        (response) => {
            return response.data
        }
    ).catch(err => {
        //console.log(err);
        return null;
      });

export const getCAlist = (data) => 
    HTTP.post('api/user/get_user_details', JSON.stringify(data), {
        headers: {
            "Content-Type" : "application/json"
        }
    }).then(
        (response) => {
            return response.data;
        }
    ).catch(err => {
        //console.log(err);
        return null;
    })
