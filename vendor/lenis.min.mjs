export default class Lenis {
  constructor(options = {}) {}
  start() {}
  stop() {}
  raf(time) {}
  scrollTo(target, options = {}) {
    if (typeof target === 'number') window.scrollTo({ top: target, behavior: 'smooth' });
  }
  destroy() {}
}
