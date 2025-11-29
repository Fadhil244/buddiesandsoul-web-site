//Tugas 1 dea afrizal
// var saldo = prompt('Masukan saldo anda')
// console.log('saldo anda adalah ' + saldo) 

//Tugs 2
// var hari = new Date().getDay()
// switch (hari) {
//     case 1: console.log('Hari ini adalah hari senin')
//     break
//     case 2: console.log('Hari ini adalah hari selaasa')
//     break
//     case 3: console.log('Hari ini adalah hari rabu')
//     break
//     case 4: console.log('Hari ini adalah hari kamis')
//     break
//     case 5: console.log('Hari ini adalah hari jumat')
//     break
//     case 6: console.log('Hari ini adalah hari sabtu')
//     break
//     case 7: console.log('Hari ini adalah hari minggu')
//     break
    

    
// }

document.getElementById("cta-btn").addEventListener("click", () => {
    window.location.href = "#about";
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.95)";
    } else {
        nav.style.background = "rgba(0,0,0,0.85)";
    }
});

// Jika tombol "Anggota" ditekan
document.getElementById("cta-btn").addEventListener("click", function() {
    document.getElementById("anggota").scrollIntoView({
        behavior: "smooth"
    });
});


