import { Point } from '../Point/Point'
import { DistanceMahnathan } from './DistanceMahnathan'

describe('Distance Manhathan Class', () => {
    it('Should return 0 if points are same', () => {
        //given
        let point = new Point(0,0)
        let point2 = new Point(0,0)
        let distanceManhathan = new DistanceMahnathan(point, point2)
        //when
        let result = distanceManhathan.getDistance()
        //then
        expect(result).toEqual(0)
    })
    it('Should return 1 if points distance are 1', () => {
        //given
        let point1 = new Point(0,0)
        let point2 = new Point(1,0)
        let distanceManhathan = new DistanceMahnathan(point1, point2)
        //when
        let result = distanceManhathan.getDistance()
        //then
        expect(result).toEqual(1)
    })
    it('Should return 1 if points distance on y are 1', () => {
        //given
        let point1 = new Point(0,0)
        let point2 = new Point(0,1)
        let distanceManhathan = new DistanceMahnathan(point1, point2)
        //when
        let result = distanceManhathan.getDistance()
        //then
        expect(result).toEqual(1)
    })
    it('Should return 2 if points distance on y are 2', () => {
        //given
        let point1 = new Point(0,0)
        let point2 = new Point(0,2)
        let distanceManhathan = new DistanceMahnathan(point1, point2)
        //when
        let result = distanceManhathan.getDistance()
        //then
        expect(result).toEqual(2)
    })
    it('Should return 2 if points distance on y are 2 with point 1 different than 0,0', () => {
        //given
        let point1 = new Point(0,1)
        let point2 = new Point(0,3)
        let distanceManhathan = new DistanceMahnathan(point1, point2)
        //when
        let result = distanceManhathan.getDistance()
        //then
        expect(result).toEqual(2)
    })

    it('Should return 3 if points distance on y are 3 with point 1 different than 0,0', () => {
        //given
        let point1 = new Point(1,1)
        let point2 = new Point(0,3)
        let distanceManhathan = new DistanceMahnathan(point1, point2)
        //when
        let result = distanceManhathan.getDistance()
        //then
        expect(result).toEqual(3)
    })
})