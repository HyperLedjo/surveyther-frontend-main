import Vuex from 'vuex';
import Vue from 'vue';
import Axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    // strict: true,
    state: {
        //---------------------------유저관련--------------------------
        isUser: true,
        loginAlert: false,
        userInfo: {
            //유저 기본정보
            no: '1',
            id: '123456',  //완료
            birthday: '01/01',   //완료
            gender: 'M/F',  //완료
            email: 'sample@gmail.com',  //완료
            wallet: '0x-------8FGSRNYH08SR8NSFS0RY8',   //블록체인과 연결 필요@@@@
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
        //---------------------------서베이 작성 관련---------------------------
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
            
        ],
        targetAmount: '',
        paymAmount: '',
        closingDate: '',
        isPaid: false,

        calculate:{
            firstReward: 0,
            secReward: 0,
            fee: 0,
        },
        //---------------------서베이접근-------------------------
        // surveyIndex: 0,
        //---------------------서베이 데이터-------------------------
        surveyAllData: [
                    // {surveyId: 11,
                    // userId: 24525,
                    
                    // category: '부동산',
                    // title: '타이틀타이틀',
                    // subtitle: '내용내용',
                    // targetAmount: 10,
                    // currentAmount: 0,
                    // regDate: '2021-01-01ABCDEE'.slice(0,10),
                    // closingDate:'2021-01-11ABCDEE',
                    // paymAmount: 3331,
                    // commentCount: 2,
                    // likeCount: 1,
                    // status: '진행중',}
        ],
        tagData:[

        ],
        // surveyQuestionData:[

        // ],
        // surveyAnswerData:[

        // ],
        //---------------------기타용도-------------------------
        isfailToPay: false, //for modal
        searchKeyword: '',
        //---------------------이하 샘플-------------------------
        
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
            state.userInfo.wallet = data.wallet;

            state.userAddInfo.name = data.name;
            state.userAddInfo.birthYear = data.birthYear;
            state.userAddInfo.phone1 = data.phone1;
            state.userAddInfo.phone2 = data.phone2;
            state.userAddInfo.phone3 = data.phone3;
            state.userAddInfo.residence = data.residence;
            state.userAddInfo.job = data.job;
            state.userAddInfo.married = data.married;
            state.userAddInfo.academic = data.academic;
            state.userAddInfo.income = data.income;
        },
        getNumOfUser(state, data){
            state.userInfo.no = data.no;
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
                    regDate: data[i].regDate.slice(0,10),
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

                fetch('/api/tag/' + data[i].no).then(response => response.json()).then(
                    data =>{
                        // console.log(data[i]);
    
                        for(let i = 0; i < data.length; i++){
                        state.tagData.push({
                            id: data[i].no,
                            surveyId: data[i].surveyId,
                            content: data[i].content,
                        });
                        }
                    }
                );

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
        rewardCalculator(state){
        //리워드계산기
            state.calculate.fee = state.paymAmount * 0.02;
            state.calculate.firstReward = (state.paymAmount - state.calculate.fee) * 0.4 / state.targetAmount;
            state.calculate.secReward = (state.paymAmount - state.calculate.fee) * 0.6 / state.targetAmount;
        },
        //
        IsfailToPayTrue(state){
            state.isfailToPay = true;
        },
        IsfailToPayFalse(state){
            state.isfailToPay = false;
        },
        editCategory(state, val){
            state.category = val;
        }
        // SearchSurvey(state){
        //     state.searchKeyword = 'changed!!!';
        //     console.log(state.searchKeyword + " ?");
        // }
        

        //-----------------------------------------------------------TEST---------------------------------------------------------------
        
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
                            .then(data => { context.commit('getNumOfUser', data); })
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
            fetch(`/api/survey`).then(response => response.json()).then(
                data => {
                    // console.log("a", data)
                    context.commit('updateSurveyData', data);
                }
            );
            
        },
        async postSurvey({state, commit}){

            var IMP = window.IMP;
            IMP.init('imp43832818');
            IMP.request_pay({
                pg: 'kakaopay',
                pay_method: 'card',
                merchant_uid: 'merchant_' + new Date().getTime(),
                name: state.title,
                amount: state.paymAmount,
                // buyer_email: 'alskim93@kakao.com',
                // buyer_name: 'test',
                // buyer_tel: '010-9028-5863',
                // buyer_addr: "서울특별시 성북구 정릉동",
                // buyer_postcode: "123-456"
            }, async function(resp) {
                if(resp.success) {
                    await fetch('/api/payments/' + resp.imp_uid, {
                        method: "POST"
                    })
                    .then(response => response.json())
                    .then(async data => {
                        if(data.response.amount === resp.paid_amount) {
                            let request = {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(
                                    {
                                        memberId: 1,
                                        paymentType: data.response.payMethod,
                                        paidAmount: data.response.amount
                                    }
                                )
                            }
                            await fetch('/api/payments', request)
                            .then(response => response.json())
                            .then(data => {
                                console.log("paid result: ", data);
                                console.log("isPaid1: ", state.isPaid);
                                if(0 !== data) {
                                    state.isPaid = true;
                                }
                                console.log("isPaid2: ", state.isPaid);
                            });

                            if(state.isPaid) {
                                let category_id = 0;
                                await fetch("/api/category")
                                .then(response=>response.json())
                                .then(data=> {
                                    data.forEach(element => {
                                        if(state.category === element.name) {
                                            category_id = element.no;
                                        }
                                    });
                                });    
                                const new_survey = {
                                    memberId: '1', 
                                    category: category_id,
                                    title: state.title,
                                    content: state.subtitle,
                                    goalParticipants: state.targetAmount,
                                    deadline: state.closingDate,
                                    paid: state.paymAmount,
                                    fee: state.calculate.fee
                                }
                                let request = {
                                    method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(new_survey)
                                }
                                var survey_id = 0;
                                var new_question_list = [];
                                await fetch("/api/survey", request)
                                .then(response => response.json())
                                .then(data => {
                                    survey_id = data;
                                    state.questionData.forEach(
                                        element => {
                                            new_question_list.push(
                                                {
                                                    surveyId: survey_id,
                                                    content: element.content
                                                }
                                            )
                                        }
                                    );
                                    request.body = JSON.stringify(new_question_list);
                                });
                                var question_id = []; // 필터링된 Response Data 저장 공간 선언 및 초기화
                                // /api/question에 new_question_list가 포함된 request 전달해 서버에 질문 등록 처리 요청 (POST)
                                await fetch("/api/question", request)
                                .then(response => response.json())
                                .then(data => {
                                    data.forEach(element => {
                                        question_id.push(
                                            element.no
                                        );
                                    });
                                    // request.body = JSON.stringify(question_id);
                                });
                                // Answer List 등록
                                var new_answer_list = [];
                                for(var i=1; i<=question_id.length; i++) {
                                    for(var j=0; j<state.choiceData.length;j ++) {
                                        if(i === state.choiceData[j].questionId) {
                                            new_answer_list.push(
                                                {
                                                    questionId: question_id[i-1],
                                                    content: state.choiceData[j].content
                                                }
                                            );
                                        }
                                    }
                                }
                                request.body = JSON.stringify(new_answer_list);
                                await fetch('/api/answer', request);
                                // .then(response => response.json())
                                // .then(data => {
                                //     console.log(data);
                                // });
                    
                                // 태그(Tag) 등록
                                state.tags.forEach(element => {
                                    element.surveyId = survey_id;
                                });
                                request.body = JSON.stringify(state.tags);
                                await fetch('/api/tag', request);
                                // .then(response => response.json())
                                // .then(data => {
                                //     console.log(data);
                                // });
                    
                                // 보상(Reward) 등록
                                var reward = {
                                    surveyId: survey_id,
                                    reward1: state.calculate.firstReward * state.targetAmount,
                                    reward2: state.calculate.secReward * state.targetAmount
                                }
                                request.body = JSON.stringify(reward);
                    
                                await fetch('/api/reward', request)
                                .then(response=>response.json)
                                .then(data=>{
                                    console.log("post survey result: ", data)
                                    // if(0 !== data) window.location.href='http://localhost:8081/';
                                });
                            }
                        }
                    });
                    // var msg = "결제 완료!";
                    // msg += '고유 ID: ' + response.imp_uid;
                    // msg += '상점 거래 ID: ' + response.merchant_uid;
                    // msg += '결제 금액: ' + response.paid_amount;
                    // msg += '승인 번호: ' + response.apply_num;
                } else {
                    console.log(resp);
                    // window.alert("fail");
                    commit('IsfailToPayTrue');
                    
                    
                }
            })

            /*
            *
            * Author: KimH4nKyul
            * Comment: 아래 `/api/choice`에 request 보낸 fetch 로직은 제거하지 마세요.
            * 
            */
            // var new_answer_list = [];
            // await fetch('/api/choice', request)
            // .then(response => response.json())
            // .then(data => {
            //     for(var i=0; i < data.length; i++) {
            //         // console.log("test", data[i]);
            //         new_answer_list.push(
            //             {
            //                 choiceId: data[i]["no"],
            //                 content: state.choiceData[i].content
            //             }
            //         )
            //     }
            //     request.body = JSON.stringify(new_answer_list);
            // });

            // console.log( "title: " + state.title );
            // console.log( "content: " + state.subtitle );
            // console.log( "category: " + state.category );
            // console.log( "questions: " + JSON.stringify(state.questionData));
            // console.log( "choice: " + JSON.stringify(state.choiceData));
            // console.log( "tags: " + JSON.stringify(state.tags));
            // console.log( "targetAmount: " + state.targetAmount );
            // console.log( "paymAmount: " + state.paymAmount );
            // console.log( "closingDate: " + state.closingDate );
        },

        
    },
    getters:{
        getsurveyAnswerDataByQusetId: (state) =>(id) =>{
            return state.surveyAnswerData.filter( answer => answer.questionId === id)
        },
        getsurveyIndexBySurveyId: (state) =>(surveyid) =>{
            return state.surveyAllData.filter( data => data.surveyId == surveyid)
        },
        
    //     getQuestion (state) { return state.questionData},
    //     getTargetAmount (state) { return state.targetAmount},
    }
});

export default store;