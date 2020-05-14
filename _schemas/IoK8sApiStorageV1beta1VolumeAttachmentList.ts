import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiStorageV1beta1VolumeAttachment } from "./IoK8sApiStorageV1beta1VolumeAttachment.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "storage.k8s.io/v1beta1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.storage.v1beta1.VolumeAttachment#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "VolumeAttachmentList"
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
IoK8sApiStorageV1beta1VolumeAttachment();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.storage.v1beta1.VolumeAttachmentList", schema);
}

