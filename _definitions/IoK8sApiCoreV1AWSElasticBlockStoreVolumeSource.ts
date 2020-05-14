
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.ts";

/**
 * Represents a Persistent Disk resource in AWS.
 * 
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export interface IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource {
/**
 * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
 */
"fsType"?: string;
/**
 * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
 */
"partition"?: number;
/**
 * Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
 */
"readOnly"?: boolean;
/**
 * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
 */
"volumeID": string;
}

/**
 * Represents a Persistent Disk resource in AWS.
 * 
 * An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
 */
export class IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource extends Model<IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource> implements IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource {

"fsType"?: string;

"partition"?: number;

"readOnly"?: boolean;

"volumeID": string;
}

Model.setSchema(IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource, "io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource as IAWSElasticBlockStoreVolumeSource,
  IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource as AWSElasticBlockStoreVolumeSource
};
