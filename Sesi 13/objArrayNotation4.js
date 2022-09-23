var them_dogs = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'https://www.akc.org/wp-content/uploads/2017/11/Australian-Shepherd.1.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'https://images.ctfassets.net/sfnkq8lmu5d7/1j5LJ5cIY1gfqE90AxvD6V/11c51d0709478c75d9a6716d92b28c08/2021_0714_national_mutt_day.jpg?w=1000&h=750&fl=progressive&q=80&fm=jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'https://static8.depositphotos.com/1146155/840/i/600/depositphotos_8405161-stock-photo-yellow-labrador-retriever.jpg'
}]

    // them_dogs.forEach(them_dogs => {
    //    $("#output").append(`
    //     <img style="width: 60px; height: 60px;" src = "${them_dogs.picture}"/>
    //     <p>${them_dogs.name}</p>
    //    `)
    // });

    them_dogs.forEach(them_dogs => {
        $("#dog").append(` 
        <div class="col">
        <div class="card mt-2" style="width: 22rem;">
                <div class="card-body">
                    <img style="width: 320px; height: 295px; border-radius: 50%;" src = "${them_dogs.picture}"/>
                    <p class="card-text text-center">${them_dogs.name}</p>
                </div>
        </div>
        </div>
        `)
         });

    


   



    
