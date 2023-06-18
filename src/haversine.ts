interface Point {
  latitude: number
  longitude: number
}

export class Haversine {
  constructor (private readonly earthRadius: number) {}

  calculateDistance(source: Point, destination: Point) {
    const { latitude: sourceLatitude, longitude: sourceLongitude } = source
    const { latitude: destinationLatitude, longitude: destinationLongitude } = destination

    // Ubah nilai koordinat ke dalam bentuk radian
    const sourceLatitudeRadian = this.changeToRadian(sourceLatitude)
    const sourceLongitudeRadian = this.changeToRadian(sourceLongitude)

    const destinationLatitudeRadian = this.changeToRadian(destinationLatitude)
    const destinationLongitudeRadian = this.changeToRadian(destinationLongitude)

    // Hitung selisih antara dua koordinat
    const deltaLatitude = this.calculateDelta(sourceLatitudeRadian, destinationLatitudeRadian)
    const deltaLongitude = this.calculateDelta(sourceLongitudeRadian, destinationLongitudeRadian)

    // Hitung nilai sin^2(deltaLat/2) dan nilai sin^2(deltaLong/2)
    const sin2HalfOfDeltaLatitude = this.calculateSquareOfSine(deltaLatitude/2)
    const sin2HalfOfDeltaLongitude = this.calculateSquareOfSine(deltaLongitude/2)

    // Hitung nilai cos(latitude tujuan) dan cos(latitude asal)
    const cosDestinationLatitude = Math.cos(destinationLatitudeRadian)
    const cosSourceLatitude = Math.cos(sourceLatitudeRadian)

    const rootOfComponents = Math.sqrt(
      sin2HalfOfDeltaLatitude +
      cosDestinationLatitude *
      cosSourceLatitude *
      sin2HalfOfDeltaLongitude
    )

    const arcsinOfRootComponents = Math.asin(rootOfComponents)

    const distance = 2 * this.earthRadius * arcsinOfRootComponents

    return Number(distance.toFixed(9))
  }

  changeToRadian(number: number) {
    return number * (Math.PI/180)
  }

  calculateDelta(firstNumber: number, secondNumber: number) {
    return secondNumber - firstNumber
  }

  calculateSquareOfSine(number: number) {
    const sine = Math.sin(number)
    const squareOfSine = sine ** 2

    return squareOfSine
  }
}