/**
 * Apache Iceberg REST Catalog API
 * Defines the specification for the first version of the REST Catalog API. Implementations should ideally support both Iceberg table specs v1 and v2, with priority given to v2.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SnapshotReference {
    'type': SnapshotReferenceTypeEnum;
    'snapshotId': number;
    'maxRefAgeMs'?: number;
    'maxSnapshotAgeMs'?: number;
    'minSnapshotsToKeep'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SnapshotReferenceTypeEnum",
            "format": ""
        },
        {
            "name": "snapshotId",
            "baseName": "snapshot-id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxRefAgeMs",
            "baseName": "max-ref-age-ms",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "maxSnapshotAgeMs",
            "baseName": "max-snapshot-age-ms",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "minSnapshotsToKeep",
            "baseName": "min-snapshots-to-keep",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SnapshotReference.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SnapshotReferenceTypeEnum = "tag" | "branch" ;

