
import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames.ts";

import { IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec.ts";

/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
export interface IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec {
/**
 * conversion defines conversion settings for the CRD.
 */
"conversion"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion;
/**
 * group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).
 */
"group": string;
/**
 * names specify the resource and kind names for the custom resource.
 */
"names": IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames;
/**
 * preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[\*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions/#pruning-versus-preserving-unknown-fields for details.
 */
"preserveUnknownFields"?: boolean;
/**
 * scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.
 */
"scope": string;
/**
 * versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
 */
"versions": Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion>;
}

/**
 * CustomResourceDefinitionSpec describes how a user wants their resource to appear
 */
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec extends Model<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec> implements IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec {

"conversion"?: IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion;

"group": string;

"names": IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames;

"preserveUnknownFields"?: boolean;

"scope": string;

"versions": Array<IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion>;
}

Model.setSchema(IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec, "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec", addSchema);

export {
  IIoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec as ICustomResourceDefinitionSpec,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec as CustomResourceDefinitionSpec
};
