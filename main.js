// let dataimg = ["img/product-1.png", "img/product-2.png", "img/product-3.png", "img/product-4.png", "img/product-5.png"];
// let img = document.querySelector("img");
// let bu = document.querySelector(".bu");
// for (let i = 0; i < dataimg.length; i++) {
//     let button = document.createElement("button");
//     button.innerHTML = " " + (i + 1);
//     bu.appendChild(button);
//     button.addEventListener("click", function () {
//         img.src = dataimg[i];
//     });
// }

let imgChoose = document.querySelectorAll(".bu button");
let thumb = document.querySelector(".moto-0 img");
let thumbPopup = document.querySelector("#purchaseImage");
let color1 = document.querySelector(".ver1 .color");
for (let i = 0; i < imgChoose.length; i++) {
    imgChoose[i].addEventListener("click", function () {
        let img = imgChoose[i].getAttribute("dataImg");
        let color = imgChoose[i].getAttribute("dataColor");
        thumb.src = img;
        thumbPopup.src = img;
        color1.innerHTML = color;
    });
}
let version = document.querySelectorAll(".version button");
let pricesSpan = document.querySelector(".text-0 h3 span");
let ver = document.querySelector(".ver1 span");
let name1 = document.querySelector(".text-0 h2");
let attPrice = document.querySelector("#purchasePrice span");
let name2 = document.querySelector(".attention h4 span");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let quantity1Span = document.querySelector(".quantity1 span");
let quantitySpan = document.querySelector(".quantity span");
let quantityNumber = 1;

for (let i = 0; i < version.length; i++) {
    version[i].addEventListener("click", function () {
        let prices = version[i].getAttribute("dataprice");
        pricesSpan.innerHTML = prices;
        ver.innerHTML = version[i].innerHTML;
        name2.innerHTML = name1.innerHTML;
        attPrice.innerHTML = prices;
        plus.addEventListener("click", function () {
            quantityNumber++;
            console.log(quantityNumber);
            quantity1Span.innerHTML = quantityNumber;
            quantitySpan.innerHTML = quantityNumber;
            pricesSpan.innerHTML = quantityNumber * parseInt(prices);
        });
        minus.addEventListener("click", function () {
            if (quantityNumber > 1) {
                quantityNumber--;
                quantity1Span.innerHTML = quantityNumber;
                quantitySpan.innerHTML = quantityNumber;
                pricesSpan.innerHTML = quantityNumber * parseInt(prices);
            }
        });
    });
}

// let priceSpan = document.querySelector("h3 span");
// let versionButtons = document.querySelectorAll(".version button");
// let prices = ["100000000 ", "200000000 ", "300000000 ", "400000000 ", "500000000"];
// let quantitySpan = document.querySelector(".quantity-0 span");
// let plusButton = document.querySelector(".fa-plus");
// let minusButton = document.querySelector(".fa-minus");
// let quantity1 = 1;

// // Lấy giá hiện tại của sản phẩm
// let currentPrice = parseFloat(priceSpan.innerHTML);

// for (let i = 0; i < versionButtons.length; i++) {
//     versionButtons[i].addEventListener("click", function () {
//         priceSpan.innerHTML = prices[i];
//         // Cập nhật lại giá hiện tại khi chọn phiên bản khác
//         currentPrice = priceSpan.innerHTML;
//     });
// }

// plusButton.addEventListener("click", function () {
//     quantity1++;
//     quantitySpan.innerHTML = quantity1;
//     priceSpan.innerHTML = currentPrice * quantity1;
// });
// minusButton.addEventListener("click", function () {
//     if (quantity1 > 0) {
//         quantity1--;
//         quantitySpan.innerHTML = quantity1;
//         priceSpan.innerHTML = currentPrice * quantity1;
//     }
// });
// let purchaseModal = document.querySelector("#purchaseModal");
// let purchaseImage = document.querySelector("#purchaseImage");
// let purchasePrice = document.querySelector("#purchasePrice");
// let name1 = document.querySelector(".modal h4");
// let ver1 = document.querySelector(".ver1");
// let quantity = document.querySelector(".quantity1");
// buyButton.addEventListener("click", function () {
//     // Cập nhật giá tiền và hình ảnh của sản phẩm trong modal
//     purchaseImage.src = img.src;
//     purchasePrice.innerHTML = "Giá: " + priceSpan.innerHTML + " VNĐ";
//     name1.innerHTML = " SH 350i 2023";
//     quantity.innerHTML = "Số lượng: " + quantity1;
// });
// for (let versionButton of versionButtons) {
//     versionButton.addEventListener("click", function () {
//         ver1.innerHTML = "Phiên bản: " + versionButton.innerHTML;
//     });
// }

// let purchase = document.querySelector("#purchaseModal");
// purchaseImage = purchase.querySelector("#purchaseImage");
// console.log(purchaseImage);
