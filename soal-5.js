function proses(){
  var aksesoris = document.getElementById("alat").value;
  var harga = document.forms['form']['harga'].value;
  var jumlah =document.forms['form']['jumlah'].value;
  var total=0;
  if (aksesoris ="usb"){
    usb=50000;
    total = harga*jumlah+usb;
    document.getElementById('total').innerHTML = total;
  }else if (aksesoris ="memory"){
    memory=120000;
    total = harga*jumlah+memory;
    document.getElementById('total').innerHTML = total;
  }else if(aksesoris="speaker"){
    speaker=40000;
    total = harga*jumlah+speaker;
    document.getElementById('total').innerHTML = total;
  }
var pajak = 0.10;
document.getElementById('pajak').innerHTML=pajak='10%';
var bayar = 0.10 * total;
document.getElementById('bayar').innerHTML=bayar;
    
  }