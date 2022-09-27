var pesertaCodingClass = [{
    name: 'Izaaz',
    background: 'IT Engineer',
    gender: "Pria",
    hobby: ["Coding","Ngopi"],
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQGQeF7EJ7CLVw/profile-displayphoto-shrink_800_800/0/1658505868234?e=1669248000&v=beta&t=k60daOqINUbxW_i7-uiB3iSDwomYMCD7RqoCKpdWEDM'
}, {
    name: 'Rahmat',
    background: 'Profesional Gamer',
    gender: "Pria",
    hobby: ["Makan","tidur","main"],
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQF5nR4KRKCYBw/profile-displayphoto-shrink_800_800/0/1647402091454?e=1669248000&v=beta&t=LUP1oyeGJtIHnOT_uVzxrCccWgKzLTGmvFKJTkMproc'
}, {
    name: 'Akri',
    background: 'Atlet Dota 2',
    gender: "Pria",
    hobby: ["Musik","Gaming"],
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQFXV5GE8b3bfw/profile-displayphoto-shrink_400_400/0/1660511549749?e=1669248000&v=beta&t=Ti5B2WHg9JzZnq48B0if9Ze3tLX65dc5Awv9lnGm-IQ'
}, {
    name: 'Bella',
    background: 'IT Developer',
    gender: "Wanita",
    hobby: ["Movie","Music"],
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQEhtxpJ3mxHBQ/profile-displayphoto-shrink_800_800/0/1644901646425?e=1669248000&v=beta&t=4EcL1q9CXdmiCYF4fLih1oyO3vAQ_v86TRo_QndXepc'
}, {
    name: 'Arkaan',
    background: 'Pelaut Tangguh',
    gender: "Pria",
    hobby: ["Berenang","Memancing"],
    picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQGgzx-21xmEIw/profile-displayphoto-shrink_800_800/0/1663861019799?e=1669852800&v=beta&t=d4Y7BUiOvEpFdFW8g1N1xktP4se-WWSTtxXPBnuI1-c'
}, {
    name: 'Yovanka',
    background: 'IT Developer',
    gender: "Pria",
    hobby: ["Drama Korea","VR Gaming"],
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQH9NFjNtamkcQ/profile-displayphoto-shrink_800_800/0/1640051463919?e=1669248000&v=beta&t=GWX7X-HmpyCSqYw0F7UH2zVgCkf11A4xKs1H2i-Sazc'
} ]

pesertaCodingClass.forEach(pesertaCodingClass => {
    $("#portofolio").append(` 
    <div class="col">
    <div class="card mt-2" style="width: 22rem;">
            <div class="card-body">
                <img style="width: 300px; height: 300px; border-radius: 50%;" src = "${pesertaCodingClass.picture}"/>
                <p class="card-text">Nama :${" "}${pesertaCodingClass.name}</p>
                <p class="card-text">Background :${" "}${pesertaCodingClass.background}</p>
                <p class="card-text">Gender :${" "}${pesertaCodingClass.gender}</p>
                <p class="card-text">Hobby :${" "}${pesertaCodingClass.hobby}</p>
            </div>
    </div>
    </div>
    `)
     });



   



    
