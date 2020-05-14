import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiStorageV1CSINode } from "./IoK8sApiStorageV1CSINode.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "storage.k8s.io/v1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.storage.v1.CSINode#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "CSINodeList"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#"
    }
  },
  "required": [
    "items",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiStorageV1CSINode();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.storage.v1.CSINodeList", schema);
}

