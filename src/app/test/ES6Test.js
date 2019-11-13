//참고URL : 
//https://blueshw.github.io/2018/02/27/async-await/
//https://codevkr.tistory.com/54
//https://www.grapecity.com/blogs/implementing-modal-dialog-functions-promise-based-dialog-results-angular

//async-await 예제
const Promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise1 response');
            // reject('Promise1 error response');
        }, 1000);
    });
}

function Promise2(response) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise2 response after ' + response);
            // reject('Promise2 error response');
        }, 1000);
    });
}

const asyncAwaitCall = async () => {
    console.log('calling');
    try {
        let response = await Promise1();
        console.log("success : " + response);
        let response2 = await Promise2(response);
        console.log("success : " + response2);
    } catch (error) {
        console.log("error : " + error);
    }
    // expected output: 'resolved'
}

function promiseThenCall() {
    console.log('calling');
    Promise1()
        .then(response => {
            console.log("success : " + response)
            return Promise2(response)
        })
        .then(response2 => console.log("success : " + response2))
        .catch(error => {
            // 한 줄 짜리 then에서는 break point 를 잡을 수 없음. 디버깅이 어려움
            console.log("error : " + error);
        });
}

promiseThenCall();


