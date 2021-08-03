function event2() {
    var x = document.getElementById("nama");
    x.value = x.value.toUpperCase();
  }
  function hasil(){
  var harga = document.forms['Penjualan']['harga'].value;
  var jumlah =document.forms['Penjualan']['jumlah'].value;
  var total = harga*jumlah;
  document.getElementById('total').innerHTML = total;
  var diskon = 0.10;
  var bayar;
  if (total>150000) {
      bayar = total - (total*diskon);
      document.getElementById('bayar').innerHTML=bayar;
      document.getElementById('diskon').innerHTML="10%";
  }else{
      document.getElementById('bayar').innerHTML=total;
      document.getElementById('diskon').innerHTML="0%";
    }
  }