
    


    document.getElementById("btn-them-san-pham").addEventListener("click", function () {
        checkInputThemSanPham(event);
    });
    function themSanPham(sanPham) {
        var danhSach = danhSachSanPham();
        console.log(danhSach);
        danhSach.unshift(sanPham);
        localStorage.setItem(keyLocalSanPhamMoi, JSON.stringify(danhSach));
    }


    function checkInputThemSanPham(event) {

        var check = true;

        var nodeLoaiSanPham = document.getElementById('loaiSanPham');
        let nodeInput = document.querySelectorAll('#modal-them-san-pham input[required]');

        let nodeHienThiLoi = document.querySelectorAll('.hien-thi-loi p')


        for (let i = 0; i < nodeInput.length; i++) {
            if (nodeInput[i].value == '') {
                check = false;
                if (nodeInput[i].id == 'hinhAnh') {
                    var tenLoi = 'Hình ảnh';
                }
                if (nodeInput[i].id == 'tenSanPham') {
                    var tenLoi = 'Tên sản phẩm';
                }
                if (nodeInput[i].id == 'giaGoc') {
                    var tenLoi = 'Giá gốc sản phẩm';
                }
                if (nodeInput[i].id == 'phanTramGiamGia') {
                    var tenLoi = 'Phần trăm giảm giá';
                }

                nodeHienThiLoi[i].innerHTML = tenLoi + ' không được bỏ trống!';
            } else {
                if (nodeInput[i].id == 'hinhAnh') {
                    nodeHienThiLoi[i].innerHTML = '';
                    var hinhAnh = nodeInput[i].value;
                }
                if (nodeInput[i].id == 'tenSanPham') {
                    nodeHienThiLoi[i].innerHTML = '';
                    var tenSanPham = nodeInput[i].value;
                }
                if (nodeInput[i].id == 'giaGoc') {
                    if (nodeInput[i].value < 0) {
                        check = false;
                        nodeHienThiLoi[i].innerHTML = 'Giá gốc không thể âm!';

                    } else {
                        var giaGoc = nodeInput[i].value;
                        nodeHienThiLoi[i].innerHTML = '';
                    }
                }
                if (nodeInput[i].id == 'phanTramGiamGia') {
                    if (nodeInput[i].value < 0 || nodeInput[i].value > 100) {
                        check = false;
                        nodeHienThiLoi[i].innerHTML = 'Vui lòng nhập trong khoảng từ 0 - 100';

                    } else {
                        nodeHienThiLoi[i].innerHTML = '';
                        var phanTramGiamGia = nodeInput[i].value;
                    }
                }
            }

        }

        var loaiSanPham = nodeLoaiSanPham.value;
        console.log(loaiSanPham);

        console.log(nodeInput);
        if (check != false) {
            let sanpham = sanPham(hinhAnh, tenSanPham, giaGoc, phanTramGiamGia, loaiSanPham);
            console.log('sanpham');
            console.log(sanpham);
            themSanPham(sanpham);
        }
        hienThiSanPham();
    }
    var modalThemSanPham = document.getElementById('modal-them-san-pham')
    var modal = document.getElementById('modal');
    var modalClose = document.getElementById('modal-xoa-san-pham');


    hienThiSanPham();
    function hienThiSanPham() {
        let nodeHienThi = document.getElementById('danh-sach-san-pham');
        nodeHienThi.innerHTML = HTMLDanhSachSanPham();
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
            '                           <span>' + sanPham.giaGoc + '</span>  ' +
            '                       </div>  ' +
            '                       <div class="phan-tram-giam-gia">  ' +
            '                           <span>-' + sanPham.phanTramGiamGia + '%</span>  ' +
            '                       </div>  ' +
            '                   </div>  ' +

            '                       <i onclick="suaSanPham(event,' + sanPham.id + ')" class="fas fa-cog btn-them-san-pham"></i>  ' +
            '                       <i onclick="xoaSanPham(' + sanPham.id + ')" class="fas fa-times btn-xoa-san-pham"></i>  ' +

            '              </div>  ';
        return HTML;
    }

    function suaSanPham(event, idSanPham) {
        var nodeModal = document.getElementById('modal');
        nodeModal.style.display = 'block';
        var nodeCha = event.target.parentElement;

        var hinhAnh = nodeCha.querySelector('.anh-san-pham img').getAttribute('src');

        var tenSanPham = nodeCha.querySelector('.thong-tin-san-pham .ten-san-pham span').innerText;
        console.log(tenSanPham);
        var giaGoc = nodeCha.querySelector('.thong-tin-san-pham .gia-truoc-giam span').innerText;
        var phanTramGiamGia = nodeCha.querySelector('.thong-tin-san-pham .phan-tram-giam-gia span').innerText;

        var regex = /\d+/g;
        phanTramGiamGia = phanTramGiamGia.match(regex);  
        var danhSach = danhSachSanPham();
        var loaiSanPhamDefault = 'manHinh';
        for (var sanPham of danhSach){
            if (sanPham.id == idSanPham){
                loaiSanPhamDefault = sanPham.loaiSanPham;
            }
        }

        var nodeThayDoiHinhAnh = document.querySelector('#hinhAnh-re').setAttribute('value', hinhAnh);
        var nodeThayDoiHinhAnh = document.querySelector('#tenSanPham-re').setAttribute('value', tenSanPham);
        var nodeThayDoiHinhAnh = document.querySelector('#giaGoc-re').setAttribute('value', giaGoc);
        var nodeThayDoiHinhAnh = document.querySelector('#phanTramGiamGia-re').setAttribute('value', phanTramGiamGia);
        var nodeLuuSanPham = document.querySelector('#btn-luu-san-pham').setAttribute('onClick', 'luuSanPham(' + idSanPham + ')');
        var nodeLoaiSanPham = document.querySelectorAll('#loaiSanPham-re option');
        for (var option of nodeLoaiSanPham){
            option.removeAttribute('selected');
            if (option.getAttribute('value')==loaiSanPhamDefault){
                option.setAttribute('selected', 'true');
            }
        }

    }

    function xoaSanPham(idSanPham) {
        var danhSach = danhSachSanPham();
        var gioHang = danhSachGioHang();
        
        for (var i = 0; i < danhSach.length; i++) {
            if ( danhSach[i].id == idSanPham) {
                danhSach.splice(i,1);
                break;
            }
        }

        if(gioHang){
        for (var i = 0; i < gioHang.length; i++) {
            if ( gioHang[i].id == idSanPham) {
                gioHang.splice(i,1);
                break;
            }
        }}
        localStorage.setItem(keyLocalGioHang, JSON.stringify(gioHang));
        localStorage.setItem(keyLocalSanPhamMoi, JSON.stringify(danhSach));
        hienThiSanPham();
    }

    function luuSanPham(idSanPham) {
        var nodeModalSuaSanPham = document.getElementById('modal');
        var hinhAnh = nodeModalSuaSanPham.querySelector('#hinhAnh-re').value;
        var tenSanPham = nodeModalSuaSanPham.querySelector('#tenSanPham-re').value;
        var giaGoc = nodeModalSuaSanPham.querySelector('#giaGoc-re').value;
        var phanTramGiamGia = nodeModalSuaSanPham.querySelector('#phanTramGiamGia-re').value;
        var loaiSanPham = document.querySelector('#loaiSanPham-re').value;
        
        
        var danhSach = danhSachSanPham();
        for (var sanpham of danhSach) {
            if (sanpham.id == idSanPham) {
                sanpham.hinhAnh = hinhAnh;
                sanpham.tenSanPham = tenSanPham;
                sanpham.giaGoc = giaGoc;
                sanpham.phanTramGiamGia = phanTramGiamGia;
                sanpham.loaiSanPham = loaiSanPham;
                break;
            }
        }
        localStorage.setItem(keyLocalSanPhamMoi, JSON.stringify(danhSach));
        closeModal(modal);
        hienThiSanPham();
        location.reload();
    }

   



