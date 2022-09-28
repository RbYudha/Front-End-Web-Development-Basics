var teamAudit = [{
    name: 'Izaaz',
    background: 'Audit Specialist',
    gender: "Pria",
    hobby: ["Golf","Ngopi"],
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQGQeF7EJ7CLVw/profile-displayphoto-shrink_800_800/0/1658505868234?e=1669248000&v=beta&t=k60daOqINUbxW_i7-uiB3iSDwomYMCD7RqoCKpdWEDM'
}, {
    name: 'Rahmat',
    background: 'Auditor Perpajakan',
    gender: "Pria",
    hobby: ["Membaca buku"],
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQF5nR4KRKCYBw/profile-displayphoto-shrink_800_800/0/1647402091454?e=1669248000&v=beta&t=LUP1oyeGJtIHnOT_uVzxrCccWgKzLTGmvFKJTkMproc'
}, {
    name: 'Akri',
    background: 'Audit Analyst',
    gender: "Pria",
    hobby: ["Music", "Gaming"],
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQFXV5GE8b3bfw/profile-displayphoto-shrink_400_400/0/1660511549749?e=1669248000&v=beta&t=Ti5B2WHg9JzZnq48B0if9Ze3tLX65dc5Awv9lnGm-IQ'
}, {
    name: 'Bella',
    background: 'Audit Forensik',
    gender: "Wanita",
    hobby: ["Movie","Music"],
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQEhtxpJ3mxHBQ/profile-displayphoto-shrink_800_800/0/1644901646425?e=1669248000&v=beta&t=4EcL1q9CXdmiCYF4fLih1oyO3vAQ_v86TRo_QndXepc'
}, {
    name: 'Arkaan',
    background: 'IT Forensik',
    gender: "Pria",
    hobby: ["Berenang","Memancing"],
    picture: 'https://media-exp1.licdn.com/dms/image/C4E03AQGgzx-21xmEIw/profile-displayphoto-shrink_800_800/0/1663861019799?e=1669852800&v=beta&t=d4Y7BUiOvEpFdFW8g1N1xktP4se-WWSTtxXPBnuI1-c'
}, {
    name: 'Yudha',
    background: 'Audit Forensik',
    gender: "Pria",
    hobby: ["Drama Korea","Reading Book's"],
    picture: 'https://media-exp1.licdn.com/dms/image/C5603AQE0AroChNf10g/profile-displayphoto-shrink_800_800/0/1651021463335?e=1669852800&v=beta&t=27t-_T2zhsl66UajOqE-2dgpF08qcL4uczDpI5rveRI'
} ]

teamAudit.forEach(teamAudit => {
    $("#portofolio").append(` 
    <div class="col">
    <div class="card mt-2" style="width: 22rem;">
            <div class="card-body">
                <img style="width: 300px; height: 300px; border-radius: 50%;" src = "${teamAudit.picture}"/>
                <p class="card-text">Nama :${" "}${teamAudit.name}</p>
                <p class="card-text">Background :${" "}${teamAudit.background}</p>
                <p class="card-text">Gender :${" "}${teamAudit.gender}</p>
                <p class="card-text">Hobby :${" "}${teamAudit.hobby}</p>
            </div>
    </div>
    </div>
    `)
     });



   



    
