import { LightsGrid } from "./LightsGrid"

describe('LightsGrid', () => {
    it('should return 0 when init LightsGrid', () => {
        let lightsGrid = new LightsGrid()
        
        let result = lightsGrid.getCountLightsOn()
        
        expect(result).toEqual(0)
    })
    
    it('should return 1000000 when all lights are turn on', () => {
        let lightsGrid = new LightsGrid()
        lightsGrid.turnOnLights([0, 0], [999, 999])

        let result = lightsGrid.getCountLightsOn()
        expect(result).toEqual(1000000)
    })
    it('should return toggle line when toggle 0,0 999,0', () => {
        let lightsGridToggle = new LightsGrid();
        let expectedGrid = new LightsGrid();

        expectedGrid.turnOnLights([100, 0], [400, 0])

        lightsGridToggle.turnOnLights([0,0], [99,0])
        lightsGridToggle.turnOnLights([401,0], [999, 0])
        lightsGridToggle.toggleLights([0,0], [999,0])

        let result = lightsGridToggle.getGridState()
        expect(result).toEqual(expectedGrid.getGridState())
        expect(lightsGridToggle.getCountLightsOn()).toEqual(301)
        expect(lightsGridToggle.getCountLightsOn()).toEqual(expectedGrid.getCountLightsOn())
    })
})