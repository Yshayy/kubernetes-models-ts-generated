
import { IIoK8sApiNetworkingV1NetworkPolicyPort } from "./IoK8sApiNetworkingV1NetworkPolicyPort.ts";

import { IIoK8sApiNetworkingV1NetworkPolicyPeer } from "./IoK8sApiNetworkingV1NetworkPolicyPeer.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1NetworkPolicyEgressRule.ts";

/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export interface IIoK8sApiNetworkingV1NetworkPolicyEgressRule {
/**
 * List of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
 */
"ports"?: Array<IIoK8sApiNetworkingV1NetworkPolicyPort>;
/**
 * List of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
 */
"to"?: Array<IIoK8sApiNetworkingV1NetworkPolicyPeer>;
}

/**
 * NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
 */
export class IoK8sApiNetworkingV1NetworkPolicyEgressRule extends Model<IIoK8sApiNetworkingV1NetworkPolicyEgressRule> implements IIoK8sApiNetworkingV1NetworkPolicyEgressRule {

"ports"?: Array<IIoK8sApiNetworkingV1NetworkPolicyPort>;

"to"?: Array<IIoK8sApiNetworkingV1NetworkPolicyPeer>;
}

Model.setSchema(IoK8sApiNetworkingV1NetworkPolicyEgressRule, "io.k8s.api.networking.v1.NetworkPolicyEgressRule", addSchema);

export {
  IIoK8sApiNetworkingV1NetworkPolicyEgressRule as INetworkPolicyEgressRule,
  IoK8sApiNetworkingV1NetworkPolicyEgressRule as NetworkPolicyEgressRule
};
