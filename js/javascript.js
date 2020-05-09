const keyLocalSanPhamMoi = 'danh-sach-san-pham-moi';
const keyLocalGioHang = 'danh-sach-gio-hang-re';






function itemGioHang(id, soLuong) {
    var item = new Object();
    item.id = id;
    item.soLuong = soLuong;
    return item;
}

function sanPham(hinhAnh, tenSanPham, giaGoc, phanTramGiamGia, loaiSanPham, id) {
    let sanPham = new Object();
    if (id == null || id == '') sanPham.id = taoId();
    else sanPham.id = id;
    sanPham.loaiSanPham = loaiSanPham;
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

danhSachDemo();
function danhSachDemo() {
   

    var danhSachDemo = danhSachSanPham();

    if (danhSachDemo == null || danhSachDemo == ''){
        var danhSachDemoJson = '[{"id":1588956613075,"loaiSanPham":"manHinh","hinhAnh":"https://phucanhcdn.com/media/product/250_33740_ma__n_hi__nh_lg_20mk400h_b_19_5inch_led_1_2.png","tenSanPham":"Màn hình LG 20MK400H-B 19.5Inch LED","giaGoc":"2190000","phanTramGiamGia":"9"},{"id":1588956569667,"loaiSanPham":"manHinh","hinhAnh":"https://phucanhcdn.com/media/product/250_37927_m__n_h__nh_dell_se2417hgx_1_1.png","tenSanPham":"Màn hình Dell SE2417HGX 23.6Inch 75Hz 1ms","giaGoc":"3490000","phanTramGiamGia":"4"},{"id":1588956507747,"loaiSanPham":"manHinh","hinhAnh":"https://phucanhcdn.com/media/product/250_31269-samsung-lc24f390fhexxv.jpg","tenSanPham":"Màn hình Samsung LC24F390FHEXXV 23.5Inch Curved ","giaGoc":"3190000","phanTramGiamGia":"2"},{"id":1588956479299,"loaiSanPham":"manHinh","hinhAnh":"https://phucanhcdn.com/media/product/250_38107_ma__n_hi__nh_asus_be229qlb_1_2.png","tenSanPham":"Màn hình Asus BE229QLB 21.5Inch IPS","giaGoc":"2990000","phanTramGiamGia":"4"},{"id":1588956455139,"loaiSanPham":"manHinh","hinhAnh":"https://phucanhcdn.com/media/product/250_21442_mon_del_e2016hv.jpg","tenSanPham":"Màn hình Dell E2016H 19.5Inch LED","giaGoc":"2350000","phanTramGiamGia":"5"},{"id":1588956280267,"loaiSanPham":"laptop","hinhAnh":"https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-600x600.jpg","tenSanPham":"MacBook Air 2017 128GB (MQD32SA/A) RAM 8GB","giaGoc":"18950000","phanTramGiamGia":"5"},{"id":1588956196115,"loaiSanPham":"laptop","hinhAnh":"https://cdn.tgdd.vn/Products/Images/44/221251/acer-aspire-a315-54k-37b0-i3-8130u-4gb-256gb-win10-600x600.jpg","tenSanPham":"Acer Aspire 3 A315 54K 37B0 i3 8130U (NX.HEESV.00D)","giaGoc":"10950000","phanTramGiamGia":"6"},{"id":1588956121276,"loaiSanPham":"laptop","hinhAnh":"https://cdn.tgdd.vn/Products/Images/44/220574/asus-vivobook-a512fa-i3-8145u-4gb-512gb-win10-ej1-220574copy-600x600.jpg","tenSanPham":"Asus VivoBook A512FA i3 8145U (EJ1868T)","giaGoc":"14200000","phanTramGiamGia":"4"},{"id":1588955714267,"loaiSanPham":"laptop","hinhAnh":"https://cdn.tgdd.vn/Products/Images/44/214720/lenovo-ideapad-s145-15iil-i5-1035g1-8gb-512gb-win1-600x600.jpg","tenSanPham":"Lenovo IdeaPad S145 15IIL i5 1035G1 (81W80021VN)","giaGoc":"15200000","phanTramGiamGia":"4"},{"id":1588955679794,"loaiSanPham":"laptop","hinhAnh":"https://cdn.tgdd.vn/Products/Images/44/210665/acer-aspire-a315-34-c2h9-n4000-4gb-256gb-win10-nx9-1-600x600.jpg","tenSanPham":"Acer Aspire A315 34 C2H9 N4000 (NX.HE3SV.005)","giaGoc":"7000000","phanTramGiamGia":"1"},{"id":1588955542235,"loaiSanPham":"laptop","hinhAnh":"https://cdn.tgdd.vn/Products/Images/44/216292/lenovo-ideapad-s145-15iil-i3-1005g1-4gb-256gb-win1-18-600x600.jpg","tenSanPham":"Lenovo IdeaPad S145 15IIL i3 1005G1 (81W8001XVN)","giaGoc":"11490000","phanTramGiamGia":"3"},{"id":1588955485690,"loaiSanPham":"laptop","hinhAnh":"https://cdn.tgdd.vn/Products/Images/44/214710/lenovo-ideapad-s340-14iil-i3-1005g1-8gb-512gb-win1-18-600x600.jpg","tenSanPham":"Lenovo IdeaPad S340 14IIL i3 1005G1 (81VV003VVN)","giaGoc":"14000000","phanTramGiamGia":"5"},{"id":1588954489636,"loaiSanPham":"laptop","hinhAnh":"https://cdn.tgdd.vn/Products/Images/44/220575/asus-vivobook-x509fa-i3-8145u-4gb-512gb-chuot-win1-220575copy-600x600.jpg","tenSanPham":"Asus VivoBook X509FA i3 8145U (EJ857T)","giaGoc":"11690000","phanTramGiamGia":"0"},{"id":1588953218082,"loaiSanPham":"laptop","hinhAnh":"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374330_sd.jpg","tenSanPham":"Microsoft Surface Laptop 3 13","giaGoc":"49000000","phanTramGiamGia":"4"},{"id":1588952121649,"loaiSanPham":"manHinh","hinhAnh":"https://phucanhcdn.com/media/product/32027_ma__n_hi__nh_dell_s2319h_23_0inch_ips_2.jpg","tenSanPham":"Màn hình Dell S2319H 23.0Inch IPS","giaGoc":"9000000","phanTramGiamGia":"12"},{"id":1588951452962,"loaiSanPham":"manHinh","hinhAnh":"https://cdn.nguyenkimmall.com/images/detailed/170/10025949-M%C3%80N-H%C3%8CNH-VI-T%C3%8DNH-ACER-K202HQL.jpg","tenSanPham":"Màn hình máy tính Acer K202HQL chính hãng ","giaGoc":"1750000","phanTramGiamGia":"2"}]';
    
        
        localStorage.setItem(keyLocalSanPhamMoi, danhSachDemoJson);
    }

}

function danhSachSanPham() {
    var danhSachJSON = localStorage.getItem(keyLocalSanPhamMoi);
    if (danhSachJSON == null || danhSachJSON == '') return [];
    var danhSachParse = JSON.parse(danhSachJSON);
    var danhSachDayDu = new Array();
    for (var sanpham of danhSachParse) {
        sanpham = sanPham(sanpham.hinhAnh, sanpham.tenSanPham, sanpham.giaGoc, sanpham.phanTramGiamGia, sanpham.loaiSanPham, sanpham.id);

        danhSachDayDu.push(sanpham);

    }

    return danhSachDayDu;
}

function HTMLSanPham(sanPham) {
    let HTML = '';
    HTML = 

    '   <div class="item">  ' +
    
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

        '                           <span class="phan-tram-giam-gia">-' + sanPham.phanTramGiamGia + '%</span>  ' +

        '                   </div>  ' +
        '                   <button class="btn-them-san-pham" onclick="themVaoGioHang(' + sanPham.id + ')">  ' +
        '                       <i class="fas fa-cart-plus"  style="color: rgb(250, 67, 35); "></i>  ' +

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

console.log('typeof(danhSachGioHang())');
console.log(typeof (danhSachGioHang()));


function danhSachGioHang() {
    let danhSachJSON = localStorage.getItem(keyLocalGioHang);
    let danhSachParse = JSON.parse(danhSachJSON);

    return danhSachParse;
}

function chuyenIdThanhSanPhamDayDu(idSanPham) {
    let danhSachToanBoSanPham = danhSachSanPham();
    for (var sanpham of danhSachToanBoSanPham) {
        if (sanpham.id == idSanPham) {
            sanpham = sanPham(sanpham.hinhAnh, sanpham.tenSanPham, sanpham.giaGoc, sanpham.phanTramGiamGia, sanpham.loaiSanPham, sanpham.id);
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

function layDanhSachSanPhamNoiBat() {
    let danhSach = danhSachSanPham();
    let danhSachSanPhamNoiBat = [];
    if (danhSach.length > 0) {

        for (var i = 0; i < danhSach.length; i++) {
            if (i > 15) break;
            danhSachSanPhamNoiBat[i] = danhSach[i];
        }
    }
    return danhSachSanPhamNoiBat;
}

function layDanhSachSanPhamLaptop() {
    let danhSach = danhSachSanPham();
    let danhSachSanPhamLaptop = [];
    if (danhSach.length > 0) {

        for (var i = 0; i < danhSach.length; i++) {
            if (danhSach[i].loaiSanPham == 'laptop') {
                danhSachSanPhamLaptop[i] = danhSach[i];
            }
        }
    }
    return danhSachSanPhamLaptop;
}


function layDanhSachSanPhamManHinh() {
    let danhSach = danhSachSanPham();
    let danhSachSanPhamManHinh = [];
    if (danhSach.length > 0) {

        for (var i = 0; i < danhSach.length; i++) {
            if (danhSach[i].loaiSanPham == 'manHinh') {
                danhSachSanPhamManHinh[i] = danhSach[i];
            }
        }
    }
    return danhSachSanPhamManHinh;
}

function chuyenDanhSachThanhHTML(danhSach) {

    let HTMLTong = '';
    for (var i = 0; i < danhSach.length; i++) {
        HTMLTong += HTMLSanPham(danhSach[i]);
    }
    return HTMLTong;
}

function layDanhSachLaptop() {
    let danhSach = danhSachSanPham();
    let danhSachLaptop = [];
    for (var i = 0; i < danhSach.length; i++) {
       
        if (danhSach[i].loaiSanPham == 'laptop') {
            danhSachLaptop[i] = danhSach[i];
        }
    }
    return danhSachLaptop;
}


function layDanhSachManHinh() {
    let danhSach = danhSachSanPham();
    let danhSachManHinh = [];
    for (var i = 0; i < danhSach.length; i++) {
        if (danhSach[i].loaiSanPham == 'manHinh') {
            danhSachManHinh[i] = danhSach[i];
        }
    }
    return danhSachManHinh;
}



function HTMLItemGioHang(item) {
    let sanPhamDayDu = chuyenIdThanhSanPhamDayDu(item.id);

    let HTML = '';
    HTML += 
        '   <div class="item-gio-hang">  ' +
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
        '                           <span>' + formatTienTe(sanPhamDayDu.giaBan()) + '</span>  ' +
        '                       </div>  ' +
        '                       <div class="gia-goc">  ' +
        '                           <span>' + formatTienTe(sanPhamDayDu.giaGoc) + '</span>  ' +
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
                closeModal(modal);
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



function hienTongSoLuong() {
    var nodeTongSoSanPham = document.getElementById('so-luong-san-pham');
    var soLuong = tongSoSanPham();

    nodeTongSoSanPham.innerHTML = soLuong + ' sản phẩm';
}
function tongSoSanPham() {
    let danhSachJSON = localStorage.getItem(keyLocalGioHang);
    let danhSachParse = JSON.parse(danhSachJSON);
    if (danhSachParse == null || danhSachParse == '') return 0;
    var soLuong = 0;
    for (var sanpham of danhSachParse) {
        soLuong += sanpham.soLuong;
    }
    return soLuong;
}


function formatTienTe(soTien) {
    var quyDoi = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(soTien);
    return quyDoi;
}
