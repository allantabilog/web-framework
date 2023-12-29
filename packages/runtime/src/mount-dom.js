import { DOM_TYPES } from "./h";

export function mountDOM(vdom, parentEl) {
  switch (vdom.type) {
    case DOM_TYPES.TEXT:
      createTextNode(vdom, parentEl);
      break;
    case DOM_TYPES.ELEMENT:
      createElementNode(vdom, parentEl);
      break;
    case DOM_TYPES.FRAGMENT:
      createFragmentNode(vdom, parentEl);
      break;

    default:
      throw new Error(`Cannot mount vdom of type ${vdom.type}`);
  }
}

function createTextNode(vdom, parentEl) {
  const { value } = vdom;
  const textNode = document.createTextNode(value);
  vdom.el = textNode;
  parentEl.appendChild(textNode);
}

function createElementNode(vdom, parentEl) {
  // @todo
}

function createFragmentNode(vdom, parentEl) {
  // @todo
}
