 const mySelf = {
    name: "Abhishek kamble ",
    age: 22,
    profession: "Engineering",
    branch: "Automation & Robotics",
    Skills: "Mern Stack", 
    SGPA: 8.50,
};
console.log(mySelf);

const item = {
    name: "foodstock", 
    price: 15000,
    discount: 400,
    items: ["Sauces", "Wine", "Chicken", "veggies"],
}

console.log(item);

// Create a linkedln post using object literals:- 
const Linkedlnpost ={
    name: "@Abhishekkamble",
    content: "Daily Dev News",
    likes: 200,
    comments: " 50+",
    tags: ["SanketYadav", "PranavDarekar", "HimashuSharma"],
}

console.log(Linkedlnpost);

const Device = {
    name: "Asus",
    model: "VivoBook14Pro",
    price: 65000,
    date: 21,
    Models: ["AsusrogStreak", "AsusVivoBook", "AsusLaptop"],

};
console.log(Device);

// Add or Update the variables:- 

const info = {
    name: "Abhi",
    age: 22,
    marks: 95,
    city: "pune",
};

console.log(info);

info.name = "Mr Abhsihek Kamble ";
info.city = "koregoanPark";
console.log(info);
info.Salary = "25lpaRemote";
console.log(info);

delete info.marks;
console.log(info);
