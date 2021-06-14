import * as types from '@/store/mutations-types';
import dataServices from '../../services/data';


const _state = {
    people: [],
    planets: [],
    starships: []
};

const _getters = {
    getAllPeople: state => state.people,
    getAllPlanets: state => state.planets,
    getAllStarships: state => state.starships
};

const _actions = {
    async fetchAllPeople({
        commit
    }) {
        const result = await dataServices.getAllPeople();
        commit(types.SET_RESULT_ALL_PEOPLE, {
            result
        });
    },
    async fetchAllPlanets({
        commit
    }) {
        const result = await dataServices.getAllPlanets();
        commit(types.SET_RESULT_ALL_PLANETS, {
            result
        });
    },
    async fetchAllStarships({
        commit
    }) {
        const result = await dataServices.getAllStarships();
        commit(types.SET_RESULT_ALL_STARSHIPS, {
            result
        });
    }
};

const _mutations = {
    [types.SET_RESULT_ALL_PEOPLE](state,
        dataResult
    ) {
        state.people = dataResult.result ? dataResult.result : [];
    },
    [types.SET_RESULT_ALL_PLANETS](state,
        dataResult
    ) {
        state.planets = dataResult.result ? dataResult.result : [];
    },
    [types.SET_RESULT_ALL_STARSHIPS](state,
        dataResult
    ) {
        state.starships = dataResult.result ? dataResult.result : [];
    }
};

export default ({
    state: _state,
    getters: _getters,
    actions: _actions,
    mutations: _mutations
});