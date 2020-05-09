
   var start = 0;
   var danhSachSliderItem = document.getElementsByName('slider-item');
hienThiSlideHienTai(start);

function onClickXemAnhTruoc(){
    start--;
    if (start == -1) start = danhSachSliderItem.length-1;
    hienThiSlideHienTai(start);
}

function onClickXemAnhSau(){
    start++;
    if (start == danhSachSliderItem.length) start = 0;
    hienThiSlideHienTai(start);
}

   function hienThiSlideHienTai(viTri){
       for (var i=0 ; i<danhSachSliderItem.length; i++){
           danhSachSliderItem[i].style.display = 'none';
       }

       danhSachSliderItem[viTri].style.display = 'block';
      
       
   }

 

