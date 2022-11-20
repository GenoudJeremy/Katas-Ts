import { Light } from "./Light"

describe('Light', () => {
    
    let caseTest = [
        [false, 'off'],
        [true, 'on'],
    ]
    it.each(caseTest)('should return %p when lights %p', (state: boolean) => {
        let light = new Light(state);
        
        let result = light.getState()
        expect(result).toEqual(state)
    })

    it('should return true when light off is turned on', () => {
        let light = new Light();
        light.turnOn()
        let result = light.getState()

        expect(result).toEqual(true)
    })
    it('should return false when light on is turned off', () => {
        let light = new Light();
        light.turnOff()
        let result = light.getState()

        expect(result).toEqual(false)
    })

    let toggleCase = [
        [true, 'off', false],
        [false, 'on', true],
    ]
    it.each(toggleCase)
        ('should return %p when light %p is toggle', 
        (
            res: boolean, 
            realState: string, 
            isLightOn: boolean 
        ) => {
        let light = new Light(isLightOn);
        light.toggle()
        let result = light.getState()

        expect(result).toEqual(res)
    })
})