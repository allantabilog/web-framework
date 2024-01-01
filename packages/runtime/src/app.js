import { destroyDOM } from "./destroy-dom";
import { Dispatcher } from "./dispatcher";
import { mountDOM } from "./mount-dom";

/**
 * This implements the main logic of the framework.
 * It assembles the state manager and renderer into a single app.
 * @param {} param0
 * @returns
 */
export function createApp({ state, view, reducers = {} }) {
  let parentEl = null;
  let vdom = null;

  const dispatcher = new Dispatcher();
  // Register renderApp as an after-command handler
  // so that the app will get re-rendered after every command.
  const subscriptions = [dispatcher.afterEveryCommand(renderApp)];

  function emit(eventName, payload) {
    dispatcher.dispatch(eventName, payload);
  }

  for (const actionName in reducers) {
    const reducer = reducers[actionName];
    const subs = dispatcher.subscribe(actionName, (payload) => {
      state = reducer(state, payload);
    });
    subscriptions.push(subs);
  }

  // this is the renderer and re-rerender
  function renderApp() {
    if (vdom) {
      // if there is a vdom, destroy it. we'll rebuild it from new state
      // this is inefficient, but it's the simplest way for initial version
      destroyDOM(vdom);
    }

    vdom = view(state); // recalculate the vdom based in the current state
    mountDOM(vdom, parentEl); // remount the vdom
  }

  return {
    mount(_parentEl) {
      parentEl = _parentEl;
      renderApp();
    },
    unmount() {
      destroyDOM(vdom);
      vdom = null;
      subscriptions.forEach((unsubscribe) => unsubscribe());
    },
  };
}
