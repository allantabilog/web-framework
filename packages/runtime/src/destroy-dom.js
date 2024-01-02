import { removeEventListeners } from "./events.js";
import { DOM_TYPES } from "./h";

export function destroyDOM(vdom) {
  const { type } = vdom;

  switch (type) {
    case DOM_TYPES.TEXT:
      removeTextNode(vdom);
      break;
    case DOM_TYPES.FRAGMENT:
      removeFragmentNodes(vdom);
      break;
    case DOM_TYPES.ELEMENT:
      removeElementNode(vdom);
      break;
    default:
      throw new Error(`Cannot destroy vdom of type ${type}`);
  }
}

export function removeTextNode(vdom) {
  const { el } = vdom;
  el.remove();
}
export function removeElementNode(vdom) {
  const { el, children, listeners } = vdom;

  el.remove();
  children.forEach(destroyDOM);

  if (listeners) {
    removeEventListeners(listeners, el);
    delete vdom.listeners;
  }
}
export function removeFragmentNodes(vdom) {
  const { children } = vdom;
  children.forEach(destroyDOM);
}
