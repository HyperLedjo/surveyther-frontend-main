import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    // strict: true,
    state:{
        tests:[
            {id: 1, sample:'one'},
            {id: 2, sample:'two'},
            {id: 3, sample:'three'}
          ]
    },
    mutations:{

    },
    actions:{

    }
    // getters:{
    //     samples: (state, getters) => state.samples.filter(sam => sam.new >= 2)
    // }
});

export default store;