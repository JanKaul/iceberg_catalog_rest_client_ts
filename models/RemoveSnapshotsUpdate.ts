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

export class RemoveSnapshotsUpdate {
    'action': RemoveSnapshotsUpdateActionEnum;
    'snapshotIds': Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "RemoveSnapshotsUpdateActionEnum",
            "format": ""
        },
        {
            "name": "snapshotIds",
            "baseName": "snapshot-ids",
            "type": "Array<number>",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return RemoveSnapshotsUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}


export type RemoveSnapshotsUpdateActionEnum = "upgrade-format-version" | "add-schema" | "set-current-schema" | "add-spec" | "set-default-spec" | "add-sort-order" | "set-default-sort-order" | "add-snapshot" | "set-snapshot-ref" | "remove-snapshots" | "remove-snapshot-ref" | "set-location" | "set-properties" | "remove-properties" ;

