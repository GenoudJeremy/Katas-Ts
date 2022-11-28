import { Point } from './Point'

const ANY_NUMBER = 250

describe('Point Class', () => {

    let caseTest = [
        [0, 0],
        [1, 1],
        [2, 2],
    ]
    it.each(caseTest)('Should return %p if x\'s point is at %p', (expected: number, num: number) => {
        // given --> inputs
        let point = new Point(num, ANY_NUMBER)
        // when --> execution du test
        let result = point.getX()
        // then --> vérification
        expect(result).toEqual(expected)
    })

    it.each(caseTest)('Should return %p if y\'s point is at %p', (expected: number, num: number) => {
        // given --> inputs
        let point = new Point(ANY_NUMBER, num)
        // when --> execution du test
        let result = point.getY()
        // then --> vérification
        expect(result).toEqual(expected)
    })
})