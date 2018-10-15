document.getElementById('image-1').onclick = chanceImage1;
document.getElementById('image-2').addEventListener("click", chanceImage2);
document.getElementById('image-3').addEventListener("click", chanceImage3);
document.getElementById('image-4').addEventListener("click", chanceImage4);
document.getElementById('image-5').addEventListener("click", chanceImage5);

function returnFunction() {
    return function chanceImage1(parameter) {
        document.getElementById('image-head-big').src = parameter;
    }
}

function chanceImage1() {
    document.getElementById('image-head-big').src = './image/radio-toi-chu-nhat.jpg';
}

function chanceImage2() {
    document.getElementById('image-head-big').src = './image/nguoi-am-phu.jpg';
}

function chanceImage3() {
    document.getElementById('image-head-big').src = './image/nhac-moi-cuoi-tuan.jpg';
}

function chanceImage4() {
    document.getElementById('image-head-big').src = './image/thang-dien.jpg';
}

function chanceImage5() {
    document.getElementById('image-head-big').src = './image/yeu-don-phuong.jpg';
}