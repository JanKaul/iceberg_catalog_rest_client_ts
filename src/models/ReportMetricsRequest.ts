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
import type { CommitReport } from './CommitReport';
import {
    CommitReportFromJSON,
    CommitReportFromJSONTyped,
    CommitReportToJSON,
} from './CommitReport';
import type { Expression } from './Expression';
import {
    ExpressionFromJSON,
    ExpressionFromJSONTyped,
    ExpressionToJSON,
} from './Expression';
import type { MetricResult } from './MetricResult';
import {
    MetricResultFromJSON,
    MetricResultFromJSONTyped,
    MetricResultToJSON,
} from './MetricResult';
import type { ScanReport } from './ScanReport';
import {
    ScanReportFromJSON,
    ScanReportFromJSONTyped,
    ScanReportToJSON,
} from './ScanReport';

/**
 * 
 * @export
 * @interface ReportMetricsRequest
 */
export interface ReportMetricsRequest {
    /**
     * 
     * @type {string}
     * @memberof ReportMetricsRequest
     */
    reportType: string;
    /**
     * 
     * @type {string}
     * @memberof ReportMetricsRequest
     */
    tableName: string;
    /**
     * 
     * @type {number}
     * @memberof ReportMetricsRequest
     */
    snapshotId: number;
    /**
     * 
     * @type {Expression}
     * @memberof ReportMetricsRequest
     */
    filter: Expression;
    /**
     * 
     * @type {number}
     * @memberof ReportMetricsRequest
     */
    schemaId: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof ReportMetricsRequest
     */
    projectedFieldIds: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportMetricsRequest
     */
    projectedFieldNames: Array<string>;
    /**
     * 
     * @type {{ [key: string]: MetricResult; }}
     * @memberof ReportMetricsRequest
     */
    metrics: { [key: string]: MetricResult; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ReportMetricsRequest
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof ReportMetricsRequest
     */
    sequenceNumber: number;
    /**
     * 
     * @type {string}
     * @memberof ReportMetricsRequest
     */
    operation: string;
}

/**
 * Check if a given object implements the ReportMetricsRequest interface.
 */
export function instanceOfReportMetricsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "reportType" in value;
    isInstance = isInstance && "tableName" in value;
    isInstance = isInstance && "snapshotId" in value;
    isInstance = isInstance && "filter" in value;
    isInstance = isInstance && "schemaId" in value;
    isInstance = isInstance && "projectedFieldIds" in value;
    isInstance = isInstance && "projectedFieldNames" in value;
    isInstance = isInstance && "metrics" in value;
    isInstance = isInstance && "sequenceNumber" in value;
    isInstance = isInstance && "operation" in value;

    return isInstance;
}

export function ReportMetricsRequestFromJSON(json: any): ReportMetricsRequest {
    return ReportMetricsRequestFromJSONTyped(json, false);
}

export function ReportMetricsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportMetricsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reportType': json['report-type'],
        'tableName': json['table-name'],
        'snapshotId': json['snapshot-id'],
        'filter': ExpressionFromJSON(json['filter']),
        'schemaId': json['schema-id'],
        'projectedFieldIds': json['projected-field-ids'],
        'projectedFieldNames': json['projected-field-names'],
        'metrics': (mapValues(json['metrics'], MetricResultFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'sequenceNumber': json['sequence-number'],
        'operation': json['operation'],
    };
}

export function ReportMetricsRequestToJSON(value?: ReportMetricsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'report-type': value.reportType,
        'table-name': value.tableName,
        'snapshot-id': value.snapshotId,
        'filter': ExpressionToJSON(value.filter),
        'schema-id': value.schemaId,
        'projected-field-ids': value.projectedFieldIds,
        'projected-field-names': value.projectedFieldNames,
        'metrics': (mapValues(value.metrics, MetricResultToJSON)),
        'metadata': value.metadata,
        'sequence-number': value.sequenceNumber,
        'operation': value.operation,
    };
}

