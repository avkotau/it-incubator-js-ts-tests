import { getBanknoteList, getSum, getTriangleType, isEventIndexSumGreater, isSquareGreater, sum } from "./1";


test('get sum', () => {
    expect(sum(3,5,7,8,9)).toBe(32)
    expect(sum(6, 1,1,1)).toBe(9)
    expect(sum(0)).toBe(0)
})


test('get triangle type', () => {
    expect(getTriangleType(1,1,1)).toBe('10')
    expect(getTriangleType(2,3,3)).toBe('01')
    expect(getTriangleType(3,3,2)).toBe('01')
    expect(getTriangleType(4,5,3)).toBe('11')
    expect(getTriangleType(10,2,2)).toBe('00')
})

test('get Sum', () => {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})

test('is Even Sum Greater', () => {
    expect(isEventIndexSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEventIndexSumGreater([100, 1, 200, 2])).toBe(true)
    expect(isEventIndexSumGreater([100, 1, 200, 2, 300, 4])).toBe(true)
    expect(isEventIndexSumGreater([100, 1, 200, 2, 4 ])).toBe(true)
})

test('is Square Greater Than Circle', () => {
    const sCr = 3.14
    const sSq = 4
    const result = isSquareGreater(sCr, sSq)
    expect(result).toBe(true)
})

test("get banknote list", () => {
    const result2500 = getBanknoteList(2500)
    const result23 = getBanknoteList(23)
    expect(result2500[0]).toBe(1000)
    expect(result2500[1]).toBe(1000)
    expect(result2500[2]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)
})
