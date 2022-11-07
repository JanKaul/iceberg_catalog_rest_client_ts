import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AddPartitionSpecUpdate } from '../models/AddPartitionSpecUpdate';
import { AddPartitionSpecUpdateAllOf } from '../models/AddPartitionSpecUpdateAllOf';
import { AddSchemaUpdate } from '../models/AddSchemaUpdate';
import { AddSchemaUpdateAllOf } from '../models/AddSchemaUpdateAllOf';
import { AddSnapshotUpdate } from '../models/AddSnapshotUpdate';
import { AddSnapshotUpdateAllOf } from '../models/AddSnapshotUpdateAllOf';
import { AddSortOrderUpdate } from '../models/AddSortOrderUpdate';
import { AddSortOrderUpdateAllOf } from '../models/AddSortOrderUpdateAllOf';
import { AndOrExpression } from '../models/AndOrExpression';
import { BaseUpdate } from '../models/BaseUpdate';
import { CatalogConfig } from '../models/CatalogConfig';
import { CommitTableRequest } from '../models/CommitTableRequest';
import { CounterResult } from '../models/CounterResult';
import { CreateNamespace200Response } from '../models/CreateNamespace200Response';
import { CreateNamespaceRequest } from '../models/CreateNamespaceRequest';
import { CreateTableRequest } from '../models/CreateTableRequest';
import { ErrorModel } from '../models/ErrorModel';
import { Expression } from '../models/Expression';
import { GetToken200Response } from '../models/GetToken200Response';
import { GetToken400Response } from '../models/GetToken400Response';
import { ListNamespaces200Response } from '../models/ListNamespaces200Response';
import { ListTables200Response } from '../models/ListTables200Response';
import { ListType } from '../models/ListType';
import { LiteralExpression } from '../models/LiteralExpression';
import { LoadNamespaceMetadata200Response } from '../models/LoadNamespaceMetadata200Response';
import { LoadTableResult } from '../models/LoadTableResult';
import { MapType } from '../models/MapType';
import { MetadataLogInner } from '../models/MetadataLogInner';
import { MetricResult } from '../models/MetricResult';
import { NotExpression } from '../models/NotExpression';
import { NullOrder } from '../models/NullOrder';
import { PartitionField } from '../models/PartitionField';
import { PartitionSpec } from '../models/PartitionSpec';
import { RemovePropertiesUpdate } from '../models/RemovePropertiesUpdate';
import { RemovePropertiesUpdateAllOf } from '../models/RemovePropertiesUpdateAllOf';
import { RemoveSnapshotRefUpdate } from '../models/RemoveSnapshotRefUpdate';
import { RemoveSnapshotsUpdate } from '../models/RemoveSnapshotsUpdate';
import { RemoveSnapshotsUpdateAllOf } from '../models/RemoveSnapshotsUpdateAllOf';
import { RenameTableRequest } from '../models/RenameTableRequest';
import { ReportMetricsRequest } from '../models/ReportMetricsRequest';
import { ScanReport } from '../models/ScanReport';
import { Schema } from '../models/Schema';
import { SchemaAllOf } from '../models/SchemaAllOf';
import { SetCurrentSchemaUpdate } from '../models/SetCurrentSchemaUpdate';
import { SetCurrentSchemaUpdateAllOf } from '../models/SetCurrentSchemaUpdateAllOf';
import { SetDefaultSortOrderUpdate } from '../models/SetDefaultSortOrderUpdate';
import { SetDefaultSortOrderUpdateAllOf } from '../models/SetDefaultSortOrderUpdateAllOf';
import { SetDefaultSpecUpdate } from '../models/SetDefaultSpecUpdate';
import { SetDefaultSpecUpdateAllOf } from '../models/SetDefaultSpecUpdateAllOf';
import { SetExpression } from '../models/SetExpression';
import { SetLocationUpdate } from '../models/SetLocationUpdate';
import { SetLocationUpdateAllOf } from '../models/SetLocationUpdateAllOf';
import { SetPropertiesUpdate } from '../models/SetPropertiesUpdate';
import { SetPropertiesUpdateAllOf } from '../models/SetPropertiesUpdateAllOf';
import { SetSnapshotRefUpdate } from '../models/SetSnapshotRefUpdate';
import { SetSnapshotRefUpdateAllOf } from '../models/SetSnapshotRefUpdateAllOf';
import { Snapshot } from '../models/Snapshot';
import { SnapshotLogInner } from '../models/SnapshotLogInner';
import { SnapshotReference } from '../models/SnapshotReference';
import { SnapshotSummary } from '../models/SnapshotSummary';
import { SortDirection } from '../models/SortDirection';
import { SortField } from '../models/SortField';
import { SortOrder } from '../models/SortOrder';
import { StructField } from '../models/StructField';
import { StructType } from '../models/StructType';
import { TableIdentifier } from '../models/TableIdentifier';
import { TableMetadata } from '../models/TableMetadata';
import { TableRequirement } from '../models/TableRequirement';
import { TableUpdate } from '../models/TableUpdate';
import { Term } from '../models/Term';
import { TimerResult } from '../models/TimerResult';
import { TokenType } from '../models/TokenType';
import { TransformTerm } from '../models/TransformTerm';
import { Type } from '../models/Type';
import { UnaryExpression } from '../models/UnaryExpression';
import { UpdateNamespacePropertiesRequest } from '../models/UpdateNamespacePropertiesRequest';
import { UpdateProperties200Response } from '../models/UpdateProperties200Response';
import { UpdateTable200Response } from '../models/UpdateTable200Response';
import { UpgradeFormatVersionUpdate } from '../models/UpgradeFormatVersionUpdate';
import { UpgradeFormatVersionUpdateAllOf } from '../models/UpgradeFormatVersionUpdateAllOf';

import { CatalogAPIApiRequestFactory, CatalogAPIApiResponseProcessor} from "../apis/CatalogAPIApi";
export class ObservableCatalogAPIApi {
    private requestFactory: CatalogAPIApiRequestFactory;
    private responseProcessor: CatalogAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CatalogAPIApiRequestFactory,
        responseProcessor?: CatalogAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CatalogAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CatalogAPIApiResponseProcessor();
    }

    /**
     * Create a namespace, with an optional set of properties. The server might also add properties, such as `last_modified_time` etc.
     * Create a namespace
     * @param prefix An optional prefix in the path
     * @param createNamespaceRequest 
     */
    public createNamespace(prefix: string, createNamespaceRequest?: CreateNamespaceRequest, _options?: Configuration): Observable<CreateNamespace200Response> {
        const requestContextPromise = this.requestFactory.createNamespace(prefix, createNamespaceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNamespace(rsp)));
            }));
    }

    /**
     * Create a table or start a create transaction, like atomic CTAS.  If `stage-create` is false, the table is created immediately.  If `stage-create` is true, the table is not created, but table metadata is initialized and returned. The service should prepare as needed for a commit to the table commit endpoint to complete the create transaction. The client uses the returned metadata to begin a transaction. To commit the transaction, the client sends all create and subsequent changes to the table commit route. Changes from the table create operation include changes like AddSchemaUpdate and SetCurrentSchemaUpdate that set the initial table state.
     * Create a table in the given namespace
     * @param prefix An optional prefix in the path
     * @param namespace A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @param createTableRequest 
     */
    public createTable(prefix: string, namespace: string, createTableRequest?: CreateTableRequest, _options?: Configuration): Observable<LoadTableResult> {
        const requestContextPromise = this.requestFactory.createTable(prefix, namespace, createTableRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTable(rsp)));
            }));
    }

    /**
     * Drop a namespace from the catalog. Namespace must be empty.
     * @param prefix An optional prefix in the path
     * @param namespace A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     */
    public dropNamespace(prefix: string, namespace: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.dropNamespace(prefix, namespace, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dropNamespace(rsp)));
            }));
    }

    /**
     * Remove a table from the catalog
     * Drop a table from the catalog
     * @param prefix An optional prefix in the path
     * @param namespace A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @param table A table name
     * @param purgeRequested Whether the user requested to purge the underlying table&#39;s data and metadata
     */
    public dropTable(prefix: string, namespace: string, table: string, purgeRequested?: boolean, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.dropTable(prefix, namespace, table, purgeRequested, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dropTable(rsp)));
            }));
    }

    /**
     * List all namespaces at a certain level, optionally starting from a given parent namespace. For example, if table accounting.tax.paid exists, using 'SELECT NAMESPACE IN accounting' would translate into `GET /namespaces?parent=accounting` and must return a namespace, [\"accounting\", \"tax\"]. If `parent` is not provided, all top-level namespaces should be listed.
     * List namespaces, optionally providing a parent namespace to list underneath
     * @param prefix An optional prefix in the path
     * @param parent An optional namespace, underneath which to list namespaces. If not provided or empty, all top-level namespaces should be listed. If parent is a multipart namespace, the parts must be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     */
    public listNamespaces(prefix: string, parent?: string, _options?: Configuration): Observable<ListNamespaces200Response> {
        const requestContextPromise = this.requestFactory.listNamespaces(prefix, parent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listNamespaces(rsp)));
            }));
    }

    /**
     * Return all table identifiers under this namespace
     * List all table identifiers underneath a given namespace
     * @param prefix An optional prefix in the path
     * @param namespace A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     */
    public listTables(prefix: string, namespace: string, _options?: Configuration): Observable<ListTables200Response> {
        const requestContextPromise = this.requestFactory.listTables(prefix, namespace, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTables(rsp)));
            }));
    }

    /**
     * Return all stored metadata properties for a given namespace
     * Load the metadata properties for a namespace
     * @param prefix An optional prefix in the path
     * @param namespace A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     */
    public loadNamespaceMetadata(prefix: string, namespace: string, _options?: Configuration): Observable<LoadNamespaceMetadata200Response> {
        const requestContextPromise = this.requestFactory.loadNamespaceMetadata(prefix, namespace, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loadNamespaceMetadata(rsp)));
            }));
    }

    /**
     * Load a table from the catalog.  The response contains both configuration and table metadata. The configuration, if non-empty is used as additional configuration for the table that overrides catalog configuration. For example, this configuration may change the FileIO implemented used for the table.  The response also contains the table's full metadata.  The catalog configuration may contain credentials that should be used for subsequent requests for the table. The configuration key \"token\" is used to pass an access token to be used as a bearer token for table requests. Otherwise, a token may be passed using a RFC 8693 token type as a configuration key. For example, \"urn:ietf:params:oauth:token-type:jwt=<JWT-token>\".
     * Load a table from the catalog
     * @param prefix An optional prefix in the path
     * @param namespace A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @param table A table name
     */
    public loadTable(prefix: string, namespace: string, table: string, _options?: Configuration): Observable<LoadTableResult> {
        const requestContextPromise = this.requestFactory.loadTable(prefix, namespace, table, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loadTable(rsp)));
            }));
    }

    /**
     * Rename a table from one identifier to another. It's valid to move a table across namespaces, but the server implementation is not required to support it.
     * Rename a table from its current name to a new name
     * @param prefix An optional prefix in the path
     * @param renameTableRequest Current table identifier to rename and new table identifier to rename to
     */
    public renameTable(prefix: string, renameTableRequest: RenameTableRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.renameTable(prefix, renameTableRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.renameTable(rsp)));
            }));
    }

    /**
     * Send a metrics report to this endpoint to be processed by the backend
     * @param prefix An optional prefix in the path
     * @param namespace A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @param table A table name
     * @param reportMetricsRequest The request containing the metrics report to be sent
     */
    public reportMetrics(prefix: string, namespace: string, table: string, reportMetricsRequest: ReportMetricsRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.reportMetrics(prefix, namespace, table, reportMetricsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reportMetrics(rsp)));
            }));
    }

    /**
     * Check if a table exists within a given namespace. This request does not return a response body.
     * Check if a table exists
     * @param prefix An optional prefix in the path
     * @param namespace A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @param table A table name
     */
    public tableExists(prefix: string, namespace: string, table: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.tableExists(prefix, namespace, table, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tableExists(rsp)));
            }));
    }

    /**
     * Set and/or remove properties on a namespace. The request body specifies a list of properties to remove and a map of key value pairs to update. Properties that are not in the request are not modified or removed by this call. Server implementations are not required to support namespace properties.
     * Set or remove properties on a namespace
     * @param prefix An optional prefix in the path
     * @param namespace A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @param updateNamespacePropertiesRequest 
     */
    public updateProperties(prefix: string, namespace: string, updateNamespacePropertiesRequest?: UpdateNamespacePropertiesRequest, _options?: Configuration): Observable<UpdateProperties200Response> {
        const requestContextPromise = this.requestFactory.updateProperties(prefix, namespace, updateNamespacePropertiesRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProperties(rsp)));
            }));
    }

    /**
     * Commit updates to a table.  Commits have two parts, requirements and updates. Requirements are assertions that will be validated before attempting to make and commit changes. For example, `assert-ref-snapshot-id` will check that a named ref's snapshot ID has a certain value.  Updates are changes to make to table metadata. For example, after asserting that the current main ref is at the expected snapshot, a commit may add a new child snapshot and set the ref to the new snapshot id.  Create table transactions that are started by createTable with `stage-create` set to true are committed using this route. Transactions should include all changes to the table, including table initialization, like AddSchemaUpdate and SetCurrentSchemaUpdate. The `assert-create` requirement is used to ensure that the table was not created concurrently.
     * Commit updates to a table
     * @param prefix An optional prefix in the path
     * @param namespace A namespace identifier as a single string. Multipart namespace parts should be separated by the unit separator (&#x60;0x1F&#x60;) byte.
     * @param table A table name
     * @param commitTableRequest 
     */
    public updateTable(prefix: string, namespace: string, table: string, commitTableRequest?: CommitTableRequest, _options?: Configuration): Observable<UpdateTable200Response> {
        const requestContextPromise = this.requestFactory.updateTable(prefix, namespace, table, commitTableRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTable(rsp)));
            }));
    }

}

import { ConfigurationAPIApiRequestFactory, ConfigurationAPIApiResponseProcessor} from "../apis/ConfigurationAPIApi";
export class ObservableConfigurationAPIApi {
    private requestFactory: ConfigurationAPIApiRequestFactory;
    private responseProcessor: ConfigurationAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigurationAPIApiRequestFactory,
        responseProcessor?: ConfigurationAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConfigurationAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConfigurationAPIApiResponseProcessor();
    }

    /**
     *  All REST clients should first call this route to get catalog configuration properties from the server to configure the catalog and its HTTP client. Configuration from the server consists of two sets of key/value pairs. - defaults -  properties that should be used as default configuration; applied before client configuration - overrides - properties that should be used to override client configuration; applied after defaults and client configuration  Catalog configuration is constructed by setting the defaults, then client- provided configuration, and finally overrides. The final property set is then used to configure the catalog.  For example, a default configuration property might set the size of the client pool, which can be replaced with a client-specific setting. An override might be used to set the warehouse location, which is stored on the server rather than in client configuration.  Common catalog configuration settings are documented at https://iceberg.apache.org/configuration/#catalog-properties 
     * List all catalog configuration settings
     */
    public getConfig(_options?: Configuration): Observable<CatalogConfig> {
        const requestContextPromise = this.requestFactory.getConfig(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConfig(rsp)));
            }));
    }

}

import { OAuth2APIApiRequestFactory, OAuth2APIApiResponseProcessor} from "../apis/OAuth2APIApi";
export class ObservableOAuth2APIApi {
    private requestFactory: OAuth2APIApiRequestFactory;
    private responseProcessor: OAuth2APIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OAuth2APIApiRequestFactory,
        responseProcessor?: OAuth2APIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OAuth2APIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OAuth2APIApiResponseProcessor();
    }

    /**
     * Exchange credentials for a token using the OAuth2 client credentials flow or token exchange.  This endpoint is used for three purposes - 1. To exchange client credentials (client ID and secret) for an access token This uses the client credentials flow. 2. To exchange a client token and an identity token for a more specific access token This uses the token exchange flow. 3. To exchange an access token for one with the same claims and a refreshed expiration period This uses the token exchange flow.  For example, a catalog client may be configured with client credentials from the OAuth2 Authorization flow. This client would exchange its client ID and secret for an access token using the client credentials request with this endpoint (1). Subsequent requests would then use that access token.  Some clients may also handle sessions that have additional user context. These clients would use the token exchange flow to exchange a user token (the \"subject\" token) from the session for a more specific access token for that user, using the catalog's access token as the \"actor\" token (2). The user ID token is the \"subject\" token and can be any token type allowed by the OAuth2 token exchange flow, including a unsecured JWT token with a sub claim. This request should use the catalog's bearer token in the \"Authorization\" header.  Clients may also use the token exchange flow to refresh a token that is about to expire by sending a token exchange request (3). The request's \"subject\" token should be the expiring token. This request should use the subject token in the \"Authorization\" header.
     * Get a token using an OAuth2 flow
     * @param grantType 
     * @param scope 
     * @param clientId Client ID  This can be sent in the request body, but OAuth2 recommends sending it in a Basic Authorization header.
     * @param clientSecret Client secret  This can be sent in the request body, but OAuth2 recommends sending it in a Basic Authorization header.
     * @param requestedTokenType 
     * @param subjectToken Subject token for token exchange request
     * @param subjectTokenType 
     * @param actorToken Actor token for token exchange request
     * @param actorTokenType 
     */
    public getToken(grantType?: string, scope?: string, clientId?: string, clientSecret?: string, requestedTokenType?: TokenType, subjectToken?: string, subjectTokenType?: TokenType, actorToken?: string, actorTokenType?: TokenType, _options?: Configuration): Observable<GetToken200Response> {
        const requestContextPromise = this.requestFactory.getToken(grantType, scope, clientId, clientSecret, requestedTokenType, subjectToken, subjectTokenType, actorToken, actorTokenType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getToken(rsp)));
            }));
    }

}
