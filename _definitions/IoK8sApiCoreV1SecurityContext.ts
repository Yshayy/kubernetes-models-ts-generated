
import { IIoK8sApiCoreV1Capabilities } from "./IoK8sApiCoreV1Capabilities.ts";

import { IIoK8sApiCoreV1SELinuxOptions } from "./IoK8sApiCoreV1SELinuxOptions.ts";

import { IIoK8sApiCoreV1WindowsSecurityContextOptions } from "./IoK8sApiCoreV1WindowsSecurityContextOptions.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1SecurityContext.ts";

/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 */
export interface IIoK8sApiCoreV1SecurityContext {
/**
 * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN
 */
"allowPrivilegeEscalation"?: boolean;
/**
 * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime.
 */
"capabilities"?: IIoK8sApiCoreV1Capabilities;
/**
 * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false.
 */
"privileged"?: boolean;
/**
 * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled.
 */
"procMount"?: string;
/**
 * Whether this container has a read-only root filesystem. Default is false.
 */
"readOnlyRootFilesystem"?: boolean;
/**
 * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
 */
"runAsGroup"?: number;
/**
 * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
 */
"runAsNonRoot"?: boolean;
/**
 * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
 */
"runAsUser"?: number;
/**
 * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
 */
"seLinuxOptions"?: IIoK8sApiCoreV1SELinuxOptions;
/**
 * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
 */
"windowsOptions"?: IIoK8sApiCoreV1WindowsSecurityContextOptions;
}

/**
 * SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
 */
export class IoK8sApiCoreV1SecurityContext extends Model<IIoK8sApiCoreV1SecurityContext> implements IIoK8sApiCoreV1SecurityContext {

"allowPrivilegeEscalation"?: boolean;

"capabilities"?: IIoK8sApiCoreV1Capabilities;

"privileged"?: boolean;

"procMount"?: string;

"readOnlyRootFilesystem"?: boolean;

"runAsGroup"?: number;

"runAsNonRoot"?: boolean;

"runAsUser"?: number;

"seLinuxOptions"?: IIoK8sApiCoreV1SELinuxOptions;

"windowsOptions"?: IIoK8sApiCoreV1WindowsSecurityContextOptions;
}

Model.setSchema(IoK8sApiCoreV1SecurityContext, "io.k8s.api.core.v1.SecurityContext", addSchema);

export {
  IIoK8sApiCoreV1SecurityContext as ISecurityContext,
  IoK8sApiCoreV1SecurityContext as SecurityContext
};
