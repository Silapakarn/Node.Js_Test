        let lotto_Number = prompt("กรุณากรองเลขที่ต้องการซื้อ : ")
        console.log(lotto_Number)
        let Random_Number = Math.floor(Math.random() * 100)

        document.getElementById("random").innerHTML = Random_Number

        if (lotto_Number == Random_Number) {
            document.getElementById("result").innerHTML = "ยินดีด้วย! คุณถูกรางวัล"

        } else {

            document.getElementById("result").innerHTML = "เสียใจด้วยคุณโดนหวยแดก !"
        }