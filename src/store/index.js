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
            ],
            userInfo:{
                id: 'abc1234', 
                birthday: '01/01', 
                gender: 'M/F', 
                email: 'sample@gmail.com',
                wallet: '0xNJ0R8M5SR8FGSRNYH08SR8NSFS0RY8',
                tokenAmount: 2000
                    // private String id;
                    // private String birthday;
                    // private String gender; 
                    // private String email;
            },
            userAddInfo:{
                name: null,
                birthYear: null,
                phone1: null,
                phone2: null,
                phone3: null,
                // zipCode: null,
                residence: null,
                job: null,
                married: null,
                academic: null,
                income: null,
                regDate: null
            },
            ongoingList:[
                {reward: 120, title: '첫번째 서베이의 타이틀', subtitle: '서베이에대한 간단한 설명', remainRe: 5, tillClose: 7, regDate: '2021.09.23', commentCount: 11, likeCount:33},
                {reward: 110, title: '두번째 서베이의 타이틀', subtitle: '서베이에대한 간단한 설명', remainRe: 3, tillClose: 2, regDate: '2021.09.23', commentCount: 12, likeCount:32},
                {reward: 100, title: '세번째 서베이의 타이틀', subtitle: '서베이에대한 간단한 설명', remainRe: 15, tillClose: 4, regDate: '2021.09.23', commentCount: 1, likeCount:3},
            ]
                // private String name; #실명
                // private String birthYear; #출생연도
                // private String phone1; #010
                // private String phone2; #9028
                // private String phone3; #5863
                // private String zipCode; #우편번호
                // private String residence; #거주지
                // private String job; #직업
                // private boolean married; #결혼유무
                // private String academic; #최종학력
                // private int income; #수입
                // private String wallet; #지갑주소
                // private Timestamp regDate; #등록일
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