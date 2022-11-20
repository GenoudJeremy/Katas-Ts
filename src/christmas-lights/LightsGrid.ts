import { Light } from "./Light"

export const GRID_TALL = 1000
export class LightsGrid {
    private grid: Array<Light[]> = [];
    private countLightsOn: number = 0;

    constructor(gridTall: number = GRID_TALL){
        for ( let i = 0; i < gridTall; i++) {
            this.grid[i] = []
            for ( let j = 0; j < gridTall; j++) {
                this.grid[i][j] = new Light()
            }
        }
    }


    private decrementCountLight(): void {
        --this.countLightsOn
    }
    private incrementCountLight(): void {
        ++this.countLightsOn
    }
    public getCountLightsOn() : number {
        let count = 0
        this.getGridState().map((states: Array<boolean>) => {
            count = count + states.filter((state:boolean) => {return state}).length
        })

        return count
    }

    public turnOnLights(BeginLightPosition: [number, number] , EndLightPosition: [number, number]) : void {
        for ( let i = BeginLightPosition[0]; i <= EndLightPosition[0]; i++) {
            for ( let j = BeginLightPosition[1]; j <= EndLightPosition[1]; j++) {
                this.grid[i][j].turnOn();
                this.incrementCountLight()
            }
        }
    }
    public turnOffLights(BeginLightPosition: [number, number] , EndLightPosition: [number, number]) : void {
        for ( let i = BeginLightPosition[0]; i <= EndLightPosition[0]; i++) {
            for ( let j = BeginLightPosition[1]; j <= EndLightPosition[1]; j++) {
                this.grid[i][j].turnOff();
                this.decrementCountLight()
            }
        }
    }
    public toggleLights(BeginLightPosition: [number, number] , EndLightPosition: [number, number]) : void {
        for ( let i = BeginLightPosition[0]; i <= EndLightPosition[0]; i++) {
            for ( let j = BeginLightPosition[1]; j <= EndLightPosition[1]; j++) {
                this.grid[i][j].toggle();
                if (this.grid[i][j].getState()) {
                    this.incrementCountLight()
                }
                if (!this.grid[i][j].getState()){
                    this.decrementCountLight()
                }
            }
        }
    }

    public getGridState() : Array<Array<boolean>> {
        let stateGrid = this.grid.map((line: Light[])=> {
            return line.map((light: Light) => {
                return light.getState()
            })
        })
        return stateGrid
    }
}