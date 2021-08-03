function event2() {
    var x = document.getElementById("nama");
    x.value = x.value.toUpperCase();
  }
    function hasil(){
      var jam = document.forms['penggajian']['jam'].value;
      var upah =document.forms['penggajian']['upah'].value;
      var gaji = jam * upah;
      document.getElementById('gaji').innerHTML=gaji;
      var anak =document.forms['penggajian']['anak'].value;
      if (anak>=1) {
        tunj = 0.1;
        total = (gaji*0.1)*anak;
        document.getElementById('tunj').innerHTML=tunj='10%';
        document.getElementById('total').innerHTML=total;
      }else{
        total = gaji;
        document.getElementById('tunj').innerHTML=tunj="0%";
        document.getElementById('total').innerHTML=total;
      }
    }