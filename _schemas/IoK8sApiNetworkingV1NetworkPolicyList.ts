import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiNetworkingV1NetworkPolicy } from "./IoK8sApiNetworkingV1NetworkPolicy.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "networking.k8s.io/v1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.networking.v1.NetworkPolicy#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "NetworkPolicyList"
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
IoK8sApiNetworkingV1NetworkPolicy();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.networking.v1.NetworkPolicyList", schema);
}

