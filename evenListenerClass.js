class EventTarget {
  constructor() {
    this.eventMap = {};
  }
  // this.eventMap is a map for the element(here referred as 'this') eg. button, div etc. This eventMap would store a mapping of the events called on the element.

  //Why Map? We could associate the event to the listener
  addEventListener(name, callback) {
    if (eventMap.hasOwnProperty(name) === false) {
      this.eventMap[name] = new Set(); 
    }
    this.eventMap[name].add(callback);
  }
  // Why Set ?? We could call two different events for one element which is why using a set would be optimum. Set would also ensure, two same callbacks are not added for the event.

  removeEventListener(name, callback) {
    this.eventMap[name]?.remove(callback)
  }

  dispatchEvent(name) {
    this.eventMap[name]?.forEach(callback => {
        callback();
    });
  }
  // The above method would handle dispatching of events, like if a div has two events suppose, 'click' and 'hover' then both the events' callbacks would need to be run for the same element which is why we have used the for-each.
}

// Do not edit the line below.
exports.EventTarget = EventTarget;
