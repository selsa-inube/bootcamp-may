const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }

  static random(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
  }
}

function runRobot(state, robot, memory) {
  let totalTurns = [];
  const NUM_TRIALS = 100;

  for (let trial = 0; trial < NUM_TRIALS; trial++) {
    let currentState = state;
    let turns = 0;

    while (currentState.parcels.length > 0) {
      let action = robot(currentState, memory);
      currentState = currentState.move(action.direction);
      memory = action.memory;
      turns++;
    }

    totalTurns.push(turns);
  }

  let averageTurns = totalTurns.reduce((a, b) => a + b, 0) / NUM_TRIALS;
  return averageTurns;
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

let state = VillageState.random();

let robot1AverageTurns = runRobot(state, randomRobot, []);

let robot2AverageTurns = runRobot(state, routeRobot, []);

console.log("robot 1: ");
console.log(`Robot 1 average turns: ${robot1AverageTurns.toFixed(2)}`);
console.log(`Robot 2 average turns: ${robot2AverageTurns.toFixed(2)}`);

console.log("robot 2: ");
console.log(`Robot 1 took ${robot1AverageTurns.toFixed(2)} steps on average`);
console.log(`Robot 2 took ${robot2AverageTurns.toFixed(2)} steps on average`);

if (robot1AverageTurns < robot2AverageTurns) {
  console.log("The most efficient robot was: Robot 1");
} else if (robot2AverageTurns < robot1AverageTurns) {
  console.log("The most efficient robot was: Robot 2");
} else {
  console.log("Both robots have the same efficiency.");
}
