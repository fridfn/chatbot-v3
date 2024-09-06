
const firstPertanyaan = document.getElementById('firstPertanyaan');
const firstContentPertanyaan = document.getElementById('firstContentPertanyaan');

const timeQuestion = document.getElementById('timeQuestion');
const timeAsk = document.getElementById('timeAsk');

const contentPertanyaan = document.getElementById('contentPertanyaan');
const contentJawaban = document.getElementById('contentJawaban');

/* MENGKLONING CONTENT*/

const originalElementPertanyaan = document.getElementById('contentPertanyaan');
const clonedElementPertanyaan = originalElementPertanyaan.cloneNode(true);

const originalElementJawaban = document.getElementById('contentJawaban');
const clonedElementJawaban = originalElementJawaban.cloneNode(true);


/* MENGKLONING CHAT*/
const originalPertanyaan = document.getElementById('chatPertanyaan');
const clonedPertanyaan = originalPertanyaan.cloneNode(true);

const originalJawaban = document.getElementById('chatJawaban');
const clonedJawaban = originalJawaban.cloneNode(true);

const clonedTimeQuestion = clonedElementPertanyaan.querySelector('#timeQuestion');
const originalTimeQuestion = originalElementPertanyaan.querySelector('#timeQuestion');
const originalTimeAsk = originalElementJawaban.querySelector('#timeAsk');

const barier = document.querySelector('.barier');
const textMengetik = document.querySelector('.status');

function checkInput() {
 
  var jawaban = document.getElementById('jawaban');
  var sendBtn = document.getElementById('myButton');

  if (jawaban.value.length > 0) {
   sendBtn.disabled = false;
  } else {
   
   sendBtn.disabled = true;
  }
}

const containerLinear = document.querySelector('.container-linear');
const containerLove = document.querySelector('.container-love');

const clonedTextJawaban = clonedElementJawaban.querySelector('#textJawaban');
const clonedTextPertanyaan = clonedElementPertanyaan.querySelector('#textPertanyaan');
const originalTextPertanyaan = clonedElementPertanyaan.querySelector('#TextPertanyaan');

var img = document.createElement('img');
img.src = 'boticon.webp';
document.getElementById('imgBox').appendChild(img);

document.addEventListener('contextmenu', function(e) {
  var targetElement = e.target;
  if(!targetElement.classList.contains('no-context-menu')) {
   e.preventDefault();
  }
});

document.getElementById("jawaban").addEventListener("paste", function(e) {
  e.preventDefault();
  console.log('eitsss tidak bisa copy paste');
  function curang() {
  clonedTextPertanyaan.innerHTML = "hayoo ngapain kamu mau copy paste ya?🤡";
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
  }
  setTimeout(curang, 500);
});

let userData = [];

const botSay = (data) => {
  return [
    `Hi. Nama saya Fabot, siapa nama kamu?`,/*0*/
    `owh nama kamu ${data?.nama}, usia kamu berapa ya?`,/*1*/
    `ohh ${data?.usia}, kalo hobi kamu apa ya?`,/*2*/
    `ihhh sama dong aku juga hobi ${data?.hobi}, btw kamu udah punya pacar belum?`,/*3*/
    `yaa gpp si cuma mau nanya. intinya basa basi aja hehe😅`,/*4*/
    `basa basi yang amat basi. maaf ya ${userData[0]} udah nanya itu🤐`,
    `btw kamu mau ga main game sama aku?`,/*6*/
    `hmmm enaq nya main game apa yaa, bentar aku mikir dlu🤔`,/*7*/
    `ok klo begitu, aku itung ya ${userData[0]} sampe 3 abis itu kita cepet cepetan siapa yang paling cepet ngetiknya`,/*8*/
    `${data?.siap}, siap yaa ${userData[0]} klo gitu`,/*9*/
    `hmm aku rasa kaya nya kita sampe sini aja ya ${userData[0]} main nya?`,/*10*/
    `makasih yaa ${userData[0]}🥺 di tunggu ya next updatenya dari aku, nanti kita main bareng lagi😉`,/*11*/
  ]
}

const userSay = (data) => {
  return [
   `Hi nama saya ${data?.nama}`,/*0*/
   `saya masih berusia ${data?.usia} tahun`,/*1*/
   `hobi yang paling saya sukai adalah ${data?.hobi}`,/*2*/
   `saya ${data?.pacar} mempunyai pacar. memang nya knapa?`,/*3*/
   `${data?.maaf}.`,/*4*/
   `${data?.game}, emang mau main game apa?`,/*5*/
   `${data?.ok} janji. aku gaakan main curang`,/*6*/
   `${data?.siap}`,/*7*/
   `${data?.az}`,/*8*/
   `${data?.userSay}`,/*9*/
   `${data?.end}`,/*10*/
  ]
}

firstPertanyaan.innerHTML = botSay()[0];

containerLove.style.opacity = "0";
contentPertanyaan.style.display = "none";
contentJawaban.style.display = "none";
firstContentPertanyaan.style.display = "none";

setTimeout(() => {
  
  textLoad();
  barier.style.display = "block";
  
  setTimeout(() => {
   
    firstContentPertanyaan.style.display = "block"
    barier.style.display = "none";
    
    textMengetik.innerHTML = "Online";
  }, 4000)
}, 150)

let init = 0;
let cobaLagi = false;

function botStart(data) {
  init ++
  
  var sendBtn = document.getElementById('myButton');
  sendBtn.disabled = true;
  
  console.log({userData});
  console.log(`masuk ke init ${init} 😎`)
  
  const jawaban = document.getElementById('jawaban');
  const jawabanValue = jawaban.value;
  
  const clonedTimeAsk = clonedElementJawaban.querySelector('#timeAsk');
  
  startTime();
   clonedTimeQuestion.innerHTML = timeQuestion.innerHTML;
   clonedTimeAsk.innerHTML = timeAsk.innerHTML;
   
  barier.style.display = "block";
  originalPertanyaan.style.display = "none";
  
  
  if (init === 1) {
  console.log({ nama: jawaban.value });
  userDelay({ nama: jawaban.value });
  
  contentJawaban.style.display = "block";
  textJawaban.innerHTML = userSay({ nama: jawabanValue })[0];
  
  textLoad();
   
  setTimeout(() => {
   
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
    clonedTextPertanyaan.innerHTML = botSay({ nama: jawabanValue })[1];
    contentPertanyaan.style.display = "block";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
  }, 4000);
}


 else if (init === 2) {
  console.log({ usia: jawaban.value });
  botDelay({ usia: jawaban.value });
  
  clonedTextJawaban.innerHTML = userSay({ usia: jawabanValue })[1];
   
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
    
    originalTimeQuestion.innerHTML = timeQuestion.innerHTML;
    
    clonedTextPertanyaan.innerHTML = botSay({ usia: jawabanValue })[2];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }, 4000);
}


  else if (init === 3) {
    console.log({ hobi: jawabanValue });
    userDelay({ hobi: jawabanValue });
   
    clonedTextJawaban.innerHTML = userSay({ hobi: jawabanValue })[2];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
    
    textLoad();
    
    setTimeout(() => {
    img.src = 'reactIdk.png';
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
     
    clonedTextPertanyaan.innerHTML = botSay({ hobi: jawabanValue })[3];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
    document.querySelector('#contentPertanyaan').scrollIntoView({ behavior: 'smooth' });
     
    }, 4000);
  }
  
  
  else if (init === 4) {
   console.log({ pacar: jawabanValue });
   userDelay({ hobi: jawabanValue });
   
   img.src = 'boticon.webp';
   clonedTextJawaban.innerHTML = userSay({ pacar: jawabanValue })[3];
    
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
    
   textLoad();
   
   setTimeout(() => {
    
    clonedTextPertanyaan.innerHTML = botSay({ pacar: jawabanValue })[4];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    textLoad();
    
    setTimeout(() => {
     barier.style.display = "none";
     textMengetik.innerHTML = "Online";
     
     
     clonedTextPertanyaan.innerHTML = botSay()[5];
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
    /*document.querySelector('#contentPertanyaan').scrollIntoView({ behavior: 'smooth' });*/
    }, 4000);
   }, 4000);
  }
  
  
  else if (init === 5) {
   console.log({ maaf: jawabanValue });
   userDelay({ maaf: jawabanValue });
   
   clonedTextJawaban.innerHTML = userSay({ maaf: jawabanValue })[4];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   setTimeout(() => {
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
    
    clonedTextPertanyaan.innerHTML = botSay({ game: jawabanValue })[6];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
   }, 4000);
  }
  
  
  else if (init === 6) {
   console.log({ game: jawabanValue });
   userDelay({ game: jawabanValue });
   
   clonedTextJawaban.innerHTML = userSay({ game: jawabanValue })[5];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   setTimeout(() => {
    
    textLoad();
    clonedTextPertanyaan.innerHTML = botSay()[7];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     textLoad();
     
     clonedTextPertanyaan.innerHTML = " gimana klo kita main game cepet cepetan ngetik dari a sampe z?";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
       barier.style.display = "none";
       textMengetik.innerHTML = "Online";
       
       
      clonedTextPertanyaan.innerHTML = `peraturan nya gampang intinya ${userData[0]} jangan main curang`;
        
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      textMengetik.innerHTML = "Online";
     }, 4500);
    }, 8000);
   }, 4000);
  }
  
  
  else if (init === 7) {
   console.log({ ok: jawabanValue });
   userDelay({ ok: jawabanValue });
   
   clonedTextJawaban.innerHTML = userSay({ ok: jawabanValue })[6];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   setTimeout(() => {
    
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
    
    clonedTextPertanyaan.innerHTML = botSay()[8];
   
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
   }, 4000);
 }
 
 
 
 else if (init === 8) {
  console.log('siap siap....')
  userDelay({ siap: jawabanValue });
  
  textLoad();
  
  if(!cobaLagi) {
  clonedTextJawaban.innerHTML = userSay({ siap: jawabanValue })[7];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  }
  
  if(cobaLagi) {
    
   setTimeout(() => {
    clonedTextPertanyaan.innerHTML = `okk siap siap yaa ${userData[0]}`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
   setTimeout(() => {
    
     containerLinear.style.opacity = "1";
     containerLinear.style.transition = "1s";
   
     containerLove.style.opacity = "0";
     containerLove.style.transition = "1s";
    }, 1000);
    }, 2000);
  }
   
  else {
   setTimeout(() => {
   clonedTextPertanyaan.innerHTML = botSay({ siap: jawabanValue })[9];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 1000)
   }
   
   
    setTimeout(() => {
     textLoad();
     barier.style.width = '45px';
     barier.style.height = '45px';
     clonedTextPertanyaan.innerHTML = "satuuuu";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
     clonedTextPertanyaan.innerHTML = "duuaaaaa";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      
     textLoad();
     botAnswerExecuted = false;
     barier.style.display = "none";
     clonedTextPertanyaan.innerHTML = "tiggaaaaaa";
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     function jawabanBot() {
       
       botAnswerExecuted = true;
       barier.style.width = "100%";
       clonedTextPertanyaan.innerHTML = "abcdefghijklmnopqrstuvwxyz";
       
       document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       
       }
       setTimeout(jawabanBot, 6700);
       
          }, 1500);
        }, 2000);
      }, 3000);
 }

 
 else if (init === 9 && jawabanValue.toLowerCase() === "abcdefghijklmnopqrstuvwxyz") {
  console.log('siapa yang tercepat');
  userDelay({ az: jawabanValue });
  
  textLoad();
  
  clonedTextJawaban.innerHTML = userSay({ az: jawabanValue })[8];
  
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  if(!botAnswerExecuted) {
    console.log('user menjawab lebih cepat')
    function userFirst() {
    setTimeout(() => {
      
     clonedTextPertanyaan.innerHTML = `wahh kamu hebat ${userData[0]} bisa ngalahin aku🥳`;
   
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     
     JawabanValue = jawaban.value;
     barier.style.display = "none";
     textMengetik.innerHTML = "Online";
     clonedTextPertanyaan.innerHTML = "karna kamu bisa ngalahin aku, ini buat kamu ❤️";
    
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
       containerLinear.style.opacity = "0";
       containerLinear.style.transition = "1s";
       
       containerLove.style.opacity = "1";
       containerLove.style.transition = "1s";
      }, 2000);
     }, 4000);
    }, 4000);
   }
   
   setTimeout(userFirst, 0);
  }/*fungsi ketika menjawab dengan cepat*/
  
  else {
   textLoad();
   function botFirst() {
     JawabanValue = jawaban.value
     barier.style.width = '100%';
     
      clonedTextPertanyaan.innerHTML = "wleee😝 aku duluan, kamuu kalah yahahaha lucu banget sih";
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
      
      setTimeout(() => {
        barier.style.display = "none";
        textMengetik.innerHTML = "Online";
        clonedTextPertanyaan.innerHTML = `kalo ${userData[0]} mau mencoba lagi. ketik coba lagi`;
      
        document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
       }, 3000);
     };
   setTimeout(botFirst, 2000);
    
   if(!cobaLagi) {
   textLoad();
   setTimeout(() => {
     
    textLoad();
    JawabanValue = jawaban.value;
    clonedTextPertanyaan.innerHTML = `yhhh maaf yaa ${userData[0]}🥺 walaupun jawaban kamu bener tapi aku dluan yang paling cepet`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
      
     clonedTextPertanyaan.innerHTML = `karna kamu udah jawab bener gada yang salah. ini buat kamu ❤️`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     
      barier.style.display = "none";
      textMengetik.innerHTML = "Online";
      
      containerLinear.style.opacity = "0";
      containerLinear.style.transition = "1s";
      
      containerLove.style.opacity = "1";
      containerLove.style.transition = "1s";
     }, 2000);
    }, 6000);
   }, 7000);
  } else {
   console.log('user sudah menjawab benar dan tidak ingin mencoba lagi');
  }
 }
} /* else if init 9 end kurawa*/
 
  else if (init === 9 && jawabanValue.toLowerCase() !== "abcdefghijklmnopqrstuvwxyz") {
   console.log('jawaban nya kurang bener')
   userDelay({ az: jawabanValue });
   
   clonedTextJawaban.innerHTML = userSay({ az: jawabanValue})[8];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   function botFirst() {
     JawabanValue = jawaban.value
     barier.style.width = '100%';
     barier.style.display = "none";
     textMengetik.innerHTML = "Online";
     
      clonedTextPertanyaan.innerHTML = `wleee😝 aku duluan, kamu kalah yahhaha lucu banget sihh kamu ${userData[0]} ngetik aja gak bener🤪`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     };
   setTimeout(botFirst, 2000);
   
   if(!cobaLagi) {
   setTimeout(() => {
    JawabanValue = jawaban.value;
    barier.style.display = "none";
    textMengetik.innerHTML = "Online";
    
    clonedTextPertanyaan.innerHTML = `maaf yaa ${userData[0]} jawaban kamu ${userData[7]} kurang bener`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
      clonedTextPertanyaan.innerHTML = `maaf ya ${userData[0]} kamu kalah, klo mau ketik coba lagi, untuk mencoba kembali`;
     
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 7000)
    }, 10000);
   } /*if kurawa end*/
   
   else{
    setTimeout(() => {
     
    textMengetik.innerHTML = "Online";
    clonedTextPertanyaan.innerHTML = `maaf yaa ${userData[0]} cepetan aku, klo mau ketik coba lagi`;
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    }, 6000);
   }
  }
  
  
  
  else if (init === 10) {
   console.log('kata kata terakhir');
   userDelay({ userSay: JawabanValue });
   
   if(init === 10 && jawabanValue.toLowerCase() === "coba lagi") {
   
   cobaLagi = true;
   clonedTextJawaban.innerHTML = userSay({ userSay: jawabanValue })[9];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
    
    init = 7;
    
    botStart();
   } else {
   console.log('user tidak mau coba lagi')
   
    clonedTextJawaban.innerHTML = userSay({ userSay: jawabanValue })[9];
   
    document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   textLoad();
   
   setTimeout(() => {
    
    clonedTextPertanyaan.innerHTML = botSay({ userSay: jawabanValue })[10];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    setTimeout(() => {
     textLoad();
     
     clonedTextPertanyaan.innerHTML = `makasih yaa ${userData[0]} udah main bareng sama aku😇, asik juga ya main sama kamu wksk`;
     
     document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
     setTimeout(() => {
      barier.style.display = "none";
      textMengetik.innerHTML = "Online";
      
      clonedTextPertanyaan.innerHTML = `btw nanti kapan kapan kita ${userData[1]} bareng yaa klo aku ada waktu :)`;
      
      document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     }, 4000);
    }, 8000);
   }, 4000);
  }
 }
  
  
  else if (init === 11) {
   console.log('endingg chat.....');
   userDelay({ end: jawabanValue });
   
   clonedTextJawaban.innerHTML = userSay({ end: jawabanValue })[10];
   
   document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
   
   /*textLoad();*/
   
   setTimeout(() => {
    textMengetik.innerHTML = "Online";
    
    clonedTextPertanyaan.innerHTML = botSay({ end: jawabanValue })[11];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
   }, 4000)
  }
  
}/*kurawa botStart*/

function botDelay(pertanyaanBot) {
  textPertanyaan.innerHTML = botSay(pertanyaanBot)[init];
  
  jawaban.value = "";
}

function userDelay(jawabanUser) {
  userData.push(jawaban.value);
  
  textJawaban.innerHTML = userSay(jawabanUser)[init];
  
  jawaban.value = "";
}


const textLoad = () => {
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik";
  
 },[0])
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik.";
 },[1000])
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik..";
 },[1800])
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik...";
 },[2400])
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik....";
 },[3400])
}


/*kode validasi JAM*/

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = checkTime(h);
  timeAsk.innerHTML = `${h}.${m}`;
  timeQuestion.innerHTML = `${h}.${m}`;
}

function checkTime(i) {
  if (i < 10) {
  i = "0" + i;
   }
  return i;
 }

/*kode validasi tanggal*/

const currentDate = new Date();
const d = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const y = currentDate.getFullYear();

const date = document.querySelector('.date');

const monthNames = [
  "Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember",
  ]

date.innerHTML = `${d} ${monthNames[monthIndex]} ${y}`;


/*JAVASCRIPT CODE BACKGROUND ANIMATION*/

function hujanLinear() {
   let amount = 20;
   let containerLinear = document.querySelector('.container-linear');
   let i = 0;
   while(i < amount) {
    
    let drop = document.createElement('i');
    
    let size = Math.random() * 4;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -50;
    let duration = Math.random() * 30;
    
    drop.style.width = 2 + size+'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay+'s';
    drop.style.animationDuration = 25 + duration + 's';
    containerLinear.appendChild(drop);
    i ++
   }
  }
  
  hujanLinear();
 
function rainLove() {
   let amount = 45;
   let containerLove = document.querySelector('.container-love');
   let i = 0;
   while(i < amount){
    let dropLove = document.createElement('i');
    dropLove.classList.add('fas');
    dropLove.classList.add('fa-heart');
    
    let sizeLove = Math.random() * 17;
    let posXLove = Math.floor(Math.random() * 91);
    let delayLove = Math.random() * -30;
    let durationLove = Math.random() * 35;
    
    dropLove.style.fontSize = 15 + sizeLove +'px';
    dropLove.style.left = posXLove + '%';
    dropLove.style.animationDelay = delayLove + 's';
    dropLove.style.animationDuration = 45 + durationLove + 's';
    containerLove.appendChild(dropLove);
    i ++
   }
  }
  
 rainLove();