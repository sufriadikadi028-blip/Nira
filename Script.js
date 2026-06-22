const surat = `Untuk Kamu ❤️

Ada banyak hal di dunia ini yang ingin aku lihat, banyak tempat yang ingin aku datangi, dan banyak mimpi yang ingin aku kejar. Aku selalu berpikir bahwa kebahagiaan ada di ujung perjalanan, di tempat-tempat baru, atau di pencapaian yang belum berhasil kuraih.

Sampai akhirnya aku bertemu kamu.

Sejak itu aku sadar, ternyata kebahagiaan tidak selalu menunggu di masa depan. Kadang ia hadir dalam bentuk seseorang yang membuat hari biasa terasa lebih berwarna. Seseorang yang membuat cerita sederhana menjadi kenangan yang selalu ingin diulang.

Aku suka caramu tertawa, caramu bercerita tentang hal-hal kecil yang mungkin dianggap sepele oleh orang lain, dan caramu menjadi dirimu sendiri tanpa perlu berpura-pura menjadi siapa pun. Ada ketenangan yang sulit dijelaskan setiap kali aku berbicara denganmu. Seolah dunia yang sering berisik ini mendadak tahu cara untuk diam sesaat.

Aku tidak tahu apa yang akan terjadi beberapa tahun ke depan. Hidup punya kebiasaan aneh untuk memberi kejutan ketika manusia sedang merasa sudah membuat rencana yang sempurna. Tapi di antara semua ketidakpastian itu, ada satu hal yang selalu aku syukuri: mengenalmu.

Terima kasih karena sudah hadir dalam hidupku. Terima kasih karena sudah menjadi alasan untuk tersenyum di hari-hari yang berat. Terima kasih karena tanpa sadar mengajarkanku bahwa dicintai dan menghargai seseorang bukan tentang memiliki, melainkan tentang bertumbuh bersama.

Aku mungkin tidak selalu pandai menunjukkan perasaanku. Kadang aku terlalu sibuk dengan pikiranku sendiri, kadang terlalu fokus mengejar tujuan yang bahkan belum tentu tercapai. Tapi percayalah, di sela semua kesibukan dan kekacauan itu, selalu ada ruang yang khusus untukmu.

Kalau suatu hari nanti kita sedang menghadapi masa yang sulit, aku harap kita tetap mengingat bagaimana semuanya dimulai. Dari obrolan sederhana, tawa yang tidak jelas sebabnya, dan rasa nyaman yang tumbuh perlahan tanpa dipaksa.

Aku tidak meminta hubungan yang sempurna. Aku hanya berharap kita bisa terus menjadi dua orang yang saling memilih, bahkan ketika keadaan tidak selalu mudah. Karena bagiku, cinta bukan tentang menemukan seseorang yang sempurna. Cinta adalah menemukan seseorang yang tetap ingin kita perjuangkan meskipun kita tahu tidak ada manusia yang sempurna.

Jadi hari ini, besok, dan selama aku masih bisa mengatakannya, aku ingin kamu tahu satu hal:

Di antara banyaknya orang yang pernah hadir dalam hidupku, kamu adalah salah satu alasan terbaik mengapa aku percaya bahwa beberapa pertemuan memang layak untuk disyukuri.

Dengan segala rasa yang mungkin tidak selalu pandai kuucapkan,

Aku mencintaimu. ❤️✨`;

const target = document.getElementById("text");

let index = 0;

function ketikSurat(){

    if(index < surat.length){

        target.innerHTML += surat.charAt(index);

        index++;

        target.parentElement.scrollTop =
        target.parentElement.scrollHeight;

        setTimeout(ketikSurat, 35);
    }
}

ketikSurat();

function playMusic(){
    document.getElementById("music").play();
}

function buatHati(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
    (Math.random() * 4 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(buatHati, 300);