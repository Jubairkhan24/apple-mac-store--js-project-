// price section
document.getElementById('total-price').innerText = 1299;
function extra(item) {
    if (item == 1) {
        document.getElementById('extra-memory-input').innerText = 0;
        totalPrice()
    }
    if (item == 2) {
        document.getElementById('extra-memory-input').innerText = 180;
        totalPrice()
    }
    if (item == 3) {
        document.getElementById('extra-storage-input').innerText = 0;
        totalPrice()
    }
    if (item == 4) {
        document.getElementById('extra-storage-input').innerText = 100;
        totalPrice()
    }
    if (item == 5) {
        document.getElementById('extra-storage-input').innerText = 180;
        totalPrice()
    }
    if (item == "free") {
        document.getElementById("extra-shipment-input").innerText = 0;
        totalPrice()
    }
    if (item == "costly") {
        document.getElementById("extra-shipment-input").innerText = 20;
        totalPrice()
    }
}
// total price section
function totalPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const getBestPrice = parseFloat(bestPrice);

    const extraMemory = document.getElementById("extra-memory-input").innerText;
    const getExtraMemory = parseFloat(extraMemory);

    const extraStorage = document.getElementById("extra-storage-input").innerText;
    const getExtraStorage = parseFloat(extraStorage);

    const deliveryCost = document.getElementById("extra-shipment-input").innerText;
    const getDeliveryCost = parseFloat(deliveryCost);


    const totalPrice = parseInt(getExtraMemory + getExtraStorage + getDeliveryCost + getBestPrice);

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('extra-promo-section').innerText = totalPrice;
}
// extra section 
document.getElementById("apply-code").addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code').value;
    if (promoCode == "stevekaku") {
        const totalMoney = document.getElementById('total-price').innerText;
        var discount = totalMoney * 20 / 100;
        const BeforePromo = document.getElementById('extra-promo-section').innerText;
        const beforePromoNumber = parseInt(BeforePromo);
        ;
        document.getElementById('extra-promo-section').innerText = beforePromoNumber - discount;
        document.getElementById('promo-code').value = "";
    }
    else alert("Invalid Promo Code")
});