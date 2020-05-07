
//제품의 목록과 정보를 저장하는 배열
var aProduct = ["A. 스피드 원터치 팝업텐트(3~4인용)", 0, 39800, true];
var bProduct = ["B. 5초 원터치 텐트(3인용)(+10,000원)", 0, 49800, true];
var cProduct = ["C. 5초 원터치 텐트(5인용)(+20,000원)", 0, 59800, true];
//가격 정보
var totalPrice = 0;
var aProductPrice = 0;
var bProductPrice = 0;
var cProductPrice = 0;

//Select Box choice
function selectProducts() {
    //선택된 값을 확인
    var item = document.getElementById("products");
    item = (item.options[item.selectedIndex].text);
    //li에 하나씩 추가
    var plusUI = document.createElement('ul');
    //제품 확인
    if (item == aProduct[0]) {
        //같은 제품을 선택 박스에서 중복선택하지 않게 하는 조건
        if (aProduct[3] == true) {
            aProduct[3] = false;
            aProduct[1] += 1;
            aProductPrice = aProduct[1] * aProduct[2];
            plusUI.innerHTML = "<div id = p1><li class =li-design>" + aProduct[0] + "<input type=text id=number value=" + aProduct[1] + " readonly><input type=button id=btn value= + onclick=btnClick(this) data-type=01><input type=button id=btn value=- onclick= btnClick(this) data-type=01><input type=button id=btn value=X onclick=btnClick(this) data-type=01>" + aProductPrice + "원</li></div>"
            document.getElementById("order-list").appendChild(plusUI);
        }
        else {
            alert("이미 선택된 항목입니다.");
        }
    }
    else if (item == bProduct[0]) {
        if (bProduct[3] == true) {
            bProduct[3] = false;
            bProduct[1] += 1;
            bProductPrice = bProduct[1] * bProduct[2];
            plusUI.innerHTML = "<div id =p2><li class =li-design>" + bProduct[0] + "<input type=text id=number value=" + bProduct[1] + " readonly><input type=button id=btn value= + onclick=btnClick(this) data-type=02><input type=button id=btn value=- onclick= btnClick(this) data-type=02><input type=button id=btn value=X onclick=btnClick(this) data-type=02>" + bProductPrice + "원</li></div>"
            document.getElementById("order-list").appendChild(plusUI);
        }
        else {
            alert("이미 선택된 항목입니다.");
        }
    }
    else {
        if (cProduct[3] == true) {
            cProduct[3] = false;
            cProduct[1] += 1;
            cProductPrice = cProduct[1] * cProduct[2];
            plusUI.innerHTML = "<div id =p3><li class =li-design>" + cProduct[0] + "<input type=text id=number value=" + cProduct[1] + " readonly><input type=button id=btn value= + onclick=btnClick(this) data-type=03><input type=button id=btn value=- onclick= btnClick(this) data-type=03><input type=button id=btn value=X onclick=btnClick(this) data-type=03>" + cProductPrice + "원</li></div>"
            document.getElementById("order-list").appendChild(plusUI);
        }
        else {
            alert("이미 선택된 항목입니다.");
        }
    }
    //총 상품금액 확인
    totalPrice = aProductPrice + bProductPrice + cProductPrice;
    document.getElementById("total").innerHTML = "총 상품금액 " + totalPrice + "원";
}

//1개 미만의 개수를 선택하고자 하는 경우 알려주는 경고창
function stopDefAaction(event) {
    event.preventDefault();
    alert("최소 1개 이상 주문해야 합니다.");
}

//제품 수량 추가, 감소, 제품 삭제 버튼 처리 함수
function btnClick(check) {
    //클릭한 버튼의 타입을 확인하여 제품을 확인함
    //(01 : A. 스피드 원터치 팝업텐트(3~4인용), 02 : B. 5초 원터치 텐트(3인용)(+10,000원), 03 : C. 5초 원터치 텐트(5인용)(+20,000원))
    var e = window.event, btn = e.target || e.srcElement, select = e.target || e.srcElement;
    var type = check.getAttribute("data-type");
    var product_text;
    //버튼 타입과 제품을 확인한 값을 통하여 조건문 처리
    if (btn.value == "+") {
        if (type == "01") {
            aProduct[1] += 1;
            aProductPrice = aProduct[1] * aProduct[2];
            product_text = document.getElementById('p1');
            product_text.innerHTML = "<li class =li-design>" + aProduct[0] + "<input type=text id=number value=" + aProduct[1] + " readonly><input type=button id= btn value= + onclick=btnClick(this) data-type=01><input type=button id=btn value=- onclick= btnClick(this) data-type=01><input type=button id=btn value=X onclick=btnClick(this) data-type=01>" + aProductPrice + "원</li>"
        }
        else if (type == "02") {
            bProduct[1] += 1;
            bProductPrice = bProduct[1] * bProduct[2];
            product_text = document.getElementById('p2');
            product_text.innerHTML = "<div id =p2><li class =li-design>" + bProduct[0] + "<input type=text id=number value=" + bProduct[1] + " readonly><input type=button id= btn value= + onclick=btnClick(this) data-type=02><input type=button id=btn value=- onclick= btnClick(this) data-type=02><input type=button id=btn value=X onclick=btnClick(this) data-type=02>" + bProductPrice + "원</li></div>"
        }
        else {
            cProduct[1] += 1;
            cProductPrice = cProduct[1] * cProduct[2];
            product_text = document.getElementById('p3');
            product_text.innerHTML = "<div id =p3><li class =li-design>" + cProduct[0] + "<input type=text id=number value=" + cProduct[1] + " readonly><input type=button id= btn value= + onclick=btnClick(this) data-type=03><input type=button id=btn value=- onclick= btnClick(this) data-type=03><input type=button id=btn value=X onclick=btnClick(this) data-type=03>" + cProductPrice + "원</li></div>"
        }
    }
    else if (btn.value == "-") {
        if (type == "01") {
            if (aProduct[1] == 1) {
                stopDefAaction(event);
            }
            else {
                aProduct[1] -= 1;
                aProductPrice = aProduct[1] * aProduct[2];
                product_text = document.getElementById('p1');
                product_text.innerHTML = "<div id =p1><li class =li-design>" + aProduct[0] + "<input type=text id=number value=" + aProduct[1] + " readonly><input type=button id= btn value= + onclick=btnClick(this) data-type=01><input type=button id=btn value=- onclick= btnClick(this) data-type=01><input type=button id=btn value=X onclick=btnClick(this) data-type=01>" + aProductPrice + "원</li></div>"
            }

        }
        else if (type == "02") {
            if (bProduct[1] == 1) {
                stopDefAaction(event);
            }
            else {
                bProduct[1] -= 1;
                bProductPrice = bProduct[1] * bProduct[2];
                product_text = document.getElementById('p2');
                product_text.innerHTML = "<div id =p2><li class =li-design>" + bProduct[0] + "<input type=text id=number value=" + bProduct[1] + " readonly><input type=button id= btn value= + onclick=btnClick(this) data-type=02><input type=button id=btn value=- onclick= btnClick(this) data-type=02><input type=button id=btn value=X onclick=btnClick(this) data-type=02>" + bProductPrice + "원</li></div>"
            }

        }
        else {
            if (cProduct[1] == 1) {
                stopDefAaction(event);
            }
            else {
                cProduct[1] -= 1;
                cProductPrice = cProduct[1] * cProduct[2];
                product_text = document.getElementById('p3');
                product_text.innerHTML = "<div id =p3><li class =li-design>" + cProduct[0] + "<input type=text id=number value=" + cProduct[1] + " readonly><input type=button id= btn value= + onclick=btnClick(this) data-type=03><input type=button id=btn value=- onclick= btnClick(this) data-type=03><input type=button id=btn value=X onclick=btnClick(this) data-type=03>" + cProductPrice + "원</li></div>"
            }
        }
    } else { //선택한 제품을 삭제 경우
        if (type == "01") {
            var myobj = document.getElementById("p1");
            myobj.remove();
            //제품 수량을 초기화하고 새로 등록할 수 있게 만든 다음 총 가격에서 제외
            aProduct[1] = 0;
            aProduct[3] = true;
            aProductPrice = 0;
        }
        else if (type == "02") {
            var myobj = document.getElementById("p2");
            myobj.remove();
            bProduct[1] = 0;
            bProduct[3] = true;
            bProductPrice = 0;
        }
        else {
            var myobj = document.getElementById("p3");
            myobj.remove();
            cProduct[1] = 0;
            cProduct[3] = true;
            cProductPrice = 0;
        }
        //삭제 시 선택으로 박스를 초기 상태로 원위치
        document.getElementById("products").options[0].selected = true;
    }
    //총 상품금액 확인
    totalPrice = aProductPrice + bProductPrice + cProductPrice;
    document.getElementById("total").innerHTML = "총 상품금액 " + totalPrice + "원";
}