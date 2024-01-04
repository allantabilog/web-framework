export class Dispatcher {
  #subs = new Map(); // a map of command names to (a list of) handlers
  #afterHandlers = []; // a set of functions to run after every command
  // e.g. use this to trigger a re-render after state updates

  /**
   * Subscribe to a command.
   * i.e. associate a list of handlers to a command name.
   * @param {commandName} the name of the command to handle
   * @param {handler} the handler function
   * @returns a function to unsubscribe the handler to be used later when the component is unmounted
   */
  subscribe(commandName, handler) {
    if (!this.#subs.has(commandName)) {
      this.#subs.set(commandName, []);
    }

    const handlers = this.#subs.get(commandName);
    if (handlers.includes(handler)) {
      return () => {};
    }
    handlers.push(handler);

    return () => {
      const idx = handlers.indexOf(handler);
      handlers.splice(idx, 1);
    };
  }

  /**
   * Register a function to execute after every command.
   * @param {handler} the function to execute
   * @returns a de-registering function to be used later when the component is unmounted
   */
  afterEveryCommand(handler) {
    this.#afterHandlers.push(handler);

    return () => {
      const idx = this.#afterHandlers.indexOf(handler);
      this.#afterHandlers.splice(idx, 1);
    };
  }

  /**
   *
   * @param {commandName} the command to dispatch
   * @param {payload} any additional data to pass to the handler
   */
  dispatch(commandName, payload) {
    if (this.#subs.has(commandName)) {
      this.#subs.get(commandName).forEach((handler) => handler(payload));
    } else {
      console.warn(`No handlers for the command: ${commandName}`);
    }
    this.#afterHandlers.forEach((handler) => handler());
  }
}
