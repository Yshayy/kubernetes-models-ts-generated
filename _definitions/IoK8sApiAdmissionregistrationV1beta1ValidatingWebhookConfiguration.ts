
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhook } from "./IoK8sApiAdmissionregistrationV1beta1ValidatingWebhook.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration.ts";

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 ValidatingWebhookConfiguration instead.
 */
export interface IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "admissionregistration.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ValidatingWebhookConfiguration";
/**
 * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Webhooks is a list of webhooks and the affected resources and operations.
 */
"webhooks"?: Array<IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhook>;
}

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it. Deprecated in v1.16, planned for removal in v1.19. Use admissionregistration.k8s.io/v1 ValidatingWebhookConfiguration instead.
 */
export class IoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration extends Model<IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration> implements IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration {

apiVersion: IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration["apiVersion"] = IoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration["apiVersion"];

kind: IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration["kind"] = IoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"webhooks"?: Array<IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhook>;

static apiVersion: IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration["apiVersion"] = "admissionregistration.k8s.io/v1beta1";
static kind: IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration["kind"] = "ValidatingWebhookConfiguration";
}

Model.setSchema(IoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration, "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration", addSchema);

export {
  IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration as IValidatingWebhookConfiguration,
  IoK8sApiAdmissionregistrationV1beta1ValidatingWebhookConfiguration as ValidatingWebhookConfiguration
};
