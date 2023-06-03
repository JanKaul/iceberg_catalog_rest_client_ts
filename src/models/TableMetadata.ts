/* tslint:disable */
/* eslint-disable */
/**
 * Apache Iceberg REST Catalog API
 * Defines the specification for the first version of the REST Catalog API. Implementations should ideally support both Iceberg table specs v1 and v2, with priority given to v2.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MetadataLogInner } from './MetadataLogInner';
import {
    MetadataLogInnerFromJSON,
    MetadataLogInnerFromJSONTyped,
    MetadataLogInnerToJSON,
} from './MetadataLogInner';
import type { PartitionSpec } from './PartitionSpec';
import {
    PartitionSpecFromJSON,
    PartitionSpecFromJSONTyped,
    PartitionSpecToJSON,
} from './PartitionSpec';
import type { Schema } from './Schema';
import {
    SchemaFromJSON,
    SchemaFromJSONTyped,
    SchemaToJSON,
} from './Schema';
import type { Snapshot } from './Snapshot';
import {
    SnapshotFromJSON,
    SnapshotFromJSONTyped,
    SnapshotToJSON,
} from './Snapshot';
import type { SnapshotLogInner } from './SnapshotLogInner';
import {
    SnapshotLogInnerFromJSON,
    SnapshotLogInnerFromJSONTyped,
    SnapshotLogInnerToJSON,
} from './SnapshotLogInner';
import type { SnapshotReference } from './SnapshotReference';
import {
    SnapshotReferenceFromJSON,
    SnapshotReferenceFromJSONTyped,
    SnapshotReferenceToJSON,
} from './SnapshotReference';
import type { SortOrder } from './SortOrder';
import {
    SortOrderFromJSON,
    SortOrderFromJSONTyped,
    SortOrderToJSON,
} from './SortOrder';

/**
 * 
 * @export
 * @interface TableMetadata
 */
export interface TableMetadata {
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    formatVersion: number;
    /**
     * 
     * @type {string}
     * @memberof TableMetadata
     */
    tableUuid: string;
    /**
     * 
     * @type {string}
     * @memberof TableMetadata
     */
    location?: string;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    lastUpdatedMs?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TableMetadata
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {Array<Schema>}
     * @memberof TableMetadata
     */
    schemas?: Array<Schema>;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    currentSchemaId?: number;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    lastColumnId?: number;
    /**
     * 
     * @type {Array<PartitionSpec>}
     * @memberof TableMetadata
     */
    partitionSpecs?: Array<PartitionSpec>;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    defaultSpecId?: number;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    lastPartitionId?: number;
    /**
     * 
     * @type {Array<SortOrder>}
     * @memberof TableMetadata
     */
    sortOrders?: Array<SortOrder>;
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    defaultSortOrderId?: number;
    /**
     * 
     * @type {Array<Snapshot>}
     * @memberof TableMetadata
     */
    snapshots?: Array<Snapshot>;
    /**
     * 
     * @type {{ [key: string]: SnapshotReference; }}
     * @memberof TableMetadata
     */
    refs?: { [key: string]: SnapshotReference; };
    /**
     * 
     * @type {number}
     * @memberof TableMetadata
     */
    currentSnapshotId?: number;
    /**
     * 
     * @type {Array<SnapshotLogInner>}
     * @memberof TableMetadata
     */
    snapshotLog?: Array<SnapshotLogInner>;
    /**
     * 
     * @type {Array<MetadataLogInner>}
     * @memberof TableMetadata
     */
    metadataLog?: Array<MetadataLogInner>;
}

/**
 * Check if a given object implements the TableMetadata interface.
 */
export function instanceOfTableMetadata(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "formatVersion" in value;
    isInstance = isInstance && "tableUuid" in value;

    return isInstance;
}

export function TableMetadataFromJSON(json: any): TableMetadata {
    return TableMetadataFromJSONTyped(json, false);
}

export function TableMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TableMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'formatVersion': json['format-version'],
        'tableUuid': json['table-uuid'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'lastUpdatedMs': !exists(json, 'last-updated-ms') ? undefined : json['last-updated-ms'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
        'schemas': !exists(json, 'schemas') ? undefined : ((json['schemas'] as Array<any>).map(SchemaFromJSON)),
        'currentSchemaId': !exists(json, 'current-schema-id') ? undefined : json['current-schema-id'],
        'lastColumnId': !exists(json, 'last-column-id') ? undefined : json['last-column-id'],
        'partitionSpecs': !exists(json, 'partition-specs') ? undefined : ((json['partition-specs'] as Array<any>).map(PartitionSpecFromJSON)),
        'defaultSpecId': !exists(json, 'default-spec-id') ? undefined : json['default-spec-id'],
        'lastPartitionId': !exists(json, 'last-partition-id') ? undefined : json['last-partition-id'],
        'sortOrders': !exists(json, 'sort-orders') ? undefined : ((json['sort-orders'] as Array<any>).map(SortOrderFromJSON)),
        'defaultSortOrderId': !exists(json, 'default-sort-order-id') ? undefined : json['default-sort-order-id'],
        'snapshots': !exists(json, 'snapshots') ? undefined : ((json['snapshots'] as Array<any>).map(SnapshotFromJSON)),
        'refs': !exists(json, 'refs') ? undefined : (mapValues(json['refs'], SnapshotReferenceFromJSON)),
        'currentSnapshotId': !exists(json, 'current-snapshot-id') ? undefined : json['current-snapshot-id'],
        'snapshotLog': !exists(json, 'snapshot-log') ? undefined : ((json['snapshot-log'] as Array<any>).map(SnapshotLogInnerFromJSON)),
        'metadataLog': !exists(json, 'metadata-log') ? undefined : ((json['metadata-log'] as Array<any>).map(MetadataLogInnerFromJSON)),
    };
}

export function TableMetadataToJSON(value?: TableMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'format-version': value.formatVersion,
        'table-uuid': value.tableUuid,
        'location': value.location,
        'last-updated-ms': value.lastUpdatedMs,
        'properties': value.properties,
        'schemas': value.schemas === undefined ? undefined : ((value.schemas as Array<any>).map(SchemaToJSON)),
        'current-schema-id': value.currentSchemaId,
        'last-column-id': value.lastColumnId,
        'partition-specs': value.partitionSpecs === undefined ? undefined : ((value.partitionSpecs as Array<any>).map(PartitionSpecToJSON)),
        'default-spec-id': value.defaultSpecId,
        'last-partition-id': value.lastPartitionId,
        'sort-orders': value.sortOrders === undefined ? undefined : ((value.sortOrders as Array<any>).map(SortOrderToJSON)),
        'default-sort-order-id': value.defaultSortOrderId,
        'snapshots': value.snapshots === undefined ? undefined : ((value.snapshots as Array<any>).map(SnapshotToJSON)),
        'refs': value.refs === undefined ? undefined : (mapValues(value.refs, SnapshotReferenceToJSON)),
        'current-snapshot-id': value.currentSnapshotId,
        'snapshot-log': value.snapshotLog === undefined ? undefined : ((value.snapshotLog as Array<any>).map(SnapshotLogInnerToJSON)),
        'metadata-log': value.metadataLog === undefined ? undefined : ((value.metadataLog as Array<any>).map(MetadataLogInnerToJSON)),
    };
}
