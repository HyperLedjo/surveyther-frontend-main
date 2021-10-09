import Vuex from 'vuex';
import Vue from 'vue';
import Axios from 'axios';
// import { isFinite } from 'core-js/library/fn/number';

Vue.use(Vuex);

const store = new Vuex.Store({
    // strict: true,
    state: {
        //유저관련
        isUser: null,
        userInfo: {
            //유저 기본정보
            id: 'abc1234',  //완료
            birthday: '01/01',   //완료
            gender: 'M/F',  //완료
            email: 'sample@gmail.com',  //완료
            wallet: '0xNJ0R8M5SR8FGSRNYH08SR8NSFS0RY8',   //블록체인과 연결 필요@@@@
            tokenAmount: 2000   //블록체인과 연결 필요@@@@
            // private String id;
            // private String birthday;
            // private String gender; 
            // private String email;
        },
        userAddInfo: {
            //유저 추가정보
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
        //서베이 작성 관련
        category: '',
        title: '',
        subtitle: '',

        questionData: [
            //서베이 작성시 질문들
            { questionId: 1, surveyId: null, content: null, isMultyple: false }, //제출시 서베이 아이디
            // {questionId: 2, surveyId: 1, content: null}
        ],
        choiceData: [
            //서베이 작성시 선택사항들
            { choiceId: 1, questionId: 1, content: null },
            { choiceId: 2, questionId: 1, content: null },
        ],

        tags: [
            // {tagId: 1, surveyId: null, content: '태그입니다'},
            // {tagId: 2, surveyId: null, content: '태그2'},
            // {tagId: 3, surveyId: null, content: 'js는'},
            // {tagId: 4, surveyId: null, content: '어렵다'},
            // {tagId: 5, surveyId: null, content: '어어어'},
            // {tagId: 6, surveyId: null, content: '어렵다'},
            // {tagId: 7, surveyId: null, content: '어아ㅏ'},
            // {tagId: 8, surveyId: null, content: '어렵다'},
        ],
        targetAmount: '',
        paymAmount: '',
        closingDate: '',
        //---------------------서베이 데이터(샘플)-------------------------
        selectedCategory: '',
        surveyAllData: [
            // {
            //     surveyId: 1,
            //     userId: 'user_id_1',
            //     category: '부동산',
            //     title: '첫 부동산 서베이 샘플 입니다',
            //     subtitle: '서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다',
            //     targetAmount: 100,
            //     currentAmount: 0,
            //     regDate: '2021.09.24',
            //     closingDate: '2021.10.01',
            //     paymAmount: 1000,
            //     commentCount: 0,
            //     likeCount: 0,
            //     status: '진행중',//---
            //     isMine: false,
            // },
            // {
            //     surveyId: 2,
            //     userId: 'user_id_1',
            //     category: '부동산',
            //     title: '두번째 마감된 부동산 서베이 샘플 입니다',
            //     subtitle: '서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다',
            //     targetAmount: 100,
            //     currentAmount: 0,
            //     regDate: '2021.09.14',
            //     closingDate: '2021.09.21',
            //     paymAmount: 1000,
            //     commentCount: 0,
            //     likeCount: 0,
            //     status: '마감',//---
            //     isMine: false,
            // },
            // {
            //     surveyId: 3,
            //     userId: 'user_id_1',
            //     category: '부동산',
            //     title: '세번째 부동산 서베이 샘플 입니다',
            //     subtitle: '서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다',
            //     targetAmount: 100,
            //     currentAmount: 0,
            //     regDate: '2021.09.24',
            //     closingDate: '2021.10.01',
            //     paymAmount: 1000,
            //     commentCount: 0,
            //     likeCount: 0,
            //     status: '진행중',//---
            //     isMine: false,
            // },
            // {
            //     surveyId: 4,
            //     userId: 'user_id_1',
            //     category: '유통',
            //     title: '유통 서베이 샘플 입니다',
            //     subtitle: '서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다',
            //     targetAmount: 100,
            //     currentAmount: 0,
            //     regDate: '2021.09.24',
            //     closingDate: '2021.10.01',
            //     paymAmount: 1000,
            //     commentCount: 0,
            //     likeCount: 0,
            //     status: '진행중',//---
            //     isMine: false,
            // },
        ],
        // currentAmount:'',
        //---------------------이하 샘플-------------------------
        ongoingList: [//TempTempTemp 서베이 참여페이지 리스트
            { reward: 120, title: '첫번째 서베이의 타이틀', subtitle: '서베이에대한 간단한 설명', remainRe: 5, tillClose: 7, regDate: '2021.09.23', commentCount: 11, likeCount: 33 },
            { reward: 110, title: '두번째 서베이의 타이틀', subtitle: '서베이에대한 간단한 설명', remainRe: 3, tillClose: 2, regDate: '2021.09.23', commentCount: 12, likeCount: 32 },
            { reward: 100, title: '세번째 서베이의 타이틀', subtitle: '서베이에대한 간단한 설명', remainRe: 15, tillClose: 4, regDate: '2021.09.23', commentCount: 1, likeCount: 3 },
        ],
        surveyData: {//Temp 서베이 상세페이지
            surveyId: 1,
            userId: 'user_id_1',
            category: '부동산',    //Done
            title: '첫 서베이 샘플 입니다',    //Done
            subtitle: '서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다',    //Done
            form: "자유양식",
            targetAmount: 100,    //Done
            particAmount: 0,    //Done
            regDate: '2021.09.24',    //Done
            closingDate: '2021.10.01',
            paymAmount: 1000,
            commentCount: 0,     //Done
            likeCount: 0,     //Done
            status: '진행중',     //Done ---
        },
        surveyDatas: [//Temp 서베이 리스트 테스트
            {
                surveyId: 1,
                userId: 'user_id_1',
                category: '부동산',
                title: '첫 부동산 서베이 샘플 입니다',
                subtitle: '서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다',
                // form : "자유양식",
                targetAmount: 100,
                currentAmount: 0,
                regDate: '2021.09.24',
                closingDate: '2021.10.01',
                paymAmount: 1000,
                commentCount: 0,
                likeCount: 0,
                status: '진행중',//---
                isMine: false,
            },
            {
                surveyId: 2,
                state: '마감',
                regDate: '2021.09.14',
                userId: 'user_id_1',
                category: '부동산',
                title: '부동산222 서베이 샘플 입니다',
                subtitle: '서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다',
                quesCount: 2,
                question: '---------',
                tag: '---------',
                targetAmount: 100,
                particAmount: 0,
                closingDate: '2021.09.21',
                paymAmount: 1000,
                commentCount: 0,
                likeCount: 0,
                isMine: false,
            },
            {
                surveyId: 3,
                state: '진행중',
                regDate: '2021.09.24',
                userId: 'user_id_1',
                category: '부동산',
                title: '부동산333 서베이 샘플 입니다',
                subtitle: '서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다 서베이에 대한 간단한 소개내용입니다',
                quesCount: 2,
                question: '---------',
                tag: '---------',
                targetAmount: 100,
                particAmount: 0,
                closingDate: '2021.10.01',
                paymAmount: 1000,
                commentCount: 0,
                likeCount: 0,
                isMine: false,
            },


        ],
        //testCount: 1, //테스트용 
        tests: [ //테스트용 
            { id: 1, sample: 'one' },
            { id: 2, sample: 'two' },
            { id: 3, sample: 'three' }
        ],
        rewardshop: [//Temp!!!! 샘플
            { Id: 1, img: 'img/reward.jpg', comp: '스타벅스', product: '아이스 아메리카노 T', price: 4100 },
            { Id: 2, img: 'img/reward.jpg', comp: '이디야커피', product: '카페아메리카노 ICED(Extra)', price: 3200 },
            { Id: 3, img: 'img/reward.jpg', comp: '투썸플레이스', product: '아메리카노 (L)', price: 4600 },
            { Id: 4, img: 'img/reward.jpg', comp: '파리바게트', product: '아이스 아메리카노 (시그니처)', price: 3000 }
        ]
    },
    mutations: {
        kakaoLogin() {
            window.location.replace(
                "https://kauth.kakao.com/oauth/authorize?client_id=48500a0e0a3fae56b1ab1f039e7a5c71&redirect_uri=http://localhost:8082/oauth2/login&response_type=code"
            );
        },
        kakaoLogout() {
            window.location.replace(
                "https://kauth.kakao.com/oauth/logout?client_id=48500a0e0a3fae56b1ab1f039e7a5c71&logout_redirect_uri=http://localhost:8082/oauth2/logout"
            );
        },
        logIn(state, data) {
            state.isUser = true;
            state.userInfo.id = data.id;
            state.userInfo.email = data.email;
            state.userInfo.birthday = data.birthDay;
            state.userInfo.gender = data.gender;
        },
        logOut(state) {
            state.isUser = false;
        },
        updateSurveyData(state, data){
            for(let i = 0; i < data.length; i++){
                state.surveyAllData.push({
                    surveyId: data[i].no,
                    userId: data[i].memberId,
                    
                    category: null,
                    title: data[i].title,
                    subtitle: data[i].content,
                    targetAmount: data[i].goalParticipants,
                    currentAmount: data[i].currentParticipants,
                    regDate: data[i].regDate,
                    closingDate: data[i].deadline,
                    paymAmount: data[i].paid,
                    commentCount: data[i].comments,
                    likeCount: data[i].likes,
                    status: data[i].status,

                });
                if(data[i].category == '1')
                    state.surveyAllData[i].category = '부동산';
                else if(data[i].category == '2')
                    state.surveyAllData[i].category = '유통';
                else if(data[i].category == '3')
                    state.surveyAllData[i].category = '식음료';
                else if(data[i].category == '4')
                    state.surveyAllData[i].category = '관광';
                else if(data[i].category == '5')
                    state.surveyAllData[i].category = '금융';
                else if(data[i].category == '6')
                    state.surveyAllData[i].category = '정보통신';
                else if(data[i].category == '7')
                    state.surveyAllData[i].category = '보건의료';
                else if(data[i].category == '8')
                    state.surveyAllData[i].category = '공공정책';
                else if(data[i].category == '9')
                    state.surveyAllData[i].category = '커뮤니티';
                
                if(data[i].status == '0')
                    state.surveyAllData[i].status = '진행중';
                else if(data[i].status == '1')
                    state.surveyAllData[i].status = '마감';


            }
            // userId: 'user_id_1',      //"memberId":1,
            // category: '유통',        //"category":1,
            // title: '유통 서베이        //"title":"이렇고 저런 문제에 관하여2",
            // subtitle: '서베이에 대한 간단한 소        //"content":"이런 저런 문제가 있는데 어떻게 생각해요?2",
            // targetAmount: 100,        //"goalParticipants":100,
            // currentAmount: 0,        //"currentParticipants":0,
            // regDate: '2021.09.24',       //"regDate":"2021-10-08T05:18:23.000+00:00",
            // closingDate: '2021.10.01',        //"deadline":"2021-10-08",
            // paymAmount: 1000,        //"paid":1000.0,
            // commentCount: 0,       //"comments":0,
            // likeCount: 0,       //"likes":0,
            // status: '진행중',        //"status":0}

            // isMine: false,
            //---
            // {"no":3,
            //"fee":100.0,
        },
        rePushingQuestionId(state) {
            for (let i = 0; i < state.questionData.length; i++) {
                state.questionData[i].questionId = i + 1;
            }
            // console.log("---------@@@@@@@@@@@@-------" + state.questionData.length + "---------@@@@@@@@@@@@-------");
        },
        rePushingChoiceId(state) {
            for (let i = 0; i < state.choiceData.length; i++) {
                state.choiceData[i].choiceId = i + 1;
            }
        },
        mutatTitle(state, val, text) {//안먹음
            console.log(val + "----");
            state.questionData[val].content = text;
        },

        //-----------------------------------------------------------동기화---------------------------------------------------------------
        updateQuestion(state, content) {
            state.questionData[0].content = content;

        },
        updateTitle(state, content) {
            state.title = content;
        },
        updateSubtitle(state, content) {
            state.subtitle = content;
        },
        updateCategory(state, content) {
            state.category = content;
        },

        // updateTag(){
        //     //----
        // },
        updateTargetAmount(state, content) {
            state.targetAmount = content;
        },
        updateClosingDate(state, content) { //xx
            state.closingDate = content;
        },
        updatePaymAmount(state, content) {
            state.paymAmount = content;
        },

        //-----------------------------------------------------------TEST---------------------------------------------------------------
        updateCurrentFilter(state, selected) {
            state.selectedCategory = selected;
        }
    },
    actions: {

        logIn(context) {
            fetch("/oauth2/me").then(response => response.json()).then(
                data => {
                    if (data == null) {
                        context.commit('logOut');
                    } else {
                        context.commit('logIn', data);
                        fetch("/api/member/" + data.id)
                            .then(response => response.json())
                            .catch(err => {
                                const new_member = {
                                    id: data.id,
                                    birthDay: data.birthDay,
                                    gender: data.gender,
                                    email: data.email
                                };
                                const request = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(new_member)
                                }
                                console.log(new_member);
                                fetch("/api/member", request)
                                    .then(response => {
                                        response.json();
                                    })
                                    .then(data => console.log(data))
                                    .catch(error => console.log(error));
                            })
                    }
                }
            );
        },
        allSurvey(context){
            fetch("/api/survey").then(response => response.json()).then(
                data => {
                    // console.log("a", data)
                    context.commit('updateSurveyData', data);
                }
            );
        },
        postSurvey({commit, state}){
            fatch("/api/survey").them(response => response.json()).then(
                
            );

            console.log("clicked");
            console.log(state.questionData + "--");
            console.log(this.state.questionData + "-?-");
            // console.log(getters.getQuestion + "-----");
            // let temp = getters.getQuestion;
            // console.log(getters.getTargetAmount + "-----" + temp);
        }



    },
    getters:{
        getQuestion (state) { return state.questionData},
        getTargetAmount (state) { return state.targetAmount},
    }
});

export default store;