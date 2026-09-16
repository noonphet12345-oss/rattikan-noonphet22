// -----------------------------
// แสดงโปรโมชั่น
// -----------------------------

function showPromotion() {

    alert(
        "🎉 โปรโมชั่นพิเศษ!\n\n" +
        "ซื้อเครื่องดื่ม 2 แก้ว\n" +
        "รับส่วนลดพิเศษทันที\n\n" +
        "โปรโมชั่นนี้ถึงสิ้นเดือนนี้ ☕"
    );

}


// -----------------------------
// ส่งแบบฟอร์มติดต่อ
// -----------------------------

function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("กรุณากรอกข้อมูลให้ครบถ้วน");

        return;
    }

    alert(
        "ขอบคุณคุณ " + name +
        "\n\nเราได้รับข้อความของคุณแล้ว ☕"
    );

    document.querySelector("form").reset();
}