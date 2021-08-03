function hasil(){
    var merk = document.getElementById("motor").value;
    var aksesoris = document.getElementById("alat").value;
    var harga = document.forms['form']['harga'].value;
    
    if ((merk='honda') && (aksesoris='velg')) {
      var honda = 15000000;
      var velg = 450000;
      harga = honda + velg;
      document.getElementById('harga').innerHTML = harga;
    } else if ((merk='yamaha')&& (aksesoris='helm')) {
      var yamaha = 14000000;
      var helm = 250000;
      harga = yamaha + helm;
      document.getElementById('harga').innerHTML = harga;
    } else if ((merk='suzuki') && (aksesoris='jaket'))  {
      var suzuki = 13000000;
      var jaket = 300000;
      harga = suzuki + jaket;
      document.getElementById('harga').innerHTML = harga;
    }
  
    var diskon=0;
    var total = harga*diskon;
  
    if (document.form.tunai.checked){
        diskon = 0.10;
        total = harga*diskon;
        document.getElementById('total').innerHTML = total;
        document.getElementById('diskon').innerHTML = diskon='10%';
    }else{
        diskon = 0.15;
        total = harga*diskon;
        document.getElementById('total').innerHTML = total;
        document.getElementById('diskon').innerHTML = diskon='15%';
    }
  }