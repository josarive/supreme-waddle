let chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"Truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"Tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"Car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"Plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"Truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"Tank"},
];

const write =(itm)=>{
//defining var
    let img = document.createElement("img");
    img.className="img";
    let ele=document.createElement("div");
    ele.className = "character";
    let nameEle=document.createElement("p");
    let classEle=document.createElement("p");
    let vehicleEle=document.createElement("p");

//  if/else stmnts
    //vehicle data color set
    let v = itm.vehicle;
    if (v === "Truck") {
        vehicleEle.style.color="blue";
    }else if(v === "Tank") {
        vehicleEle.style.color="green";
    }else if(v === "Car") {
        vehicleEle.style.color="gold";
    }else if(v === "Plane") {
        vehicleEle.style.color="white";
    } else {
        vehicleEle.style.color="purple";
    }

    //pic set and additional class
    if (itm.afl==="autobot") {
        ele.classList.add("autobot");
        img.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    }else if(itm.afl==="decepticon") {
        ele.classList.add("decepticon");
        img.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    }

//Content write
    nameEle.innerHTML="Name: " + itm.name;
    classEle.innerHTML="Class: " + itm.class.toUpperCase();
    vehicleEle.innerHTML="Vehicle: " + itm.vehicle;
    img.innerHTML;


//append elements
    ele.appendChild(nameEle);
    ele.appendChild(classEle);
    ele.appendChild(vehicleEle);
    ele.appendChild(img);

//append div
    document.body.appendChild(ele);
}


//creation loop
for (let i=0;i<chrs.length; i++) {
    write(chrs[i]);
}

