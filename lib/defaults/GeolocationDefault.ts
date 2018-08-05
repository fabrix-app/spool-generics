import { Generic } from '../Generic'

export class GeolocationDefault extends Generic {
  locate(data) {
    return Promise.resolve({
      latitude: 0.000000,
      longitude: 0.000000
    })
  }
}
