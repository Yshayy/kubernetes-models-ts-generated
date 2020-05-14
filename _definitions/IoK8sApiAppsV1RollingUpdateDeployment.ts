
import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1RollingUpdateDeployment.ts";

/**
 * Spec to control the desired behavior of rolling update.
 */
export interface IIoK8sApiAppsV1RollingUpdateDeployment {
/**
 * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
 */
"maxSurge"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
/**
 * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
 */
"maxUnavailable"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

/**
 * Spec to control the desired behavior of rolling update.
 */
export class IoK8sApiAppsV1RollingUpdateDeployment extends Model<IIoK8sApiAppsV1RollingUpdateDeployment> implements IIoK8sApiAppsV1RollingUpdateDeployment {

"maxSurge"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;

"maxUnavailable"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

Model.setSchema(IoK8sApiAppsV1RollingUpdateDeployment, "io.k8s.api.apps.v1.RollingUpdateDeployment", addSchema);

export {
  IIoK8sApiAppsV1RollingUpdateDeployment as IRollingUpdateDeployment,
  IoK8sApiAppsV1RollingUpdateDeployment as RollingUpdateDeployment
};
