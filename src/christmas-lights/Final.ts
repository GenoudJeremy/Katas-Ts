import { LightsGrid } from "./LightsGrid";

let lights = new LightsGrid();

lights.turnOnLights([887, 9], [959, 629])
lights.turnOnLights([454, 398], [844, 448])
lights.turnOffLights([539,243], [559,965])
lights.turnOffLights([370,819],[676,868])
lights.turnOffLights([145,40],[370,997])
lights.turnOffLights([301,3],[808,453])
lights.turnOnLights([351, 678], [951, 908])
lights.toggleLights([720,196],[897,994])
lights.toggleLights([831,394],[904,860])

console.log(lights.getCountLightsOn())