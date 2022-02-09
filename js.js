//Создать объект в который записать информацию о вас. Там должен присутствовать список, другой объект, строки, числа, функция
object = {
    name:"Vsevolod",
    surName:"Lavrusha",
    phoneOS: "iOS",
    school: 'Lyceum \"Intellect\"',
    age: 11,
    countriesBeenTo: ["poland", "hanguray", "spain", "turkey"],
    country: "Ukraine",
    lastLogOnTime: "17:59",
    function(){
        console.log("im printing myself!!!!! ",object)
    }
}
// Вывести на экран
console.log(object)
// Вызвать функцию
object.function()