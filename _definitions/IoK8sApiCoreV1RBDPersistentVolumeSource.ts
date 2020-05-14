
import { IIoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1RBDPersistentVolumeSource.ts";

/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export interface IIoK8sApiCoreV1RBDPersistentVolumeSource {
/**
 * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
 */
"fsType"?: string;
/**
 * The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 */
"image": string;
/**
 * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 */
"keyring"?: string;
/**
 * A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 */
"monitors": Array<string>;
/**
 * The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 */
"pool"?: string;
/**
 * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 */
"readOnly"?: boolean;
/**
 * SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 */
"secretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
 */
"user"?: string;
}

/**
 * Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
 */
export class IoK8sApiCoreV1RBDPersistentVolumeSource extends Model<IIoK8sApiCoreV1RBDPersistentVolumeSource> implements IIoK8sApiCoreV1RBDPersistentVolumeSource {

"fsType"?: string;

"image": string;

"keyring"?: string;

"monitors": Array<string>;

"pool"?: string;

"readOnly"?: boolean;

"secretRef"?: IIoK8sApiCoreV1SecretReference;

"user"?: string;
}

Model.setSchema(IoK8sApiCoreV1RBDPersistentVolumeSource, "io.k8s.api.core.v1.RBDPersistentVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1RBDPersistentVolumeSource as IRBDPersistentVolumeSource,
  IoK8sApiCoreV1RBDPersistentVolumeSource as RBDPersistentVolumeSource
};
