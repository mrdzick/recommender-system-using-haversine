import { Haversine } from './haversine'

describe('Haversine', () => {
  it('should return the right distance between two points', () => {
    // Arrange
    const sourceLatitude = -2.964408
    const sourceLongitude =  104.741428

    const destinationLatitude =  -2.954299
    const destinationLongitude = 104.748283

    const haversine = new Haversine(6371)

    // Action
    const distance = haversine.calculateDistance({
      latitude: sourceLatitude,
      longitude: sourceLongitude
    }, {
      latitude: destinationLatitude,
      longitude: destinationLongitude
    })

    // Assert
    const expectedDistance = 1.357569638
    expect(distance).toBe(expectedDistance)
  })
})
