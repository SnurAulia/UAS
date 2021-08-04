function hasil(){
  let hargarumah;
  let uangmuka=0.2;
  const type = document.getElementById("rumah").value;
  let lamakredit = parseInt(document.getElementById('waktu').value);
 
  //tipe rumah
  if (type =="MAWAR") {
    hargarumah =130000000;
  }else if (type =="ALAMANDA") {
    hargarumah =120000000;
  }else{
    alert("Silahkan Pilih Type Rumah Terlebih Dahulu");
  }

  //uang muka
  let hasiluangmuka = uangmuka*hargarumah;

  //sisa 
  let hasilsisa=hargarumah-hasiluangmuka;
  let bulan='';
  let oangsuran='';
  let total ='';
  let angsuran = 4000000;
  let totalangsuran = hasilsisa-angsuran;

  let x=lamakredit;
  for (let i = 1 ;i<=x; i++) {
   bulan += i + "<br>";
   oangsuran = angsuran +"<br>";
   totalangsuran -= 4000000;
   total = totalangsuran + "<br>"
  }

  //output
  document.getElementById("tiperumah").innerHTML = type;
  document.getElementById("hargarumah").innerHTML = hargarumah;
  document.getElementById("uangmuka").innerHTML = hasiluangmuka;
  document.getElementById("sisa").innerHTML = hasilsisa;
  document.getElementById("lamakredit").innerHTML = lamakredit;
  document.getElementById("angsuran").innerHTML = angsuran;
  document.getElementById("obulan").innerHTML = bulan;
  document.getElementById("oangsur").innerHTML = oangsuran;
  document.getElementById("osisa").innerHTML = total;
}
   
