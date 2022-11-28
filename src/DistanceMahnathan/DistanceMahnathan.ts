import { Point } from "../Point/Point";

export class DistanceMahnathan {
    private point1 : Point;
    private point2 : Point;
    constructor(point1 : Point, point2: Point) {
        this.point1 = point1;
        this.point2 = point2;
    }
    private getXDiff(): number {
        return Math.abs(this.point2.getX() - this.point1.getX())
    }
    private getYDiff(): number {
        return Math.abs(this.point2.getY() - this.point1.getY())
    }
    public getDistance() : number {
        return this.getXDiff() + this.getYDiff()
    }
}