import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "key": {
      "type": "string"
    },
    "operator": {
      "type": "string"
    },
    "values": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "key",
    "operator"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.NodeSelectorRequirement", schema);
}

