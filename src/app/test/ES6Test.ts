
/**
 * Typescript 예제 테스트 파일
 * 
 * 실행 명령어 :
 * node -r ts-node/register ES6Test.ts 
 * 
 */



/**
 * 예제
 * async-await
 * 참고URL : 
 * https://blueshw.github.io/2018/02/27/async-await/
 * https://codevkr.tistory.com/54
 * https://www.grapecity.com/blogs/implementing-modal-dialog-functions-promise-based-dialog-results-angular
 */
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

// promiseThenCall();



/**
 * 예제
 * Call by value(값에 의한 호출)는 인자로 받은 값을 복사하여 처리를 한다. 
 * Call by reference(참조에 의한 호출)는 인자로 받은 값의 주소를 참조하여 직접 값에 영향을 준다. 
 * 간단히 말해 값을 복사를 하여 처리를 하느냐, 아니면 직접 참조를 하느냐 차이인 것이다.
 */

let inputData = ['1', '2', '3', '4', '5']
let outputData = []


const callByReferenceAndValueTest = (input) => {

    outputData = input
    // outputData = JSON.parse(JSON.stringify(input))
    outputData.push('11')

}

// callByReferenceAndValueTest(inputData)
// console.log("inputData : " + JSON.stringify(inputData))
// console.log("outputData : " + JSON.stringify(outputData))



/**
 * 예제
 * getter, setter function 
 */

let passcode = "secret passcode";
class Employee {
    private _fullName: string = "홍길동";
    constructor() { }

    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

