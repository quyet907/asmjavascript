const keyLocalSanPhamMoi = 'danh-sach-san-pham-moi';
const keyLocalGioHang = 'danh-sach-gio-hang-re';






function itemGioHang(id, soLuong) {
    var item = new Object();
    item.id = id;
    item.soLuong = soLuong;
    return item;
}

function sanPham(hinhAnh, tenSanPham, giaGoc, phanTramGiamGia, id) {
    let sanPham = new Object();
    if (id == null || id == '') sanPham.id = taoId();
    else sanPham.id = id;
    sanPham.hinhAnh = hinhAnh;
    sanPham.tenSanPham = tenSanPham;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.giaBan = function () {
        let giaBan = this.giaGoc * (100 - this.phanTramGiamGia) / 100;
        return giaBan;
    }
    return sanPham;
}

function taoId() {
    let id = new Date().getTime();
    return id;
}

function danhSachSanPham() {
    var danhSachJSON = localStorage.getItem(keyLocalSanPhamMoi);
    if (danhSachJSON == null || danhSachJSON == '') return [];
    var danhSachParse = JSON.parse(danhSachJSON);
    var danhSachDayDu = new Array();
    for (var sanpham of danhSachParse) {
        sanpham = sanPham(sanpham.hinhAnh, sanpham.tenSanPham, sanpham.giaGoc, sanpham.phanTramGiamGia, sanpham.id);

        danhSachDayDu.push(sanpham);

    }

    return danhSachDayDu;
}

function HTMLSanPham(sanPham) {
    let HTML = '';
    HTML = '   <div class="item">  ' +
        '                   <div class="anh-san-pham">  ' +
        '                       <img src="' + sanPham.hinhAnh + '"  ' +
        '                           alt="">  ' +
        '                   </div>  ' +
        '                   <div class="thong-tin-san-pham">  ' +
        '                       <div class="ten-san-pham">  ' +
        '                           <span>' + sanPham.tenSanPham + '</span>' +
        '                       </div>  ' +
        '                       <div class="gia-ban">  ' +
        '                           <span>' + formatTienTe(sanPham.giaBan()) + '</span>  ' +
        '                       </div>  ' +
        '                       <div class="gia-truoc-giam">  ' +
        '                           <span>' + formatTienTe(sanPham.giaGoc) + '</span>  ' +
        '                       </div>  ' +
        '                   </div>  ' +
        '                   <button class="btn-them-san-pham" onclick="themVaoGioHang(' + sanPham.id + ')">  ' +
        '                       <i class="fas fa-cart-plus"  style="color: black; "></i>  ' +

        '                   </button>  ' +
        '              </div>  ';
    return HTML;
}

function themVaoGioHang(idSanPham) {
    var danhSach = danhSachGioHang();
    var sanPham = chuyenIdThanhSanPhamDayDu(idSanPham);
    var check = true;
    console.log(danhSach);
    if (danhSach == null || danhSach == '') {
        danhSach = new Array();
    } else {
        for (var item of danhSach) {
            if (item.id == idSanPham) {
                item.soLuong++;
                check = false;
                break;
            }
        }
    }
    if (check == true) {
        var itemMoi = itemGioHang(sanPham.id, 1);
        danhSach.unshift(itemMoi);
    }
    localStorage.setItem(keyLocalGioHang, JSON.stringify(danhSach));
    hienTongSoLuong();
}





function danhSachGioHang() {
    let danhSachJSON = localStorage.getItem(keyLocalGioHang);
    let danhSachParse = JSON.parse(danhSachJSON);

    return danhSachParse;
}

function chuyenIdThanhSanPhamDayDu(idSanPham) {
    let danhSachToanBoSanPham = danhSachSanPham();
    for (var sanpham of danhSachToanBoSanPham) {
        if (sanpham.id == idSanPham) {
            sanpham = sanPham(sanpham.hinhAnh, sanpham.tenSanPham, sanpham.giaGoc, sanpham.phanTramGiamGia, sanpham.id);
            return sanpham;
        }
    }
}
console.log('dánhach');
console.log(danhSachGioHang());


function HTMLDanhSachSanPham() {
    let danhSach = danhSachSanPham();
    let HTMLTong = '';
    for (var sanPham of danhSach) {
        HTMLTong += HTMLSanPham(sanPham);
    }
    return HTMLTong;
}

function HTMLItemGioHang(item) {
    let sanPhamDayDu = chuyenIdThanhSanPhamDayDu(item.id);

    let HTML = '';
    HTML += '   <div class="item-gio-hang">  ' +
        '                   <div class="anh-san-pham">  ' +
        '                       <img src="' + sanPhamDayDu.hinhAnh + '" alt="">  ' +
        '                   </div>  ' +
        '                   <div class="ten-san-pham">  ' +
        '                       <span>' + sanPhamDayDu.tenSanPham + '</span>  ' +
        '                   </div>  ' +
        '                   <div class="so-luong">  ' +
        '                       <i class="fas fa-minus" id="giam" onclick="thayDoiSoLuong(event, ' + item.id + ')"></i> ' +
        '                       <input type="number" class="so-luong-item" value="' + item.soLuong + '">  ' +
        '                       <i class="fas fa-plus" id="tang" onclick="thayDoiSoLuong(event, ' + item.id + ')"></i>' +
        '                   </div>  ' +
        '                   <div class="gia">  ' +
        '                       <div class="gia-ban">  ' +
        '                           <span>' + sanPhamDayDu.giaBan() + '</span>  ' +
        '                       </div>  ' +
        '                       <div class="gia-goc">  ' +
        '                           <span>' + sanPhamDayDu.giaGoc + '</span>  ' +
        '                       </div>  ' +
        '                   </div>  ' +
        '                   <div class="xoa-item-gio-hang" onclick="xoaItemGioHang(' + item.id + ')">  ' +
        '                       <i class="fas fa-times"></i>  ' +
        '                   </div>  ' +
        '              </div>  ';
    return HTML;
}

function tongTien() {
    var gioHang = danhSachGioHang();
    var tongTien = 0;
    for (var item of gioHang) {
        var sanPhamDayDu = chuyenIdThanhSanPhamDayDu(item.id);
        tongTien += (item.soLuong * sanPhamDayDu.giaBan());
    }

    return tongTien;
}




function thayDoiSoLuong(event, idSanPham) {
    var nodeClick = event.target;
    var nodeCha = nodeClick.parentElement;
    var nodeSoLuong = nodeCha.querySelector('.so-luong-item');
    var danhSach = danhSachGioHang();


    for (var item of danhSach) {
        if (item.id == idSanPham) {
            if (nodeClick.id == 'tang') {
                item.soLuong++;
            } else {
                if (item.soLuong == 1) {
                    danhSach.splice(this, 1);
                } else {
                    item.soLuong--;
                }


            }

        }
    }

    localStorage.setItem(keyLocalGioHang, JSON.stringify(danhSach));

    hienThiGioHang();
    hienThiTongTien();
    hienTongSoLuong();
}


function xoaItemGioHang(idSanPham) {
    var danhSach = danhSachGioHang();
    for (var item of danhSach) {
        if (item.id == idSanPham) {
            danhSach.splice(this, 1);
            console.log(danhSach);
            localStorage.setItem(keyLocalGioHang, JSON.stringify(danhSach));
            hienThiGioHang();
            hienThiTongTien();
            hienTongSoLuong();
            break;
        }
    }
}

function HTMLDanhSachGioHang() {
    let HTMLTong = '';
    var danhSach = danhSachGioHang();
    for (let item of danhSach) {
        HTMLTong += HTMLItemGioHang(item);
    }
    return HTMLTong;
}

function hienThiGioHang() {
    let nodeHienThi = document.getElementById('danh-sach-gio-hang');
    nodeHienThi.innerHTML = HTMLDanhSachGioHang();
}


//Model login
function user(taiKhoan, matKhau) {
    var user = new Object();
    user.taiKhoan = taiKhoan;
    user.matKhau = matKhau;
    return user;
}

function userDaDangNhap(username, trangThai) {
    var trangThaiDangNhap = new Object();
    trangThaiDangNhap.username = username;
    trangThaiDangNhap.trangThai = trangThai;
    return trangThaiDangNhap;
}
var admin = user('admin', 'admin');
var danhSachUserr = new Array(admin);
localStorage.setItem('danhSachUser', JSON.stringify(danhSachUserr));


function danhSachUser() {
    var danhSachJSON = localStorage.getItem('danhSachUser');
    var danhSach = JSON.parse(danhSachJSON);

    return danhSach;
}


function checkLogin() {
    var taiKhoanValue = document.querySelector('.modal #username').value;
    var matKhauValue = document.querySelector('.modal #password').value;
    var nodeHienThiLoi = document.querySelector('.modal .hien-thi-loi');
    var danhSach = danhSachUser();
    console.log((danhSach));
    var check = false;
    for (var i = 0; i < danhSach.length; i++) {
        if (danhSach[i].taiKhoan == taiKhoanValue && taiKhoanValue == 'admin') {
            if (danhSach[i].matKhau == matKhauValue && matKhauValue == 'admin') {
                console.log('Thanh cong');
                check = true;
                closeModal();
                var userDaLogin = userDaDangNhap(danhSach[i].taiKhoan, 'true');

                // danhSachUserr
                localStorage.setItem('trangThaiDangNhap', JSON.stringify(userDaLogin));
                giaoDienKhiDangNhapThanhCong(danhSach[i].taiKhoan);
                break;
            }
        }
        if (check != true) {
            nodeHienThiLoi.innerHTML = 'Tên đăng nhập hoặc mật khẩu không đúng';
        }
    }
}



function giaoDienDangNhap() {
    var taiKhoanDaDangNhapJSON = localStorage.getItem('trangThaiDangNhap');
    var taiKhoanDaDangNhap = JSON.parse(taiKhoanDaDangNhapJSON);
    if (taiKhoanDaDangNhapJSON != null && taiKhoanDaDangNhapJSON != '') {
        giaoDienKhiDangNhapThanhCong(taiKhoanDaDangNhap.username);
    }
}


function giaoDienKhiDangNhapThanhCong(tenUser) {
    var nodeButtonDangNhap = document.getElementById('login-sign-up');
    console.log(nodeButtonDangNhap);
    nodeButtonDangNhap.innerHTML =
        '    <ul>  ' +
        '    <li><a href="admin-page.html"><i class="fas fa-cog"></i></a></li>   ' +
        '                       <li><a href="#"><i class="fas fa-user-cog">  </i>' + tenUser + '</a></li>  ' +
        '                       <li style="width:max-content;">|</li>  ' +
        '                       <li><a href="#" onclick="dangXuat()">Đăng xuất</a></li>  ' +
        '  </ul>  ';
}



function dangXuat() {
    localStorage.removeItem('trangThaiDangNhap');
    location.reload();
}

function openModal(modal) {
    modal.style.display = 'block';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

var modal = document.getElementById('modal');

hienTongSoLuong();

function hienTongSoLuong(){
    var nodeTongSoSanPham = document.getElementById('so-luong-san-pham');
    var soLuong = tongSoSanPham();
    nodeTongSoSanPham.innerHTML = soLuong + ' sản phẩm';
}
function tongSoSanPham() {
    let danhSachJSON = localStorage.getItem(keyLocalGioHang);
    let danhSachParse = JSON.parse(danhSachJSON);
    var soLuong = 0;
    for ( var sanpham of danhSachParse){
        soLuong+=sanpham.soLuong;
    }
    return soLuong;
}


function formatTienTe(soTien) {
    var quyDoi = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(soTien);
    return quyDoi;
}
