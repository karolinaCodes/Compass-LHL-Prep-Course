// Bouncy Castles- (refactored)

const PI = 3.14159;

const sphereVolume = function (radius) {
  let volume = (4 / 3) * PI * Math.pow(radius, 3);
  return volume;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let volume = (1 / 3) * (PI * Math.pow(radius, 2)) * height;
  return volume;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let volume = width * depth * height;
  return volume;
};

console.log(prismVolume(3, 4, 5) === 60);

//calculate the total volume of the solids (refactored version)
const totalVolume = function (solids) {
  //instantiate an empty array into which will add the volume for each solid
  const volumeArray = [];

  //loop over solids array and uses switch statement to compare the solid type to three cases. for which ever case the type matches, it adds the volume of the shape which is calculated by the respective function call
  for (let i = 0; i < solids.length; i++) {
    switch (solids[i].type) {
      case "sphere":
        volumeArray.push(sphereVolume(solids[i].radius));
        break;
      case "cone":
        volumeArray.push(coneVolume(solids[i].radius, solids[i].height));
        break;
      case "prism":
        volumeArray.push(
          prismVolume(solids[i].height, solids[i].width, solids[i].depth)
        );
        break;
    }
  }

  //accumulates the array of shape volumes into one totalvolume and returns it
  const totalVolume = volumeArray.reduce(
    (accumulator, curEl) => accumulator + curEl,
    0
  );

  return totalVolume;
};

//calculate the total volume of an attraction (version one of solution- not refactored)
// const totalVolume = function (solids) {
//   let totalVolume = 0;

//   for (let i = 0; i < solids.length; i++) {
//     if (solids[i].type === "sphere") {
//       totalVolume += sphereVolume(solids[i].radius);
//     } else if (solids[i].type === "cone") {
//       totalVolume += coneVolume(solids[i].radius, solids[i].height);
//     } else if (solids[i].type === "prism") {
//       totalVolume += prismVolume(
//         solids[i].height,
//         solids[i].width,
//         solids[i].depth
//       );
//     }
//   }

//   return totalVolume;
// };

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
