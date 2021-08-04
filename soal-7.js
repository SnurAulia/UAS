function event2() {
    var x = document.getElementById("nama");
    x.value = x.value.toUpperCase();
    }

  function hasil(){
    var namastr = (document.form.nama.value);
    var kategoristr = (document.form.kategori.value);
    var jmlstr = (document.form.jml.value);
    document.form.pelanggan.value = namastr;
    document.form.jenis.value = kategoristr;
    document.form.jmlh.value = jmlstr;

    // kategori
    switch (kategori) {
      case "sosial":
        pajak = 0;
        document.getElementById("outputpajak").innerHTML;
        break;
    case "rumah":
        pajak = 0.1;
        document.getElementById("outputpajak").innerHTML;
        break;
    case "industri":
        pajak = 0.3;
        document.getElementById("outputpajak").innerHTML;
        break;    
      default:
        alert("Silahkan Pilih Kategori Terlebih Dahulu")
        break;
    }
    let x=jumlah;
    let tarifsosial=0;
    let tarifrumah=0;
    let tarifindustri=0;
    let abodemen;
    let subtotal;

    let text = "";
    let jumlah="";
    let outputabodemen="";
    let outputtotal="";
    for (let i = 1; i <=x; i++){
      jumlah +=+ i +'<br>';
      if(kategori=="sosial"){
        tarifsosial +=300;
        text+tarifsosial+"<br>";
        abodemen=10000;
        subtotal=abodemen+tarifsosial;

        outputabodemen+=abodemen+"<br>";
        outputtotal+=subtotal+"<br>";
      }else if (kategori=="rumah") {
        tarifrumah +=500;
        text+tarifindustri+"<br>";
        abodemen=30000;
        subtotal=abodemen+tarifrumah;

        outputabodemen+=abodemen+"<br>";
        outputtotal+=subtotal+"<br>";
      }else if (kategor=="industri") {
        tarifindustri +=1000;
        text+tarifindustri+"<br>";
        abodemen=50000;
        subtotal=abodemen+tarifindustri;

        outputabodemen+=abodemen+"<br>";
        outputtotal+=subtotal+"<br>";
      }        
    }
    document.getElementById("outjumlah").innerHTML= jumlah;
    document.getElementById("outtarif").innerHTML= teks;
    document.getElementById("outabodemen").innerHTML= outputabodemen;
    document.getElementById("outsub").innerHTML= outputtotal;
    if (i==i) {
      document.getElementById("outputsub").innerHTML= subtotal;
      let outputpajak = pajak*subtotal;
      document.getElementById("outputpajak").innerHTML= outputpajak;
      let bayar = outputpajak+subtotal;
      document.getElementById("outputbayar").innerHTML= bayar;
    }
    function proses() {
  
    }
    
  }