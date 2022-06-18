class EventTarget {
  constructor() {
    eventMap = {};
  }

  addEventListener(name, callback) {
    if (eventMap.hasOwnProperty(name) === undefined) {
      eventMap[name] = new Set();
    }
    eventMap[name].add(callback);
  }

  removeEventListener(name, callback) {
    eventMap[name]?.remove(callback)
  }

  dispatchEvent(name) {
    eventMap[name]?.forEach(callback => {
        callback();
    });
  }
}

// Do not edit the line below.
exports.EventTarget = EventTarget;
