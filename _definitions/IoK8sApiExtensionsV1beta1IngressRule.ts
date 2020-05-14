
import { IIoK8sApiExtensionsV1beta1HTTPIngressRuleValue } from "./IoK8sApiExtensionsV1beta1HTTPIngressRuleValue.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiExtensionsV1beta1IngressRule.ts";

/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 */
export interface IIoK8sApiExtensionsV1beta1IngressRule {
/**
 * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
 *    the IP in the Spec of the parent Ingress.
 * 2. The `:` delimiter is not respected because ports are not allowed.
 * 	  Currently the port of an Ingress is implicitly :80 for http and
 * 	  :443 for https.
 * Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
 * 
 * Host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "\*.foo.com"). The wildcard character '\*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "\*"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
 */
"host"?: string;
"http"?: IIoK8sApiExtensionsV1beta1HTTPIngressRuleValue;
}

/**
 * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
 */
export class IoK8sApiExtensionsV1beta1IngressRule extends Model<IIoK8sApiExtensionsV1beta1IngressRule> implements IIoK8sApiExtensionsV1beta1IngressRule {

"host"?: string;
"http"?: IIoK8sApiExtensionsV1beta1HTTPIngressRuleValue;
}

Model.setSchema(IoK8sApiExtensionsV1beta1IngressRule, "io.k8s.api.extensions.v1beta1.IngressRule", addSchema);

export {
  IIoK8sApiExtensionsV1beta1IngressRule as IIngressRule,
  IoK8sApiExtensionsV1beta1IngressRule as IngressRule
};
