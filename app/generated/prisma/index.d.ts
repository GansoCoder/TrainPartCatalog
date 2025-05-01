
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
 * Model TrainSeries
 * 
 */
export type TrainSeries = $Result.DefaultSelection<Prisma.$TrainSeriesPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Part
 * 
 */
export type Part = $Result.DefaultSelection<Prisma.$PartPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TrainSeries
 * const trainSeries = await prisma.trainSeries.findMany()
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
   * // Fetch zero or more TrainSeries
   * const trainSeries = await prisma.trainSeries.findMany()
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
   * `prisma.trainSeries`: Exposes CRUD operations for the **TrainSeries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainSeries
    * const trainSeries = await prisma.trainSeries.findMany()
    * ```
    */
  get trainSeries(): Prisma.TrainSeriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.part`: Exposes CRUD operations for the **Part** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parts
    * const parts = await prisma.part.findMany()
    * ```
    */
  get part(): Prisma.PartDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    TrainSeries: 'TrainSeries',
    Category: 'Category',
    Part: 'Part'
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
      modelProps: "trainSeries" | "category" | "part"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TrainSeries: {
        payload: Prisma.$TrainSeriesPayload<ExtArgs>
        fields: Prisma.TrainSeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainSeriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainSeriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload>
          }
          findFirst: {
            args: Prisma.TrainSeriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainSeriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload>
          }
          findMany: {
            args: Prisma.TrainSeriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload>[]
          }
          create: {
            args: Prisma.TrainSeriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload>
          }
          createMany: {
            args: Prisma.TrainSeriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainSeriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload>[]
          }
          delete: {
            args: Prisma.TrainSeriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload>
          }
          update: {
            args: Prisma.TrainSeriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload>
          }
          deleteMany: {
            args: Prisma.TrainSeriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainSeriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainSeriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload>[]
          }
          upsert: {
            args: Prisma.TrainSeriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainSeriesPayload>
          }
          aggregate: {
            args: Prisma.TrainSeriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainSeries>
          }
          groupBy: {
            args: Prisma.TrainSeriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainSeriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainSeriesCountArgs<ExtArgs>
            result: $Utils.Optional<TrainSeriesCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Part: {
        payload: Prisma.$PartPayload<ExtArgs>
        fields: Prisma.PartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findFirst: {
            args: Prisma.PartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          findMany: {
            args: Prisma.PartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          create: {
            args: Prisma.PartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          createMany: {
            args: Prisma.PartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          delete: {
            args: Prisma.PartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          update: {
            args: Prisma.PartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          deleteMany: {
            args: Prisma.PartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>[]
          }
          upsert: {
            args: Prisma.PartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartPayload>
          }
          aggregate: {
            args: Prisma.PartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePart>
          }
          groupBy: {
            args: Prisma.PartGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartCountArgs<ExtArgs>
            result: $Utils.Optional<PartCountAggregateOutputType> | number
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
    trainSeries?: TrainSeriesOmit
    category?: CategoryOmit
    part?: PartOmit
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
   * Count Type TrainSeriesCountOutputType
   */

  export type TrainSeriesCountOutputType = {
    categories: number
  }

  export type TrainSeriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TrainSeriesCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * TrainSeriesCountOutputType without action
   */
  export type TrainSeriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeriesCountOutputType
     */
    select?: TrainSeriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrainSeriesCountOutputType without action
   */
  export type TrainSeriesCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    parts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parts?: boolean | CategoryCountOutputTypeCountPartsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TrainSeries
   */

  export type AggregateTrainSeries = {
    _count: TrainSeriesCountAggregateOutputType | null
    _avg: TrainSeriesAvgAggregateOutputType | null
    _sum: TrainSeriesSumAggregateOutputType | null
    _min: TrainSeriesMinAggregateOutputType | null
    _max: TrainSeriesMaxAggregateOutputType | null
  }

  export type TrainSeriesAvgAggregateOutputType = {
    id: number | null
  }

  export type TrainSeriesSumAggregateOutputType = {
    id: number | null
  }

  export type TrainSeriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type TrainSeriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type TrainSeriesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type TrainSeriesAvgAggregateInputType = {
    id?: true
  }

  export type TrainSeriesSumAggregateInputType = {
    id?: true
  }

  export type TrainSeriesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TrainSeriesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TrainSeriesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type TrainSeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainSeries to aggregate.
     */
    where?: TrainSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainSeries to fetch.
     */
    orderBy?: TrainSeriesOrderByWithRelationInput | TrainSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainSeries
    **/
    _count?: true | TrainSeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainSeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainSeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainSeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainSeriesMaxAggregateInputType
  }

  export type GetTrainSeriesAggregateType<T extends TrainSeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainSeries[P]>
      : GetScalarType<T[P], AggregateTrainSeries[P]>
  }




  export type TrainSeriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainSeriesWhereInput
    orderBy?: TrainSeriesOrderByWithAggregationInput | TrainSeriesOrderByWithAggregationInput[]
    by: TrainSeriesScalarFieldEnum[] | TrainSeriesScalarFieldEnum
    having?: TrainSeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainSeriesCountAggregateInputType | true
    _avg?: TrainSeriesAvgAggregateInputType
    _sum?: TrainSeriesSumAggregateInputType
    _min?: TrainSeriesMinAggregateInputType
    _max?: TrainSeriesMaxAggregateInputType
  }

  export type TrainSeriesGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: TrainSeriesCountAggregateOutputType | null
    _avg: TrainSeriesAvgAggregateOutputType | null
    _sum: TrainSeriesSumAggregateOutputType | null
    _min: TrainSeriesMinAggregateOutputType | null
    _max: TrainSeriesMaxAggregateOutputType | null
  }

  type GetTrainSeriesGroupByPayload<T extends TrainSeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainSeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainSeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainSeriesGroupByOutputType[P]>
            : GetScalarType<T[P], TrainSeriesGroupByOutputType[P]>
        }
      >
    >


  export type TrainSeriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    categories?: boolean | TrainSeries$categoriesArgs<ExtArgs>
    _count?: boolean | TrainSeriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainSeries"]>

  export type TrainSeriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["trainSeries"]>

  export type TrainSeriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["trainSeries"]>

  export type TrainSeriesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type TrainSeriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["trainSeries"]>
  export type TrainSeriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TrainSeries$categoriesArgs<ExtArgs>
    _count?: boolean | TrainSeriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrainSeriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TrainSeriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TrainSeriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainSeries"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["trainSeries"]>
    composites: {}
  }

  type TrainSeriesGetPayload<S extends boolean | null | undefined | TrainSeriesDefaultArgs> = $Result.GetResult<Prisma.$TrainSeriesPayload, S>

  type TrainSeriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainSeriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainSeriesCountAggregateInputType | true
    }

  export interface TrainSeriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainSeries'], meta: { name: 'TrainSeries' } }
    /**
     * Find zero or one TrainSeries that matches the filter.
     * @param {TrainSeriesFindUniqueArgs} args - Arguments to find a TrainSeries
     * @example
     * // Get one TrainSeries
     * const trainSeries = await prisma.trainSeries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainSeriesFindUniqueArgs>(args: SelectSubset<T, TrainSeriesFindUniqueArgs<ExtArgs>>): Prisma__TrainSeriesClient<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainSeries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainSeriesFindUniqueOrThrowArgs} args - Arguments to find a TrainSeries
     * @example
     * // Get one TrainSeries
     * const trainSeries = await prisma.trainSeries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainSeriesFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainSeriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainSeriesClient<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainSeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainSeriesFindFirstArgs} args - Arguments to find a TrainSeries
     * @example
     * // Get one TrainSeries
     * const trainSeries = await prisma.trainSeries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainSeriesFindFirstArgs>(args?: SelectSubset<T, TrainSeriesFindFirstArgs<ExtArgs>>): Prisma__TrainSeriesClient<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainSeries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainSeriesFindFirstOrThrowArgs} args - Arguments to find a TrainSeries
     * @example
     * // Get one TrainSeries
     * const trainSeries = await prisma.trainSeries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainSeriesFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainSeriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainSeriesClient<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainSeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainSeriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainSeries
     * const trainSeries = await prisma.trainSeries.findMany()
     * 
     * // Get first 10 TrainSeries
     * const trainSeries = await prisma.trainSeries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainSeriesWithIdOnly = await prisma.trainSeries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainSeriesFindManyArgs>(args?: SelectSubset<T, TrainSeriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainSeries.
     * @param {TrainSeriesCreateArgs} args - Arguments to create a TrainSeries.
     * @example
     * // Create one TrainSeries
     * const TrainSeries = await prisma.trainSeries.create({
     *   data: {
     *     // ... data to create a TrainSeries
     *   }
     * })
     * 
     */
    create<T extends TrainSeriesCreateArgs>(args: SelectSubset<T, TrainSeriesCreateArgs<ExtArgs>>): Prisma__TrainSeriesClient<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainSeries.
     * @param {TrainSeriesCreateManyArgs} args - Arguments to create many TrainSeries.
     * @example
     * // Create many TrainSeries
     * const trainSeries = await prisma.trainSeries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainSeriesCreateManyArgs>(args?: SelectSubset<T, TrainSeriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainSeries and returns the data saved in the database.
     * @param {TrainSeriesCreateManyAndReturnArgs} args - Arguments to create many TrainSeries.
     * @example
     * // Create many TrainSeries
     * const trainSeries = await prisma.trainSeries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainSeries and only return the `id`
     * const trainSeriesWithIdOnly = await prisma.trainSeries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainSeriesCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainSeriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrainSeries.
     * @param {TrainSeriesDeleteArgs} args - Arguments to delete one TrainSeries.
     * @example
     * // Delete one TrainSeries
     * const TrainSeries = await prisma.trainSeries.delete({
     *   where: {
     *     // ... filter to delete one TrainSeries
     *   }
     * })
     * 
     */
    delete<T extends TrainSeriesDeleteArgs>(args: SelectSubset<T, TrainSeriesDeleteArgs<ExtArgs>>): Prisma__TrainSeriesClient<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainSeries.
     * @param {TrainSeriesUpdateArgs} args - Arguments to update one TrainSeries.
     * @example
     * // Update one TrainSeries
     * const trainSeries = await prisma.trainSeries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainSeriesUpdateArgs>(args: SelectSubset<T, TrainSeriesUpdateArgs<ExtArgs>>): Prisma__TrainSeriesClient<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainSeries.
     * @param {TrainSeriesDeleteManyArgs} args - Arguments to filter TrainSeries to delete.
     * @example
     * // Delete a few TrainSeries
     * const { count } = await prisma.trainSeries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainSeriesDeleteManyArgs>(args?: SelectSubset<T, TrainSeriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainSeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainSeries
     * const trainSeries = await prisma.trainSeries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainSeriesUpdateManyArgs>(args: SelectSubset<T, TrainSeriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainSeries and returns the data updated in the database.
     * @param {TrainSeriesUpdateManyAndReturnArgs} args - Arguments to update many TrainSeries.
     * @example
     * // Update many TrainSeries
     * const trainSeries = await prisma.trainSeries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainSeries and only return the `id`
     * const trainSeriesWithIdOnly = await prisma.trainSeries.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrainSeriesUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainSeriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrainSeries.
     * @param {TrainSeriesUpsertArgs} args - Arguments to update or create a TrainSeries.
     * @example
     * // Update or create a TrainSeries
     * const trainSeries = await prisma.trainSeries.upsert({
     *   create: {
     *     // ... data to create a TrainSeries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainSeries we want to update
     *   }
     * })
     */
    upsert<T extends TrainSeriesUpsertArgs>(args: SelectSubset<T, TrainSeriesUpsertArgs<ExtArgs>>): Prisma__TrainSeriesClient<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrainSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainSeriesCountArgs} args - Arguments to filter TrainSeries to count.
     * @example
     * // Count the number of TrainSeries
     * const count = await prisma.trainSeries.count({
     *   where: {
     *     // ... the filter for the TrainSeries we want to count
     *   }
     * })
    **/
    count<T extends TrainSeriesCountArgs>(
      args?: Subset<T, TrainSeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainSeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainSeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainSeriesAggregateArgs>(args: Subset<T, TrainSeriesAggregateArgs>): Prisma.PrismaPromise<GetTrainSeriesAggregateType<T>>

    /**
     * Group by TrainSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainSeriesGroupByArgs} args - Group by arguments.
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
      T extends TrainSeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainSeriesGroupByArgs['orderBy'] }
        : { orderBy?: TrainSeriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainSeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainSeries model
   */
  readonly fields: TrainSeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainSeries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainSeriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends TrainSeries$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, TrainSeries$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TrainSeries model
   */
  interface TrainSeriesFieldRefs {
    readonly id: FieldRef<"TrainSeries", 'Int'>
    readonly name: FieldRef<"TrainSeries", 'String'>
    readonly description: FieldRef<"TrainSeries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrainSeries findUnique
   */
  export type TrainSeriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainSeriesInclude<ExtArgs> | null
    /**
     * Filter, which TrainSeries to fetch.
     */
    where: TrainSeriesWhereUniqueInput
  }

  /**
   * TrainSeries findUniqueOrThrow
   */
  export type TrainSeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainSeriesInclude<ExtArgs> | null
    /**
     * Filter, which TrainSeries to fetch.
     */
    where: TrainSeriesWhereUniqueInput
  }

  /**
   * TrainSeries findFirst
   */
  export type TrainSeriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainSeriesInclude<ExtArgs> | null
    /**
     * Filter, which TrainSeries to fetch.
     */
    where?: TrainSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainSeries to fetch.
     */
    orderBy?: TrainSeriesOrderByWithRelationInput | TrainSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainSeries.
     */
    cursor?: TrainSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainSeries.
     */
    distinct?: TrainSeriesScalarFieldEnum | TrainSeriesScalarFieldEnum[]
  }

  /**
   * TrainSeries findFirstOrThrow
   */
  export type TrainSeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainSeriesInclude<ExtArgs> | null
    /**
     * Filter, which TrainSeries to fetch.
     */
    where?: TrainSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainSeries to fetch.
     */
    orderBy?: TrainSeriesOrderByWithRelationInput | TrainSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainSeries.
     */
    cursor?: TrainSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainSeries.
     */
    distinct?: TrainSeriesScalarFieldEnum | TrainSeriesScalarFieldEnum[]
  }

  /**
   * TrainSeries findMany
   */
  export type TrainSeriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainSeriesInclude<ExtArgs> | null
    /**
     * Filter, which TrainSeries to fetch.
     */
    where?: TrainSeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainSeries to fetch.
     */
    orderBy?: TrainSeriesOrderByWithRelationInput | TrainSeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainSeries.
     */
    cursor?: TrainSeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainSeries.
     */
    skip?: number
    distinct?: TrainSeriesScalarFieldEnum | TrainSeriesScalarFieldEnum[]
  }

  /**
   * TrainSeries create
   */
  export type TrainSeriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainSeriesInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainSeries.
     */
    data: XOR<TrainSeriesCreateInput, TrainSeriesUncheckedCreateInput>
  }

  /**
   * TrainSeries createMany
   */
  export type TrainSeriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainSeries.
     */
    data: TrainSeriesCreateManyInput | TrainSeriesCreateManyInput[]
  }

  /**
   * TrainSeries createManyAndReturn
   */
  export type TrainSeriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * The data used to create many TrainSeries.
     */
    data: TrainSeriesCreateManyInput | TrainSeriesCreateManyInput[]
  }

  /**
   * TrainSeries update
   */
  export type TrainSeriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainSeriesInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainSeries.
     */
    data: XOR<TrainSeriesUpdateInput, TrainSeriesUncheckedUpdateInput>
    /**
     * Choose, which TrainSeries to update.
     */
    where: TrainSeriesWhereUniqueInput
  }

  /**
   * TrainSeries updateMany
   */
  export type TrainSeriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainSeries.
     */
    data: XOR<TrainSeriesUpdateManyMutationInput, TrainSeriesUncheckedUpdateManyInput>
    /**
     * Filter which TrainSeries to update
     */
    where?: TrainSeriesWhereInput
    /**
     * Limit how many TrainSeries to update.
     */
    limit?: number
  }

  /**
   * TrainSeries updateManyAndReturn
   */
  export type TrainSeriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * The data used to update TrainSeries.
     */
    data: XOR<TrainSeriesUpdateManyMutationInput, TrainSeriesUncheckedUpdateManyInput>
    /**
     * Filter which TrainSeries to update
     */
    where?: TrainSeriesWhereInput
    /**
     * Limit how many TrainSeries to update.
     */
    limit?: number
  }

  /**
   * TrainSeries upsert
   */
  export type TrainSeriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainSeriesInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainSeries to update in case it exists.
     */
    where: TrainSeriesWhereUniqueInput
    /**
     * In case the TrainSeries found by the `where` argument doesn't exist, create a new TrainSeries with this data.
     */
    create: XOR<TrainSeriesCreateInput, TrainSeriesUncheckedCreateInput>
    /**
     * In case the TrainSeries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainSeriesUpdateInput, TrainSeriesUncheckedUpdateInput>
  }

  /**
   * TrainSeries delete
   */
  export type TrainSeriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainSeriesInclude<ExtArgs> | null
    /**
     * Filter which TrainSeries to delete.
     */
    where: TrainSeriesWhereUniqueInput
  }

  /**
   * TrainSeries deleteMany
   */
  export type TrainSeriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainSeries to delete
     */
    where?: TrainSeriesWhereInput
    /**
     * Limit how many TrainSeries to delete.
     */
    limit?: number
  }

  /**
   * TrainSeries.categories
   */
  export type TrainSeries$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * TrainSeries without action
   */
  export type TrainSeriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainSeries
     */
    select?: TrainSeriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainSeries
     */
    omit?: TrainSeriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainSeriesInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    trainSeriesId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    trainSeriesId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    trainSeriesId: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    trainSeriesId: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    trainSeriesId: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    trainSeriesId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    trainSeriesId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    trainSeriesId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    trainSeriesId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    trainSeriesId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    description: string
    trainSeriesId: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    trainSeriesId?: boolean
    trainSeries?: boolean | TrainSeriesDefaultArgs<ExtArgs>
    parts?: boolean | Category$partsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    trainSeriesId?: boolean
    trainSeries?: boolean | TrainSeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    trainSeriesId?: boolean
    trainSeries?: boolean | TrainSeriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    trainSeriesId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "trainSeriesId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainSeries?: boolean | TrainSeriesDefaultArgs<ExtArgs>
    parts?: boolean | Category$partsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainSeries?: boolean | TrainSeriesDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainSeries?: boolean | TrainSeriesDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      trainSeries: Prisma.$TrainSeriesPayload<ExtArgs>
      parts: Prisma.$PartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      trainSeriesId: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trainSeries<T extends TrainSeriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrainSeriesDefaultArgs<ExtArgs>>): Prisma__TrainSeriesClient<$Result.GetResult<Prisma.$TrainSeriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parts<T extends Category$partsArgs<ExtArgs> = {}>(args?: Subset<T, Category$partsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly trainSeriesId: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parts
   */
  export type Category$partsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    where?: PartWhereInput
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    cursor?: PartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Part
   */

  export type AggregatePart = {
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  export type PartAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type PartSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type PartMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    partNumber: string | null
    categoryId: number | null
    imageUrl: string | null
  }

  export type PartMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    partNumber: string | null
    categoryId: number | null
    imageUrl: string | null
  }

  export type PartCountAggregateOutputType = {
    id: number
    name: number
    description: number
    partNumber: number
    categoryId: number
    imageUrl: number
    _all: number
  }


  export type PartAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type PartSumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type PartMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    partNumber?: true
    categoryId?: true
    imageUrl?: true
  }

  export type PartMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    partNumber?: true
    categoryId?: true
    imageUrl?: true
  }

  export type PartCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    partNumber?: true
    categoryId?: true
    imageUrl?: true
    _all?: true
  }

  export type PartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Part to aggregate.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parts
    **/
    _count?: true | PartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartMaxAggregateInputType
  }

  export type GetPartAggregateType<T extends PartAggregateArgs> = {
        [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePart[P]>
      : GetScalarType<T[P], AggregatePart[P]>
  }




  export type PartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartWhereInput
    orderBy?: PartOrderByWithAggregationInput | PartOrderByWithAggregationInput[]
    by: PartScalarFieldEnum[] | PartScalarFieldEnum
    having?: PartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartCountAggregateInputType | true
    _avg?: PartAvgAggregateInputType
    _sum?: PartSumAggregateInputType
    _min?: PartMinAggregateInputType
    _max?: PartMaxAggregateInputType
  }

  export type PartGroupByOutputType = {
    id: number
    name: string
    description: string
    partNumber: string
    categoryId: number
    imageUrl: string | null
    _count: PartCountAggregateOutputType | null
    _avg: PartAvgAggregateOutputType | null
    _sum: PartSumAggregateOutputType | null
    _min: PartMinAggregateOutputType | null
    _max: PartMaxAggregateOutputType | null
  }

  type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartGroupByOutputType[P]>
            : GetScalarType<T[P], PartGroupByOutputType[P]>
        }
      >
    >


  export type PartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    partNumber?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    partNumber?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    partNumber?: boolean
    categoryId?: boolean
    imageUrl?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["part"]>

  export type PartSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    partNumber?: boolean
    categoryId?: boolean
    imageUrl?: boolean
  }

  export type PartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "partNumber" | "categoryId" | "imageUrl", ExtArgs["result"]["part"]>
  export type PartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type PartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type PartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $PartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Part"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      partNumber: string
      categoryId: number
      imageUrl: string | null
    }, ExtArgs["result"]["part"]>
    composites: {}
  }

  type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = $Result.GetResult<Prisma.$PartPayload, S>

  type PartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartCountAggregateInputType | true
    }

  export interface PartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Part'], meta: { name: 'Part' } }
    /**
     * Find zero or one Part that matches the filter.
     * @param {PartFindUniqueArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartFindUniqueArgs>(args: SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Part that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartFindUniqueOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartFindFirstArgs>(args?: SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Part that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindFirstOrThrowArgs} args - Arguments to find a Part
     * @example
     * // Get one Part
     * const part = await prisma.part.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parts
     * const parts = await prisma.part.findMany()
     * 
     * // Get first 10 Parts
     * const parts = await prisma.part.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partWithIdOnly = await prisma.part.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartFindManyArgs>(args?: SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Part.
     * @param {PartCreateArgs} args - Arguments to create a Part.
     * @example
     * // Create one Part
     * const Part = await prisma.part.create({
     *   data: {
     *     // ... data to create a Part
     *   }
     * })
     * 
     */
    create<T extends PartCreateArgs>(args: SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parts.
     * @param {PartCreateManyArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartCreateManyArgs>(args?: SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parts and returns the data saved in the database.
     * @param {PartCreateManyAndReturnArgs} args - Arguments to create many Parts.
     * @example
     * // Create many Parts
     * const part = await prisma.part.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartCreateManyAndReturnArgs>(args?: SelectSubset<T, PartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Part.
     * @param {PartDeleteArgs} args - Arguments to delete one Part.
     * @example
     * // Delete one Part
     * const Part = await prisma.part.delete({
     *   where: {
     *     // ... filter to delete one Part
     *   }
     * })
     * 
     */
    delete<T extends PartDeleteArgs>(args: SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Part.
     * @param {PartUpdateArgs} args - Arguments to update one Part.
     * @example
     * // Update one Part
     * const part = await prisma.part.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartUpdateArgs>(args: SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parts.
     * @param {PartDeleteManyArgs} args - Arguments to filter Parts to delete.
     * @example
     * // Delete a few Parts
     * const { count } = await prisma.part.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartDeleteManyArgs>(args?: SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartUpdateManyArgs>(args: SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parts and returns the data updated in the database.
     * @param {PartUpdateManyAndReturnArgs} args - Arguments to update many Parts.
     * @example
     * // Update many Parts
     * const part = await prisma.part.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parts and only return the `id`
     * const partWithIdOnly = await prisma.part.updateManyAndReturn({
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
    updateManyAndReturn<T extends PartUpdateManyAndReturnArgs>(args: SelectSubset<T, PartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Part.
     * @param {PartUpsertArgs} args - Arguments to update or create a Part.
     * @example
     * // Update or create a Part
     * const part = await prisma.part.upsert({
     *   create: {
     *     // ... data to create a Part
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Part we want to update
     *   }
     * })
     */
    upsert<T extends PartUpsertArgs>(args: SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma__PartClient<$Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartCountArgs} args - Arguments to filter Parts to count.
     * @example
     * // Count the number of Parts
     * const count = await prisma.part.count({
     *   where: {
     *     // ... the filter for the Parts we want to count
     *   }
     * })
    **/
    count<T extends PartCountArgs>(
      args?: Subset<T, PartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartAggregateArgs>(args: Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>

    /**
     * Group by Part.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartGroupByArgs} args - Group by arguments.
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
      T extends PartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartGroupByArgs['orderBy'] }
        : { orderBy?: PartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Part model
   */
  readonly fields: PartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Part.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Part model
   */
  interface PartFieldRefs {
    readonly id: FieldRef<"Part", 'Int'>
    readonly name: FieldRef<"Part", 'String'>
    readonly description: FieldRef<"Part", 'String'>
    readonly partNumber: FieldRef<"Part", 'String'>
    readonly categoryId: FieldRef<"Part", 'Int'>
    readonly imageUrl: FieldRef<"Part", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Part findUnique
   */
  export type PartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findUniqueOrThrow
   */
  export type PartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part findFirst
   */
  export type PartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findFirstOrThrow
   */
  export type PartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Part to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parts.
     */
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part findMany
   */
  export type PartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter, which Parts to fetch.
     */
    where?: PartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parts to fetch.
     */
    orderBy?: PartOrderByWithRelationInput | PartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parts.
     */
    cursor?: PartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parts.
     */
    skip?: number
    distinct?: PartScalarFieldEnum | PartScalarFieldEnum[]
  }

  /**
   * Part create
   */
  export type PartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to create a Part.
     */
    data: XOR<PartCreateInput, PartUncheckedCreateInput>
  }

  /**
   * Part createMany
   */
  export type PartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
  }

  /**
   * Part createManyAndReturn
   */
  export type PartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to create many Parts.
     */
    data: PartCreateManyInput | PartCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Part update
   */
  export type PartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The data needed to update a Part.
     */
    data: XOR<PartUpdateInput, PartUncheckedUpdateInput>
    /**
     * Choose, which Part to update.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part updateMany
   */
  export type PartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
  }

  /**
   * Part updateManyAndReturn
   */
  export type PartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * The data used to update Parts.
     */
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyInput>
    /**
     * Filter which Parts to update
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Part upsert
   */
  export type PartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * The filter to search for the Part to update in case it exists.
     */
    where: PartWhereUniqueInput
    /**
     * In case the Part found by the `where` argument doesn't exist, create a new Part with this data.
     */
    create: XOR<PartCreateInput, PartUncheckedCreateInput>
    /**
     * In case the Part was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartUpdateInput, PartUncheckedUpdateInput>
  }

  /**
   * Part delete
   */
  export type PartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
    /**
     * Filter which Part to delete.
     */
    where: PartWhereUniqueInput
  }

  /**
   * Part deleteMany
   */
  export type PartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parts to delete
     */
    where?: PartWhereInput
    /**
     * Limit how many Parts to delete.
     */
    limit?: number
  }

  /**
   * Part without action
   */
  export type PartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Part
     */
    select?: PartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Part
     */
    omit?: PartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TrainSeriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type TrainSeriesScalarFieldEnum = (typeof TrainSeriesScalarFieldEnum)[keyof typeof TrainSeriesScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    trainSeriesId: 'trainSeriesId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PartScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    partNumber: 'partNumber',
    categoryId: 'categoryId',
    imageUrl: 'imageUrl'
  };

  export type PartScalarFieldEnum = (typeof PartScalarFieldEnum)[keyof typeof PartScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TrainSeriesWhereInput = {
    AND?: TrainSeriesWhereInput | TrainSeriesWhereInput[]
    OR?: TrainSeriesWhereInput[]
    NOT?: TrainSeriesWhereInput | TrainSeriesWhereInput[]
    id?: IntFilter<"TrainSeries"> | number
    name?: StringFilter<"TrainSeries"> | string
    description?: StringFilter<"TrainSeries"> | string
    categories?: CategoryListRelationFilter
  }

  export type TrainSeriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
  }

  export type TrainSeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TrainSeriesWhereInput | TrainSeriesWhereInput[]
    OR?: TrainSeriesWhereInput[]
    NOT?: TrainSeriesWhereInput | TrainSeriesWhereInput[]
    name?: StringFilter<"TrainSeries"> | string
    description?: StringFilter<"TrainSeries"> | string
    categories?: CategoryListRelationFilter
  }, "id">

  export type TrainSeriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: TrainSeriesCountOrderByAggregateInput
    _avg?: TrainSeriesAvgOrderByAggregateInput
    _max?: TrainSeriesMaxOrderByAggregateInput
    _min?: TrainSeriesMinOrderByAggregateInput
    _sum?: TrainSeriesSumOrderByAggregateInput
  }

  export type TrainSeriesScalarWhereWithAggregatesInput = {
    AND?: TrainSeriesScalarWhereWithAggregatesInput | TrainSeriesScalarWhereWithAggregatesInput[]
    OR?: TrainSeriesScalarWhereWithAggregatesInput[]
    NOT?: TrainSeriesScalarWhereWithAggregatesInput | TrainSeriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrainSeries"> | number
    name?: StringWithAggregatesFilter<"TrainSeries"> | string
    description?: StringWithAggregatesFilter<"TrainSeries"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    trainSeriesId?: IntFilter<"Category"> | number
    trainSeries?: XOR<TrainSeriesScalarRelationFilter, TrainSeriesWhereInput>
    parts?: PartListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trainSeriesId?: SortOrder
    trainSeries?: TrainSeriesOrderByWithRelationInput
    parts?: PartOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    trainSeriesId?: IntFilter<"Category"> | number
    trainSeries?: XOR<TrainSeriesScalarRelationFilter, TrainSeriesWhereInput>
    parts?: PartListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trainSeriesId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
    trainSeriesId?: IntWithAggregatesFilter<"Category"> | number
  }

  export type PartWhereInput = {
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    id?: IntFilter<"Part"> | number
    name?: StringFilter<"Part"> | string
    description?: StringFilter<"Part"> | string
    partNumber?: StringFilter<"Part"> | string
    categoryId?: IntFilter<"Part"> | number
    imageUrl?: StringNullableFilter<"Part"> | string | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type PartOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partNumber?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
  }

  export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartWhereInput | PartWhereInput[]
    OR?: PartWhereInput[]
    NOT?: PartWhereInput | PartWhereInput[]
    name?: StringFilter<"Part"> | string
    description?: StringFilter<"Part"> | string
    partNumber?: StringFilter<"Part"> | string
    categoryId?: IntFilter<"Part"> | number
    imageUrl?: StringNullableFilter<"Part"> | string | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type PartOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partNumber?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: PartCountOrderByAggregateInput
    _avg?: PartAvgOrderByAggregateInput
    _max?: PartMaxOrderByAggregateInput
    _min?: PartMinOrderByAggregateInput
    _sum?: PartSumOrderByAggregateInput
  }

  export type PartScalarWhereWithAggregatesInput = {
    AND?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    OR?: PartScalarWhereWithAggregatesInput[]
    NOT?: PartScalarWhereWithAggregatesInput | PartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Part"> | number
    name?: StringWithAggregatesFilter<"Part"> | string
    description?: StringWithAggregatesFilter<"Part"> | string
    partNumber?: StringWithAggregatesFilter<"Part"> | string
    categoryId?: IntWithAggregatesFilter<"Part"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Part"> | string | null
  }

  export type TrainSeriesCreateInput = {
    name: string
    description: string
    categories?: CategoryCreateNestedManyWithoutTrainSeriesInput
  }

  export type TrainSeriesUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    categories?: CategoryUncheckedCreateNestedManyWithoutTrainSeriesInput
  }

  export type TrainSeriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUpdateManyWithoutTrainSeriesNestedInput
  }

  export type TrainSeriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: CategoryUncheckedUpdateManyWithoutTrainSeriesNestedInput
  }

  export type TrainSeriesCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type TrainSeriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TrainSeriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    description: string
    trainSeries: TrainSeriesCreateNestedOneWithoutCategoriesInput
    parts?: PartCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    trainSeriesId: number
    parts?: PartUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    trainSeries?: TrainSeriesUpdateOneRequiredWithoutCategoriesNestedInput
    parts?: PartUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    trainSeriesId?: IntFieldUpdateOperationsInput | number
    parts?: PartUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    description: string
    trainSeriesId: number
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    trainSeriesId?: IntFieldUpdateOperationsInput | number
  }

  export type PartCreateInput = {
    name: string
    description: string
    partNumber: string
    imageUrl?: string | null
    category: CategoryCreateNestedOneWithoutPartsInput
  }

  export type PartUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    partNumber: string
    categoryId: number
    imageUrl?: string | null
  }

  export type PartUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutPartsNestedInput
  }

  export type PartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartCreateManyInput = {
    id?: number
    name: string
    description: string
    partNumber: string
    categoryId: number
    imageUrl?: string | null
  }

  export type PartUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrainSeriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TrainSeriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrainSeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TrainSeriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type TrainSeriesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TrainSeriesScalarRelationFilter = {
    is?: TrainSeriesWhereInput
    isNot?: TrainSeriesWhereInput
  }

  export type PartListRelationFilter = {
    every?: PartWhereInput
    some?: PartWhereInput
    none?: PartWhereInput
  }

  export type PartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trainSeriesId?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    trainSeriesId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trainSeriesId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    trainSeriesId?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    trainSeriesId?: SortOrder
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PartCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partNumber?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrder
  }

  export type PartAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type PartMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partNumber?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrder
  }

  export type PartMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    partNumber?: SortOrder
    categoryId?: SortOrder
    imageUrl?: SortOrder
  }

  export type PartSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
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

  export type CategoryCreateNestedManyWithoutTrainSeriesInput = {
    create?: XOR<CategoryCreateWithoutTrainSeriesInput, CategoryUncheckedCreateWithoutTrainSeriesInput> | CategoryCreateWithoutTrainSeriesInput[] | CategoryUncheckedCreateWithoutTrainSeriesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTrainSeriesInput | CategoryCreateOrConnectWithoutTrainSeriesInput[]
    createMany?: CategoryCreateManyTrainSeriesInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutTrainSeriesInput = {
    create?: XOR<CategoryCreateWithoutTrainSeriesInput, CategoryUncheckedCreateWithoutTrainSeriesInput> | CategoryCreateWithoutTrainSeriesInput[] | CategoryUncheckedCreateWithoutTrainSeriesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTrainSeriesInput | CategoryCreateOrConnectWithoutTrainSeriesInput[]
    createMany?: CategoryCreateManyTrainSeriesInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CategoryUpdateManyWithoutTrainSeriesNestedInput = {
    create?: XOR<CategoryCreateWithoutTrainSeriesInput, CategoryUncheckedCreateWithoutTrainSeriesInput> | CategoryCreateWithoutTrainSeriesInput[] | CategoryUncheckedCreateWithoutTrainSeriesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTrainSeriesInput | CategoryCreateOrConnectWithoutTrainSeriesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutTrainSeriesInput | CategoryUpsertWithWhereUniqueWithoutTrainSeriesInput[]
    createMany?: CategoryCreateManyTrainSeriesInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutTrainSeriesInput | CategoryUpdateWithWhereUniqueWithoutTrainSeriesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutTrainSeriesInput | CategoryUpdateManyWithWhereWithoutTrainSeriesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUncheckedUpdateManyWithoutTrainSeriesNestedInput = {
    create?: XOR<CategoryCreateWithoutTrainSeriesInput, CategoryUncheckedCreateWithoutTrainSeriesInput> | CategoryCreateWithoutTrainSeriesInput[] | CategoryUncheckedCreateWithoutTrainSeriesInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutTrainSeriesInput | CategoryCreateOrConnectWithoutTrainSeriesInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutTrainSeriesInput | CategoryUpsertWithWhereUniqueWithoutTrainSeriesInput[]
    createMany?: CategoryCreateManyTrainSeriesInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutTrainSeriesInput | CategoryUpdateWithWhereUniqueWithoutTrainSeriesInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutTrainSeriesInput | CategoryUpdateManyWithWhereWithoutTrainSeriesInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TrainSeriesCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<TrainSeriesCreateWithoutCategoriesInput, TrainSeriesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TrainSeriesCreateOrConnectWithoutCategoriesInput
    connect?: TrainSeriesWhereUniqueInput
  }

  export type PartCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PartCreateWithoutCategoryInput, PartUncheckedCreateWithoutCategoryInput> | PartCreateWithoutCategoryInput[] | PartUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PartCreateOrConnectWithoutCategoryInput | PartCreateOrConnectWithoutCategoryInput[]
    createMany?: PartCreateManyCategoryInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type PartUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PartCreateWithoutCategoryInput, PartUncheckedCreateWithoutCategoryInput> | PartCreateWithoutCategoryInput[] | PartUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PartCreateOrConnectWithoutCategoryInput | PartCreateOrConnectWithoutCategoryInput[]
    createMany?: PartCreateManyCategoryInputEnvelope
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
  }

  export type TrainSeriesUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<TrainSeriesCreateWithoutCategoriesInput, TrainSeriesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TrainSeriesCreateOrConnectWithoutCategoriesInput
    upsert?: TrainSeriesUpsertWithoutCategoriesInput
    connect?: TrainSeriesWhereUniqueInput
    update?: XOR<XOR<TrainSeriesUpdateToOneWithWhereWithoutCategoriesInput, TrainSeriesUpdateWithoutCategoriesInput>, TrainSeriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type PartUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PartCreateWithoutCategoryInput, PartUncheckedCreateWithoutCategoryInput> | PartCreateWithoutCategoryInput[] | PartUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PartCreateOrConnectWithoutCategoryInput | PartCreateOrConnectWithoutCategoryInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutCategoryInput | PartUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PartCreateManyCategoryInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutCategoryInput | PartUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PartUpdateManyWithWhereWithoutCategoryInput | PartUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type PartUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PartCreateWithoutCategoryInput, PartUncheckedCreateWithoutCategoryInput> | PartCreateWithoutCategoryInput[] | PartUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PartCreateOrConnectWithoutCategoryInput | PartCreateOrConnectWithoutCategoryInput[]
    upsert?: PartUpsertWithWhereUniqueWithoutCategoryInput | PartUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PartCreateManyCategoryInputEnvelope
    set?: PartWhereUniqueInput | PartWhereUniqueInput[]
    disconnect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    delete?: PartWhereUniqueInput | PartWhereUniqueInput[]
    connect?: PartWhereUniqueInput | PartWhereUniqueInput[]
    update?: PartUpdateWithWhereUniqueWithoutCategoryInput | PartUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PartUpdateManyWithWhereWithoutCategoryInput | PartUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PartScalarWhereInput | PartScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutPartsInput = {
    create?: XOR<CategoryCreateWithoutPartsInput, CategoryUncheckedCreateWithoutPartsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPartsInput
    connect?: CategoryWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryUpdateOneRequiredWithoutPartsNestedInput = {
    create?: XOR<CategoryCreateWithoutPartsInput, CategoryUncheckedCreateWithoutPartsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPartsInput
    upsert?: CategoryUpsertWithoutPartsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPartsInput, CategoryUpdateWithoutPartsInput>, CategoryUncheckedUpdateWithoutPartsInput>
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

  export type CategoryCreateWithoutTrainSeriesInput = {
    name: string
    description: string
    parts?: PartCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutTrainSeriesInput = {
    id?: number
    name: string
    description: string
    parts?: PartUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutTrainSeriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutTrainSeriesInput, CategoryUncheckedCreateWithoutTrainSeriesInput>
  }

  export type CategoryCreateManyTrainSeriesInputEnvelope = {
    data: CategoryCreateManyTrainSeriesInput | CategoryCreateManyTrainSeriesInput[]
  }

  export type CategoryUpsertWithWhereUniqueWithoutTrainSeriesInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutTrainSeriesInput, CategoryUncheckedUpdateWithoutTrainSeriesInput>
    create: XOR<CategoryCreateWithoutTrainSeriesInput, CategoryUncheckedCreateWithoutTrainSeriesInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutTrainSeriesInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutTrainSeriesInput, CategoryUncheckedUpdateWithoutTrainSeriesInput>
  }

  export type CategoryUpdateManyWithWhereWithoutTrainSeriesInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutTrainSeriesInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    trainSeriesId?: IntFilter<"Category"> | number
  }

  export type TrainSeriesCreateWithoutCategoriesInput = {
    name: string
    description: string
  }

  export type TrainSeriesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    description: string
  }

  export type TrainSeriesCreateOrConnectWithoutCategoriesInput = {
    where: TrainSeriesWhereUniqueInput
    create: XOR<TrainSeriesCreateWithoutCategoriesInput, TrainSeriesUncheckedCreateWithoutCategoriesInput>
  }

  export type PartCreateWithoutCategoryInput = {
    name: string
    description: string
    partNumber: string
    imageUrl?: string | null
  }

  export type PartUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description: string
    partNumber: string
    imageUrl?: string | null
  }

  export type PartCreateOrConnectWithoutCategoryInput = {
    where: PartWhereUniqueInput
    create: XOR<PartCreateWithoutCategoryInput, PartUncheckedCreateWithoutCategoryInput>
  }

  export type PartCreateManyCategoryInputEnvelope = {
    data: PartCreateManyCategoryInput | PartCreateManyCategoryInput[]
  }

  export type TrainSeriesUpsertWithoutCategoriesInput = {
    update: XOR<TrainSeriesUpdateWithoutCategoriesInput, TrainSeriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<TrainSeriesCreateWithoutCategoriesInput, TrainSeriesUncheckedCreateWithoutCategoriesInput>
    where?: TrainSeriesWhereInput
  }

  export type TrainSeriesUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: TrainSeriesWhereInput
    data: XOR<TrainSeriesUpdateWithoutCategoriesInput, TrainSeriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type TrainSeriesUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TrainSeriesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PartUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PartWhereUniqueInput
    update: XOR<PartUpdateWithoutCategoryInput, PartUncheckedUpdateWithoutCategoryInput>
    create: XOR<PartCreateWithoutCategoryInput, PartUncheckedCreateWithoutCategoryInput>
  }

  export type PartUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PartWhereUniqueInput
    data: XOR<PartUpdateWithoutCategoryInput, PartUncheckedUpdateWithoutCategoryInput>
  }

  export type PartUpdateManyWithWhereWithoutCategoryInput = {
    where: PartScalarWhereInput
    data: XOR<PartUpdateManyMutationInput, PartUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PartScalarWhereInput = {
    AND?: PartScalarWhereInput | PartScalarWhereInput[]
    OR?: PartScalarWhereInput[]
    NOT?: PartScalarWhereInput | PartScalarWhereInput[]
    id?: IntFilter<"Part"> | number
    name?: StringFilter<"Part"> | string
    description?: StringFilter<"Part"> | string
    partNumber?: StringFilter<"Part"> | string
    categoryId?: IntFilter<"Part"> | number
    imageUrl?: StringNullableFilter<"Part"> | string | null
  }

  export type CategoryCreateWithoutPartsInput = {
    name: string
    description: string
    trainSeries: TrainSeriesCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutPartsInput = {
    id?: number
    name: string
    description: string
    trainSeriesId: number
  }

  export type CategoryCreateOrConnectWithoutPartsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPartsInput, CategoryUncheckedCreateWithoutPartsInput>
  }

  export type CategoryUpsertWithoutPartsInput = {
    update: XOR<CategoryUpdateWithoutPartsInput, CategoryUncheckedUpdateWithoutPartsInput>
    create: XOR<CategoryCreateWithoutPartsInput, CategoryUncheckedCreateWithoutPartsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPartsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPartsInput, CategoryUncheckedUpdateWithoutPartsInput>
  }

  export type CategoryUpdateWithoutPartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    trainSeries?: TrainSeriesUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    trainSeriesId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateManyTrainSeriesInput = {
    id?: number
    name: string
    description: string
  }

  export type CategoryUpdateWithoutTrainSeriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parts?: PartUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutTrainSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    parts?: PartUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutTrainSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PartCreateManyCategoryInput = {
    id?: number
    name: string
    description: string
    partNumber: string
    imageUrl?: string | null
  }

  export type PartUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    partNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
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