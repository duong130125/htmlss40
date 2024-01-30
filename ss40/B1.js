function luuThongTin() {
    let inputName = document.getElementById("hoTen").value;
    let inputAge = document.getElementById("tuoi").value;
    let inputEmail = document.getElementById("email").value;

    let thongTinCaNhan = {
        hoTen: inputName,
        tuoi: inputAge,
        email: inputEmail,
    };

    localStorage.setItem("thongTinCaNhan", JSON.stringify(thongTinCaNhan));
    alert("Thông tin đã được lưu");
    hienThiThongTin();
}

function hienThiThongTin() {
    let thongTinCaNhan = localStorage.getItem("thongTinCaNhan");
    let listName = document.getElementById("listName");

    if (thongTinCaNhan !== null) {
        thongTinCaNhan = JSON.parse(thongTinCaNhan);
        listName.innerHTML = "<p><strong>Họ tên:</strong> " + thongTinCaNhan.hoTen + "</p>" +
                             "<p><strong>Tuổi:</strong> " + thongTinCaNhan.tuoi + "</p>" +
                             "<p><strong>Email:</strong> " + thongTinCaNhan.email + "</p>";
    }
}

let buton = document.getElementById("click");
buton.addEventListener("click", luuThongTin);
hienThiThongTin();