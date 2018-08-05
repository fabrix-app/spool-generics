import { Generic } from '../Generic'

export class EmailDefault extends Generic {
  send(data) {
    return Promise.resolve([])
  }

  sendTemplate(data) {
    return Promise.resolve([])
  }
}
