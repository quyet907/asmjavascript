
   
    var danhSachSanPhamNoiBatMacDinh = layDanhSachSanPhamNoiBat().sort((a, b) => (Number(a.giaBan()) > Number(b.giaBan())) ? 1 : -1);
    var danhSachSanPhamLaptopMacDinh = layDanhSachSanPhamLaptop().sort((a, b) => (Number(a.giaBan()) > Number(b.giaBan())) ? 1 : -1);
    var danhSachSanPhamManHinhMacDinh = layDanhSachSanPhamManHinh().sort((a, b) => (Number(a.giaBan()) > Number(b.giaBan())) ? 1 : -1);



    //click xem tua sản phẩm
    var viTriBanDauSPNoiBat = 0;
    var viTriBanDauSPLaptop = 0;
    var viTriBanDauSPManHinh = 0;

    function onClickXemSanPhamSau(nodeHienThiDanhSach, danhSach) {
        var viTriHienThi = 0;

        var danhSach = danhSach.filter(n => n);
        if (nodeHienThiDanhSach == 'san-pham-noi-bat') {

            viTriBanDauSPNoiBat++;
            viTriHienThi = viTriBanDauSPNoiBat;
           
        } else if (nodeHienThiDanhSach == 'san-pham-laptop') {

            viTriBanDauSPLaptop++;
            viTriHienThi = viTriBanDauSPLaptop;
        } else {
            viTriBanDauSPManHinh++;
            viTriHienThi = viTriBanDauSPManHinh;
        }


        var soLuongPageChan = Math.floor(danhSach.length / 5);
        // var soLuongSanPhamPageCuoi = danhSach.length % 5;
        // var pageCuoi = 0;
        // if (soLuongSanPhamPageCuoi <5){
        //     pageCuoi = 1;
        // }

      
        if (viTriHienThi > soLuongPageChan) {
            viTriHienThi = soLuongPageChan;
            if (nodeHienThiDanhSach == 'san-pham-noi-bat') viTriBanDauSPNoiBat = viTriHienThi;
            else if (nodeHienThiDanhSach == 'san-pham-laptop') viTriBanDauSPLaptop = viTriHienThi;
            else viTriBanDauSPManHinh = viTriHienThi;
        }
       

        var x = document.getElementById(nodeHienThiDanhSach);

        x.style.transform = 'translateX(-' + viTriHienThi * 243 * 5 + 'px)';

        return
    }

    function onClickXemSanPhamTruoc(nodeHienThiDanhSach) {
        if (nodeHienThiDanhSach == 'san-pham-noi-bat') {
            viTriBanDauSPNoiBat--;
            var viTriHienThi = viTriBanDauSPNoiBat;
        } else if (nodeHienThiDanhSach == 'san-pham-laptop') {
            viTriBanDauSPLaptop--;
            var viTriHienThi = viTriBanDauSPLaptop;
        } else {
            viTriBanDauSPManHinh--;
            var viTriHienThi = viTriBanDauSPManHinh;
        }


        if (viTriHienThi < 0) {
            viTriHienThi = 0;
            if (nodeHienThiDanhSach == 'san-pham-noi-bat') viTriBanDauSPNoiBat = viTriHienThi;
            else if (nodeHienThiDanhSach == 'san-pham-laptop') viTriBanDauSPLaptop = viTriHienThi;
            else viTriBanDauSPManHinh = viTriHienThi;
        };
        console.log(viTriHienThi)
        // if(k>=3) k= 1;
        var x = document.getElementById(nodeHienThiDanhSach);

        x.style.transform = 'translateX(-' + viTriHienThi * 243 * 5 + 'px)';
    }

    //Hiển thị tổng sản phẩm giỏ hàng
    hienTongSoLuong();

    //Hiển thị sản phẩm nổi bật
    hienThiSanPham('san-pham-noi-bat', danhSachSanPhamNoiBatMacDinh);

    //Hiển thị sản phẩm laptop
    hienThiSanPham('san-pham-laptop', danhSachSanPhamLaptopMacDinh);


    hienThiSanPham('san-pham-man-hinh', danhSachSanPhamManHinhMacDinh);
    







    var nodeSapXep = document.querySelectorAll('.sap-xep ul li a');
    for (var i = 0; i < nodeSapXep.length; i++) {
        nodeSapXep[i].addEventListener("click", function () {
            thayDoiActive(event);
            sapXepSanPham(event);
        });
    }

    function sapXepSanPham(event) {
        var nodeChaSapXep = event.target.parentElement.parentElement;

        var idNodeChaSapXep = nodeChaSapXep.getAttribute('id');


        var danhSachSanPhamNoiBat = layDanhSachSanPhamNoiBat().filter(n => n);
        var danhSachSanPhamLaptop = layDanhSachSanPhamLaptop().filter(n => n);
        var danhSachSanPhamManHinh = layDanhSachSanPhamManHinh().filter(n => n);

        var kieuSapXep = event.target.getAttribute('value');

    

        var danhSachNoiBatDaSapXep = danhSachSanPhamDaSapXep(danhSachSanPhamNoiBat, kieuSapXep);
        var danhSachLaptopDaSapXep = danhSachSanPhamDaSapXep(danhSachSanPhamLaptop, kieuSapXep);
        var danhSachManHinhDaSapXep = danhSachSanPhamDaSapXep(danhSachSanPhamManHinh, kieuSapXep);

        //Hiển thị sản phẩm sắp xếp
        var idNodeCanSapXep = 'san-pham-man-hinh';

        if (idNodeChaSapXep == 'sap-xep-san-pham-noi-bat') {
            idNodeCanSapXep = 'san-pham-noi-bat';
            viTriBanDauSPNoiBat = 0;
            hienThiSanPham('san-pham-noi-bat', danhSachNoiBatDaSapXep)
        } else if (idNodeChaSapXep == 'sap-xep-san-pham-laptop') {
            idNodeCanSapXep = 'san-pham-laptop';
            viTriBanDauSPLaptop = 0;
            hienThiSanPham('san-pham-laptop', danhSachLaptopDaSapXep)
        } else {
            hienThiSanPham('san-pham-man-hinh', danhSachManHinhDaSapXep)
            viTriBanDauSPManHinh = 0;
        }

        console.log(viTriBanDauSPNoiBat);

   


      
        
        //Tua sản phẩm về vị trí 0
        onClickXemSanPhamTruoc(idNodeCanSapXep);
    }

    function danhSachSanPhamDaSapXep(danhSach, kieuSapXep) {
        if (kieuSapXep == 'tangDan') {
            danhSach.sort((a, b) => (Number(a.giaBan()) > Number(b.giaBan())) ? 1 : -1);

        } else if (kieuSapXep == 'giamDan') {
            danhSach.sort((a, b) => (Number(a.giaBan()) > Number(b.giaBan())) ? -1 : 1);

        } else {
            danhSach.sort((a, b) => (Number(a.phanTramGiamGia) > Number(b.phanTramGiamGia)) ? -1 : 1);
        }
        return danhSach;
    }

    function thayDoiActive(event) {
        var nodeCha = event.target.parentElement.parentElement;
        var allNodeCon = nodeCha.querySelectorAll('a');
        for (var nodeCon of allNodeCon) {
            nodeCon.removeAttribute('class');
        }
        event.target.setAttribute('class', 'active');
    }


    giaoDienDangNhap();




    var start = 0;
    var danhSachSliderItem = document.getElementsByName('slider-item');
    hienThiSlideHienTai(start);

    function onClickXemAnhTruoc() {
        start--;
        if (start == -1) start = danhSachSliderItem.length - 1;
        hienThiSlideHienTai(start);
    }

    function onClickXemAnhSau() {
        start++;
        if (start == danhSachSliderItem.length) start = 0;
        hienThiSlideHienTai(start);
    }

    function hienThiSlideHienTai(viTri) {
        for (var i = 0; i < danhSachSliderItem.length; i++) {
            danhSachSliderItem[i].style.display = 'none';
        }

        danhSachSliderItem[viTri].style.display = 'block';
    }







    function hienThiSanPham(idNodeHienThi, danhSach) {
        var danhSach = danhSach.filter(n =>n);
        var danhSachHTML = chuyenDanhSachThanhHTML(danhSach);
        let nodeHienThi = document.getElementById(idNodeHienThi);
        nodeHienThi.innerHTML = danhSachHTML;
    }





