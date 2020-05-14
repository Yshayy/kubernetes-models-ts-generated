
import { IIoK8sApiCoreV1Affinity } from "./IoK8sApiCoreV1Affinity.ts";

import { IIoK8sApiCoreV1Container } from "./IoK8sApiCoreV1Container.ts";

import { IIoK8sApiCoreV1PodDNSConfig } from "./IoK8sApiCoreV1PodDNSConfig.ts";

import { IIoK8sApiCoreV1EphemeralContainer } from "./IoK8sApiCoreV1EphemeralContainer.ts";

import { IIoK8sApiCoreV1HostAlias } from "./IoK8sApiCoreV1HostAlias.ts";

import { IIoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";

import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { IIoK8sApiCoreV1PodReadinessGate } from "./IoK8sApiCoreV1PodReadinessGate.ts";

import { IIoK8sApiCoreV1PodSecurityContext } from "./IoK8sApiCoreV1PodSecurityContext.ts";

import { IIoK8sApiCoreV1Toleration } from "./IoK8sApiCoreV1Toleration.ts";

import { IIoK8sApiCoreV1TopologySpreadConstraint } from "./IoK8sApiCoreV1TopologySpreadConstraint.ts";

import { IIoK8sApiCoreV1Volume } from "./IoK8sApiCoreV1Volume.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodSpec.ts";

/**
 * PodSpec is a description of a pod.
 */
export interface IIoK8sApiCoreV1PodSpec {
/**
 * Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
 */
"activeDeadlineSeconds"?: number;
/**
 * If specified, the pod's scheduling constraints
 */
"affinity"?: IIoK8sApiCoreV1Affinity;
/**
 * AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
 */
"automountServiceAccountToken"?: boolean;
/**
 * List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
 */
"containers": Array<IIoK8sApiCoreV1Container>;
/**
 * Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
 */
"dnsConfig"?: IIoK8sApiCoreV1PodDNSConfig;
/**
 * Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.
 */
"dnsPolicy"?: string;
/**
 * EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.
 */
"enableServiceLinks"?: boolean;
/**
 * List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource. This field is alpha-level and is only honored by servers that enable the EphemeralContainers feature.
 */
"ephemeralContainers"?: Array<IIoK8sApiCoreV1EphemeralContainer>;
/**
 * HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified. This is only valid for non-hostNetwork pods.
 */
"hostAliases"?: Array<IIoK8sApiCoreV1HostAlias>;
/**
 * Use the host's ipc namespace. Optional: Default to false.
 */
"hostIPC"?: boolean;
/**
 * Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
 */
"hostNetwork"?: boolean;
/**
 * Use the host's pid namespace. Optional: Default to false.
 */
"hostPID"?: boolean;
/**
 * Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
 */
"hostname"?: string;
/**
 * ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. For example, in the case of docker, only DockerConfig type secrets are honored. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
 */
"imagePullSecrets"?: Array<IIoK8sApiCoreV1LocalObjectReference>;
/**
 * List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
 */
"initContainers"?: Array<IIoK8sApiCoreV1Container>;
/**
 * NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
 */
"nodeName"?: string;
/**
 * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
 */
"nodeSelector"?: {
[key: string]: string;
};
/**
 * Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/20190226-pod-overhead.md This field is alpha-level as of Kubernetes v1.16, and is only honored by servers that enable the PodOverhead feature.
 */
"overhead"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. This field is alpha-level and is only honored by servers that enable the NonPreemptingPriority feature.
 */
"preemptionPolicy"?: string;
/**
 * The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
 */
"priority"?: number;
/**
 * If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
 */
"priorityClassName"?: string;
/**
 * If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/0007-pod-ready%2B%2B.md
 */
"readinessGates"?: Array<IIoK8sApiCoreV1PodReadinessGate>;
/**
 * Restart policy for all containers within the pod. One of Always, OnFailure, Never. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy
 */
"restartPolicy"?: string;
/**
 * RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md This is a beta feature as of Kubernetes v1.14.
 */
"runtimeClassName"?: string;
/**
 * If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
 */
"schedulerName"?: string;
/**
 * SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
 */
"securityContext"?: IIoK8sApiCoreV1PodSecurityContext;
/**
 * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
 */
"serviceAccount"?: string;
/**
 * ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
 */
"serviceAccountName"?: string;
/**
 * Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.
 */
"shareProcessNamespace"?: boolean;
/**
 * If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all.
 */
"subdomain"?: string;
/**
 * Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
 */
"terminationGracePeriodSeconds"?: number;
/**
 * If specified, the pod's tolerations.
 */
"tolerations"?: Array<IIoK8sApiCoreV1Toleration>;
/**
 * TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. This field is only honored by clusters that enable the EvenPodsSpread feature. All topologySpreadConstraints are ANDed.
 */
"topologySpreadConstraints"?: Array<IIoK8sApiCoreV1TopologySpreadConstraint>;
/**
 * List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
 */
"volumes"?: Array<IIoK8sApiCoreV1Volume>;
}

/**
 * PodSpec is a description of a pod.
 */
export class IoK8sApiCoreV1PodSpec extends Model<IIoK8sApiCoreV1PodSpec> implements IIoK8sApiCoreV1PodSpec {

"activeDeadlineSeconds"?: number;

"affinity"?: IIoK8sApiCoreV1Affinity;

"automountServiceAccountToken"?: boolean;

"containers": Array<IIoK8sApiCoreV1Container>;

"dnsConfig"?: IIoK8sApiCoreV1PodDNSConfig;

"dnsPolicy"?: string;

"enableServiceLinks"?: boolean;

"ephemeralContainers"?: Array<IIoK8sApiCoreV1EphemeralContainer>;

"hostAliases"?: Array<IIoK8sApiCoreV1HostAlias>;

"hostIPC"?: boolean;

"hostNetwork"?: boolean;

"hostPID"?: boolean;

"hostname"?: string;

"imagePullSecrets"?: Array<IIoK8sApiCoreV1LocalObjectReference>;

"initContainers"?: Array<IIoK8sApiCoreV1Container>;

"nodeName"?: string;

"nodeSelector"?: {
[key: string]: string;
};

"overhead"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"preemptionPolicy"?: string;

"priority"?: number;

"priorityClassName"?: string;

"readinessGates"?: Array<IIoK8sApiCoreV1PodReadinessGate>;

"restartPolicy"?: string;

"runtimeClassName"?: string;

"schedulerName"?: string;

"securityContext"?: IIoK8sApiCoreV1PodSecurityContext;

"serviceAccount"?: string;

"serviceAccountName"?: string;

"shareProcessNamespace"?: boolean;

"subdomain"?: string;

"terminationGracePeriodSeconds"?: number;

"tolerations"?: Array<IIoK8sApiCoreV1Toleration>;

"topologySpreadConstraints"?: Array<IIoK8sApiCoreV1TopologySpreadConstraint>;

"volumes"?: Array<IIoK8sApiCoreV1Volume>;
}

Model.setSchema(IoK8sApiCoreV1PodSpec, "io.k8s.api.core.v1.PodSpec", addSchema);

export {
  IIoK8sApiCoreV1PodSpec as IPodSpec,
  IoK8sApiCoreV1PodSpec as PodSpec
};
