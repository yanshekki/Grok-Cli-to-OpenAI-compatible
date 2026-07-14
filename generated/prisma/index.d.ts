
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model ChatRequest
 * 
 */
export type ChatRequest = $Result.DefaultSelection<Prisma.$ChatRequestPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model ChatRequestDocument
 * 
 */
export type ChatRequestDocument = $Result.DefaultSelection<Prisma.$ChatRequestDocumentPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ApiKeys
 * const apiKeys = await prisma.apiKey.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ApiKeys
   * const apiKeys = await prisma.apiKey.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRequest`: Exposes CRUD operations for the **ChatRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRequests
    * const chatRequests = await prisma.chatRequest.findMany()
    * ```
    */
  get chatRequest(): Prisma.ChatRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRequestDocument`: Exposes CRUD operations for the **ChatRequestDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRequestDocuments
    * const chatRequestDocuments = await prisma.chatRequestDocument.findMany()
    * ```
    */
  get chatRequestDocument(): Prisma.ChatRequestDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ApiKey: 'ApiKey',
    ChatRequest: 'ChatRequest',
    Document: 'Document',
    ChatRequestDocument: 'ChatRequestDocument',
    AuditLog: 'AuditLog',
    Setting: 'Setting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "apiKey" | "chatRequest" | "document" | "chatRequestDocument" | "auditLog" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      ChatRequest: {
        payload: Prisma.$ChatRequestPayload<ExtArgs>
        fields: Prisma.ChatRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload>
          }
          findFirst: {
            args: Prisma.ChatRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload>
          }
          findMany: {
            args: Prisma.ChatRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload>[]
          }
          create: {
            args: Prisma.ChatRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload>
          }
          createMany: {
            args: Prisma.ChatRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload>[]
          }
          delete: {
            args: Prisma.ChatRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload>
          }
          update: {
            args: Prisma.ChatRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload>
          }
          deleteMany: {
            args: Prisma.ChatRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload>[]
          }
          upsert: {
            args: Prisma.ChatRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestPayload>
          }
          aggregate: {
            args: Prisma.ChatRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRequest>
          }
          groupBy: {
            args: Prisma.ChatRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRequestCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      ChatRequestDocument: {
        payload: Prisma.$ChatRequestDocumentPayload<ExtArgs>
        fields: Prisma.ChatRequestDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRequestDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRequestDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload>
          }
          findFirst: {
            args: Prisma.ChatRequestDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRequestDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload>
          }
          findMany: {
            args: Prisma.ChatRequestDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload>[]
          }
          create: {
            args: Prisma.ChatRequestDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload>
          }
          createMany: {
            args: Prisma.ChatRequestDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRequestDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload>[]
          }
          delete: {
            args: Prisma.ChatRequestDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload>
          }
          update: {
            args: Prisma.ChatRequestDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload>
          }
          deleteMany: {
            args: Prisma.ChatRequestDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRequestDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRequestDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload>[]
          }
          upsert: {
            args: Prisma.ChatRequestDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRequestDocumentPayload>
          }
          aggregate: {
            args: Prisma.ChatRequestDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRequestDocument>
          }
          groupBy: {
            args: Prisma.ChatRequestDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRequestDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRequestDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRequestDocumentCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    apiKey?: ApiKeyOmit
    chatRequest?: ChatRequestOmit
    document?: DocumentOmit
    chatRequestDocument?: ChatRequestDocumentOmit
    auditLog?: AuditLogOmit
    setting?: SettingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ApiKeyCountOutputType
   */

  export type ApiKeyCountOutputType = {
    chatRequests: number
    documents: number
    auditLogs: number
  }

  export type ApiKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRequests?: boolean | ApiKeyCountOutputTypeCountChatRequestsArgs
    documents?: boolean | ApiKeyCountOutputTypeCountDocumentsArgs
    auditLogs?: boolean | ApiKeyCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKeyCountOutputType
     */
    select?: ApiKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountChatRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRequestWhereInput
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * ApiKeyCountOutputType without action
   */
  export type ApiKeyCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type ChatRequestCountOutputType
   */

  export type ChatRequestCountOutputType = {
    documents: number
  }

  export type ChatRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | ChatRequestCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ChatRequestCountOutputType without action
   */
  export type ChatRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestCountOutputType
     */
    select?: ChatRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatRequestCountOutputType without action
   */
  export type ChatRequestCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRequestDocumentWhereInput
  }


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    chatRequests: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRequests?: boolean | DocumentCountOutputTypeCountChatRequestsArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountChatRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRequestDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyAvgAggregateOutputType = {
    rateLimit: number | null
    maxTurns: number | null
    timeoutMs: number | null
  }

  export type ApiKeySumAggregateOutputType = {
    rateLimit: number | null
    maxTurns: number | null
    timeoutMs: number | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    name: string | null
    keyPrefix: string | null
    keyHash: string | null
    role: string | null
    mode: string | null
    isActive: boolean | null
    rateLimit: number | null
    maxTurns: number | null
    timeoutMs: number | null
    createdAt: Date | null
    lastUsedAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    keyPrefix: string | null
    keyHash: string | null
    role: string | null
    mode: string | null
    isActive: boolean | null
    rateLimit: number | null
    maxTurns: number | null
    timeoutMs: number | null
    createdAt: Date | null
    lastUsedAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    name: number
    keyPrefix: number
    keyHash: number
    role: number
    mode: number
    isActive: number
    rateLimit: number
    maxTurns: number
    timeoutMs: number
    createdAt: number
    lastUsedAt: number
    _all: number
  }


  export type ApiKeyAvgAggregateInputType = {
    rateLimit?: true
    maxTurns?: true
    timeoutMs?: true
  }

  export type ApiKeySumAggregateInputType = {
    rateLimit?: true
    maxTurns?: true
    timeoutMs?: true
  }

  export type ApiKeyMinAggregateInputType = {
    id?: true
    name?: true
    keyPrefix?: true
    keyHash?: true
    role?: true
    mode?: true
    isActive?: true
    rateLimit?: true
    maxTurns?: true
    timeoutMs?: true
    createdAt?: true
    lastUsedAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    name?: true
    keyPrefix?: true
    keyHash?: true
    role?: true
    mode?: true
    isActive?: true
    rateLimit?: true
    maxTurns?: true
    timeoutMs?: true
    createdAt?: true
    lastUsedAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    name?: true
    keyPrefix?: true
    keyHash?: true
    role?: true
    mode?: true
    isActive?: true
    rateLimit?: true
    maxTurns?: true
    timeoutMs?: true
    createdAt?: true
    lastUsedAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _avg?: ApiKeyAvgAggregateInputType
    _sum?: ApiKeySumAggregateInputType
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    name: string
    keyPrefix: string
    keyHash: string
    role: string
    mode: string
    isActive: boolean
    rateLimit: number
    maxTurns: number | null
    timeoutMs: number | null
    createdAt: Date
    lastUsedAt: Date | null
    _count: ApiKeyCountAggregateOutputType | null
    _avg: ApiKeyAvgAggregateOutputType | null
    _sum: ApiKeySumAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyPrefix?: boolean
    keyHash?: boolean
    role?: boolean
    mode?: boolean
    isActive?: boolean
    rateLimit?: boolean
    maxTurns?: boolean
    timeoutMs?: boolean
    createdAt?: boolean
    lastUsedAt?: boolean
    chatRequests?: boolean | ApiKey$chatRequestsArgs<ExtArgs>
    documents?: boolean | ApiKey$documentsArgs<ExtArgs>
    auditLogs?: boolean | ApiKey$auditLogsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyPrefix?: boolean
    keyHash?: boolean
    role?: boolean
    mode?: boolean
    isActive?: boolean
    rateLimit?: boolean
    maxTurns?: boolean
    timeoutMs?: boolean
    createdAt?: boolean
    lastUsedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    keyPrefix?: boolean
    keyHash?: boolean
    role?: boolean
    mode?: boolean
    isActive?: boolean
    rateLimit?: boolean
    maxTurns?: boolean
    timeoutMs?: boolean
    createdAt?: boolean
    lastUsedAt?: boolean
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    name?: boolean
    keyPrefix?: boolean
    keyHash?: boolean
    role?: boolean
    mode?: boolean
    isActive?: boolean
    rateLimit?: boolean
    maxTurns?: boolean
    timeoutMs?: boolean
    createdAt?: boolean
    lastUsedAt?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "keyPrefix" | "keyHash" | "role" | "mode" | "isActive" | "rateLimit" | "maxTurns" | "timeoutMs" | "createdAt" | "lastUsedAt", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRequests?: boolean | ApiKey$chatRequestsArgs<ExtArgs>
    documents?: boolean | ApiKey$documentsArgs<ExtArgs>
    auditLogs?: boolean | ApiKey$auditLogsArgs<ExtArgs>
    _count?: boolean | ApiKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      chatRequests: Prisma.$ChatRequestPayload<ExtArgs>[]
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      keyPrefix: string
      keyHash: string
      role: string
      /**
       * safe | agent
       */
      mode: string
      isActive: boolean
      rateLimit: number
      maxTurns: number | null
      timeoutMs: number | null
      createdAt: Date
      lastUsedAt: Date | null
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatRequests<T extends ApiKey$chatRequestsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$chatRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends ApiKey$documentsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends ApiKey$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, ApiKey$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */ 
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly keyPrefix: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly role: FieldRef<"ApiKey", 'String'>
    readonly mode: FieldRef<"ApiKey", 'String'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly rateLimit: FieldRef<"ApiKey", 'Int'>
    readonly maxTurns: FieldRef<"ApiKey", 'Int'>
    readonly timeoutMs: FieldRef<"ApiKey", 'Int'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey.chatRequests
   */
  export type ApiKey$chatRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
    where?: ChatRequestWhereInput
    orderBy?: ChatRequestOrderByWithRelationInput | ChatRequestOrderByWithRelationInput[]
    cursor?: ChatRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRequestScalarFieldEnum | ChatRequestScalarFieldEnum[]
  }

  /**
   * ApiKey.documents
   */
  export type ApiKey$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * ApiKey.auditLogs
   */
  export type ApiKey$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model ChatRequest
   */

  export type AggregateChatRequest = {
    _count: ChatRequestCountAggregateOutputType | null
    _avg: ChatRequestAvgAggregateOutputType | null
    _sum: ChatRequestSumAggregateOutputType | null
    _min: ChatRequestMinAggregateOutputType | null
    _max: ChatRequestMaxAggregateOutputType | null
  }

  export type ChatRequestAvgAggregateOutputType = {
    durationMs: number | null
  }

  export type ChatRequestSumAggregateOutputType = {
    durationMs: number | null
  }

  export type ChatRequestMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    apiKeyId: string | null
    model: string | null
    stream: boolean | null
    status: string | null
    durationMs: number | null
    grokSessionId: string | null
    promptCiphertext: Uint8Array | null
    promptIv: Uint8Array | null
    promptTag: Uint8Array | null
    responseCiphertext: Uint8Array | null
    responseIv: Uint8Array | null
    responseTag: Uint8Array | null
    errorMessage: string | null
    ip: string | null
    userAgent: string | null
    policyMode: string | null
    createdAt: Date | null
  }

  export type ChatRequestMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    apiKeyId: string | null
    model: string | null
    stream: boolean | null
    status: string | null
    durationMs: number | null
    grokSessionId: string | null
    promptCiphertext: Uint8Array | null
    promptIv: Uint8Array | null
    promptTag: Uint8Array | null
    responseCiphertext: Uint8Array | null
    responseIv: Uint8Array | null
    responseTag: Uint8Array | null
    errorMessage: string | null
    ip: string | null
    userAgent: string | null
    policyMode: string | null
    createdAt: Date | null
  }

  export type ChatRequestCountAggregateOutputType = {
    id: number
    requestId: number
    apiKeyId: number
    model: number
    stream: number
    status: number
    durationMs: number
    grokSessionId: number
    promptCiphertext: number
    promptIv: number
    promptTag: number
    responseCiphertext: number
    responseIv: number
    responseTag: number
    errorMessage: number
    ip: number
    userAgent: number
    policyMode: number
    createdAt: number
    _all: number
  }


  export type ChatRequestAvgAggregateInputType = {
    durationMs?: true
  }

  export type ChatRequestSumAggregateInputType = {
    durationMs?: true
  }

  export type ChatRequestMinAggregateInputType = {
    id?: true
    requestId?: true
    apiKeyId?: true
    model?: true
    stream?: true
    status?: true
    durationMs?: true
    grokSessionId?: true
    promptCiphertext?: true
    promptIv?: true
    promptTag?: true
    responseCiphertext?: true
    responseIv?: true
    responseTag?: true
    errorMessage?: true
    ip?: true
    userAgent?: true
    policyMode?: true
    createdAt?: true
  }

  export type ChatRequestMaxAggregateInputType = {
    id?: true
    requestId?: true
    apiKeyId?: true
    model?: true
    stream?: true
    status?: true
    durationMs?: true
    grokSessionId?: true
    promptCiphertext?: true
    promptIv?: true
    promptTag?: true
    responseCiphertext?: true
    responseIv?: true
    responseTag?: true
    errorMessage?: true
    ip?: true
    userAgent?: true
    policyMode?: true
    createdAt?: true
  }

  export type ChatRequestCountAggregateInputType = {
    id?: true
    requestId?: true
    apiKeyId?: true
    model?: true
    stream?: true
    status?: true
    durationMs?: true
    grokSessionId?: true
    promptCiphertext?: true
    promptIv?: true
    promptTag?: true
    responseCiphertext?: true
    responseIv?: true
    responseTag?: true
    errorMessage?: true
    ip?: true
    userAgent?: true
    policyMode?: true
    createdAt?: true
    _all?: true
  }

  export type ChatRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRequest to aggregate.
     */
    where?: ChatRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRequests to fetch.
     */
    orderBy?: ChatRequestOrderByWithRelationInput | ChatRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRequests
    **/
    _count?: true | ChatRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRequestMaxAggregateInputType
  }

  export type GetChatRequestAggregateType<T extends ChatRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRequest[P]>
      : GetScalarType<T[P], AggregateChatRequest[P]>
  }




  export type ChatRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRequestWhereInput
    orderBy?: ChatRequestOrderByWithAggregationInput | ChatRequestOrderByWithAggregationInput[]
    by: ChatRequestScalarFieldEnum[] | ChatRequestScalarFieldEnum
    having?: ChatRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRequestCountAggregateInputType | true
    _avg?: ChatRequestAvgAggregateInputType
    _sum?: ChatRequestSumAggregateInputType
    _min?: ChatRequestMinAggregateInputType
    _max?: ChatRequestMaxAggregateInputType
  }

  export type ChatRequestGroupByOutputType = {
    id: string
    requestId: string
    apiKeyId: string
    model: string
    stream: boolean
    status: string
    durationMs: number | null
    grokSessionId: string | null
    promptCiphertext: Uint8Array
    promptIv: Uint8Array
    promptTag: Uint8Array
    responseCiphertext: Uint8Array | null
    responseIv: Uint8Array | null
    responseTag: Uint8Array | null
    errorMessage: string | null
    ip: string | null
    userAgent: string | null
    policyMode: string | null
    createdAt: Date
    _count: ChatRequestCountAggregateOutputType | null
    _avg: ChatRequestAvgAggregateOutputType | null
    _sum: ChatRequestSumAggregateOutputType | null
    _min: ChatRequestMinAggregateOutputType | null
    _max: ChatRequestMaxAggregateOutputType | null
  }

  type GetChatRequestGroupByPayload<T extends ChatRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRequestGroupByOutputType[P]>
        }
      >
    >


  export type ChatRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    apiKeyId?: boolean
    model?: boolean
    stream?: boolean
    status?: boolean
    durationMs?: boolean
    grokSessionId?: boolean
    promptCiphertext?: boolean
    promptIv?: boolean
    promptTag?: boolean
    responseCiphertext?: boolean
    responseIv?: boolean
    responseTag?: boolean
    errorMessage?: boolean
    ip?: boolean
    userAgent?: boolean
    policyMode?: boolean
    createdAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
    documents?: boolean | ChatRequest$documentsArgs<ExtArgs>
    _count?: boolean | ChatRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRequest"]>

  export type ChatRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    apiKeyId?: boolean
    model?: boolean
    stream?: boolean
    status?: boolean
    durationMs?: boolean
    grokSessionId?: boolean
    promptCiphertext?: boolean
    promptIv?: boolean
    promptTag?: boolean
    responseCiphertext?: boolean
    responseIv?: boolean
    responseTag?: boolean
    errorMessage?: boolean
    ip?: boolean
    userAgent?: boolean
    policyMode?: boolean
    createdAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRequest"]>

  export type ChatRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    apiKeyId?: boolean
    model?: boolean
    stream?: boolean
    status?: boolean
    durationMs?: boolean
    grokSessionId?: boolean
    promptCiphertext?: boolean
    promptIv?: boolean
    promptTag?: boolean
    responseCiphertext?: boolean
    responseIv?: boolean
    responseTag?: boolean
    errorMessage?: boolean
    ip?: boolean
    userAgent?: boolean
    policyMode?: boolean
    createdAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRequest"]>

  export type ChatRequestSelectScalar = {
    id?: boolean
    requestId?: boolean
    apiKeyId?: boolean
    model?: boolean
    stream?: boolean
    status?: boolean
    durationMs?: boolean
    grokSessionId?: boolean
    promptCiphertext?: boolean
    promptIv?: boolean
    promptTag?: boolean
    responseCiphertext?: boolean
    responseIv?: boolean
    responseTag?: boolean
    errorMessage?: boolean
    ip?: boolean
    userAgent?: boolean
    policyMode?: boolean
    createdAt?: boolean
  }

  export type ChatRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestId" | "apiKeyId" | "model" | "stream" | "status" | "durationMs" | "grokSessionId" | "promptCiphertext" | "promptIv" | "promptTag" | "responseCiphertext" | "responseIv" | "responseTag" | "errorMessage" | "ip" | "userAgent" | "policyMode" | "createdAt", ExtArgs["result"]["chatRequest"]>
  export type ChatRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
    documents?: boolean | ChatRequest$documentsArgs<ExtArgs>
    _count?: boolean | ChatRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type ChatRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }

  export type $ChatRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRequest"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs>
      documents: Prisma.$ChatRequestDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      apiKeyId: string
      model: string
      stream: boolean
      status: string
      durationMs: number | null
      grokSessionId: string | null
      promptCiphertext: Uint8Array
      promptIv: Uint8Array
      promptTag: Uint8Array
      responseCiphertext: Uint8Array | null
      responseIv: Uint8Array | null
      responseTag: Uint8Array | null
      errorMessage: string | null
      ip: string | null
      userAgent: string | null
      /**
       * resolved policy mode used for this request
       */
      policyMode: string | null
      createdAt: Date
    }, ExtArgs["result"]["chatRequest"]>
    composites: {}
  }

  type ChatRequestGetPayload<S extends boolean | null | undefined | ChatRequestDefaultArgs> = $Result.GetResult<Prisma.$ChatRequestPayload, S>

  type ChatRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRequestCountAggregateInputType | true
    }

  export interface ChatRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRequest'], meta: { name: 'ChatRequest' } }
    /**
     * Find zero or one ChatRequest that matches the filter.
     * @param {ChatRequestFindUniqueArgs} args - Arguments to find a ChatRequest
     * @example
     * // Get one ChatRequest
     * const chatRequest = await prisma.chatRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRequestFindUniqueArgs>(args: SelectSubset<T, ChatRequestFindUniqueArgs<ExtArgs>>): Prisma__ChatRequestClient<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRequestFindUniqueOrThrowArgs} args - Arguments to find a ChatRequest
     * @example
     * // Get one ChatRequest
     * const chatRequest = await prisma.chatRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRequestClient<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestFindFirstArgs} args - Arguments to find a ChatRequest
     * @example
     * // Get one ChatRequest
     * const chatRequest = await prisma.chatRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRequestFindFirstArgs>(args?: SelectSubset<T, ChatRequestFindFirstArgs<ExtArgs>>): Prisma__ChatRequestClient<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestFindFirstOrThrowArgs} args - Arguments to find a ChatRequest
     * @example
     * // Get one ChatRequest
     * const chatRequest = await prisma.chatRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRequestClient<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRequests
     * const chatRequests = await prisma.chatRequest.findMany()
     * 
     * // Get first 10 ChatRequests
     * const chatRequests = await prisma.chatRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRequestWithIdOnly = await prisma.chatRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRequestFindManyArgs>(args?: SelectSubset<T, ChatRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRequest.
     * @param {ChatRequestCreateArgs} args - Arguments to create a ChatRequest.
     * @example
     * // Create one ChatRequest
     * const ChatRequest = await prisma.chatRequest.create({
     *   data: {
     *     // ... data to create a ChatRequest
     *   }
     * })
     * 
     */
    create<T extends ChatRequestCreateArgs>(args: SelectSubset<T, ChatRequestCreateArgs<ExtArgs>>): Prisma__ChatRequestClient<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRequests.
     * @param {ChatRequestCreateManyArgs} args - Arguments to create many ChatRequests.
     * @example
     * // Create many ChatRequests
     * const chatRequest = await prisma.chatRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRequestCreateManyArgs>(args?: SelectSubset<T, ChatRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRequests and returns the data saved in the database.
     * @param {ChatRequestCreateManyAndReturnArgs} args - Arguments to create many ChatRequests.
     * @example
     * // Create many ChatRequests
     * const chatRequest = await prisma.chatRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRequests and only return the `id`
     * const chatRequestWithIdOnly = await prisma.chatRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRequest.
     * @param {ChatRequestDeleteArgs} args - Arguments to delete one ChatRequest.
     * @example
     * // Delete one ChatRequest
     * const ChatRequest = await prisma.chatRequest.delete({
     *   where: {
     *     // ... filter to delete one ChatRequest
     *   }
     * })
     * 
     */
    delete<T extends ChatRequestDeleteArgs>(args: SelectSubset<T, ChatRequestDeleteArgs<ExtArgs>>): Prisma__ChatRequestClient<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRequest.
     * @param {ChatRequestUpdateArgs} args - Arguments to update one ChatRequest.
     * @example
     * // Update one ChatRequest
     * const chatRequest = await prisma.chatRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRequestUpdateArgs>(args: SelectSubset<T, ChatRequestUpdateArgs<ExtArgs>>): Prisma__ChatRequestClient<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRequests.
     * @param {ChatRequestDeleteManyArgs} args - Arguments to filter ChatRequests to delete.
     * @example
     * // Delete a few ChatRequests
     * const { count } = await prisma.chatRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRequestDeleteManyArgs>(args?: SelectSubset<T, ChatRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRequests
     * const chatRequest = await prisma.chatRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRequestUpdateManyArgs>(args: SelectSubset<T, ChatRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRequests and returns the data updated in the database.
     * @param {ChatRequestUpdateManyAndReturnArgs} args - Arguments to update many ChatRequests.
     * @example
     * // Update many ChatRequests
     * const chatRequest = await prisma.chatRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRequests and only return the `id`
     * const chatRequestWithIdOnly = await prisma.chatRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRequest.
     * @param {ChatRequestUpsertArgs} args - Arguments to update or create a ChatRequest.
     * @example
     * // Update or create a ChatRequest
     * const chatRequest = await prisma.chatRequest.upsert({
     *   create: {
     *     // ... data to create a ChatRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRequest we want to update
     *   }
     * })
     */
    upsert<T extends ChatRequestUpsertArgs>(args: SelectSubset<T, ChatRequestUpsertArgs<ExtArgs>>): Prisma__ChatRequestClient<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestCountArgs} args - Arguments to filter ChatRequests to count.
     * @example
     * // Count the number of ChatRequests
     * const count = await prisma.chatRequest.count({
     *   where: {
     *     // ... the filter for the ChatRequests we want to count
     *   }
     * })
    **/
    count<T extends ChatRequestCountArgs>(
      args?: Subset<T, ChatRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRequestAggregateArgs>(args: Subset<T, ChatRequestAggregateArgs>): Prisma.PrismaPromise<GetChatRequestAggregateType<T>>

    /**
     * Group by ChatRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRequestGroupByArgs['orderBy'] }
        : { orderBy?: ChatRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRequest model
   */
  readonly fields: ChatRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends ChatRequest$documentsArgs<ExtArgs> = {}>(args?: Subset<T, ChatRequest$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRequest model
   */ 
  interface ChatRequestFieldRefs {
    readonly id: FieldRef<"ChatRequest", 'String'>
    readonly requestId: FieldRef<"ChatRequest", 'String'>
    readonly apiKeyId: FieldRef<"ChatRequest", 'String'>
    readonly model: FieldRef<"ChatRequest", 'String'>
    readonly stream: FieldRef<"ChatRequest", 'Boolean'>
    readonly status: FieldRef<"ChatRequest", 'String'>
    readonly durationMs: FieldRef<"ChatRequest", 'Int'>
    readonly grokSessionId: FieldRef<"ChatRequest", 'String'>
    readonly promptCiphertext: FieldRef<"ChatRequest", 'Bytes'>
    readonly promptIv: FieldRef<"ChatRequest", 'Bytes'>
    readonly promptTag: FieldRef<"ChatRequest", 'Bytes'>
    readonly responseCiphertext: FieldRef<"ChatRequest", 'Bytes'>
    readonly responseIv: FieldRef<"ChatRequest", 'Bytes'>
    readonly responseTag: FieldRef<"ChatRequest", 'Bytes'>
    readonly errorMessage: FieldRef<"ChatRequest", 'String'>
    readonly ip: FieldRef<"ChatRequest", 'String'>
    readonly userAgent: FieldRef<"ChatRequest", 'String'>
    readonly policyMode: FieldRef<"ChatRequest", 'String'>
    readonly createdAt: FieldRef<"ChatRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatRequest findUnique
   */
  export type ChatRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
    /**
     * Filter, which ChatRequest to fetch.
     */
    where: ChatRequestWhereUniqueInput
  }

  /**
   * ChatRequest findUniqueOrThrow
   */
  export type ChatRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
    /**
     * Filter, which ChatRequest to fetch.
     */
    where: ChatRequestWhereUniqueInput
  }

  /**
   * ChatRequest findFirst
   */
  export type ChatRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
    /**
     * Filter, which ChatRequest to fetch.
     */
    where?: ChatRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRequests to fetch.
     */
    orderBy?: ChatRequestOrderByWithRelationInput | ChatRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRequests.
     */
    cursor?: ChatRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRequests.
     */
    distinct?: ChatRequestScalarFieldEnum | ChatRequestScalarFieldEnum[]
  }

  /**
   * ChatRequest findFirstOrThrow
   */
  export type ChatRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
    /**
     * Filter, which ChatRequest to fetch.
     */
    where?: ChatRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRequests to fetch.
     */
    orderBy?: ChatRequestOrderByWithRelationInput | ChatRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRequests.
     */
    cursor?: ChatRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRequests.
     */
    distinct?: ChatRequestScalarFieldEnum | ChatRequestScalarFieldEnum[]
  }

  /**
   * ChatRequest findMany
   */
  export type ChatRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
    /**
     * Filter, which ChatRequests to fetch.
     */
    where?: ChatRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRequests to fetch.
     */
    orderBy?: ChatRequestOrderByWithRelationInput | ChatRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRequests.
     */
    cursor?: ChatRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRequests.
     */
    skip?: number
    distinct?: ChatRequestScalarFieldEnum | ChatRequestScalarFieldEnum[]
  }

  /**
   * ChatRequest create
   */
  export type ChatRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRequest.
     */
    data: XOR<ChatRequestCreateInput, ChatRequestUncheckedCreateInput>
  }

  /**
   * ChatRequest createMany
   */
  export type ChatRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRequests.
     */
    data: ChatRequestCreateManyInput | ChatRequestCreateManyInput[]
  }

  /**
   * ChatRequest createManyAndReturn
   */
  export type ChatRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRequests.
     */
    data: ChatRequestCreateManyInput | ChatRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRequest update
   */
  export type ChatRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRequest.
     */
    data: XOR<ChatRequestUpdateInput, ChatRequestUncheckedUpdateInput>
    /**
     * Choose, which ChatRequest to update.
     */
    where: ChatRequestWhereUniqueInput
  }

  /**
   * ChatRequest updateMany
   */
  export type ChatRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRequests.
     */
    data: XOR<ChatRequestUpdateManyMutationInput, ChatRequestUncheckedUpdateManyInput>
    /**
     * Filter which ChatRequests to update
     */
    where?: ChatRequestWhereInput
    /**
     * Limit how many ChatRequests to update.
     */
    limit?: number
  }

  /**
   * ChatRequest updateManyAndReturn
   */
  export type ChatRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * The data used to update ChatRequests.
     */
    data: XOR<ChatRequestUpdateManyMutationInput, ChatRequestUncheckedUpdateManyInput>
    /**
     * Filter which ChatRequests to update
     */
    where?: ChatRequestWhereInput
    /**
     * Limit how many ChatRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRequest upsert
   */
  export type ChatRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRequest to update in case it exists.
     */
    where: ChatRequestWhereUniqueInput
    /**
     * In case the ChatRequest found by the `where` argument doesn't exist, create a new ChatRequest with this data.
     */
    create: XOR<ChatRequestCreateInput, ChatRequestUncheckedCreateInput>
    /**
     * In case the ChatRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRequestUpdateInput, ChatRequestUncheckedUpdateInput>
  }

  /**
   * ChatRequest delete
   */
  export type ChatRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
    /**
     * Filter which ChatRequest to delete.
     */
    where: ChatRequestWhereUniqueInput
  }

  /**
   * ChatRequest deleteMany
   */
  export type ChatRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRequests to delete
     */
    where?: ChatRequestWhereInput
    /**
     * Limit how many ChatRequests to delete.
     */
    limit?: number
  }

  /**
   * ChatRequest.documents
   */
  export type ChatRequest$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    where?: ChatRequestDocumentWhereInput
    orderBy?: ChatRequestDocumentOrderByWithRelationInput | ChatRequestDocumentOrderByWithRelationInput[]
    cursor?: ChatRequestDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRequestDocumentScalarFieldEnum | ChatRequestDocumentScalarFieldEnum[]
  }

  /**
   * ChatRequest without action
   */
  export type ChatRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequest
     */
    select?: ChatRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequest
     */
    omit?: ChatRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    sizeBytes: number | null
  }

  export type DocumentSumAggregateOutputType = {
    sizeBytes: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    originalName: string | null
    mimeType: string | null
    sizeBytes: number | null
    storageType: string | null
    contentCiphertext: Uint8Array | null
    contentIv: Uint8Array | null
    contentTag: Uint8Array | null
    storagePath: string | null
    checksumSha256: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    originalName: string | null
    mimeType: string | null
    sizeBytes: number | null
    storageType: string | null
    contentCiphertext: Uint8Array | null
    contentIv: Uint8Array | null
    contentTag: Uint8Array | null
    storagePath: string | null
    checksumSha256: string | null
    createdAt: Date | null
    deletedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    apiKeyId: number
    originalName: number
    mimeType: number
    sizeBytes: number
    storageType: number
    contentCiphertext: number
    contentIv: number
    contentTag: number
    storagePath: number
    checksumSha256: number
    createdAt: number
    deletedAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    sizeBytes?: true
  }

  export type DocumentSumAggregateInputType = {
    sizeBytes?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    apiKeyId?: true
    originalName?: true
    mimeType?: true
    sizeBytes?: true
    storageType?: true
    contentCiphertext?: true
    contentIv?: true
    contentTag?: true
    storagePath?: true
    checksumSha256?: true
    createdAt?: true
    deletedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    apiKeyId?: true
    originalName?: true
    mimeType?: true
    sizeBytes?: true
    storageType?: true
    contentCiphertext?: true
    contentIv?: true
    contentTag?: true
    storagePath?: true
    checksumSha256?: true
    createdAt?: true
    deletedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    apiKeyId?: true
    originalName?: true
    mimeType?: true
    sizeBytes?: true
    storageType?: true
    contentCiphertext?: true
    contentIv?: true
    contentTag?: true
    storagePath?: true
    checksumSha256?: true
    createdAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    apiKeyId: string
    originalName: string
    mimeType: string
    sizeBytes: number
    storageType: string
    contentCiphertext: Uint8Array | null
    contentIv: Uint8Array | null
    contentTag: Uint8Array | null
    storagePath: string | null
    checksumSha256: string
    createdAt: Date
    deletedAt: Date | null
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    originalName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    storageType?: boolean
    contentCiphertext?: boolean
    contentIv?: boolean
    contentTag?: boolean
    storagePath?: boolean
    checksumSha256?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
    chatRequests?: boolean | Document$chatRequestsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    originalName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    storageType?: boolean
    contentCiphertext?: boolean
    contentIv?: boolean
    contentTag?: boolean
    storagePath?: boolean
    checksumSha256?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    originalName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    storageType?: boolean
    contentCiphertext?: boolean
    contentIv?: boolean
    contentTag?: boolean
    storagePath?: boolean
    checksumSha256?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    apiKeyId?: boolean
    originalName?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    storageType?: boolean
    contentCiphertext?: boolean
    contentIv?: boolean
    contentTag?: boolean
    storagePath?: boolean
    checksumSha256?: boolean
    createdAt?: boolean
    deletedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiKeyId" | "originalName" | "mimeType" | "sizeBytes" | "storageType" | "contentCiphertext" | "contentIv" | "contentTag" | "storagePath" | "checksumSha256" | "createdAt" | "deletedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
    chatRequests?: boolean | Document$chatRequestsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | ApiKeyDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs>
      chatRequests: Prisma.$ChatRequestDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiKeyId: string
      originalName: string
      mimeType: string
      sizeBytes: number
      storageType: string
      contentCiphertext: Uint8Array | null
      contentIv: Uint8Array | null
      contentTag: Uint8Array | null
      storagePath: string | null
      checksumSha256: string
      createdAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiKeyDefaultArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatRequests<T extends Document$chatRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Document$chatRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */ 
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly apiKeyId: FieldRef<"Document", 'String'>
    readonly originalName: FieldRef<"Document", 'String'>
    readonly mimeType: FieldRef<"Document", 'String'>
    readonly sizeBytes: FieldRef<"Document", 'Int'>
    readonly storageType: FieldRef<"Document", 'String'>
    readonly contentCiphertext: FieldRef<"Document", 'Bytes'>
    readonly contentIv: FieldRef<"Document", 'Bytes'>
    readonly contentTag: FieldRef<"Document", 'Bytes'>
    readonly storagePath: FieldRef<"Document", 'String'>
    readonly checksumSha256: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly deletedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.chatRequests
   */
  export type Document$chatRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    where?: ChatRequestDocumentWhereInput
    orderBy?: ChatRequestDocumentOrderByWithRelationInput | ChatRequestDocumentOrderByWithRelationInput[]
    cursor?: ChatRequestDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRequestDocumentScalarFieldEnum | ChatRequestDocumentScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model ChatRequestDocument
   */

  export type AggregateChatRequestDocument = {
    _count: ChatRequestDocumentCountAggregateOutputType | null
    _min: ChatRequestDocumentMinAggregateOutputType | null
    _max: ChatRequestDocumentMaxAggregateOutputType | null
  }

  export type ChatRequestDocumentMinAggregateOutputType = {
    chatRequestId: string | null
    documentId: string | null
  }

  export type ChatRequestDocumentMaxAggregateOutputType = {
    chatRequestId: string | null
    documentId: string | null
  }

  export type ChatRequestDocumentCountAggregateOutputType = {
    chatRequestId: number
    documentId: number
    _all: number
  }


  export type ChatRequestDocumentMinAggregateInputType = {
    chatRequestId?: true
    documentId?: true
  }

  export type ChatRequestDocumentMaxAggregateInputType = {
    chatRequestId?: true
    documentId?: true
  }

  export type ChatRequestDocumentCountAggregateInputType = {
    chatRequestId?: true
    documentId?: true
    _all?: true
  }

  export type ChatRequestDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRequestDocument to aggregate.
     */
    where?: ChatRequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRequestDocuments to fetch.
     */
    orderBy?: ChatRequestDocumentOrderByWithRelationInput | ChatRequestDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRequestDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRequestDocuments
    **/
    _count?: true | ChatRequestDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRequestDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRequestDocumentMaxAggregateInputType
  }

  export type GetChatRequestDocumentAggregateType<T extends ChatRequestDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRequestDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRequestDocument[P]>
      : GetScalarType<T[P], AggregateChatRequestDocument[P]>
  }




  export type ChatRequestDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRequestDocumentWhereInput
    orderBy?: ChatRequestDocumentOrderByWithAggregationInput | ChatRequestDocumentOrderByWithAggregationInput[]
    by: ChatRequestDocumentScalarFieldEnum[] | ChatRequestDocumentScalarFieldEnum
    having?: ChatRequestDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRequestDocumentCountAggregateInputType | true
    _min?: ChatRequestDocumentMinAggregateInputType
    _max?: ChatRequestDocumentMaxAggregateInputType
  }

  export type ChatRequestDocumentGroupByOutputType = {
    chatRequestId: string
    documentId: string
    _count: ChatRequestDocumentCountAggregateOutputType | null
    _min: ChatRequestDocumentMinAggregateOutputType | null
    _max: ChatRequestDocumentMaxAggregateOutputType | null
  }

  type GetChatRequestDocumentGroupByPayload<T extends ChatRequestDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRequestDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRequestDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRequestDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRequestDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ChatRequestDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatRequestId?: boolean
    documentId?: boolean
    chatRequest?: boolean | ChatRequestDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRequestDocument"]>

  export type ChatRequestDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatRequestId?: boolean
    documentId?: boolean
    chatRequest?: boolean | ChatRequestDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRequestDocument"]>

  export type ChatRequestDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatRequestId?: boolean
    documentId?: boolean
    chatRequest?: boolean | ChatRequestDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRequestDocument"]>

  export type ChatRequestDocumentSelectScalar = {
    chatRequestId?: boolean
    documentId?: boolean
  }

  export type ChatRequestDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chatRequestId" | "documentId", ExtArgs["result"]["chatRequestDocument"]>
  export type ChatRequestDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRequest?: boolean | ChatRequestDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type ChatRequestDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRequest?: boolean | ChatRequestDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type ChatRequestDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatRequest?: boolean | ChatRequestDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $ChatRequestDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRequestDocument"
    objects: {
      chatRequest: Prisma.$ChatRequestPayload<ExtArgs>
      document: Prisma.$DocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      chatRequestId: string
      documentId: string
    }, ExtArgs["result"]["chatRequestDocument"]>
    composites: {}
  }

  type ChatRequestDocumentGetPayload<S extends boolean | null | undefined | ChatRequestDocumentDefaultArgs> = $Result.GetResult<Prisma.$ChatRequestDocumentPayload, S>

  type ChatRequestDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRequestDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRequestDocumentCountAggregateInputType | true
    }

  export interface ChatRequestDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRequestDocument'], meta: { name: 'ChatRequestDocument' } }
    /**
     * Find zero or one ChatRequestDocument that matches the filter.
     * @param {ChatRequestDocumentFindUniqueArgs} args - Arguments to find a ChatRequestDocument
     * @example
     * // Get one ChatRequestDocument
     * const chatRequestDocument = await prisma.chatRequestDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRequestDocumentFindUniqueArgs>(args: SelectSubset<T, ChatRequestDocumentFindUniqueArgs<ExtArgs>>): Prisma__ChatRequestDocumentClient<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRequestDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRequestDocumentFindUniqueOrThrowArgs} args - Arguments to find a ChatRequestDocument
     * @example
     * // Get one ChatRequestDocument
     * const chatRequestDocument = await prisma.chatRequestDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRequestDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRequestDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRequestDocumentClient<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRequestDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestDocumentFindFirstArgs} args - Arguments to find a ChatRequestDocument
     * @example
     * // Get one ChatRequestDocument
     * const chatRequestDocument = await prisma.chatRequestDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRequestDocumentFindFirstArgs>(args?: SelectSubset<T, ChatRequestDocumentFindFirstArgs<ExtArgs>>): Prisma__ChatRequestDocumentClient<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRequestDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestDocumentFindFirstOrThrowArgs} args - Arguments to find a ChatRequestDocument
     * @example
     * // Get one ChatRequestDocument
     * const chatRequestDocument = await prisma.chatRequestDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRequestDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRequestDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRequestDocumentClient<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRequestDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRequestDocuments
     * const chatRequestDocuments = await prisma.chatRequestDocument.findMany()
     * 
     * // Get first 10 ChatRequestDocuments
     * const chatRequestDocuments = await prisma.chatRequestDocument.findMany({ take: 10 })
     * 
     * // Only select the `chatRequestId`
     * const chatRequestDocumentWithChatRequestIdOnly = await prisma.chatRequestDocument.findMany({ select: { chatRequestId: true } })
     * 
     */
    findMany<T extends ChatRequestDocumentFindManyArgs>(args?: SelectSubset<T, ChatRequestDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRequestDocument.
     * @param {ChatRequestDocumentCreateArgs} args - Arguments to create a ChatRequestDocument.
     * @example
     * // Create one ChatRequestDocument
     * const ChatRequestDocument = await prisma.chatRequestDocument.create({
     *   data: {
     *     // ... data to create a ChatRequestDocument
     *   }
     * })
     * 
     */
    create<T extends ChatRequestDocumentCreateArgs>(args: SelectSubset<T, ChatRequestDocumentCreateArgs<ExtArgs>>): Prisma__ChatRequestDocumentClient<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRequestDocuments.
     * @param {ChatRequestDocumentCreateManyArgs} args - Arguments to create many ChatRequestDocuments.
     * @example
     * // Create many ChatRequestDocuments
     * const chatRequestDocument = await prisma.chatRequestDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRequestDocumentCreateManyArgs>(args?: SelectSubset<T, ChatRequestDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRequestDocuments and returns the data saved in the database.
     * @param {ChatRequestDocumentCreateManyAndReturnArgs} args - Arguments to create many ChatRequestDocuments.
     * @example
     * // Create many ChatRequestDocuments
     * const chatRequestDocument = await prisma.chatRequestDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRequestDocuments and only return the `chatRequestId`
     * const chatRequestDocumentWithChatRequestIdOnly = await prisma.chatRequestDocument.createManyAndReturn({
     *   select: { chatRequestId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRequestDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRequestDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRequestDocument.
     * @param {ChatRequestDocumentDeleteArgs} args - Arguments to delete one ChatRequestDocument.
     * @example
     * // Delete one ChatRequestDocument
     * const ChatRequestDocument = await prisma.chatRequestDocument.delete({
     *   where: {
     *     // ... filter to delete one ChatRequestDocument
     *   }
     * })
     * 
     */
    delete<T extends ChatRequestDocumentDeleteArgs>(args: SelectSubset<T, ChatRequestDocumentDeleteArgs<ExtArgs>>): Prisma__ChatRequestDocumentClient<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRequestDocument.
     * @param {ChatRequestDocumentUpdateArgs} args - Arguments to update one ChatRequestDocument.
     * @example
     * // Update one ChatRequestDocument
     * const chatRequestDocument = await prisma.chatRequestDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRequestDocumentUpdateArgs>(args: SelectSubset<T, ChatRequestDocumentUpdateArgs<ExtArgs>>): Prisma__ChatRequestDocumentClient<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRequestDocuments.
     * @param {ChatRequestDocumentDeleteManyArgs} args - Arguments to filter ChatRequestDocuments to delete.
     * @example
     * // Delete a few ChatRequestDocuments
     * const { count } = await prisma.chatRequestDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRequestDocumentDeleteManyArgs>(args?: SelectSubset<T, ChatRequestDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRequestDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRequestDocuments
     * const chatRequestDocument = await prisma.chatRequestDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRequestDocumentUpdateManyArgs>(args: SelectSubset<T, ChatRequestDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRequestDocuments and returns the data updated in the database.
     * @param {ChatRequestDocumentUpdateManyAndReturnArgs} args - Arguments to update many ChatRequestDocuments.
     * @example
     * // Update many ChatRequestDocuments
     * const chatRequestDocument = await prisma.chatRequestDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRequestDocuments and only return the `chatRequestId`
     * const chatRequestDocumentWithChatRequestIdOnly = await prisma.chatRequestDocument.updateManyAndReturn({
     *   select: { chatRequestId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatRequestDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRequestDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRequestDocument.
     * @param {ChatRequestDocumentUpsertArgs} args - Arguments to update or create a ChatRequestDocument.
     * @example
     * // Update or create a ChatRequestDocument
     * const chatRequestDocument = await prisma.chatRequestDocument.upsert({
     *   create: {
     *     // ... data to create a ChatRequestDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRequestDocument we want to update
     *   }
     * })
     */
    upsert<T extends ChatRequestDocumentUpsertArgs>(args: SelectSubset<T, ChatRequestDocumentUpsertArgs<ExtArgs>>): Prisma__ChatRequestDocumentClient<$Result.GetResult<Prisma.$ChatRequestDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRequestDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestDocumentCountArgs} args - Arguments to filter ChatRequestDocuments to count.
     * @example
     * // Count the number of ChatRequestDocuments
     * const count = await prisma.chatRequestDocument.count({
     *   where: {
     *     // ... the filter for the ChatRequestDocuments we want to count
     *   }
     * })
    **/
    count<T extends ChatRequestDocumentCountArgs>(
      args?: Subset<T, ChatRequestDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRequestDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRequestDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRequestDocumentAggregateArgs>(args: Subset<T, ChatRequestDocumentAggregateArgs>): Prisma.PrismaPromise<GetChatRequestDocumentAggregateType<T>>

    /**
     * Group by ChatRequestDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRequestDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRequestDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRequestDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ChatRequestDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRequestDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRequestDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRequestDocument model
   */
  readonly fields: ChatRequestDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRequestDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRequestDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatRequest<T extends ChatRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRequestDefaultArgs<ExtArgs>>): Prisma__ChatRequestClient<$Result.GetResult<Prisma.$ChatRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRequestDocument model
   */ 
  interface ChatRequestDocumentFieldRefs {
    readonly chatRequestId: FieldRef<"ChatRequestDocument", 'String'>
    readonly documentId: FieldRef<"ChatRequestDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatRequestDocument findUnique
   */
  export type ChatRequestDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ChatRequestDocument to fetch.
     */
    where: ChatRequestDocumentWhereUniqueInput
  }

  /**
   * ChatRequestDocument findUniqueOrThrow
   */
  export type ChatRequestDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ChatRequestDocument to fetch.
     */
    where: ChatRequestDocumentWhereUniqueInput
  }

  /**
   * ChatRequestDocument findFirst
   */
  export type ChatRequestDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ChatRequestDocument to fetch.
     */
    where?: ChatRequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRequestDocuments to fetch.
     */
    orderBy?: ChatRequestDocumentOrderByWithRelationInput | ChatRequestDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRequestDocuments.
     */
    cursor?: ChatRequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRequestDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRequestDocuments.
     */
    distinct?: ChatRequestDocumentScalarFieldEnum | ChatRequestDocumentScalarFieldEnum[]
  }

  /**
   * ChatRequestDocument findFirstOrThrow
   */
  export type ChatRequestDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ChatRequestDocument to fetch.
     */
    where?: ChatRequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRequestDocuments to fetch.
     */
    orderBy?: ChatRequestDocumentOrderByWithRelationInput | ChatRequestDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRequestDocuments.
     */
    cursor?: ChatRequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRequestDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRequestDocuments.
     */
    distinct?: ChatRequestDocumentScalarFieldEnum | ChatRequestDocumentScalarFieldEnum[]
  }

  /**
   * ChatRequestDocument findMany
   */
  export type ChatRequestDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ChatRequestDocuments to fetch.
     */
    where?: ChatRequestDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRequestDocuments to fetch.
     */
    orderBy?: ChatRequestDocumentOrderByWithRelationInput | ChatRequestDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRequestDocuments.
     */
    cursor?: ChatRequestDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRequestDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRequestDocuments.
     */
    skip?: number
    distinct?: ChatRequestDocumentScalarFieldEnum | ChatRequestDocumentScalarFieldEnum[]
  }

  /**
   * ChatRequestDocument create
   */
  export type ChatRequestDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRequestDocument.
     */
    data: XOR<ChatRequestDocumentCreateInput, ChatRequestDocumentUncheckedCreateInput>
  }

  /**
   * ChatRequestDocument createMany
   */
  export type ChatRequestDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRequestDocuments.
     */
    data: ChatRequestDocumentCreateManyInput | ChatRequestDocumentCreateManyInput[]
  }

  /**
   * ChatRequestDocument createManyAndReturn
   */
  export type ChatRequestDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRequestDocuments.
     */
    data: ChatRequestDocumentCreateManyInput | ChatRequestDocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRequestDocument update
   */
  export type ChatRequestDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRequestDocument.
     */
    data: XOR<ChatRequestDocumentUpdateInput, ChatRequestDocumentUncheckedUpdateInput>
    /**
     * Choose, which ChatRequestDocument to update.
     */
    where: ChatRequestDocumentWhereUniqueInput
  }

  /**
   * ChatRequestDocument updateMany
   */
  export type ChatRequestDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRequestDocuments.
     */
    data: XOR<ChatRequestDocumentUpdateManyMutationInput, ChatRequestDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ChatRequestDocuments to update
     */
    where?: ChatRequestDocumentWhereInput
    /**
     * Limit how many ChatRequestDocuments to update.
     */
    limit?: number
  }

  /**
   * ChatRequestDocument updateManyAndReturn
   */
  export type ChatRequestDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * The data used to update ChatRequestDocuments.
     */
    data: XOR<ChatRequestDocumentUpdateManyMutationInput, ChatRequestDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ChatRequestDocuments to update
     */
    where?: ChatRequestDocumentWhereInput
    /**
     * Limit how many ChatRequestDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRequestDocument upsert
   */
  export type ChatRequestDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRequestDocument to update in case it exists.
     */
    where: ChatRequestDocumentWhereUniqueInput
    /**
     * In case the ChatRequestDocument found by the `where` argument doesn't exist, create a new ChatRequestDocument with this data.
     */
    create: XOR<ChatRequestDocumentCreateInput, ChatRequestDocumentUncheckedCreateInput>
    /**
     * In case the ChatRequestDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRequestDocumentUpdateInput, ChatRequestDocumentUncheckedUpdateInput>
  }

  /**
   * ChatRequestDocument delete
   */
  export type ChatRequestDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
    /**
     * Filter which ChatRequestDocument to delete.
     */
    where: ChatRequestDocumentWhereUniqueInput
  }

  /**
   * ChatRequestDocument deleteMany
   */
  export type ChatRequestDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRequestDocuments to delete
     */
    where?: ChatRequestDocumentWhereInput
    /**
     * Limit how many ChatRequestDocuments to delete.
     */
    limit?: number
  }

  /**
   * ChatRequestDocument without action
   */
  export type ChatRequestDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRequestDocument
     */
    select?: ChatRequestDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRequestDocument
     */
    omit?: ChatRequestDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRequestDocumentInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    metaJson: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    apiKeyId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    metaJson: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    apiKeyId: number
    action: number
    resource: number
    resourceId: number
    metaJson: number
    ip: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    apiKeyId?: true
    action?: true
    resource?: true
    resourceId?: true
    metaJson?: true
    ip?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    apiKeyId?: true
    action?: true
    resource?: true
    resourceId?: true
    metaJson?: true
    ip?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    apiKeyId?: true
    action?: true
    resource?: true
    resourceId?: true
    metaJson?: true
    ip?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    apiKeyId: string | null
    action: string
    resource: string | null
    resourceId: string | null
    metaJson: string | null
    ip: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    metaJson?: boolean
    ip?: boolean
    createdAt?: boolean
    apiKey?: boolean | AuditLog$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    metaJson?: boolean
    ip?: boolean
    createdAt?: boolean
    apiKey?: boolean | AuditLog$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiKeyId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    metaJson?: boolean
    ip?: boolean
    createdAt?: boolean
    apiKey?: boolean | AuditLog$apiKeyArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    apiKeyId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    metaJson?: boolean
    ip?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiKeyId" | "action" | "resource" | "resourceId" | "metaJson" | "ip" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | AuditLog$apiKeyArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | AuditLog$apiKeyArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKey?: boolean | AuditLog$apiKeyArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      apiKey: Prisma.$ApiKeyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiKeyId: string | null
      action: string
      resource: string | null
      resourceId: string | null
      metaJson: string | null
      ip: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKey<T extends AuditLog$apiKeyArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$apiKeyArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly apiKeyId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly resource: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly metaJson: FieldRef<"AuditLog", 'String'>
    readonly ip: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.apiKey
   */
  export type AuditLog$apiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
    updatedAt: Date | null
  }

  export type SettingCountAggregateOutputType = {
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingMaxAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
  }

  export type SettingCountAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    key: string
    value: string
    updatedAt: Date
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "updatedAt", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      updatedAt: Date
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const settingWithKeyOnly = await prisma.setting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */ 
  interface SettingFieldRefs {
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    keyPrefix: 'keyPrefix',
    keyHash: 'keyHash',
    role: 'role',
    mode: 'mode',
    isActive: 'isActive',
    rateLimit: 'rateLimit',
    maxTurns: 'maxTurns',
    timeoutMs: 'timeoutMs',
    createdAt: 'createdAt',
    lastUsedAt: 'lastUsedAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const ChatRequestScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    apiKeyId: 'apiKeyId',
    model: 'model',
    stream: 'stream',
    status: 'status',
    durationMs: 'durationMs',
    grokSessionId: 'grokSessionId',
    promptCiphertext: 'promptCiphertext',
    promptIv: 'promptIv',
    promptTag: 'promptTag',
    responseCiphertext: 'responseCiphertext',
    responseIv: 'responseIv',
    responseTag: 'responseTag',
    errorMessage: 'errorMessage',
    ip: 'ip',
    userAgent: 'userAgent',
    policyMode: 'policyMode',
    createdAt: 'createdAt'
  };

  export type ChatRequestScalarFieldEnum = (typeof ChatRequestScalarFieldEnum)[keyof typeof ChatRequestScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    apiKeyId: 'apiKeyId',
    originalName: 'originalName',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    storageType: 'storageType',
    contentCiphertext: 'contentCiphertext',
    contentIv: 'contentIv',
    contentTag: 'contentTag',
    storagePath: 'storagePath',
    checksumSha256: 'checksumSha256',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const ChatRequestDocumentScalarFieldEnum: {
    chatRequestId: 'chatRequestId',
    documentId: 'documentId'
  };

  export type ChatRequestDocumentScalarFieldEnum = (typeof ChatRequestDocumentScalarFieldEnum)[keyof typeof ChatRequestDocumentScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    apiKeyId: 'apiKeyId',
    action: 'action',
    resource: 'resource',
    resourceId: 'resourceId',
    metaJson: 'metaJson',
    ip: 'ip',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    role?: StringFilter<"ApiKey"> | string
    mode?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    rateLimit?: IntFilter<"ApiKey"> | number
    maxTurns?: IntNullableFilter<"ApiKey"> | number | null
    timeoutMs?: IntNullableFilter<"ApiKey"> | number | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    chatRequests?: ChatRequestListRelationFilter
    documents?: DocumentListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    keyHash?: SortOrder
    role?: SortOrder
    mode?: SortOrder
    isActive?: SortOrder
    rateLimit?: SortOrder
    maxTurns?: SortOrderInput | SortOrder
    timeoutMs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    chatRequests?: ChatRequestOrderByRelationAggregateInput
    documents?: DocumentOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyHash?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    name?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    role?: StringFilter<"ApiKey"> | string
    mode?: StringFilter<"ApiKey"> | string
    isActive?: BoolFilter<"ApiKey"> | boolean
    rateLimit?: IntFilter<"ApiKey"> | number
    maxTurns?: IntNullableFilter<"ApiKey"> | number | null
    timeoutMs?: IntNullableFilter<"ApiKey"> | number | null
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    chatRequests?: ChatRequestListRelationFilter
    documents?: DocumentListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "keyHash">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    keyHash?: SortOrder
    role?: SortOrder
    mode?: SortOrder
    isActive?: SortOrder
    rateLimit?: SortOrder
    maxTurns?: SortOrderInput | SortOrder
    timeoutMs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _avg?: ApiKeyAvgOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
    _sum?: ApiKeySumOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    keyPrefix?: StringWithAggregatesFilter<"ApiKey"> | string
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    role?: StringWithAggregatesFilter<"ApiKey"> | string
    mode?: StringWithAggregatesFilter<"ApiKey"> | string
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    rateLimit?: IntWithAggregatesFilter<"ApiKey"> | number
    maxTurns?: IntNullableWithAggregatesFilter<"ApiKey"> | number | null
    timeoutMs?: IntNullableWithAggregatesFilter<"ApiKey"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
  }

  export type ChatRequestWhereInput = {
    AND?: ChatRequestWhereInput | ChatRequestWhereInput[]
    OR?: ChatRequestWhereInput[]
    NOT?: ChatRequestWhereInput | ChatRequestWhereInput[]
    id?: StringFilter<"ChatRequest"> | string
    requestId?: StringFilter<"ChatRequest"> | string
    apiKeyId?: StringFilter<"ChatRequest"> | string
    model?: StringFilter<"ChatRequest"> | string
    stream?: BoolFilter<"ChatRequest"> | boolean
    status?: StringFilter<"ChatRequest"> | string
    durationMs?: IntNullableFilter<"ChatRequest"> | number | null
    grokSessionId?: StringNullableFilter<"ChatRequest"> | string | null
    promptCiphertext?: BytesFilter<"ChatRequest"> | Uint8Array
    promptIv?: BytesFilter<"ChatRequest"> | Uint8Array
    promptTag?: BytesFilter<"ChatRequest"> | Uint8Array
    responseCiphertext?: BytesNullableFilter<"ChatRequest"> | Uint8Array | null
    responseIv?: BytesNullableFilter<"ChatRequest"> | Uint8Array | null
    responseTag?: BytesNullableFilter<"ChatRequest"> | Uint8Array | null
    errorMessage?: StringNullableFilter<"ChatRequest"> | string | null
    ip?: StringNullableFilter<"ChatRequest"> | string | null
    userAgent?: StringNullableFilter<"ChatRequest"> | string | null
    policyMode?: StringNullableFilter<"ChatRequest"> | string | null
    createdAt?: DateTimeFilter<"ChatRequest"> | Date | string
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
    documents?: ChatRequestDocumentListRelationFilter
  }

  export type ChatRequestOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    apiKeyId?: SortOrder
    model?: SortOrder
    stream?: SortOrder
    status?: SortOrder
    durationMs?: SortOrderInput | SortOrder
    grokSessionId?: SortOrderInput | SortOrder
    promptCiphertext?: SortOrder
    promptIv?: SortOrder
    promptTag?: SortOrder
    responseCiphertext?: SortOrderInput | SortOrder
    responseIv?: SortOrderInput | SortOrder
    responseTag?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    policyMode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    apiKey?: ApiKeyOrderByWithRelationInput
    documents?: ChatRequestDocumentOrderByRelationAggregateInput
  }

  export type ChatRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    requestId?: string
    AND?: ChatRequestWhereInput | ChatRequestWhereInput[]
    OR?: ChatRequestWhereInput[]
    NOT?: ChatRequestWhereInput | ChatRequestWhereInput[]
    apiKeyId?: StringFilter<"ChatRequest"> | string
    model?: StringFilter<"ChatRequest"> | string
    stream?: BoolFilter<"ChatRequest"> | boolean
    status?: StringFilter<"ChatRequest"> | string
    durationMs?: IntNullableFilter<"ChatRequest"> | number | null
    grokSessionId?: StringNullableFilter<"ChatRequest"> | string | null
    promptCiphertext?: BytesFilter<"ChatRequest"> | Uint8Array
    promptIv?: BytesFilter<"ChatRequest"> | Uint8Array
    promptTag?: BytesFilter<"ChatRequest"> | Uint8Array
    responseCiphertext?: BytesNullableFilter<"ChatRequest"> | Uint8Array | null
    responseIv?: BytesNullableFilter<"ChatRequest"> | Uint8Array | null
    responseTag?: BytesNullableFilter<"ChatRequest"> | Uint8Array | null
    errorMessage?: StringNullableFilter<"ChatRequest"> | string | null
    ip?: StringNullableFilter<"ChatRequest"> | string | null
    userAgent?: StringNullableFilter<"ChatRequest"> | string | null
    policyMode?: StringNullableFilter<"ChatRequest"> | string | null
    createdAt?: DateTimeFilter<"ChatRequest"> | Date | string
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
    documents?: ChatRequestDocumentListRelationFilter
  }, "id" | "requestId">

  export type ChatRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    apiKeyId?: SortOrder
    model?: SortOrder
    stream?: SortOrder
    status?: SortOrder
    durationMs?: SortOrderInput | SortOrder
    grokSessionId?: SortOrderInput | SortOrder
    promptCiphertext?: SortOrder
    promptIv?: SortOrder
    promptTag?: SortOrder
    responseCiphertext?: SortOrderInput | SortOrder
    responseIv?: SortOrderInput | SortOrder
    responseTag?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    policyMode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ChatRequestCountOrderByAggregateInput
    _avg?: ChatRequestAvgOrderByAggregateInput
    _max?: ChatRequestMaxOrderByAggregateInput
    _min?: ChatRequestMinOrderByAggregateInput
    _sum?: ChatRequestSumOrderByAggregateInput
  }

  export type ChatRequestScalarWhereWithAggregatesInput = {
    AND?: ChatRequestScalarWhereWithAggregatesInput | ChatRequestScalarWhereWithAggregatesInput[]
    OR?: ChatRequestScalarWhereWithAggregatesInput[]
    NOT?: ChatRequestScalarWhereWithAggregatesInput | ChatRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatRequest"> | string
    requestId?: StringWithAggregatesFilter<"ChatRequest"> | string
    apiKeyId?: StringWithAggregatesFilter<"ChatRequest"> | string
    model?: StringWithAggregatesFilter<"ChatRequest"> | string
    stream?: BoolWithAggregatesFilter<"ChatRequest"> | boolean
    status?: StringWithAggregatesFilter<"ChatRequest"> | string
    durationMs?: IntNullableWithAggregatesFilter<"ChatRequest"> | number | null
    grokSessionId?: StringNullableWithAggregatesFilter<"ChatRequest"> | string | null
    promptCiphertext?: BytesWithAggregatesFilter<"ChatRequest"> | Uint8Array
    promptIv?: BytesWithAggregatesFilter<"ChatRequest"> | Uint8Array
    promptTag?: BytesWithAggregatesFilter<"ChatRequest"> | Uint8Array
    responseCiphertext?: BytesNullableWithAggregatesFilter<"ChatRequest"> | Uint8Array | null
    responseIv?: BytesNullableWithAggregatesFilter<"ChatRequest"> | Uint8Array | null
    responseTag?: BytesNullableWithAggregatesFilter<"ChatRequest"> | Uint8Array | null
    errorMessage?: StringNullableWithAggregatesFilter<"ChatRequest"> | string | null
    ip?: StringNullableWithAggregatesFilter<"ChatRequest"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ChatRequest"> | string | null
    policyMode?: StringNullableWithAggregatesFilter<"ChatRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatRequest"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    apiKeyId?: StringFilter<"Document"> | string
    originalName?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    sizeBytes?: IntFilter<"Document"> | number
    storageType?: StringFilter<"Document"> | string
    contentCiphertext?: BytesNullableFilter<"Document"> | Uint8Array | null
    contentIv?: BytesNullableFilter<"Document"> | Uint8Array | null
    contentTag?: BytesNullableFilter<"Document"> | Uint8Array | null
    storagePath?: StringNullableFilter<"Document"> | string | null
    checksumSha256?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
    chatRequests?: ChatRequestDocumentListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    storageType?: SortOrder
    contentCiphertext?: SortOrderInput | SortOrder
    contentIv?: SortOrderInput | SortOrder
    contentTag?: SortOrderInput | SortOrder
    storagePath?: SortOrderInput | SortOrder
    checksumSha256?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    apiKey?: ApiKeyOrderByWithRelationInput
    chatRequests?: ChatRequestDocumentOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    apiKeyId?: StringFilter<"Document"> | string
    originalName?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    sizeBytes?: IntFilter<"Document"> | number
    storageType?: StringFilter<"Document"> | string
    contentCiphertext?: BytesNullableFilter<"Document"> | Uint8Array | null
    contentIv?: BytesNullableFilter<"Document"> | Uint8Array | null
    contentTag?: BytesNullableFilter<"Document"> | Uint8Array | null
    storagePath?: StringNullableFilter<"Document"> | string | null
    checksumSha256?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
    apiKey?: XOR<ApiKeyScalarRelationFilter, ApiKeyWhereInput>
    chatRequests?: ChatRequestDocumentListRelationFilter
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    storageType?: SortOrder
    contentCiphertext?: SortOrderInput | SortOrder
    contentIv?: SortOrderInput | SortOrder
    contentTag?: SortOrderInput | SortOrder
    storagePath?: SortOrderInput | SortOrder
    checksumSha256?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    apiKeyId?: StringWithAggregatesFilter<"Document"> | string
    originalName?: StringWithAggregatesFilter<"Document"> | string
    mimeType?: StringWithAggregatesFilter<"Document"> | string
    sizeBytes?: IntWithAggregatesFilter<"Document"> | number
    storageType?: StringWithAggregatesFilter<"Document"> | string
    contentCiphertext?: BytesNullableWithAggregatesFilter<"Document"> | Uint8Array | null
    contentIv?: BytesNullableWithAggregatesFilter<"Document"> | Uint8Array | null
    contentTag?: BytesNullableWithAggregatesFilter<"Document"> | Uint8Array | null
    storagePath?: StringNullableWithAggregatesFilter<"Document"> | string | null
    checksumSha256?: StringWithAggregatesFilter<"Document"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Document"> | Date | string | null
  }

  export type ChatRequestDocumentWhereInput = {
    AND?: ChatRequestDocumentWhereInput | ChatRequestDocumentWhereInput[]
    OR?: ChatRequestDocumentWhereInput[]
    NOT?: ChatRequestDocumentWhereInput | ChatRequestDocumentWhereInput[]
    chatRequestId?: StringFilter<"ChatRequestDocument"> | string
    documentId?: StringFilter<"ChatRequestDocument"> | string
    chatRequest?: XOR<ChatRequestScalarRelationFilter, ChatRequestWhereInput>
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }

  export type ChatRequestDocumentOrderByWithRelationInput = {
    chatRequestId?: SortOrder
    documentId?: SortOrder
    chatRequest?: ChatRequestOrderByWithRelationInput
    document?: DocumentOrderByWithRelationInput
  }

  export type ChatRequestDocumentWhereUniqueInput = Prisma.AtLeast<{
    chatRequestId_documentId?: ChatRequestDocumentChatRequestIdDocumentIdCompoundUniqueInput
    AND?: ChatRequestDocumentWhereInput | ChatRequestDocumentWhereInput[]
    OR?: ChatRequestDocumentWhereInput[]
    NOT?: ChatRequestDocumentWhereInput | ChatRequestDocumentWhereInput[]
    chatRequestId?: StringFilter<"ChatRequestDocument"> | string
    documentId?: StringFilter<"ChatRequestDocument"> | string
    chatRequest?: XOR<ChatRequestScalarRelationFilter, ChatRequestWhereInput>
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }, "chatRequestId_documentId">

  export type ChatRequestDocumentOrderByWithAggregationInput = {
    chatRequestId?: SortOrder
    documentId?: SortOrder
    _count?: ChatRequestDocumentCountOrderByAggregateInput
    _max?: ChatRequestDocumentMaxOrderByAggregateInput
    _min?: ChatRequestDocumentMinOrderByAggregateInput
  }

  export type ChatRequestDocumentScalarWhereWithAggregatesInput = {
    AND?: ChatRequestDocumentScalarWhereWithAggregatesInput | ChatRequestDocumentScalarWhereWithAggregatesInput[]
    OR?: ChatRequestDocumentScalarWhereWithAggregatesInput[]
    NOT?: ChatRequestDocumentScalarWhereWithAggregatesInput | ChatRequestDocumentScalarWhereWithAggregatesInput[]
    chatRequestId?: StringWithAggregatesFilter<"ChatRequestDocument"> | string
    documentId?: StringWithAggregatesFilter<"ChatRequestDocument"> | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    apiKeyId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resource?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metaJson?: StringNullableFilter<"AuditLog"> | string | null
    ip?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    metaJson?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    apiKey?: ApiKeyOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    apiKeyId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resource?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metaJson?: StringNullableFilter<"AuditLog"> | string | null
    ip?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    apiKey?: XOR<ApiKeyNullableScalarRelationFilter, ApiKeyWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    apiKeyId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrderInput | SortOrder
    resourceId?: SortOrderInput | SortOrder
    metaJson?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    apiKeyId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    resource?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metaJson?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ip?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }

  export type SettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
  }, "key">

  export type SettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    role?: string
    mode?: string
    isActive?: boolean
    rateLimit?: number
    maxTurns?: number | null
    timeoutMs?: number | null
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    chatRequests?: ChatRequestCreateNestedManyWithoutApiKeyInput
    documents?: DocumentCreateNestedManyWithoutApiKeyInput
    auditLogs?: AuditLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    role?: string
    mode?: string
    isActive?: boolean
    rateLimit?: number
    maxTurns?: number | null
    timeoutMs?: number | null
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    chatRequests?: ChatRequestUncheckedCreateNestedManyWithoutApiKeyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutApiKeyInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    maxTurns?: NullableIntFieldUpdateOperationsInput | number | null
    timeoutMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRequests?: ChatRequestUpdateManyWithoutApiKeyNestedInput
    documents?: DocumentUpdateManyWithoutApiKeyNestedInput
    auditLogs?: AuditLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    maxTurns?: NullableIntFieldUpdateOperationsInput | number | null
    timeoutMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRequests?: ChatRequestUncheckedUpdateManyWithoutApiKeyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutApiKeyNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    role?: string
    mode?: string
    isActive?: boolean
    rateLimit?: number
    maxTurns?: number | null
    timeoutMs?: number | null
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    maxTurns?: NullableIntFieldUpdateOperationsInput | number | null
    timeoutMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    maxTurns?: NullableIntFieldUpdateOperationsInput | number | null
    timeoutMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRequestCreateInput = {
    id?: string
    requestId: string
    model: string
    stream?: boolean
    status: string
    durationMs?: number | null
    grokSessionId?: string | null
    promptCiphertext: Uint8Array
    promptIv: Uint8Array
    promptTag: Uint8Array
    responseCiphertext?: Uint8Array | null
    responseIv?: Uint8Array | null
    responseTag?: Uint8Array | null
    errorMessage?: string | null
    ip?: string | null
    userAgent?: string | null
    policyMode?: string | null
    createdAt?: Date | string
    apiKey: ApiKeyCreateNestedOneWithoutChatRequestsInput
    documents?: ChatRequestDocumentCreateNestedManyWithoutChatRequestInput
  }

  export type ChatRequestUncheckedCreateInput = {
    id?: string
    requestId: string
    apiKeyId: string
    model: string
    stream?: boolean
    status: string
    durationMs?: number | null
    grokSessionId?: string | null
    promptCiphertext: Uint8Array
    promptIv: Uint8Array
    promptTag: Uint8Array
    responseCiphertext?: Uint8Array | null
    responseIv?: Uint8Array | null
    responseTag?: Uint8Array | null
    errorMessage?: string | null
    ip?: string | null
    userAgent?: string | null
    policyMode?: string | null
    createdAt?: Date | string
    documents?: ChatRequestDocumentUncheckedCreateNestedManyWithoutChatRequestInput
  }

  export type ChatRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    stream?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    grokSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    promptCiphertext?: BytesFieldUpdateOperationsInput | Uint8Array
    promptIv?: BytesFieldUpdateOperationsInput | Uint8Array
    promptTag?: BytesFieldUpdateOperationsInput | Uint8Array
    responseCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    policyMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUpdateOneRequiredWithoutChatRequestsNestedInput
    documents?: ChatRequestDocumentUpdateManyWithoutChatRequestNestedInput
  }

  export type ChatRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    stream?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    grokSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    promptCiphertext?: BytesFieldUpdateOperationsInput | Uint8Array
    promptIv?: BytesFieldUpdateOperationsInput | Uint8Array
    promptTag?: BytesFieldUpdateOperationsInput | Uint8Array
    responseCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    policyMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ChatRequestDocumentUncheckedUpdateManyWithoutChatRequestNestedInput
  }

  export type ChatRequestCreateManyInput = {
    id?: string
    requestId: string
    apiKeyId: string
    model: string
    stream?: boolean
    status: string
    durationMs?: number | null
    grokSessionId?: string | null
    promptCiphertext: Uint8Array
    promptIv: Uint8Array
    promptTag: Uint8Array
    responseCiphertext?: Uint8Array | null
    responseIv?: Uint8Array | null
    responseTag?: Uint8Array | null
    errorMessage?: string | null
    ip?: string | null
    userAgent?: string | null
    policyMode?: string | null
    createdAt?: Date | string
  }

  export type ChatRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    stream?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    grokSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    promptCiphertext?: BytesFieldUpdateOperationsInput | Uint8Array
    promptIv?: BytesFieldUpdateOperationsInput | Uint8Array
    promptTag?: BytesFieldUpdateOperationsInput | Uint8Array
    responseCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    policyMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    stream?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    grokSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    promptCiphertext?: BytesFieldUpdateOperationsInput | Uint8Array
    promptIv?: BytesFieldUpdateOperationsInput | Uint8Array
    promptTag?: BytesFieldUpdateOperationsInput | Uint8Array
    responseCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    policyMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    originalName: string
    mimeType: string
    sizeBytes: number
    storageType: string
    contentCiphertext?: Uint8Array | null
    contentIv?: Uint8Array | null
    contentTag?: Uint8Array | null
    storagePath?: string | null
    checksumSha256: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    apiKey: ApiKeyCreateNestedOneWithoutDocumentsInput
    chatRequests?: ChatRequestDocumentCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    apiKeyId: string
    originalName: string
    mimeType: string
    sizeBytes: number
    storageType: string
    contentCiphertext?: Uint8Array | null
    contentIv?: Uint8Array | null
    contentTag?: Uint8Array | null
    storagePath?: string | null
    checksumSha256: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    chatRequests?: ChatRequestDocumentUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storageType?: StringFieldUpdateOperationsInput | string
    contentCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    checksumSha256?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKey?: ApiKeyUpdateOneRequiredWithoutDocumentsNestedInput
    chatRequests?: ChatRequestDocumentUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storageType?: StringFieldUpdateOperationsInput | string
    contentCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    checksumSha256?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRequests?: ChatRequestDocumentUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: string
    apiKeyId: string
    originalName: string
    mimeType: string
    sizeBytes: number
    storageType: string
    contentCiphertext?: Uint8Array | null
    contentIv?: Uint8Array | null
    contentTag?: Uint8Array | null
    storagePath?: string | null
    checksumSha256: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storageType?: StringFieldUpdateOperationsInput | string
    contentCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    checksumSha256?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storageType?: StringFieldUpdateOperationsInput | string
    contentCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    checksumSha256?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChatRequestDocumentCreateInput = {
    chatRequest: ChatRequestCreateNestedOneWithoutDocumentsInput
    document: DocumentCreateNestedOneWithoutChatRequestsInput
  }

  export type ChatRequestDocumentUncheckedCreateInput = {
    chatRequestId: string
    documentId: string
  }

  export type ChatRequestDocumentUpdateInput = {
    chatRequest?: ChatRequestUpdateOneRequiredWithoutDocumentsNestedInput
    document?: DocumentUpdateOneRequiredWithoutChatRequestsNestedInput
  }

  export type ChatRequestDocumentUncheckedUpdateInput = {
    chatRequestId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatRequestDocumentCreateManyInput = {
    chatRequestId: string
    documentId: string
  }

  export type ChatRequestDocumentUpdateManyMutationInput = {

  }

  export type ChatRequestDocumentUncheckedUpdateManyInput = {
    chatRequestId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    resource?: string | null
    resourceId?: string | null
    metaJson?: string | null
    ip?: string | null
    createdAt?: Date | string
    apiKey?: ApiKeyCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    apiKeyId?: string | null
    action: string
    resource?: string | null
    resourceId?: string | null
    metaJson?: string | null
    ip?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    apiKeyId?: string | null
    action: string
    resource?: string | null
    resourceId?: string | null
    metaJson?: string | null
    ip?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUncheckedCreateInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateManyInput = {
    key: string
    value: string
    updatedAt?: Date | string
  }

  export type SettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ChatRequestListRelationFilter = {
    every?: ChatRequestWhereInput
    some?: ChatRequestWhereInput
    none?: ChatRequestWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    keyHash?: SortOrder
    role?: SortOrder
    mode?: SortOrder
    isActive?: SortOrder
    rateLimit?: SortOrder
    maxTurns?: SortOrder
    timeoutMs?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type ApiKeyAvgOrderByAggregateInput = {
    rateLimit?: SortOrder
    maxTurns?: SortOrder
    timeoutMs?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    keyHash?: SortOrder
    role?: SortOrder
    mode?: SortOrder
    isActive?: SortOrder
    rateLimit?: SortOrder
    maxTurns?: SortOrder
    timeoutMs?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    keyPrefix?: SortOrder
    keyHash?: SortOrder
    role?: SortOrder
    mode?: SortOrder
    isActive?: SortOrder
    rateLimit?: SortOrder
    maxTurns?: SortOrder
    timeoutMs?: SortOrder
    createdAt?: SortOrder
    lastUsedAt?: SortOrder
  }

  export type ApiKeySumOrderByAggregateInput = {
    rateLimit?: SortOrder
    maxTurns?: SortOrder
    timeoutMs?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type ApiKeyScalarRelationFilter = {
    is?: ApiKeyWhereInput
    isNot?: ApiKeyWhereInput
  }

  export type ChatRequestDocumentListRelationFilter = {
    every?: ChatRequestDocumentWhereInput
    some?: ChatRequestDocumentWhereInput
    none?: ChatRequestDocumentWhereInput
  }

  export type ChatRequestDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    apiKeyId?: SortOrder
    model?: SortOrder
    stream?: SortOrder
    status?: SortOrder
    durationMs?: SortOrder
    grokSessionId?: SortOrder
    promptCiphertext?: SortOrder
    promptIv?: SortOrder
    promptTag?: SortOrder
    responseCiphertext?: SortOrder
    responseIv?: SortOrder
    responseTag?: SortOrder
    errorMessage?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    policyMode?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRequestAvgOrderByAggregateInput = {
    durationMs?: SortOrder
  }

  export type ChatRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    apiKeyId?: SortOrder
    model?: SortOrder
    stream?: SortOrder
    status?: SortOrder
    durationMs?: SortOrder
    grokSessionId?: SortOrder
    promptCiphertext?: SortOrder
    promptIv?: SortOrder
    promptTag?: SortOrder
    responseCiphertext?: SortOrder
    responseIv?: SortOrder
    responseTag?: SortOrder
    errorMessage?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    policyMode?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    apiKeyId?: SortOrder
    model?: SortOrder
    stream?: SortOrder
    status?: SortOrder
    durationMs?: SortOrder
    grokSessionId?: SortOrder
    promptCiphertext?: SortOrder
    promptIv?: SortOrder
    promptTag?: SortOrder
    responseCiphertext?: SortOrder
    responseIv?: SortOrder
    responseTag?: SortOrder
    errorMessage?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    policyMode?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatRequestSumOrderByAggregateInput = {
    durationMs?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    storageType?: SortOrder
    contentCiphertext?: SortOrder
    contentIv?: SortOrder
    contentTag?: SortOrder
    storagePath?: SortOrder
    checksumSha256?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    storageType?: SortOrder
    contentCiphertext?: SortOrder
    contentIv?: SortOrder
    contentTag?: SortOrder
    storagePath?: SortOrder
    checksumSha256?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    storageType?: SortOrder
    contentCiphertext?: SortOrder
    contentIv?: SortOrder
    contentTag?: SortOrder
    storagePath?: SortOrder
    checksumSha256?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type ChatRequestScalarRelationFilter = {
    is?: ChatRequestWhereInput
    isNot?: ChatRequestWhereInput
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type ChatRequestDocumentChatRequestIdDocumentIdCompoundUniqueInput = {
    chatRequestId: string
    documentId: string
  }

  export type ChatRequestDocumentCountOrderByAggregateInput = {
    chatRequestId?: SortOrder
    documentId?: SortOrder
  }

  export type ChatRequestDocumentMaxOrderByAggregateInput = {
    chatRequestId?: SortOrder
    documentId?: SortOrder
  }

  export type ChatRequestDocumentMinOrderByAggregateInput = {
    chatRequestId?: SortOrder
    documentId?: SortOrder
  }

  export type ApiKeyNullableScalarRelationFilter = {
    is?: ApiKeyWhereInput | null
    isNot?: ApiKeyWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    metaJson?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    metaJson?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    apiKeyId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    metaJson?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatRequestCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ChatRequestCreateWithoutApiKeyInput, ChatRequestUncheckedCreateWithoutApiKeyInput> | ChatRequestCreateWithoutApiKeyInput[] | ChatRequestUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ChatRequestCreateOrConnectWithoutApiKeyInput | ChatRequestCreateOrConnectWithoutApiKeyInput[]
    createMany?: ChatRequestCreateManyApiKeyInputEnvelope
    connect?: ChatRequestWhereUniqueInput | ChatRequestWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<DocumentCreateWithoutApiKeyInput, DocumentUncheckedCreateWithoutApiKeyInput> | DocumentCreateWithoutApiKeyInput[] | DocumentUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApiKeyInput | DocumentCreateOrConnectWithoutApiKeyInput[]
    createMany?: DocumentCreateManyApiKeyInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<AuditLogCreateWithoutApiKeyInput, AuditLogUncheckedCreateWithoutApiKeyInput> | AuditLogCreateWithoutApiKeyInput[] | AuditLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutApiKeyInput | AuditLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: AuditLogCreateManyApiKeyInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ChatRequestUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<ChatRequestCreateWithoutApiKeyInput, ChatRequestUncheckedCreateWithoutApiKeyInput> | ChatRequestCreateWithoutApiKeyInput[] | ChatRequestUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ChatRequestCreateOrConnectWithoutApiKeyInput | ChatRequestCreateOrConnectWithoutApiKeyInput[]
    createMany?: ChatRequestCreateManyApiKeyInputEnvelope
    connect?: ChatRequestWhereUniqueInput | ChatRequestWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<DocumentCreateWithoutApiKeyInput, DocumentUncheckedCreateWithoutApiKeyInput> | DocumentCreateWithoutApiKeyInput[] | DocumentUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApiKeyInput | DocumentCreateOrConnectWithoutApiKeyInput[]
    createMany?: DocumentCreateManyApiKeyInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: XOR<AuditLogCreateWithoutApiKeyInput, AuditLogUncheckedCreateWithoutApiKeyInput> | AuditLogCreateWithoutApiKeyInput[] | AuditLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutApiKeyInput | AuditLogCreateOrConnectWithoutApiKeyInput[]
    createMany?: AuditLogCreateManyApiKeyInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ChatRequestUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ChatRequestCreateWithoutApiKeyInput, ChatRequestUncheckedCreateWithoutApiKeyInput> | ChatRequestCreateWithoutApiKeyInput[] | ChatRequestUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ChatRequestCreateOrConnectWithoutApiKeyInput | ChatRequestCreateOrConnectWithoutApiKeyInput[]
    upsert?: ChatRequestUpsertWithWhereUniqueWithoutApiKeyInput | ChatRequestUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ChatRequestCreateManyApiKeyInputEnvelope
    set?: ChatRequestWhereUniqueInput | ChatRequestWhereUniqueInput[]
    disconnect?: ChatRequestWhereUniqueInput | ChatRequestWhereUniqueInput[]
    delete?: ChatRequestWhereUniqueInput | ChatRequestWhereUniqueInput[]
    connect?: ChatRequestWhereUniqueInput | ChatRequestWhereUniqueInput[]
    update?: ChatRequestUpdateWithWhereUniqueWithoutApiKeyInput | ChatRequestUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ChatRequestUpdateManyWithWhereWithoutApiKeyInput | ChatRequestUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ChatRequestScalarWhereInput | ChatRequestScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<DocumentCreateWithoutApiKeyInput, DocumentUncheckedCreateWithoutApiKeyInput> | DocumentCreateWithoutApiKeyInput[] | DocumentUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApiKeyInput | DocumentCreateOrConnectWithoutApiKeyInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutApiKeyInput | DocumentUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: DocumentCreateManyApiKeyInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutApiKeyInput | DocumentUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutApiKeyInput | DocumentUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<AuditLogCreateWithoutApiKeyInput, AuditLogUncheckedCreateWithoutApiKeyInput> | AuditLogCreateWithoutApiKeyInput[] | AuditLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutApiKeyInput | AuditLogCreateOrConnectWithoutApiKeyInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutApiKeyInput | AuditLogUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: AuditLogCreateManyApiKeyInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutApiKeyInput | AuditLogUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutApiKeyInput | AuditLogUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ChatRequestUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<ChatRequestCreateWithoutApiKeyInput, ChatRequestUncheckedCreateWithoutApiKeyInput> | ChatRequestCreateWithoutApiKeyInput[] | ChatRequestUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: ChatRequestCreateOrConnectWithoutApiKeyInput | ChatRequestCreateOrConnectWithoutApiKeyInput[]
    upsert?: ChatRequestUpsertWithWhereUniqueWithoutApiKeyInput | ChatRequestUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: ChatRequestCreateManyApiKeyInputEnvelope
    set?: ChatRequestWhereUniqueInput | ChatRequestWhereUniqueInput[]
    disconnect?: ChatRequestWhereUniqueInput | ChatRequestWhereUniqueInput[]
    delete?: ChatRequestWhereUniqueInput | ChatRequestWhereUniqueInput[]
    connect?: ChatRequestWhereUniqueInput | ChatRequestWhereUniqueInput[]
    update?: ChatRequestUpdateWithWhereUniqueWithoutApiKeyInput | ChatRequestUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: ChatRequestUpdateManyWithWhereWithoutApiKeyInput | ChatRequestUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: ChatRequestScalarWhereInput | ChatRequestScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<DocumentCreateWithoutApiKeyInput, DocumentUncheckedCreateWithoutApiKeyInput> | DocumentCreateWithoutApiKeyInput[] | DocumentUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutApiKeyInput | DocumentCreateOrConnectWithoutApiKeyInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutApiKeyInput | DocumentUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: DocumentCreateManyApiKeyInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutApiKeyInput | DocumentUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutApiKeyInput | DocumentUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: XOR<AuditLogCreateWithoutApiKeyInput, AuditLogUncheckedCreateWithoutApiKeyInput> | AuditLogCreateWithoutApiKeyInput[] | AuditLogUncheckedCreateWithoutApiKeyInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutApiKeyInput | AuditLogCreateOrConnectWithoutApiKeyInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutApiKeyInput | AuditLogUpsertWithWhereUniqueWithoutApiKeyInput[]
    createMany?: AuditLogCreateManyApiKeyInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutApiKeyInput | AuditLogUpdateWithWhereUniqueWithoutApiKeyInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutApiKeyInput | AuditLogUpdateManyWithWhereWithoutApiKeyInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ApiKeyCreateNestedOneWithoutChatRequestsInput = {
    create?: XOR<ApiKeyCreateWithoutChatRequestsInput, ApiKeyUncheckedCreateWithoutChatRequestsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutChatRequestsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ChatRequestDocumentCreateNestedManyWithoutChatRequestInput = {
    create?: XOR<ChatRequestDocumentCreateWithoutChatRequestInput, ChatRequestDocumentUncheckedCreateWithoutChatRequestInput> | ChatRequestDocumentCreateWithoutChatRequestInput[] | ChatRequestDocumentUncheckedCreateWithoutChatRequestInput[]
    connectOrCreate?: ChatRequestDocumentCreateOrConnectWithoutChatRequestInput | ChatRequestDocumentCreateOrConnectWithoutChatRequestInput[]
    createMany?: ChatRequestDocumentCreateManyChatRequestInputEnvelope
    connect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
  }

  export type ChatRequestDocumentUncheckedCreateNestedManyWithoutChatRequestInput = {
    create?: XOR<ChatRequestDocumentCreateWithoutChatRequestInput, ChatRequestDocumentUncheckedCreateWithoutChatRequestInput> | ChatRequestDocumentCreateWithoutChatRequestInput[] | ChatRequestDocumentUncheckedCreateWithoutChatRequestInput[]
    connectOrCreate?: ChatRequestDocumentCreateOrConnectWithoutChatRequestInput | ChatRequestDocumentCreateOrConnectWithoutChatRequestInput[]
    createMany?: ChatRequestDocumentCreateManyChatRequestInputEnvelope
    connect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type ApiKeyUpdateOneRequiredWithoutChatRequestsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutChatRequestsInput, ApiKeyUncheckedCreateWithoutChatRequestsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutChatRequestsInput
    upsert?: ApiKeyUpsertWithoutChatRequestsInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutChatRequestsInput, ApiKeyUpdateWithoutChatRequestsInput>, ApiKeyUncheckedUpdateWithoutChatRequestsInput>
  }

  export type ChatRequestDocumentUpdateManyWithoutChatRequestNestedInput = {
    create?: XOR<ChatRequestDocumentCreateWithoutChatRequestInput, ChatRequestDocumentUncheckedCreateWithoutChatRequestInput> | ChatRequestDocumentCreateWithoutChatRequestInput[] | ChatRequestDocumentUncheckedCreateWithoutChatRequestInput[]
    connectOrCreate?: ChatRequestDocumentCreateOrConnectWithoutChatRequestInput | ChatRequestDocumentCreateOrConnectWithoutChatRequestInput[]
    upsert?: ChatRequestDocumentUpsertWithWhereUniqueWithoutChatRequestInput | ChatRequestDocumentUpsertWithWhereUniqueWithoutChatRequestInput[]
    createMany?: ChatRequestDocumentCreateManyChatRequestInputEnvelope
    set?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    disconnect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    delete?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    connect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    update?: ChatRequestDocumentUpdateWithWhereUniqueWithoutChatRequestInput | ChatRequestDocumentUpdateWithWhereUniqueWithoutChatRequestInput[]
    updateMany?: ChatRequestDocumentUpdateManyWithWhereWithoutChatRequestInput | ChatRequestDocumentUpdateManyWithWhereWithoutChatRequestInput[]
    deleteMany?: ChatRequestDocumentScalarWhereInput | ChatRequestDocumentScalarWhereInput[]
  }

  export type ChatRequestDocumentUncheckedUpdateManyWithoutChatRequestNestedInput = {
    create?: XOR<ChatRequestDocumentCreateWithoutChatRequestInput, ChatRequestDocumentUncheckedCreateWithoutChatRequestInput> | ChatRequestDocumentCreateWithoutChatRequestInput[] | ChatRequestDocumentUncheckedCreateWithoutChatRequestInput[]
    connectOrCreate?: ChatRequestDocumentCreateOrConnectWithoutChatRequestInput | ChatRequestDocumentCreateOrConnectWithoutChatRequestInput[]
    upsert?: ChatRequestDocumentUpsertWithWhereUniqueWithoutChatRequestInput | ChatRequestDocumentUpsertWithWhereUniqueWithoutChatRequestInput[]
    createMany?: ChatRequestDocumentCreateManyChatRequestInputEnvelope
    set?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    disconnect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    delete?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    connect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    update?: ChatRequestDocumentUpdateWithWhereUniqueWithoutChatRequestInput | ChatRequestDocumentUpdateWithWhereUniqueWithoutChatRequestInput[]
    updateMany?: ChatRequestDocumentUpdateManyWithWhereWithoutChatRequestInput | ChatRequestDocumentUpdateManyWithWhereWithoutChatRequestInput[]
    deleteMany?: ChatRequestDocumentScalarWhereInput | ChatRequestDocumentScalarWhereInput[]
  }

  export type ApiKeyCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ApiKeyCreateWithoutDocumentsInput, ApiKeyUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutDocumentsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ChatRequestDocumentCreateNestedManyWithoutDocumentInput = {
    create?: XOR<ChatRequestDocumentCreateWithoutDocumentInput, ChatRequestDocumentUncheckedCreateWithoutDocumentInput> | ChatRequestDocumentCreateWithoutDocumentInput[] | ChatRequestDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ChatRequestDocumentCreateOrConnectWithoutDocumentInput | ChatRequestDocumentCreateOrConnectWithoutDocumentInput[]
    createMany?: ChatRequestDocumentCreateManyDocumentInputEnvelope
    connect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
  }

  export type ChatRequestDocumentUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<ChatRequestDocumentCreateWithoutDocumentInput, ChatRequestDocumentUncheckedCreateWithoutDocumentInput> | ChatRequestDocumentCreateWithoutDocumentInput[] | ChatRequestDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ChatRequestDocumentCreateOrConnectWithoutDocumentInput | ChatRequestDocumentCreateOrConnectWithoutDocumentInput[]
    createMany?: ChatRequestDocumentCreateManyDocumentInputEnvelope
    connect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
  }

  export type ApiKeyUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutDocumentsInput, ApiKeyUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutDocumentsInput
    upsert?: ApiKeyUpsertWithoutDocumentsInput
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutDocumentsInput, ApiKeyUpdateWithoutDocumentsInput>, ApiKeyUncheckedUpdateWithoutDocumentsInput>
  }

  export type ChatRequestDocumentUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<ChatRequestDocumentCreateWithoutDocumentInput, ChatRequestDocumentUncheckedCreateWithoutDocumentInput> | ChatRequestDocumentCreateWithoutDocumentInput[] | ChatRequestDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ChatRequestDocumentCreateOrConnectWithoutDocumentInput | ChatRequestDocumentCreateOrConnectWithoutDocumentInput[]
    upsert?: ChatRequestDocumentUpsertWithWhereUniqueWithoutDocumentInput | ChatRequestDocumentUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: ChatRequestDocumentCreateManyDocumentInputEnvelope
    set?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    disconnect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    delete?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    connect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    update?: ChatRequestDocumentUpdateWithWhereUniqueWithoutDocumentInput | ChatRequestDocumentUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: ChatRequestDocumentUpdateManyWithWhereWithoutDocumentInput | ChatRequestDocumentUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: ChatRequestDocumentScalarWhereInput | ChatRequestDocumentScalarWhereInput[]
  }

  export type ChatRequestDocumentUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<ChatRequestDocumentCreateWithoutDocumentInput, ChatRequestDocumentUncheckedCreateWithoutDocumentInput> | ChatRequestDocumentCreateWithoutDocumentInput[] | ChatRequestDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ChatRequestDocumentCreateOrConnectWithoutDocumentInput | ChatRequestDocumentCreateOrConnectWithoutDocumentInput[]
    upsert?: ChatRequestDocumentUpsertWithWhereUniqueWithoutDocumentInput | ChatRequestDocumentUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: ChatRequestDocumentCreateManyDocumentInputEnvelope
    set?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    disconnect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    delete?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    connect?: ChatRequestDocumentWhereUniqueInput | ChatRequestDocumentWhereUniqueInput[]
    update?: ChatRequestDocumentUpdateWithWhereUniqueWithoutDocumentInput | ChatRequestDocumentUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: ChatRequestDocumentUpdateManyWithWhereWithoutDocumentInput | ChatRequestDocumentUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: ChatRequestDocumentScalarWhereInput | ChatRequestDocumentScalarWhereInput[]
  }

  export type ChatRequestCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ChatRequestCreateWithoutDocumentsInput, ChatRequestUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ChatRequestCreateOrConnectWithoutDocumentsInput
    connect?: ChatRequestWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutChatRequestsInput = {
    create?: XOR<DocumentCreateWithoutChatRequestsInput, DocumentUncheckedCreateWithoutChatRequestsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutChatRequestsInput
    connect?: DocumentWhereUniqueInput
  }

  export type ChatRequestUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ChatRequestCreateWithoutDocumentsInput, ChatRequestUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ChatRequestCreateOrConnectWithoutDocumentsInput
    upsert?: ChatRequestUpsertWithoutDocumentsInput
    connect?: ChatRequestWhereUniqueInput
    update?: XOR<XOR<ChatRequestUpdateToOneWithWhereWithoutDocumentsInput, ChatRequestUpdateWithoutDocumentsInput>, ChatRequestUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentUpdateOneRequiredWithoutChatRequestsNestedInput = {
    create?: XOR<DocumentCreateWithoutChatRequestsInput, DocumentUncheckedCreateWithoutChatRequestsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutChatRequestsInput
    upsert?: DocumentUpsertWithoutChatRequestsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutChatRequestsInput, DocumentUpdateWithoutChatRequestsInput>, DocumentUncheckedUpdateWithoutChatRequestsInput>
  }

  export type ApiKeyCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<ApiKeyCreateWithoutAuditLogsInput, ApiKeyUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutAuditLogsInput
    connect?: ApiKeyWhereUniqueInput
  }

  export type ApiKeyUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<ApiKeyCreateWithoutAuditLogsInput, ApiKeyUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ApiKeyCreateOrConnectWithoutAuditLogsInput
    upsert?: ApiKeyUpsertWithoutAuditLogsInput
    disconnect?: ApiKeyWhereInput | boolean
    delete?: ApiKeyWhereInput | boolean
    connect?: ApiKeyWhereUniqueInput
    update?: XOR<XOR<ApiKeyUpdateToOneWithWhereWithoutAuditLogsInput, ApiKeyUpdateWithoutAuditLogsInput>, ApiKeyUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type ChatRequestCreateWithoutApiKeyInput = {
    id?: string
    requestId: string
    model: string
    stream?: boolean
    status: string
    durationMs?: number | null
    grokSessionId?: string | null
    promptCiphertext: Uint8Array
    promptIv: Uint8Array
    promptTag: Uint8Array
    responseCiphertext?: Uint8Array | null
    responseIv?: Uint8Array | null
    responseTag?: Uint8Array | null
    errorMessage?: string | null
    ip?: string | null
    userAgent?: string | null
    policyMode?: string | null
    createdAt?: Date | string
    documents?: ChatRequestDocumentCreateNestedManyWithoutChatRequestInput
  }

  export type ChatRequestUncheckedCreateWithoutApiKeyInput = {
    id?: string
    requestId: string
    model: string
    stream?: boolean
    status: string
    durationMs?: number | null
    grokSessionId?: string | null
    promptCiphertext: Uint8Array
    promptIv: Uint8Array
    promptTag: Uint8Array
    responseCiphertext?: Uint8Array | null
    responseIv?: Uint8Array | null
    responseTag?: Uint8Array | null
    errorMessage?: string | null
    ip?: string | null
    userAgent?: string | null
    policyMode?: string | null
    createdAt?: Date | string
    documents?: ChatRequestDocumentUncheckedCreateNestedManyWithoutChatRequestInput
  }

  export type ChatRequestCreateOrConnectWithoutApiKeyInput = {
    where: ChatRequestWhereUniqueInput
    create: XOR<ChatRequestCreateWithoutApiKeyInput, ChatRequestUncheckedCreateWithoutApiKeyInput>
  }

  export type ChatRequestCreateManyApiKeyInputEnvelope = {
    data: ChatRequestCreateManyApiKeyInput | ChatRequestCreateManyApiKeyInput[]
  }

  export type DocumentCreateWithoutApiKeyInput = {
    id?: string
    originalName: string
    mimeType: string
    sizeBytes: number
    storageType: string
    contentCiphertext?: Uint8Array | null
    contentIv?: Uint8Array | null
    contentTag?: Uint8Array | null
    storagePath?: string | null
    checksumSha256: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    chatRequests?: ChatRequestDocumentCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutApiKeyInput = {
    id?: string
    originalName: string
    mimeType: string
    sizeBytes: number
    storageType: string
    contentCiphertext?: Uint8Array | null
    contentIv?: Uint8Array | null
    contentTag?: Uint8Array | null
    storagePath?: string | null
    checksumSha256: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    chatRequests?: ChatRequestDocumentUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutApiKeyInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutApiKeyInput, DocumentUncheckedCreateWithoutApiKeyInput>
  }

  export type DocumentCreateManyApiKeyInputEnvelope = {
    data: DocumentCreateManyApiKeyInput | DocumentCreateManyApiKeyInput[]
  }

  export type AuditLogCreateWithoutApiKeyInput = {
    id?: string
    action: string
    resource?: string | null
    resourceId?: string | null
    metaJson?: string | null
    ip?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutApiKeyInput = {
    id?: string
    action: string
    resource?: string | null
    resourceId?: string | null
    metaJson?: string | null
    ip?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutApiKeyInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutApiKeyInput, AuditLogUncheckedCreateWithoutApiKeyInput>
  }

  export type AuditLogCreateManyApiKeyInputEnvelope = {
    data: AuditLogCreateManyApiKeyInput | AuditLogCreateManyApiKeyInput[]
  }

  export type ChatRequestUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: ChatRequestWhereUniqueInput
    update: XOR<ChatRequestUpdateWithoutApiKeyInput, ChatRequestUncheckedUpdateWithoutApiKeyInput>
    create: XOR<ChatRequestCreateWithoutApiKeyInput, ChatRequestUncheckedCreateWithoutApiKeyInput>
  }

  export type ChatRequestUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: ChatRequestWhereUniqueInput
    data: XOR<ChatRequestUpdateWithoutApiKeyInput, ChatRequestUncheckedUpdateWithoutApiKeyInput>
  }

  export type ChatRequestUpdateManyWithWhereWithoutApiKeyInput = {
    where: ChatRequestScalarWhereInput
    data: XOR<ChatRequestUpdateManyMutationInput, ChatRequestUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type ChatRequestScalarWhereInput = {
    AND?: ChatRequestScalarWhereInput | ChatRequestScalarWhereInput[]
    OR?: ChatRequestScalarWhereInput[]
    NOT?: ChatRequestScalarWhereInput | ChatRequestScalarWhereInput[]
    id?: StringFilter<"ChatRequest"> | string
    requestId?: StringFilter<"ChatRequest"> | string
    apiKeyId?: StringFilter<"ChatRequest"> | string
    model?: StringFilter<"ChatRequest"> | string
    stream?: BoolFilter<"ChatRequest"> | boolean
    status?: StringFilter<"ChatRequest"> | string
    durationMs?: IntNullableFilter<"ChatRequest"> | number | null
    grokSessionId?: StringNullableFilter<"ChatRequest"> | string | null
    promptCiphertext?: BytesFilter<"ChatRequest"> | Uint8Array
    promptIv?: BytesFilter<"ChatRequest"> | Uint8Array
    promptTag?: BytesFilter<"ChatRequest"> | Uint8Array
    responseCiphertext?: BytesNullableFilter<"ChatRequest"> | Uint8Array | null
    responseIv?: BytesNullableFilter<"ChatRequest"> | Uint8Array | null
    responseTag?: BytesNullableFilter<"ChatRequest"> | Uint8Array | null
    errorMessage?: StringNullableFilter<"ChatRequest"> | string | null
    ip?: StringNullableFilter<"ChatRequest"> | string | null
    userAgent?: StringNullableFilter<"ChatRequest"> | string | null
    policyMode?: StringNullableFilter<"ChatRequest"> | string | null
    createdAt?: DateTimeFilter<"ChatRequest"> | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutApiKeyInput, DocumentUncheckedUpdateWithoutApiKeyInput>
    create: XOR<DocumentCreateWithoutApiKeyInput, DocumentUncheckedCreateWithoutApiKeyInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutApiKeyInput, DocumentUncheckedUpdateWithoutApiKeyInput>
  }

  export type DocumentUpdateManyWithWhereWithoutApiKeyInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    apiKeyId?: StringFilter<"Document"> | string
    originalName?: StringFilter<"Document"> | string
    mimeType?: StringFilter<"Document"> | string
    sizeBytes?: IntFilter<"Document"> | number
    storageType?: StringFilter<"Document"> | string
    contentCiphertext?: BytesNullableFilter<"Document"> | Uint8Array | null
    contentIv?: BytesNullableFilter<"Document"> | Uint8Array | null
    contentTag?: BytesNullableFilter<"Document"> | Uint8Array | null
    storagePath?: StringNullableFilter<"Document"> | string | null
    checksumSha256?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Document"> | Date | string | null
  }

  export type AuditLogUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutApiKeyInput, AuditLogUncheckedUpdateWithoutApiKeyInput>
    create: XOR<AuditLogCreateWithoutApiKeyInput, AuditLogUncheckedCreateWithoutApiKeyInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutApiKeyInput, AuditLogUncheckedUpdateWithoutApiKeyInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutApiKeyInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutApiKeyInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    apiKeyId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    resource?: StringNullableFilter<"AuditLog"> | string | null
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metaJson?: StringNullableFilter<"AuditLog"> | string | null
    ip?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type ApiKeyCreateWithoutChatRequestsInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    role?: string
    mode?: string
    isActive?: boolean
    rateLimit?: number
    maxTurns?: number | null
    timeoutMs?: number | null
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    documents?: DocumentCreateNestedManyWithoutApiKeyInput
    auditLogs?: AuditLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutChatRequestsInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    role?: string
    mode?: string
    isActive?: boolean
    rateLimit?: number
    maxTurns?: number | null
    timeoutMs?: number | null
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutApiKeyInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutChatRequestsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutChatRequestsInput, ApiKeyUncheckedCreateWithoutChatRequestsInput>
  }

  export type ChatRequestDocumentCreateWithoutChatRequestInput = {
    document: DocumentCreateNestedOneWithoutChatRequestsInput
  }

  export type ChatRequestDocumentUncheckedCreateWithoutChatRequestInput = {
    documentId: string
  }

  export type ChatRequestDocumentCreateOrConnectWithoutChatRequestInput = {
    where: ChatRequestDocumentWhereUniqueInput
    create: XOR<ChatRequestDocumentCreateWithoutChatRequestInput, ChatRequestDocumentUncheckedCreateWithoutChatRequestInput>
  }

  export type ChatRequestDocumentCreateManyChatRequestInputEnvelope = {
    data: ChatRequestDocumentCreateManyChatRequestInput | ChatRequestDocumentCreateManyChatRequestInput[]
  }

  export type ApiKeyUpsertWithoutChatRequestsInput = {
    update: XOR<ApiKeyUpdateWithoutChatRequestsInput, ApiKeyUncheckedUpdateWithoutChatRequestsInput>
    create: XOR<ApiKeyCreateWithoutChatRequestsInput, ApiKeyUncheckedCreateWithoutChatRequestsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutChatRequestsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutChatRequestsInput, ApiKeyUncheckedUpdateWithoutChatRequestsInput>
  }

  export type ApiKeyUpdateWithoutChatRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    maxTurns?: NullableIntFieldUpdateOperationsInput | number | null
    timeoutMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: DocumentUpdateManyWithoutApiKeyNestedInput
    auditLogs?: AuditLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutChatRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    maxTurns?: NullableIntFieldUpdateOperationsInput | number | null
    timeoutMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    documents?: DocumentUncheckedUpdateManyWithoutApiKeyNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ChatRequestDocumentUpsertWithWhereUniqueWithoutChatRequestInput = {
    where: ChatRequestDocumentWhereUniqueInput
    update: XOR<ChatRequestDocumentUpdateWithoutChatRequestInput, ChatRequestDocumentUncheckedUpdateWithoutChatRequestInput>
    create: XOR<ChatRequestDocumentCreateWithoutChatRequestInput, ChatRequestDocumentUncheckedCreateWithoutChatRequestInput>
  }

  export type ChatRequestDocumentUpdateWithWhereUniqueWithoutChatRequestInput = {
    where: ChatRequestDocumentWhereUniqueInput
    data: XOR<ChatRequestDocumentUpdateWithoutChatRequestInput, ChatRequestDocumentUncheckedUpdateWithoutChatRequestInput>
  }

  export type ChatRequestDocumentUpdateManyWithWhereWithoutChatRequestInput = {
    where: ChatRequestDocumentScalarWhereInput
    data: XOR<ChatRequestDocumentUpdateManyMutationInput, ChatRequestDocumentUncheckedUpdateManyWithoutChatRequestInput>
  }

  export type ChatRequestDocumentScalarWhereInput = {
    AND?: ChatRequestDocumentScalarWhereInput | ChatRequestDocumentScalarWhereInput[]
    OR?: ChatRequestDocumentScalarWhereInput[]
    NOT?: ChatRequestDocumentScalarWhereInput | ChatRequestDocumentScalarWhereInput[]
    chatRequestId?: StringFilter<"ChatRequestDocument"> | string
    documentId?: StringFilter<"ChatRequestDocument"> | string
  }

  export type ApiKeyCreateWithoutDocumentsInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    role?: string
    mode?: string
    isActive?: boolean
    rateLimit?: number
    maxTurns?: number | null
    timeoutMs?: number | null
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    chatRequests?: ChatRequestCreateNestedManyWithoutApiKeyInput
    auditLogs?: AuditLogCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    role?: string
    mode?: string
    isActive?: boolean
    rateLimit?: number
    maxTurns?: number | null
    timeoutMs?: number | null
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    chatRequests?: ChatRequestUncheckedCreateNestedManyWithoutApiKeyInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutDocumentsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutDocumentsInput, ApiKeyUncheckedCreateWithoutDocumentsInput>
  }

  export type ChatRequestDocumentCreateWithoutDocumentInput = {
    chatRequest: ChatRequestCreateNestedOneWithoutDocumentsInput
  }

  export type ChatRequestDocumentUncheckedCreateWithoutDocumentInput = {
    chatRequestId: string
  }

  export type ChatRequestDocumentCreateOrConnectWithoutDocumentInput = {
    where: ChatRequestDocumentWhereUniqueInput
    create: XOR<ChatRequestDocumentCreateWithoutDocumentInput, ChatRequestDocumentUncheckedCreateWithoutDocumentInput>
  }

  export type ChatRequestDocumentCreateManyDocumentInputEnvelope = {
    data: ChatRequestDocumentCreateManyDocumentInput | ChatRequestDocumentCreateManyDocumentInput[]
  }

  export type ApiKeyUpsertWithoutDocumentsInput = {
    update: XOR<ApiKeyUpdateWithoutDocumentsInput, ApiKeyUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ApiKeyCreateWithoutDocumentsInput, ApiKeyUncheckedCreateWithoutDocumentsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutDocumentsInput, ApiKeyUncheckedUpdateWithoutDocumentsInput>
  }

  export type ApiKeyUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    maxTurns?: NullableIntFieldUpdateOperationsInput | number | null
    timeoutMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRequests?: ChatRequestUpdateManyWithoutApiKeyNestedInput
    auditLogs?: AuditLogUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    maxTurns?: NullableIntFieldUpdateOperationsInput | number | null
    timeoutMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRequests?: ChatRequestUncheckedUpdateManyWithoutApiKeyNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ChatRequestDocumentUpsertWithWhereUniqueWithoutDocumentInput = {
    where: ChatRequestDocumentWhereUniqueInput
    update: XOR<ChatRequestDocumentUpdateWithoutDocumentInput, ChatRequestDocumentUncheckedUpdateWithoutDocumentInput>
    create: XOR<ChatRequestDocumentCreateWithoutDocumentInput, ChatRequestDocumentUncheckedCreateWithoutDocumentInput>
  }

  export type ChatRequestDocumentUpdateWithWhereUniqueWithoutDocumentInput = {
    where: ChatRequestDocumentWhereUniqueInput
    data: XOR<ChatRequestDocumentUpdateWithoutDocumentInput, ChatRequestDocumentUncheckedUpdateWithoutDocumentInput>
  }

  export type ChatRequestDocumentUpdateManyWithWhereWithoutDocumentInput = {
    where: ChatRequestDocumentScalarWhereInput
    data: XOR<ChatRequestDocumentUpdateManyMutationInput, ChatRequestDocumentUncheckedUpdateManyWithoutDocumentInput>
  }

  export type ChatRequestCreateWithoutDocumentsInput = {
    id?: string
    requestId: string
    model: string
    stream?: boolean
    status: string
    durationMs?: number | null
    grokSessionId?: string | null
    promptCiphertext: Uint8Array
    promptIv: Uint8Array
    promptTag: Uint8Array
    responseCiphertext?: Uint8Array | null
    responseIv?: Uint8Array | null
    responseTag?: Uint8Array | null
    errorMessage?: string | null
    ip?: string | null
    userAgent?: string | null
    policyMode?: string | null
    createdAt?: Date | string
    apiKey: ApiKeyCreateNestedOneWithoutChatRequestsInput
  }

  export type ChatRequestUncheckedCreateWithoutDocumentsInput = {
    id?: string
    requestId: string
    apiKeyId: string
    model: string
    stream?: boolean
    status: string
    durationMs?: number | null
    grokSessionId?: string | null
    promptCiphertext: Uint8Array
    promptIv: Uint8Array
    promptTag: Uint8Array
    responseCiphertext?: Uint8Array | null
    responseIv?: Uint8Array | null
    responseTag?: Uint8Array | null
    errorMessage?: string | null
    ip?: string | null
    userAgent?: string | null
    policyMode?: string | null
    createdAt?: Date | string
  }

  export type ChatRequestCreateOrConnectWithoutDocumentsInput = {
    where: ChatRequestWhereUniqueInput
    create: XOR<ChatRequestCreateWithoutDocumentsInput, ChatRequestUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentCreateWithoutChatRequestsInput = {
    id?: string
    originalName: string
    mimeType: string
    sizeBytes: number
    storageType: string
    contentCiphertext?: Uint8Array | null
    contentIv?: Uint8Array | null
    contentTag?: Uint8Array | null
    storagePath?: string | null
    checksumSha256: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
    apiKey: ApiKeyCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutChatRequestsInput = {
    id?: string
    apiKeyId: string
    originalName: string
    mimeType: string
    sizeBytes: number
    storageType: string
    contentCiphertext?: Uint8Array | null
    contentIv?: Uint8Array | null
    contentTag?: Uint8Array | null
    storagePath?: string | null
    checksumSha256: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DocumentCreateOrConnectWithoutChatRequestsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutChatRequestsInput, DocumentUncheckedCreateWithoutChatRequestsInput>
  }

  export type ChatRequestUpsertWithoutDocumentsInput = {
    update: XOR<ChatRequestUpdateWithoutDocumentsInput, ChatRequestUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ChatRequestCreateWithoutDocumentsInput, ChatRequestUncheckedCreateWithoutDocumentsInput>
    where?: ChatRequestWhereInput
  }

  export type ChatRequestUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ChatRequestWhereInput
    data: XOR<ChatRequestUpdateWithoutDocumentsInput, ChatRequestUncheckedUpdateWithoutDocumentsInput>
  }

  export type ChatRequestUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    stream?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    grokSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    promptCiphertext?: BytesFieldUpdateOperationsInput | Uint8Array
    promptIv?: BytesFieldUpdateOperationsInput | Uint8Array
    promptTag?: BytesFieldUpdateOperationsInput | Uint8Array
    responseCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    policyMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiKey?: ApiKeyUpdateOneRequiredWithoutChatRequestsNestedInput
  }

  export type ChatRequestUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    stream?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    grokSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    promptCiphertext?: BytesFieldUpdateOperationsInput | Uint8Array
    promptIv?: BytesFieldUpdateOperationsInput | Uint8Array
    promptTag?: BytesFieldUpdateOperationsInput | Uint8Array
    responseCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    policyMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpsertWithoutChatRequestsInput = {
    update: XOR<DocumentUpdateWithoutChatRequestsInput, DocumentUncheckedUpdateWithoutChatRequestsInput>
    create: XOR<DocumentCreateWithoutChatRequestsInput, DocumentUncheckedCreateWithoutChatRequestsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutChatRequestsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutChatRequestsInput, DocumentUncheckedUpdateWithoutChatRequestsInput>
  }

  export type DocumentUpdateWithoutChatRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storageType?: StringFieldUpdateOperationsInput | string
    contentCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    checksumSha256?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    apiKey?: ApiKeyUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutChatRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiKeyId?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storageType?: StringFieldUpdateOperationsInput | string
    contentCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    checksumSha256?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApiKeyCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    role?: string
    mode?: string
    isActive?: boolean
    rateLimit?: number
    maxTurns?: number | null
    timeoutMs?: number | null
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    chatRequests?: ChatRequestCreateNestedManyWithoutApiKeyInput
    documents?: DocumentCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    keyPrefix: string
    keyHash: string
    role?: string
    mode?: string
    isActive?: boolean
    rateLimit?: number
    maxTurns?: number | null
    timeoutMs?: number | null
    createdAt?: Date | string
    lastUsedAt?: Date | string | null
    chatRequests?: ChatRequestUncheckedCreateNestedManyWithoutApiKeyInput
    documents?: DocumentUncheckedCreateNestedManyWithoutApiKeyInput
  }

  export type ApiKeyCreateOrConnectWithoutAuditLogsInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutAuditLogsInput, ApiKeyUncheckedCreateWithoutAuditLogsInput>
  }

  export type ApiKeyUpsertWithoutAuditLogsInput = {
    update: XOR<ApiKeyUpdateWithoutAuditLogsInput, ApiKeyUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<ApiKeyCreateWithoutAuditLogsInput, ApiKeyUncheckedCreateWithoutAuditLogsInput>
    where?: ApiKeyWhereInput
  }

  export type ApiKeyUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: ApiKeyWhereInput
    data: XOR<ApiKeyUpdateWithoutAuditLogsInput, ApiKeyUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ApiKeyUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    maxTurns?: NullableIntFieldUpdateOperationsInput | number | null
    timeoutMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRequests?: ChatRequestUpdateManyWithoutApiKeyNestedInput
    documents?: DocumentUpdateManyWithoutApiKeyNestedInput
  }

  export type ApiKeyUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    rateLimit?: IntFieldUpdateOperationsInput | number
    maxTurns?: NullableIntFieldUpdateOperationsInput | number | null
    timeoutMs?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRequests?: ChatRequestUncheckedUpdateManyWithoutApiKeyNestedInput
    documents?: DocumentUncheckedUpdateManyWithoutApiKeyNestedInput
  }

  export type ChatRequestCreateManyApiKeyInput = {
    id?: string
    requestId: string
    model: string
    stream?: boolean
    status: string
    durationMs?: number | null
    grokSessionId?: string | null
    promptCiphertext: Uint8Array
    promptIv: Uint8Array
    promptTag: Uint8Array
    responseCiphertext?: Uint8Array | null
    responseIv?: Uint8Array | null
    responseTag?: Uint8Array | null
    errorMessage?: string | null
    ip?: string | null
    userAgent?: string | null
    policyMode?: string | null
    createdAt?: Date | string
  }

  export type DocumentCreateManyApiKeyInput = {
    id?: string
    originalName: string
    mimeType: string
    sizeBytes: number
    storageType: string
    contentCiphertext?: Uint8Array | null
    contentIv?: Uint8Array | null
    contentTag?: Uint8Array | null
    storagePath?: string | null
    checksumSha256: string
    createdAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AuditLogCreateManyApiKeyInput = {
    id?: string
    action: string
    resource?: string | null
    resourceId?: string | null
    metaJson?: string | null
    ip?: string | null
    createdAt?: Date | string
  }

  export type ChatRequestUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    stream?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    grokSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    promptCiphertext?: BytesFieldUpdateOperationsInput | Uint8Array
    promptIv?: BytesFieldUpdateOperationsInput | Uint8Array
    promptTag?: BytesFieldUpdateOperationsInput | Uint8Array
    responseCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    policyMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ChatRequestDocumentUpdateManyWithoutChatRequestNestedInput
  }

  export type ChatRequestUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    stream?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    grokSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    promptCiphertext?: BytesFieldUpdateOperationsInput | Uint8Array
    promptIv?: BytesFieldUpdateOperationsInput | Uint8Array
    promptTag?: BytesFieldUpdateOperationsInput | Uint8Array
    responseCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    policyMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: ChatRequestDocumentUncheckedUpdateManyWithoutChatRequestNestedInput
  }

  export type ChatRequestUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    stream?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    grokSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    promptCiphertext?: BytesFieldUpdateOperationsInput | Uint8Array
    promptIv?: BytesFieldUpdateOperationsInput | Uint8Array
    promptTag?: BytesFieldUpdateOperationsInput | Uint8Array
    responseCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    responseTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    policyMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storageType?: StringFieldUpdateOperationsInput | string
    contentCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    checksumSha256?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRequests?: ChatRequestDocumentUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storageType?: StringFieldUpdateOperationsInput | string
    contentCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    checksumSha256?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatRequests?: ChatRequestDocumentUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    storageType?: StringFieldUpdateOperationsInput | string
    contentCiphertext?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentIv?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    contentTag?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    storagePath?: NullableStringFieldUpdateOperationsInput | string | null
    checksumSha256?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutApiKeyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: NullableStringFieldUpdateOperationsInput | string | null
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metaJson?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRequestDocumentCreateManyChatRequestInput = {
    documentId: string
  }

  export type ChatRequestDocumentUpdateWithoutChatRequestInput = {
    document?: DocumentUpdateOneRequiredWithoutChatRequestsNestedInput
  }

  export type ChatRequestDocumentUncheckedUpdateWithoutChatRequestInput = {
    documentId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatRequestDocumentUncheckedUpdateManyWithoutChatRequestInput = {
    documentId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatRequestDocumentCreateManyDocumentInput = {
    chatRequestId: string
  }

  export type ChatRequestDocumentUpdateWithoutDocumentInput = {
    chatRequest?: ChatRequestUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type ChatRequestDocumentUncheckedUpdateWithoutDocumentInput = {
    chatRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatRequestDocumentUncheckedUpdateManyWithoutDocumentInput = {
    chatRequestId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}