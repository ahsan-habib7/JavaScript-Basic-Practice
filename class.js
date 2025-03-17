class a{
    constructor(name){
        this.name = name;
    }
}
const a1 = new a("Ahsan");
console.log(a1.name);

//class with callback function
class b{
    constructor(name){
        this.name = name;
    }
    late(){
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    }
}
const b1 = new b("Habib");
b1.late();