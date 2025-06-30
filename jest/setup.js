// jest/setup.js

// Corrige o erro "__ExpoImportMetaRegistry" para Jest rodar com Expo SDK 50+
if (typeof global.__ExpoImportMetaRegistry === "undefined") {
  Object.defineProperty(global, "__ExpoImportMetaRegistry", {
    get() {
      return undefined;
    },
  });
}

// Corrige possíveis erros relacionados a TextEncoder/TextDecoder
import { TextDecoder, TextEncoder } from "util";

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}
