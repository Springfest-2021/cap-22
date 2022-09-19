import { Container } from 'unstated';

const initialState = () => ({
    appId: "1135456736527794",
    messageToken: "",
    registerStatus: false,
    login: 0,
    ideas: [],
    scoresheet: [],
    notifications: [],
    profile: [],
    messages: [],
    score: 0,
    cas: [],
    messageCount: 0
})

export default class LandingStore extends Container{
    name = "LandingStore";
    state = initialState();
    init = () => {
        
    }
    linkedStores = {}

    bindStore = store => {
        this.linkedStores[store.name] = store;
    }
}