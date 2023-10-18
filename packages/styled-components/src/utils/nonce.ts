declare let __webpack_nonce__: string;

export default function getNonce() {
  console.log('getting nonce: %s', __webpack_nonce__);
  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
}
