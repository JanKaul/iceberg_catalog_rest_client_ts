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

export class SetSnapshotRefUpdateAllOf {
    'refName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "refName",
            "baseName": "ref-name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SetSnapshotRefUpdateAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

