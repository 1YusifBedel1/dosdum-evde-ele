// class CustomMatch{
//     constructor(value){
//         this.value=value
//     }
//     plus(plus){
//         this.value=this.value+plus;
//         return this
//        }
//     minus(minus){
//         this.value=this.value-minus
//         return this
//     }
//     multiply(multiply){
//         this.value=this.value*multiply
//         return this
//     }
//     divide(divide){
//         this.value=this.value/divide
//         return this
//     }
// }
// let result=new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
// console.log(result)

// class Books{
//     constructor(name,writer,price){
//         this.name=name
//         this.writer=writer
//         this.price=price
//     }
//     qiymetIste(qiymet){
//         this.price=this.price-this.price*(parseInt(qiymet)/100)
       
//         return this
//     }
// }
// let kitab=new Books("ItimoO","Memmedaga",200)
// console.log(kitab)
// console.log(kitab.qiymetIste(10))

// const user={
//     name:"Yusif",
//     job:"Frontend Developer",
//     salary:3000
// }
// Object.seal(name)
// user.name="salam"
// console.log(user)

const employees=[{"id":1,"first_name":"Reg","last_name":"Mallan","email":"rmallan0@senate.gov","gender":"Male","price":1230},
{"id":2,"first_name":"Ruprecht","last_name":"Spurden","email":"rspurden1@wikipedia.org","gender":"Male","price":1134},
{"id":3,"first_name":"Betti","last_name":"O'Heagertie","email":"boheagertie2@studiopress.com","gender":"Bigender","price":727},
{"id":4,"first_name":"Mignon","last_name":"Roose","email":"mroose3@fda.gov","gender":"Polygender","price":1693},
{"id":5,"first_name":"Qezenfer","last_name":"Busst","email":"wbusst4@cyberchimps.com","gender":"Male","price":1475},
{"id":6,"first_name":"Jordana","last_name":"De Coursey","email":"jdecoursey5@paginegialle.it","gender":"Female","price":444},
{"id":7,"first_name":"Neel","last_name":"Peedell","email":"npeedell6@myspace.com","gender":"Male","price":1767},
{"id":8,"first_name":"Jose","last_name":"Toller","email":"jtoller7@techcrunch.com","gender":"Male","price":471},
{"id":9,"first_name":"Andrea","last_name":"Stockill","email":"astockill8@comsenz.com","gender":"Male","price":1968},
{"id":10,"first_name":"Kamil","last_name":"Fuentez","email":"rfuentez9@wired.com","gender":"Male","price":669},
{"id":11,"first_name":"Maxwell","last_name":"Spruce","email":"msprucea@about.me","gender":"Male","price":765},
{"id":12,"first_name":"Knox","last_name":"Lockley","email":"klockleyb@sbwire.com","gender":"Male","price":1019},
{"id":13,"first_name":"Malissia","last_name":"Trevorrow","email":"mtrevorrowc@hhs.gov","gender":"Non-binary","price":805},
{"id":14,"first_name":"Beret","last_name":"Gribble","email":"bgribbled@gov.uk","gender":"Female","price":957},
{"id":15,"first_name":"Wernher","last_name":"Bertome","email":"wbertomee@blogger.com","gender":"Male","price":1425},
{"id":16,"first_name":"Stephie","last_name":"Noor","email":"snoorf@squidoo.com","gender":"Female","price":372},
{"id":17,"first_name":"Lindsay","last_name":"Bohlmann","email":"lbohlmanng@mail.ru","gender":"Male","price":1100},
{"id":18,"first_name":"Mufi","last_name":"Mc Pake","email":"mmcpakeh@pagesperso-orange.fr","gender":"Female","price":816},
{"id":19,"first_name":"Valma","last_name":"Greenhalf","email":"vgreenhalfi@independent.co.uk","gender":"Female","price":1498},
{"id":20,"first_name":"Aggie","last_name":"Etty","email":"aettyj@wordpress.org","gender":"Female","price":557}]

// function sorthSalary(price,employees){
//     for (let i = 0; i < employees.length; i++) {
//         if(price<employees[i].price){
//             console.log(employees[i].first_name)
//         }
//     }
// }
// sorthSalary(1500,employees)

// for (let i = 0; i < employees.length; i++) {
//     if(employees[i].first_name=="Qezenfer"){
//         console.log(employees[i].id)
//     }
// }

// console.log(employees.sort((a,b)=>a.price-b.price))

// function salam() {
//     for (let i = 0; i < employees.length; i++) {
//         if(employees[i].id%2===0){
//             if(employees[i].first_name.includes("a")){
//                 console.log(employees[i].first_name)
//             }
//         }
//     }
// }
// salam()