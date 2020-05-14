
import { IIoK8sApiDiscoveryV1beta1Endpoint } from "./IoK8sApiDiscoveryV1beta1Endpoint.ts";

import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiDiscoveryV1beta1EndpointPort } from "./IoK8sApiDiscoveryV1beta1EndpointPort.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiDiscoveryV1beta1EndpointSlice.ts";

/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 */
export interface IIoK8sApiDiscoveryV1beta1EndpointSlice {
/**
 * addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: \* IPv4: Represents an IPv4 Address. \* IPv6: Represents an IPv6 Address. \* FQDN: Represents a Fully Qualified Domain Name.
 */
"addressType": string;
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "discovery.k8s.io/v1beta1";
/**
 * endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
 */
"endpoints": Array<IIoK8sApiDiscoveryV1beta1Endpoint>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "EndpointSlice";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports.
 */
"ports"?: Array<IIoK8sApiDiscoveryV1beta1EndpointPort>;
}

/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 */
export class IoK8sApiDiscoveryV1beta1EndpointSlice extends Model<IIoK8sApiDiscoveryV1beta1EndpointSlice> implements IIoK8sApiDiscoveryV1beta1EndpointSlice {

"addressType": string;

apiVersion: IIoK8sApiDiscoveryV1beta1EndpointSlice["apiVersion"] = IoK8sApiDiscoveryV1beta1EndpointSlice["apiVersion"];

"endpoints": Array<IIoK8sApiDiscoveryV1beta1Endpoint>;

kind: IIoK8sApiDiscoveryV1beta1EndpointSlice["kind"] = IoK8sApiDiscoveryV1beta1EndpointSlice["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"ports"?: Array<IIoK8sApiDiscoveryV1beta1EndpointPort>;

static apiVersion: IIoK8sApiDiscoveryV1beta1EndpointSlice["apiVersion"] = "discovery.k8s.io/v1beta1";
static kind: IIoK8sApiDiscoveryV1beta1EndpointSlice["kind"] = "EndpointSlice";
}

Model.setSchema(IoK8sApiDiscoveryV1beta1EndpointSlice, "io.k8s.api.discovery.v1beta1.EndpointSlice", addSchema);

export {
  IIoK8sApiDiscoveryV1beta1EndpointSlice as IEndpointSlice,
  IoK8sApiDiscoveryV1beta1EndpointSlice as EndpointSlice
};
