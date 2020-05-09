hienThiTongTien();



function onclickXacNhan() {
    //1. Kt hợp lệ
    if (kiemTraFormHopLe()) {
        console.log('Thuc hien dang nhap');
    }
}



function kiemTraFormHopLe() {
    var input = document.querySelectorAll('.thanh-toan .danh-muc input[required]');
    console.log(input.length);
    for (let i = 0; i < input.length; i++) {
        if (input[i].value == '') {
            if (input[i].id == 'hoTen') {
                console.log(input[i].value)
                var tenTruong = 'Họ và tên';
            }
            if (input[i].id == 'diaChi') {
                var tenTruong = 'Địa chỉ';
            }
            if (input[i].id == 'soDienThoai') {
                var tenTruong = 'Số điện thoại';
            }
            if (input[i].id == 'gioNhanHang') {
                var tenTruong = 'Khung giờ';
            }

            document.querySelectorAll('.hien-thi-loi p')[i].innerHTML = tenTruong + ' không được để trống';

        } else {
            var check = true;
            // if (input[i].id == 'hoTen') {


            // }
            // if (input[i].id == 'diaChi') {

            // }
            if (input[i].id == 'soDienThoai') {
                if (input[i].value.length > 11 || input[i].value.length < 10) {
                    document.querySelectorAll('.hien-thi-loi p')[i].innerHTML = 'Vui lòng nhập đúng số điện thoại';
                    check = false;
                }

            }
            if (input[i].id == 'gioNhanHang') {
                if (input[i].value < 8 || input[i].value > 18) {
                    document.querySelectorAll('.hien-thi-loi p')[i].innerHTML = 'Vui lòng nhập từ 8 - 18h';
                    check = false;
                }
            }
            if (check == true) document.querySelectorAll('.hien-thi-loi p')[i].innerHTML = null;
        }
    }

}
hienTongSoLuong();
giaoDienDangNhap();
hienThiGioHang();
function hienThiGioHang() {
    let nodeHienThi = document.getElementById('danh-sach-gio-hang');
    nodeHienThi.innerHTML = HTMLDanhSachGioHang();
}





function hienThiTongTien() {
    var nodeTamTinh = document.querySelector('#gia-tam-tinh');
    var nodeTongTien = document.querySelector('#tong-tien');
    console.log(nodeTamTinh);
    nodeTamTinh.innerHTML = formatTienTe(tongTien());
    nodeTongTien.innerHTML = formatTienTe(tongTien());

}