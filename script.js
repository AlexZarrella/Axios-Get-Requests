//Axios call




// document.getElementById("poke-button").onclick = function(){

//     const theID = document.getElementById('poke-input').value;

//     axios.get('https://pokeapi.co/api/v2/pokemon/'+theID)
//     .then((poke)=>{
//         //created a div in HTML to display info from API 
//         //console.log berry and check out the data structure for values
//         document.getElementById('poke-info').innerHTML = `<h3>${poke.data.name}</h3>
//                                                             <img src= ${poke.data.sprites.front_default}>`; 
//         console.log(poke);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

// }

$('#list-btn').click(function(){
    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((listOfCharacters)=>{

        $('#characters-div').empty(); //empties div and runs loop each time to add new characters

        listOfCharacters.data.forEach((oneCharacter)=>{
            const newChar = `
            <div>
            <h5>Name: ${oneCharacter.name}</h5>
            <p>Occupation: ${oneCharacter.occuption}</p>
            <p>Weapon: ${oneCharacter.weapon}</p>
            </div>
            `


            $('#characters-div').append(newChar);
        });
    });


});

$('#create-btn').click(function(){
    
   const theName = $('#charName').val();
   const theOccupation = $('#charJob').val();
   const theWeapon = $('#charWeapon').val();
   
   const data = {
       name: theName,
       occupation: theOccupation,
       weapon: theWeapon
   }

   axios.post('https://ih-crud-api.herokuapp.com/characters', data )
   .then((response)=>{
    $('#list-btn').click() //Click that button
   })
   .catch((err)=>{
       console.log(err);
   })

});


//to edit

const data = {
    name: "",
    occupation: "",
    weapon: ""
}

const theID = 

axios.post('https://ih-crud-api.herokuapp.com/characters/'+theID, data )
.then((response)=>{
 $('#list-btn').click() //Click that button
})
.catch((err)=>{
    console.log(err);
})

