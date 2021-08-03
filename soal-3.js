function hasil(){
    var nama = document.getElementById("barang").value;
    var harga = document.forms['form']['harga'].value;
    var jumlah =document.forms['form']['jumlah'].value;
    var total = harga*jumlah;
  switch (nama) {
    case 'monitor':
        harga = 500000;
        document.getElementById('harga').innerHTML = harga;
        document.getElementById('total').innerHTML = total;
      break;
    case 'mouse':
      harga = 150000;
      document.getElementById('harga').innerHTML = harga;
      document.getElementById('total').innerHTML = total;
      break;
    case 'usb':
      harga = 100000;
      document.getElementById('harga').innerHTML = harga;
      document.getElementById('total').innerHTML = total;
      break;
    default:
  }
  }