export class Light {
    private state: boolean;

    constructor(state: boolean = false) {
        this.state = state
    }

    public getState(): boolean {
        return this.state
    }

    public turnOn(): void {
        this.state = true
    }

    public turnOff(): void {
        this.state = false
    }

    public toggle(): void {
        if ( this.getState()) {
            this.turnOff();
            return
        }
        this.turnOn()
    }
}