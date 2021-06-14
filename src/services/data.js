import http from "../http-common";

const dataServices = {
    async getAllPeople() {
        let allElements = [];
        let response = {};
        for(var i = 1; i <= 2; i++){
            response = await http.get(`people/?page=${i}`);
            response.data.results.map(r => allElements.push(r))
        }
        return allElements;
    },
    async getAllPlanets() {
        let allElements = [];
        let response = {};
        for(var i = 1; i <= 2; i++){
            response = await http.get(`planets/?page=${i}`);
            response.data.results.map(r => allElements.push(r))
        }
        return allElements;
    },
    async getAllStarships() {
        let allElements = [];
        let response = {};
        for(var i = 1; i <= 2; i++){
            response = await http.get(`starships/?page=${i}`);
            response.data.results.map(r => allElements.push(r))
        }
        return allElements;
    }
};

export default dataServices;