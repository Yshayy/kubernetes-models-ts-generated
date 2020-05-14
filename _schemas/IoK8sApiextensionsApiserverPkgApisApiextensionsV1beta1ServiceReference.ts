import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "name": {
      "type": "string"
    },
    "namespace": {
      "type": "string"
    },
    "path": {
      "type": "string"
    },
    "port": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "namespace",
    "name"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.ServiceReference", schema);
}

