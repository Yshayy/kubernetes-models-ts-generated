
import { IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior } from "./IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior.ts";

import { IIoK8sApiAutoscalingV2beta2MetricSpec } from "./IoK8sApiAutoscalingV2beta2MetricSpec.ts";

import { IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference } from "./IoK8sApiAutoscalingV2beta2CrossVersionObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec.ts";

/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export interface IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec {
/**
 * behavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). If not set, the default HPAScalingRules for scale up and scale down are used.
 */
"behavior"?: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior;
/**
 * maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
 */
"maxReplicas": number;
/**
 * metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
 */
"metrics"?: Array<IIoK8sApiAutoscalingV2beta2MetricSpec>;
/**
 * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
 */
"minReplicas"?: number;
/**
 * scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
 */
"scaleTargetRef": IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference;
}

/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export class IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec extends Model<IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec> implements IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec {

"behavior"?: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior;

"maxReplicas": number;

"metrics"?: Array<IIoK8sApiAutoscalingV2beta2MetricSpec>;

"minReplicas"?: number;

"scaleTargetRef": IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec, "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec as IHorizontalPodAutoscalerSpec,
  IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec as HorizontalPodAutoscalerSpec
};
