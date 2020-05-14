import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "namespace": {
      "type": "string"
    }
  },
  "required": [
    "kind",
    "name"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.rbac.v1alpha1.Subject", schema);
}

