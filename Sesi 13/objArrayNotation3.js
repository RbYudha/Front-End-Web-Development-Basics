var them_dogs = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'http://www.dogchannel.com/images/zones/top_promo/excited-mixed-breed.jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
}]

    let anjing_nama = "";
    let anjing_age = "";
    // let anjing_breed = "";
    // let anjing_toys = "";
    // them_dogs.forEach(kumpulan_anjing);
    // document.getElementById("nama_anjing").innerHTML = anjing;

    them_dogs.forEach(them_dogs => {
        anjing_nama += them_dogs["name"] + "<br>";
        anjing_age += them_dogs["picture"] + "<br>";
    });

    document.querySelector("#nama_anjing").innerHTML = anjing_nama;
    


   



    
