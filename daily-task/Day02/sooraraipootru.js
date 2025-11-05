console.log("Opening Scene of Soorarai Pottru: Emergency Landing");

setTimeout(()=>{
    console.log("Scene 1: The flight lowers its wheels, ready to land...");
},1000)

setTimeout(()=>{
    console.log('Scene 2: Pilot: "Requesting landing clearance, we’re low on fuel!"');
    console.log('Officer: "Negative. Circle taking around air again."');
},3000)

setTimeout(()=>{
    console.log('Scene 3: Pilot: "We have a fuel emergency, damn it!"');
   console.log('Co-pilot: "Sir, Something is wrong, they’re not following protocol..."');
},5000)

setTimeout(() => {
  console.log('Scene 4: Surya enters: "Why aren’t you letting them land?"');
  console.log('Friend (Pilot): "Maara! They’re still denying us!"');
}, 7000);

setTimeout(() => {
  console.log('Scene 5: Maara(on radio): "Thambaram Airforce, land there.You have enough fuel to land there, right?"');
  console.log('pilot: "Maara, are you sure? What if something happens?"');
  console.log('Maara: "O** nee land panra, paathukalaam!"');
}, 9000);

setTimeout(() => {
  console.log("Scene 6: Officers try to stop Surya from interfering.");
}, 11000);

setTimeout(() => {
  console.log('Scene 7: Pilot: "Requesting permission to land at Thambaram."');
  console.log('Control Tower: "Denied! You don not have permission to land there captian. That’s an army base. Turn around immediately! This is an order"');
}, 13000);

setTimeout(() => {
  console.log("Scene 8: Surya and friend race on a bike toward the base...");
}, 15000);


setTimeout(() => {
  console.log('Scene 9: Pilot sweating — "Fuel almost gone, sir!"');
}, 17000);

setTimeout(() => {
  console.log("Scene 10: Surya breaks through the gate — chaos in the airbase!");
}, 19000);


setTimeout(()=>{
    let frame = 1;
    const landing = setInterval(()=>{
        console.log(`Landing frame ${frame}: Plane shaking... Sparks flying..`);
        frame++;

        if(frame>3){
            clearInterval(landing);
            console.log("Scene 11: Plane hits ground, fire everywhere!");   
        }
    },1000)
},21000);

setTimeout(() => {
  console.log('Scene 12: Suriya runs — "Are you okay?!"');
  console.log("Fire trucks, police, and soldiers rush to the scene...");
}, 26000);

setTimeout(() => {
  console.log("Scene 13: Flight landed — but everything’s damaged. The mission ends in fire and courage.");
  console.log("--- END OF OPENING SCENE ---");
}, 29000);


