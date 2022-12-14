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

export class SetCurrentSchemaUpdate {
    'action': SetCurrentSchemaUpdateActionEnum;
    /**
    * Schema ID to set as current, or -1 to set last added schema
    */
    'schemaId': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "SetCurrentSchemaUpdateActionEnum",
            "format": ""
        },
        {
            "name": "schemaId",
            "baseName": "schema-id",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SetCurrentSchemaUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SetCurrentSchemaUpdateActionEnum = "upgrade-format-version" | "add-schema" | "set-current-schema" | "add-spec" | "set-default-spec" | "add-sort-order" | "set-default-sort-order" | "add-snapshot" | "set-snapshot-ref" | "remove-snapshots" | "remove-snapshot-ref" | "set-location" | "set-properties" | "remove-properties" ;

