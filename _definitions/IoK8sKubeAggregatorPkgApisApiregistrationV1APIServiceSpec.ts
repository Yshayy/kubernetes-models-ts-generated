
import { IIoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec.ts";

/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export interface IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec {
/**
 * CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
 */
"caBundle"?: string;
/**
 * Group is the API group name this server hosts
 */
"group"?: string;
/**
 * GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: \*.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
 */
"groupPriorityMinimum": number;
/**
 * InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
 */
"insecureSkipTLSVerify"?: boolean;
/**
 * Service is a reference to the service for this API server.  It must communicate on port 443 If the Service is nil, that means the handling for the API groupversion is handled locally on this server. The call will simply delegate to the normal handler chain to be fulfilled.
 */
"service"?: IIoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference;
/**
 * Version is the API version this server hosts.  For example, "v1"
 */
"version"?: string;
/**
 * VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
 */
"versionPriority": number;
}

/**
 * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
 */
export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec extends Model<IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec> implements IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec {

"caBundle"?: string;

"group"?: string;

"groupPriorityMinimum": number;

"insecureSkipTLSVerify"?: boolean;

"service"?: IIoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference;

"version"?: string;

"versionPriority": number;
}

Model.setSchema(IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec, "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceSpec", addSchema);

export {
  IIoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec as IAPIServiceSpec,
  IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec as APIServiceSpec
};
