// 1번 문제 : 안녕하세요를 resultl에 출력
  const resultl = document.querySelector("#result1");
  function printText() {
  result1.innerHTML = "안녕하세요";
}

// 2번 문제
 const result2 = document.querySelector("#result2");
 const customer = document.querySelector("#customer");
 function printInputValue() {
    // input 값(customer)을 가지고 오기
    console.log(customer.value);
    // 가지고 와서 result2에 출력
    result2.textContent = customer.value;
    // input 값(customer.value)을 비우기
       customer.value = "";
 }
 

// 3번 문제
const divTest = document.querySelector(".div-test");
function changeColor() {
    // 선택한 divTest 에 배경색을 변경
    divTest.style.background = "yellow";
}

// 4번 문제
const text = document.querySelector("#test");
const result4 = document.querySelector("#result4");
function stringLength() {
    // 입력받은 text에서 글자의 글자수 가지고 오기
    console.log(text.value.length);
    // 글자수를 result4에 출력
    result4.innerHTML = text.value.length;
    // 입력한 글자 비우기
    text.value = ""; //
}


// 5번 문제
const la = document.querySelector("#la");
const result5 = document.querySelector("#result5");
function stringSplit() {
    // 1. "사과, 바나나, 오렌지, 포도" 문자 가지고 오기
         console.log(la.innerHTML);
         const laText = la.innerHTML;
    // 2. 가지고 온 문자열 분리하기 -> 배열로 만들기 (split 사용)
        console.log(la.innerHTML.split(","));
        cost laArr = laText.split(",");

        // 6. ul태그 만들기
        const ul = document.createElement("ul");

    // 3. 배열 값 하나씩 가지고 오기 -> 반복문! 으로 가지고 오기
       for(let i = 0; i < length; i++);{
         // console.log(laArr[i]);
         // 4. li태그 만들기
          const li = document.createElement("li");
        // 5. li 태그에 값 넣기
        li.innerText = laArr[i];
          console.log(li);
           // 7. ul 태그에 만들어놓은 li 태그들 추가하기
           //ul.appendChild(li);
           //ul.innerHTML = "<li>" + laArr[i] + "<li>";
           ul.innerHTML += `<li>${laArr[i]}</li>`;
       }  
        console.log(ul);
        // 8. reult5에 ul 담기
          result5.appendChild(ul);
 }

// 6번 문제
const preview = document.querySelector("#preview");
const premove = document.querySelector("#remove")
const add = document.querySelector("add");
function arrayTest() {
    // 피자 치킨 떡볶이 <- 배열로 만들기
     console.log(preview.textContent.split(" "));
     const preArr = (preview.textContent.split(" "));
     // 1. 정 기억이 안나 일단 박복문!
     for(let i =0; i < preArr.length; i++);{
         // 이미 가지고 있는 값에서 내가 삭제할 값이 일치하면 배열에서 제거
       //console.log(preArr[1] === "피자");
        if (preArr[i] === removeEventListener.value){
            preArr.splice(i, 1);
        }
       
        console.log(preArr);
    }
   // */
   // 2. 배열에서 제거 : splice(인덱스, 1);
    const delIdx = preArr.indexOf(removeEventListener.value); // 삭제할 인덱스
    console.log(delIdx);
    // if (delIdx ! == -1) preArr.splice(delIdx, 1);

    // +) 추가
    console.log(preArr.includes(removeEventListener.value));
    if (delIdx ! == -1) preArr.splice(delIdx, 1);

      // 추가 -> 배열에 해당 값 추가! push
      parArr.push(add.value);


    // 배열 -> 문자열로 바꾸기
    console.log(preArr.join(" "));
    preview.textContent = preArr.join(" ");
   
}
   

// 7번 문제 : prompt로 이름, 나이 ,주소 순으로 입력받아서 출력 
const nemes = document.querySelectorAll("name");
const ages = document.querySelectorAll("age");
const addrs = document.querySelectorAll("addr");
function addStudentd() {  
        console.log(names);
        for(let i = 0; i < 3; i++) {
        const name = prompt(`${i}번째 학생 이름`);
        const age = prompt(`${i}번째 나이`);
        const addr = prompt(`${i}번째 주소`);
        nemes[i].textContent = name;
        ages[i].textContent = ages;
        addrs[i].textContent = addr;
     }
}

// 8번
const list = document.querySelector("#list");
function addItem() {
    // 1. li 태그를 만들어서 추가하는 방식
    const li = document.createElement("li");
    li.textContent = "테스트";
    list.appendChild(li);

    // 2. innerHtml로 문자로 추가하는 방식
    list.innerHTML += "<li>테스트</li>";
}

function removeItem() {
    // 1. 부모에서 제거
    console.log(list.childNodes);
    list.removeChild(list.childNodes[0]);
    // 2. 본인이 제거
    const li = document.querySelector("#list li");
    console.log(li);
    li.remove();
}


// 9번
const result9 = document.querySelector("#result9");
function toggleClass() {
    result9.classList.toggle("active");
}

// 10번
const item = document.querySelector("#item");
const price = document.querySelector("#price");
const cart = document.querySelector("#cart");
const total = document.querySelector("#total span");
let sum = 0;
function addToCart() {
    cart.innerHTML += `<li>${item.value} - ${price.value}</li>`;
     
    console.log(isNaN(price.value)); // NaN
    if (!isNaN (Number(price.value)) sum += Number(price.value);
      total.innerHTML = sum;
    console.log(sum);

    item.value = "";
    price.vlaue ="";

}
