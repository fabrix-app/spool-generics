import { Generic } from '../Generic'

export class RenderDefault extends Generic {
  render(data) {
    return Promise.resolve({document: data})
  }
  renderSync(data) {
    return { document: data }
  }
}
