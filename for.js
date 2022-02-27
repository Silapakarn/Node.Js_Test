let qrt = prompt("จำนวนสินค้า :")
let sum = 0
for (var i = 1; i <=
    qrt; i++) {

    let item_price = prompt("ราคาสินค้า" + i)
    sum = sum + parseInt(item_price)
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่" + i + ": " + item_price + "บาท" + "<br>"
}

document.getElementById("result01").innerHTML = "ราคารวมของสินค้าคือ :" + " " + sum + " บาท"