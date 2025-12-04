
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Encuestado
 * 
 */
export type Encuestado = $Result.DefaultSelection<Prisma.$EncuestadoPayload>
/**
 * Model Pregunta
 * 
 */
export type Pregunta = $Result.DefaultSelection<Prisma.$PreguntaPayload>
/**
 * Model Respuesta
 * 
 */
export type Respuesta = $Result.DefaultSelection<Prisma.$RespuestaPayload>
/**
 * Model Resultado
 * 
 */
export type Resultado = $Result.DefaultSelection<Prisma.$ResultadoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusEncuesta: {
  PENDIENTE: 'PENDIENTE',
  EN_PROCESO: 'EN_PROCESO',
  COMPLETADO: 'COMPLETADO'
};

export type StatusEncuesta = (typeof StatusEncuesta)[keyof typeof StatusEncuesta]

}

export type StatusEncuesta = $Enums.StatusEncuesta

export const StatusEncuesta: typeof $Enums.StatusEncuesta

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.encuestado`: Exposes CRUD operations for the **Encuestado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Encuestados
    * const encuestados = await prisma.encuestado.findMany()
    * ```
    */
  get encuestado(): Prisma.EncuestadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pregunta`: Exposes CRUD operations for the **Pregunta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preguntas
    * const preguntas = await prisma.pregunta.findMany()
    * ```
    */
  get pregunta(): Prisma.PreguntaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.respuesta`: Exposes CRUD operations for the **Respuesta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Respuestas
    * const respuestas = await prisma.respuesta.findMany()
    * ```
    */
  get respuesta(): Prisma.RespuestaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resultado`: Exposes CRUD operations for the **Resultado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resultados
    * const resultados = await prisma.resultado.findMany()
    * ```
    */
  get resultado(): Prisma.ResultadoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Usuario: 'Usuario',
    Empresa: 'Empresa',
    Encuestado: 'Encuestado',
    Pregunta: 'Pregunta',
    Respuesta: 'Respuesta',
    Resultado: 'Resultado'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "empresa" | "encuestado" | "pregunta" | "respuesta" | "resultado"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Encuestado: {
        payload: Prisma.$EncuestadoPayload<ExtArgs>
        fields: Prisma.EncuestadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EncuestadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EncuestadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload>
          }
          findFirst: {
            args: Prisma.EncuestadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EncuestadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload>
          }
          findMany: {
            args: Prisma.EncuestadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload>[]
          }
          create: {
            args: Prisma.EncuestadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload>
          }
          createMany: {
            args: Prisma.EncuestadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EncuestadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload>[]
          }
          delete: {
            args: Prisma.EncuestadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload>
          }
          update: {
            args: Prisma.EncuestadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload>
          }
          deleteMany: {
            args: Prisma.EncuestadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EncuestadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EncuestadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload>[]
          }
          upsert: {
            args: Prisma.EncuestadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EncuestadoPayload>
          }
          aggregate: {
            args: Prisma.EncuestadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEncuestado>
          }
          groupBy: {
            args: Prisma.EncuestadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EncuestadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EncuestadoCountArgs<ExtArgs>
            result: $Utils.Optional<EncuestadoCountAggregateOutputType> | number
          }
        }
      }
      Pregunta: {
        payload: Prisma.$PreguntaPayload<ExtArgs>
        fields: Prisma.PreguntaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreguntaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreguntaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload>
          }
          findFirst: {
            args: Prisma.PreguntaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreguntaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload>
          }
          findMany: {
            args: Prisma.PreguntaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload>[]
          }
          create: {
            args: Prisma.PreguntaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload>
          }
          createMany: {
            args: Prisma.PreguntaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreguntaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload>[]
          }
          delete: {
            args: Prisma.PreguntaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload>
          }
          update: {
            args: Prisma.PreguntaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload>
          }
          deleteMany: {
            args: Prisma.PreguntaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreguntaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreguntaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload>[]
          }
          upsert: {
            args: Prisma.PreguntaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreguntaPayload>
          }
          aggregate: {
            args: Prisma.PreguntaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePregunta>
          }
          groupBy: {
            args: Prisma.PreguntaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreguntaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreguntaCountArgs<ExtArgs>
            result: $Utils.Optional<PreguntaCountAggregateOutputType> | number
          }
        }
      }
      Respuesta: {
        payload: Prisma.$RespuestaPayload<ExtArgs>
        fields: Prisma.RespuestaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RespuestaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RespuestaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          findFirst: {
            args: Prisma.RespuestaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RespuestaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          findMany: {
            args: Prisma.RespuestaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>[]
          }
          create: {
            args: Prisma.RespuestaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          createMany: {
            args: Prisma.RespuestaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RespuestaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>[]
          }
          delete: {
            args: Prisma.RespuestaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          update: {
            args: Prisma.RespuestaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          deleteMany: {
            args: Prisma.RespuestaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RespuestaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RespuestaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>[]
          }
          upsert: {
            args: Prisma.RespuestaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RespuestaPayload>
          }
          aggregate: {
            args: Prisma.RespuestaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRespuesta>
          }
          groupBy: {
            args: Prisma.RespuestaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RespuestaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RespuestaCountArgs<ExtArgs>
            result: $Utils.Optional<RespuestaCountAggregateOutputType> | number
          }
        }
      }
      Resultado: {
        payload: Prisma.$ResultadoPayload<ExtArgs>
        fields: Prisma.ResultadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          findFirst: {
            args: Prisma.ResultadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          findMany: {
            args: Prisma.ResultadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>[]
          }
          create: {
            args: Prisma.ResultadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          createMany: {
            args: Prisma.ResultadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>[]
          }
          delete: {
            args: Prisma.ResultadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          update: {
            args: Prisma.ResultadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          deleteMany: {
            args: Prisma.ResultadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>[]
          }
          upsert: {
            args: Prisma.ResultadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultadoPayload>
          }
          aggregate: {
            args: Prisma.ResultadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResultado>
          }
          groupBy: {
            args: Prisma.ResultadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultadoCountArgs<ExtArgs>
            result: $Utils.Optional<ResultadoCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    empresa?: EmpresaOmit
    encuestado?: EncuestadoOmit
    pregunta?: PreguntaOmit
    respuesta?: RespuestaOmit
    resultado?: ResultadoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    empresas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | UsuarioCountOutputTypeCountEmpresasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEmpresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
  }


  /**
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    encuestados: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encuestados?: boolean | EmpresaCountOutputTypeCountEncuestadosArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountEncuestadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncuestadoWhereInput
  }


  /**
   * Count Type EncuestadoCountOutputType
   */

  export type EncuestadoCountOutputType = {
    respuestas: number
  }

  export type EncuestadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respuestas?: boolean | EncuestadoCountOutputTypeCountRespuestasArgs
  }

  // Custom InputTypes
  /**
   * EncuestadoCountOutputType without action
   */
  export type EncuestadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EncuestadoCountOutputType
     */
    select?: EncuestadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EncuestadoCountOutputType without action
   */
  export type EncuestadoCountOutputTypeCountRespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestaWhereInput
  }


  /**
   * Count Type PreguntaCountOutputType
   */

  export type PreguntaCountOutputType = {
    respuestas: number
  }

  export type PreguntaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respuestas?: boolean | PreguntaCountOutputTypeCountRespuestasArgs
  }

  // Custom InputTypes
  /**
   * PreguntaCountOutputType without action
   */
  export type PreguntaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreguntaCountOutputType
     */
    select?: PreguntaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PreguntaCountOutputType without action
   */
  export type PreguntaCountOutputTypeCountRespuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nombre: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nombre: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nombre: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    password: string
    nombre: string
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empresas?: boolean | Usuario$empresasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nombre" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | Usuario$empresasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      empresas: Prisma.$EmpresaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      nombre: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresas<T extends Usuario$empresasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$empresasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.empresas
   */
  export type Usuario$empresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    cursor?: EmpresaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    razonSocial: string | null
    contacto: string | null
    email: string | null
    telefono: string | null
    usuarioId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    razonSocial: string | null
    contacto: string | null
    email: string | null
    telefono: string | null
    usuarioId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    nombre: number
    razonSocial: number
    contacto: number
    email: number
    telefono: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmpresaMinAggregateInputType = {
    id?: true
    nombre?: true
    razonSocial?: true
    contacto?: true
    email?: true
    telefono?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    nombre?: true
    razonSocial?: true
    contacto?: true
    email?: true
    telefono?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    nombre?: true
    razonSocial?: true
    contacto?: true
    email?: true
    telefono?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: string
    nombre: string
    razonSocial: string | null
    contacto: string | null
    email: string | null
    telefono: string | null
    usuarioId: string
    createdAt: Date
    updatedAt: Date
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    razonSocial?: boolean
    contacto?: boolean
    email?: boolean
    telefono?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    encuestados?: boolean | Empresa$encuestadosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    razonSocial?: boolean
    contacto?: boolean
    email?: boolean
    telefono?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    razonSocial?: boolean
    contacto?: boolean
    email?: boolean
    telefono?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id?: boolean
    nombre?: boolean
    razonSocial?: boolean
    contacto?: boolean
    email?: boolean
    telefono?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "razonSocial" | "contacto" | "email" | "telefono" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    encuestados?: boolean | Empresa$encuestadosArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type EmpresaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      encuestados: Prisma.$EncuestadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      razonSocial: string | null
      contacto: string | null
      email: string | null
      telefono: string | null
      usuarioId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    encuestados<T extends Empresa$encuestadosArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$encuestadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'String'>
    readonly nombre: FieldRef<"Empresa", 'String'>
    readonly razonSocial: FieldRef<"Empresa", 'String'>
    readonly contacto: FieldRef<"Empresa", 'String'>
    readonly email: FieldRef<"Empresa", 'String'>
    readonly telefono: FieldRef<"Empresa", 'String'>
    readonly usuarioId: FieldRef<"Empresa", 'String'>
    readonly createdAt: FieldRef<"Empresa", 'DateTime'>
    readonly updatedAt: FieldRef<"Empresa", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa updateManyAndReturn
   */
  export type EmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.encuestados
   */
  export type Empresa$encuestadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
    where?: EncuestadoWhereInput
    orderBy?: EncuestadoOrderByWithRelationInput | EncuestadoOrderByWithRelationInput[]
    cursor?: EncuestadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EncuestadoScalarFieldEnum | EncuestadoScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Encuestado
   */

  export type AggregateEncuestado = {
    _count: EncuestadoCountAggregateOutputType | null
    _min: EncuestadoMinAggregateOutputType | null
    _max: EncuestadoMaxAggregateOutputType | null
  }

  export type EncuestadoMinAggregateOutputType = {
    id: string | null
    codigo: string | null
    nombre: string | null
    email: string | null
    puesto: string | null
    departamento: string | null
    empresaId: string | null
    status: $Enums.StatusEncuesta | null
    fechaInicio: Date | null
    fechaCompletado: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EncuestadoMaxAggregateOutputType = {
    id: string | null
    codigo: string | null
    nombre: string | null
    email: string | null
    puesto: string | null
    departamento: string | null
    empresaId: string | null
    status: $Enums.StatusEncuesta | null
    fechaInicio: Date | null
    fechaCompletado: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EncuestadoCountAggregateOutputType = {
    id: number
    codigo: number
    nombre: number
    email: number
    puesto: number
    departamento: number
    empresaId: number
    status: number
    fechaInicio: number
    fechaCompletado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EncuestadoMinAggregateInputType = {
    id?: true
    codigo?: true
    nombre?: true
    email?: true
    puesto?: true
    departamento?: true
    empresaId?: true
    status?: true
    fechaInicio?: true
    fechaCompletado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EncuestadoMaxAggregateInputType = {
    id?: true
    codigo?: true
    nombre?: true
    email?: true
    puesto?: true
    departamento?: true
    empresaId?: true
    status?: true
    fechaInicio?: true
    fechaCompletado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EncuestadoCountAggregateInputType = {
    id?: true
    codigo?: true
    nombre?: true
    email?: true
    puesto?: true
    departamento?: true
    empresaId?: true
    status?: true
    fechaInicio?: true
    fechaCompletado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EncuestadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Encuestado to aggregate.
     */
    where?: EncuestadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encuestados to fetch.
     */
    orderBy?: EncuestadoOrderByWithRelationInput | EncuestadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EncuestadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encuestados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encuestados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Encuestados
    **/
    _count?: true | EncuestadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EncuestadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EncuestadoMaxAggregateInputType
  }

  export type GetEncuestadoAggregateType<T extends EncuestadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEncuestado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEncuestado[P]>
      : GetScalarType<T[P], AggregateEncuestado[P]>
  }




  export type EncuestadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EncuestadoWhereInput
    orderBy?: EncuestadoOrderByWithAggregationInput | EncuestadoOrderByWithAggregationInput[]
    by: EncuestadoScalarFieldEnum[] | EncuestadoScalarFieldEnum
    having?: EncuestadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EncuestadoCountAggregateInputType | true
    _min?: EncuestadoMinAggregateInputType
    _max?: EncuestadoMaxAggregateInputType
  }

  export type EncuestadoGroupByOutputType = {
    id: string
    codigo: string
    nombre: string
    email: string | null
    puesto: string | null
    departamento: string | null
    empresaId: string
    status: $Enums.StatusEncuesta
    fechaInicio: Date | null
    fechaCompletado: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EncuestadoCountAggregateOutputType | null
    _min: EncuestadoMinAggregateOutputType | null
    _max: EncuestadoMaxAggregateOutputType | null
  }

  type GetEncuestadoGroupByPayload<T extends EncuestadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EncuestadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EncuestadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EncuestadoGroupByOutputType[P]>
            : GetScalarType<T[P], EncuestadoGroupByOutputType[P]>
        }
      >
    >


  export type EncuestadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    nombre?: boolean
    email?: boolean
    puesto?: boolean
    departamento?: boolean
    empresaId?: boolean
    status?: boolean
    fechaInicio?: boolean
    fechaCompletado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    respuestas?: boolean | Encuestado$respuestasArgs<ExtArgs>
    resultado?: boolean | Encuestado$resultadoArgs<ExtArgs>
    _count?: boolean | EncuestadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encuestado"]>

  export type EncuestadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    nombre?: boolean
    email?: boolean
    puesto?: boolean
    departamento?: boolean
    empresaId?: boolean
    status?: boolean
    fechaInicio?: boolean
    fechaCompletado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encuestado"]>

  export type EncuestadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    nombre?: boolean
    email?: boolean
    puesto?: boolean
    departamento?: boolean
    empresaId?: boolean
    status?: boolean
    fechaInicio?: boolean
    fechaCompletado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["encuestado"]>

  export type EncuestadoSelectScalar = {
    id?: boolean
    codigo?: boolean
    nombre?: boolean
    email?: boolean
    puesto?: boolean
    departamento?: boolean
    empresaId?: boolean
    status?: boolean
    fechaInicio?: boolean
    fechaCompletado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EncuestadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "nombre" | "email" | "puesto" | "departamento" | "empresaId" | "status" | "fechaInicio" | "fechaCompletado" | "createdAt" | "updatedAt", ExtArgs["result"]["encuestado"]>
  export type EncuestadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    respuestas?: boolean | Encuestado$respuestasArgs<ExtArgs>
    resultado?: boolean | Encuestado$resultadoArgs<ExtArgs>
    _count?: boolean | EncuestadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EncuestadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type EncuestadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $EncuestadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Encuestado"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      respuestas: Prisma.$RespuestaPayload<ExtArgs>[]
      resultado: Prisma.$ResultadoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo: string
      nombre: string
      email: string | null
      puesto: string | null
      departamento: string | null
      empresaId: string
      status: $Enums.StatusEncuesta
      fechaInicio: Date | null
      fechaCompletado: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["encuestado"]>
    composites: {}
  }

  type EncuestadoGetPayload<S extends boolean | null | undefined | EncuestadoDefaultArgs> = $Result.GetResult<Prisma.$EncuestadoPayload, S>

  type EncuestadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EncuestadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EncuestadoCountAggregateInputType | true
    }

  export interface EncuestadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Encuestado'], meta: { name: 'Encuestado' } }
    /**
     * Find zero or one Encuestado that matches the filter.
     * @param {EncuestadoFindUniqueArgs} args - Arguments to find a Encuestado
     * @example
     * // Get one Encuestado
     * const encuestado = await prisma.encuestado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EncuestadoFindUniqueArgs>(args: SelectSubset<T, EncuestadoFindUniqueArgs<ExtArgs>>): Prisma__EncuestadoClient<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Encuestado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EncuestadoFindUniqueOrThrowArgs} args - Arguments to find a Encuestado
     * @example
     * // Get one Encuestado
     * const encuestado = await prisma.encuestado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EncuestadoFindUniqueOrThrowArgs>(args: SelectSubset<T, EncuestadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EncuestadoClient<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Encuestado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncuestadoFindFirstArgs} args - Arguments to find a Encuestado
     * @example
     * // Get one Encuestado
     * const encuestado = await prisma.encuestado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EncuestadoFindFirstArgs>(args?: SelectSubset<T, EncuestadoFindFirstArgs<ExtArgs>>): Prisma__EncuestadoClient<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Encuestado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncuestadoFindFirstOrThrowArgs} args - Arguments to find a Encuestado
     * @example
     * // Get one Encuestado
     * const encuestado = await prisma.encuestado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EncuestadoFindFirstOrThrowArgs>(args?: SelectSubset<T, EncuestadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EncuestadoClient<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Encuestados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncuestadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Encuestados
     * const encuestados = await prisma.encuestado.findMany()
     * 
     * // Get first 10 Encuestados
     * const encuestados = await prisma.encuestado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const encuestadoWithIdOnly = await prisma.encuestado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EncuestadoFindManyArgs>(args?: SelectSubset<T, EncuestadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Encuestado.
     * @param {EncuestadoCreateArgs} args - Arguments to create a Encuestado.
     * @example
     * // Create one Encuestado
     * const Encuestado = await prisma.encuestado.create({
     *   data: {
     *     // ... data to create a Encuestado
     *   }
     * })
     * 
     */
    create<T extends EncuestadoCreateArgs>(args: SelectSubset<T, EncuestadoCreateArgs<ExtArgs>>): Prisma__EncuestadoClient<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Encuestados.
     * @param {EncuestadoCreateManyArgs} args - Arguments to create many Encuestados.
     * @example
     * // Create many Encuestados
     * const encuestado = await prisma.encuestado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EncuestadoCreateManyArgs>(args?: SelectSubset<T, EncuestadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Encuestados and returns the data saved in the database.
     * @param {EncuestadoCreateManyAndReturnArgs} args - Arguments to create many Encuestados.
     * @example
     * // Create many Encuestados
     * const encuestado = await prisma.encuestado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Encuestados and only return the `id`
     * const encuestadoWithIdOnly = await prisma.encuestado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EncuestadoCreateManyAndReturnArgs>(args?: SelectSubset<T, EncuestadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Encuestado.
     * @param {EncuestadoDeleteArgs} args - Arguments to delete one Encuestado.
     * @example
     * // Delete one Encuestado
     * const Encuestado = await prisma.encuestado.delete({
     *   where: {
     *     // ... filter to delete one Encuestado
     *   }
     * })
     * 
     */
    delete<T extends EncuestadoDeleteArgs>(args: SelectSubset<T, EncuestadoDeleteArgs<ExtArgs>>): Prisma__EncuestadoClient<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Encuestado.
     * @param {EncuestadoUpdateArgs} args - Arguments to update one Encuestado.
     * @example
     * // Update one Encuestado
     * const encuestado = await prisma.encuestado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EncuestadoUpdateArgs>(args: SelectSubset<T, EncuestadoUpdateArgs<ExtArgs>>): Prisma__EncuestadoClient<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Encuestados.
     * @param {EncuestadoDeleteManyArgs} args - Arguments to filter Encuestados to delete.
     * @example
     * // Delete a few Encuestados
     * const { count } = await prisma.encuestado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EncuestadoDeleteManyArgs>(args?: SelectSubset<T, EncuestadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Encuestados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncuestadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Encuestados
     * const encuestado = await prisma.encuestado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EncuestadoUpdateManyArgs>(args: SelectSubset<T, EncuestadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Encuestados and returns the data updated in the database.
     * @param {EncuestadoUpdateManyAndReturnArgs} args - Arguments to update many Encuestados.
     * @example
     * // Update many Encuestados
     * const encuestado = await prisma.encuestado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Encuestados and only return the `id`
     * const encuestadoWithIdOnly = await prisma.encuestado.updateManyAndReturn({
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
    updateManyAndReturn<T extends EncuestadoUpdateManyAndReturnArgs>(args: SelectSubset<T, EncuestadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Encuestado.
     * @param {EncuestadoUpsertArgs} args - Arguments to update or create a Encuestado.
     * @example
     * // Update or create a Encuestado
     * const encuestado = await prisma.encuestado.upsert({
     *   create: {
     *     // ... data to create a Encuestado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Encuestado we want to update
     *   }
     * })
     */
    upsert<T extends EncuestadoUpsertArgs>(args: SelectSubset<T, EncuestadoUpsertArgs<ExtArgs>>): Prisma__EncuestadoClient<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Encuestados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncuestadoCountArgs} args - Arguments to filter Encuestados to count.
     * @example
     * // Count the number of Encuestados
     * const count = await prisma.encuestado.count({
     *   where: {
     *     // ... the filter for the Encuestados we want to count
     *   }
     * })
    **/
    count<T extends EncuestadoCountArgs>(
      args?: Subset<T, EncuestadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EncuestadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Encuestado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncuestadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EncuestadoAggregateArgs>(args: Subset<T, EncuestadoAggregateArgs>): Prisma.PrismaPromise<GetEncuestadoAggregateType<T>>

    /**
     * Group by Encuestado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EncuestadoGroupByArgs} args - Group by arguments.
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
      T extends EncuestadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EncuestadoGroupByArgs['orderBy'] }
        : { orderBy?: EncuestadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EncuestadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncuestadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Encuestado model
   */
  readonly fields: EncuestadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Encuestado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EncuestadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    respuestas<T extends Encuestado$respuestasArgs<ExtArgs> = {}>(args?: Subset<T, Encuestado$respuestasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultado<T extends Encuestado$resultadoArgs<ExtArgs> = {}>(args?: Subset<T, Encuestado$resultadoArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Encuestado model
   */
  interface EncuestadoFieldRefs {
    readonly id: FieldRef<"Encuestado", 'String'>
    readonly codigo: FieldRef<"Encuestado", 'String'>
    readonly nombre: FieldRef<"Encuestado", 'String'>
    readonly email: FieldRef<"Encuestado", 'String'>
    readonly puesto: FieldRef<"Encuestado", 'String'>
    readonly departamento: FieldRef<"Encuestado", 'String'>
    readonly empresaId: FieldRef<"Encuestado", 'String'>
    readonly status: FieldRef<"Encuestado", 'StatusEncuesta'>
    readonly fechaInicio: FieldRef<"Encuestado", 'DateTime'>
    readonly fechaCompletado: FieldRef<"Encuestado", 'DateTime'>
    readonly createdAt: FieldRef<"Encuestado", 'DateTime'>
    readonly updatedAt: FieldRef<"Encuestado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Encuestado findUnique
   */
  export type EncuestadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
    /**
     * Filter, which Encuestado to fetch.
     */
    where: EncuestadoWhereUniqueInput
  }

  /**
   * Encuestado findUniqueOrThrow
   */
  export type EncuestadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
    /**
     * Filter, which Encuestado to fetch.
     */
    where: EncuestadoWhereUniqueInput
  }

  /**
   * Encuestado findFirst
   */
  export type EncuestadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
    /**
     * Filter, which Encuestado to fetch.
     */
    where?: EncuestadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encuestados to fetch.
     */
    orderBy?: EncuestadoOrderByWithRelationInput | EncuestadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Encuestados.
     */
    cursor?: EncuestadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encuestados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encuestados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Encuestados.
     */
    distinct?: EncuestadoScalarFieldEnum | EncuestadoScalarFieldEnum[]
  }

  /**
   * Encuestado findFirstOrThrow
   */
  export type EncuestadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
    /**
     * Filter, which Encuestado to fetch.
     */
    where?: EncuestadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encuestados to fetch.
     */
    orderBy?: EncuestadoOrderByWithRelationInput | EncuestadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Encuestados.
     */
    cursor?: EncuestadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encuestados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encuestados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Encuestados.
     */
    distinct?: EncuestadoScalarFieldEnum | EncuestadoScalarFieldEnum[]
  }

  /**
   * Encuestado findMany
   */
  export type EncuestadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
    /**
     * Filter, which Encuestados to fetch.
     */
    where?: EncuestadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Encuestados to fetch.
     */
    orderBy?: EncuestadoOrderByWithRelationInput | EncuestadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Encuestados.
     */
    cursor?: EncuestadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Encuestados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Encuestados.
     */
    skip?: number
    distinct?: EncuestadoScalarFieldEnum | EncuestadoScalarFieldEnum[]
  }

  /**
   * Encuestado create
   */
  export type EncuestadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Encuestado.
     */
    data: XOR<EncuestadoCreateInput, EncuestadoUncheckedCreateInput>
  }

  /**
   * Encuestado createMany
   */
  export type EncuestadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Encuestados.
     */
    data: EncuestadoCreateManyInput | EncuestadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Encuestado createManyAndReturn
   */
  export type EncuestadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * The data used to create many Encuestados.
     */
    data: EncuestadoCreateManyInput | EncuestadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Encuestado update
   */
  export type EncuestadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Encuestado.
     */
    data: XOR<EncuestadoUpdateInput, EncuestadoUncheckedUpdateInput>
    /**
     * Choose, which Encuestado to update.
     */
    where: EncuestadoWhereUniqueInput
  }

  /**
   * Encuestado updateMany
   */
  export type EncuestadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Encuestados.
     */
    data: XOR<EncuestadoUpdateManyMutationInput, EncuestadoUncheckedUpdateManyInput>
    /**
     * Filter which Encuestados to update
     */
    where?: EncuestadoWhereInput
    /**
     * Limit how many Encuestados to update.
     */
    limit?: number
  }

  /**
   * Encuestado updateManyAndReturn
   */
  export type EncuestadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * The data used to update Encuestados.
     */
    data: XOR<EncuestadoUpdateManyMutationInput, EncuestadoUncheckedUpdateManyInput>
    /**
     * Filter which Encuestados to update
     */
    where?: EncuestadoWhereInput
    /**
     * Limit how many Encuestados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Encuestado upsert
   */
  export type EncuestadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Encuestado to update in case it exists.
     */
    where: EncuestadoWhereUniqueInput
    /**
     * In case the Encuestado found by the `where` argument doesn't exist, create a new Encuestado with this data.
     */
    create: XOR<EncuestadoCreateInput, EncuestadoUncheckedCreateInput>
    /**
     * In case the Encuestado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EncuestadoUpdateInput, EncuestadoUncheckedUpdateInput>
  }

  /**
   * Encuestado delete
   */
  export type EncuestadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
    /**
     * Filter which Encuestado to delete.
     */
    where: EncuestadoWhereUniqueInput
  }

  /**
   * Encuestado deleteMany
   */
  export type EncuestadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Encuestados to delete
     */
    where?: EncuestadoWhereInput
    /**
     * Limit how many Encuestados to delete.
     */
    limit?: number
  }

  /**
   * Encuestado.respuestas
   */
  export type Encuestado$respuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    where?: RespuestaWhereInput
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    cursor?: RespuestaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespuestaScalarFieldEnum | RespuestaScalarFieldEnum[]
  }

  /**
   * Encuestado.resultado
   */
  export type Encuestado$resultadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    where?: ResultadoWhereInput
  }

  /**
   * Encuestado without action
   */
  export type EncuestadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Encuestado
     */
    select?: EncuestadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Encuestado
     */
    omit?: EncuestadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EncuestadoInclude<ExtArgs> | null
  }


  /**
   * Model Pregunta
   */

  export type AggregatePregunta = {
    _count: PreguntaCountAggregateOutputType | null
    _avg: PreguntaAvgAggregateOutputType | null
    _sum: PreguntaSumAggregateOutputType | null
    _min: PreguntaMinAggregateOutputType | null
    _max: PreguntaMaxAggregateOutputType | null
  }

  export type PreguntaAvgAggregateOutputType = {
    numero: number | null
  }

  export type PreguntaSumAggregateOutputType = {
    numero: number | null
  }

  export type PreguntaMinAggregateOutputType = {
    id: string | null
    numero: number | null
    bloque: string | null
    texto: string | null
    opcionA: string | null
    opcionB: string | null
    opcionC: string | null
    opcionD: string | null
    claveA: string | null
    claveB: string | null
    claveC: string | null
    claveD: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreguntaMaxAggregateOutputType = {
    id: string | null
    numero: number | null
    bloque: string | null
    texto: string | null
    opcionA: string | null
    opcionB: string | null
    opcionC: string | null
    opcionD: string | null
    claveA: string | null
    claveB: string | null
    claveC: string | null
    claveD: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreguntaCountAggregateOutputType = {
    id: number
    numero: number
    bloque: number
    texto: number
    opcionA: number
    opcionB: number
    opcionC: number
    opcionD: number
    claveA: number
    claveB: number
    claveC: number
    claveD: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PreguntaAvgAggregateInputType = {
    numero?: true
  }

  export type PreguntaSumAggregateInputType = {
    numero?: true
  }

  export type PreguntaMinAggregateInputType = {
    id?: true
    numero?: true
    bloque?: true
    texto?: true
    opcionA?: true
    opcionB?: true
    opcionC?: true
    opcionD?: true
    claveA?: true
    claveB?: true
    claveC?: true
    claveD?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreguntaMaxAggregateInputType = {
    id?: true
    numero?: true
    bloque?: true
    texto?: true
    opcionA?: true
    opcionB?: true
    opcionC?: true
    opcionD?: true
    claveA?: true
    claveB?: true
    claveC?: true
    claveD?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreguntaCountAggregateInputType = {
    id?: true
    numero?: true
    bloque?: true
    texto?: true
    opcionA?: true
    opcionB?: true
    opcionC?: true
    opcionD?: true
    claveA?: true
    claveB?: true
    claveC?: true
    claveD?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PreguntaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pregunta to aggregate.
     */
    where?: PreguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preguntas to fetch.
     */
    orderBy?: PreguntaOrderByWithRelationInput | PreguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preguntas
    **/
    _count?: true | PreguntaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreguntaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreguntaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreguntaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreguntaMaxAggregateInputType
  }

  export type GetPreguntaAggregateType<T extends PreguntaAggregateArgs> = {
        [P in keyof T & keyof AggregatePregunta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePregunta[P]>
      : GetScalarType<T[P], AggregatePregunta[P]>
  }




  export type PreguntaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreguntaWhereInput
    orderBy?: PreguntaOrderByWithAggregationInput | PreguntaOrderByWithAggregationInput[]
    by: PreguntaScalarFieldEnum[] | PreguntaScalarFieldEnum
    having?: PreguntaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreguntaCountAggregateInputType | true
    _avg?: PreguntaAvgAggregateInputType
    _sum?: PreguntaSumAggregateInputType
    _min?: PreguntaMinAggregateInputType
    _max?: PreguntaMaxAggregateInputType
  }

  export type PreguntaGroupByOutputType = {
    id: string
    numero: number
    bloque: string
    texto: string
    opcionA: string
    opcionB: string
    opcionC: string
    opcionD: string
    claveA: string
    claveB: string
    claveC: string
    claveD: string
    createdAt: Date
    updatedAt: Date
    _count: PreguntaCountAggregateOutputType | null
    _avg: PreguntaAvgAggregateOutputType | null
    _sum: PreguntaSumAggregateOutputType | null
    _min: PreguntaMinAggregateOutputType | null
    _max: PreguntaMaxAggregateOutputType | null
  }

  type GetPreguntaGroupByPayload<T extends PreguntaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreguntaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreguntaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreguntaGroupByOutputType[P]>
            : GetScalarType<T[P], PreguntaGroupByOutputType[P]>
        }
      >
    >


  export type PreguntaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    bloque?: boolean
    texto?: boolean
    opcionA?: boolean
    opcionB?: boolean
    opcionC?: boolean
    opcionD?: boolean
    claveA?: boolean
    claveB?: boolean
    claveC?: boolean
    claveD?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    respuestas?: boolean | Pregunta$respuestasArgs<ExtArgs>
    _count?: boolean | PreguntaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pregunta"]>

  export type PreguntaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    bloque?: boolean
    texto?: boolean
    opcionA?: boolean
    opcionB?: boolean
    opcionC?: boolean
    opcionD?: boolean
    claveA?: boolean
    claveB?: boolean
    claveC?: boolean
    claveD?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pregunta"]>

  export type PreguntaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    bloque?: boolean
    texto?: boolean
    opcionA?: boolean
    opcionB?: boolean
    opcionC?: boolean
    opcionD?: boolean
    claveA?: boolean
    claveB?: boolean
    claveC?: boolean
    claveD?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pregunta"]>

  export type PreguntaSelectScalar = {
    id?: boolean
    numero?: boolean
    bloque?: boolean
    texto?: boolean
    opcionA?: boolean
    opcionB?: boolean
    opcionC?: boolean
    opcionD?: boolean
    claveA?: boolean
    claveB?: boolean
    claveC?: boolean
    claveD?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PreguntaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "bloque" | "texto" | "opcionA" | "opcionB" | "opcionC" | "opcionD" | "claveA" | "claveB" | "claveC" | "claveD" | "createdAt" | "updatedAt", ExtArgs["result"]["pregunta"]>
  export type PreguntaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respuestas?: boolean | Pregunta$respuestasArgs<ExtArgs>
    _count?: boolean | PreguntaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PreguntaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PreguntaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PreguntaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pregunta"
    objects: {
      respuestas: Prisma.$RespuestaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero: number
      bloque: string
      texto: string
      opcionA: string
      opcionB: string
      opcionC: string
      opcionD: string
      claveA: string
      claveB: string
      claveC: string
      claveD: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pregunta"]>
    composites: {}
  }

  type PreguntaGetPayload<S extends boolean | null | undefined | PreguntaDefaultArgs> = $Result.GetResult<Prisma.$PreguntaPayload, S>

  type PreguntaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreguntaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreguntaCountAggregateInputType | true
    }

  export interface PreguntaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pregunta'], meta: { name: 'Pregunta' } }
    /**
     * Find zero or one Pregunta that matches the filter.
     * @param {PreguntaFindUniqueArgs} args - Arguments to find a Pregunta
     * @example
     * // Get one Pregunta
     * const pregunta = await prisma.pregunta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreguntaFindUniqueArgs>(args: SelectSubset<T, PreguntaFindUniqueArgs<ExtArgs>>): Prisma__PreguntaClient<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pregunta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreguntaFindUniqueOrThrowArgs} args - Arguments to find a Pregunta
     * @example
     * // Get one Pregunta
     * const pregunta = await prisma.pregunta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreguntaFindUniqueOrThrowArgs>(args: SelectSubset<T, PreguntaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreguntaClient<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pregunta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaFindFirstArgs} args - Arguments to find a Pregunta
     * @example
     * // Get one Pregunta
     * const pregunta = await prisma.pregunta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreguntaFindFirstArgs>(args?: SelectSubset<T, PreguntaFindFirstArgs<ExtArgs>>): Prisma__PreguntaClient<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pregunta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaFindFirstOrThrowArgs} args - Arguments to find a Pregunta
     * @example
     * // Get one Pregunta
     * const pregunta = await prisma.pregunta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreguntaFindFirstOrThrowArgs>(args?: SelectSubset<T, PreguntaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreguntaClient<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preguntas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preguntas
     * const preguntas = await prisma.pregunta.findMany()
     * 
     * // Get first 10 Preguntas
     * const preguntas = await prisma.pregunta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preguntaWithIdOnly = await prisma.pregunta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreguntaFindManyArgs>(args?: SelectSubset<T, PreguntaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pregunta.
     * @param {PreguntaCreateArgs} args - Arguments to create a Pregunta.
     * @example
     * // Create one Pregunta
     * const Pregunta = await prisma.pregunta.create({
     *   data: {
     *     // ... data to create a Pregunta
     *   }
     * })
     * 
     */
    create<T extends PreguntaCreateArgs>(args: SelectSubset<T, PreguntaCreateArgs<ExtArgs>>): Prisma__PreguntaClient<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preguntas.
     * @param {PreguntaCreateManyArgs} args - Arguments to create many Preguntas.
     * @example
     * // Create many Preguntas
     * const pregunta = await prisma.pregunta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreguntaCreateManyArgs>(args?: SelectSubset<T, PreguntaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preguntas and returns the data saved in the database.
     * @param {PreguntaCreateManyAndReturnArgs} args - Arguments to create many Preguntas.
     * @example
     * // Create many Preguntas
     * const pregunta = await prisma.pregunta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preguntas and only return the `id`
     * const preguntaWithIdOnly = await prisma.pregunta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreguntaCreateManyAndReturnArgs>(args?: SelectSubset<T, PreguntaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pregunta.
     * @param {PreguntaDeleteArgs} args - Arguments to delete one Pregunta.
     * @example
     * // Delete one Pregunta
     * const Pregunta = await prisma.pregunta.delete({
     *   where: {
     *     // ... filter to delete one Pregunta
     *   }
     * })
     * 
     */
    delete<T extends PreguntaDeleteArgs>(args: SelectSubset<T, PreguntaDeleteArgs<ExtArgs>>): Prisma__PreguntaClient<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pregunta.
     * @param {PreguntaUpdateArgs} args - Arguments to update one Pregunta.
     * @example
     * // Update one Pregunta
     * const pregunta = await prisma.pregunta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreguntaUpdateArgs>(args: SelectSubset<T, PreguntaUpdateArgs<ExtArgs>>): Prisma__PreguntaClient<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preguntas.
     * @param {PreguntaDeleteManyArgs} args - Arguments to filter Preguntas to delete.
     * @example
     * // Delete a few Preguntas
     * const { count } = await prisma.pregunta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreguntaDeleteManyArgs>(args?: SelectSubset<T, PreguntaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preguntas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preguntas
     * const pregunta = await prisma.pregunta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreguntaUpdateManyArgs>(args: SelectSubset<T, PreguntaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preguntas and returns the data updated in the database.
     * @param {PreguntaUpdateManyAndReturnArgs} args - Arguments to update many Preguntas.
     * @example
     * // Update many Preguntas
     * const pregunta = await prisma.pregunta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preguntas and only return the `id`
     * const preguntaWithIdOnly = await prisma.pregunta.updateManyAndReturn({
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
    updateManyAndReturn<T extends PreguntaUpdateManyAndReturnArgs>(args: SelectSubset<T, PreguntaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pregunta.
     * @param {PreguntaUpsertArgs} args - Arguments to update or create a Pregunta.
     * @example
     * // Update or create a Pregunta
     * const pregunta = await prisma.pregunta.upsert({
     *   create: {
     *     // ... data to create a Pregunta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pregunta we want to update
     *   }
     * })
     */
    upsert<T extends PreguntaUpsertArgs>(args: SelectSubset<T, PreguntaUpsertArgs<ExtArgs>>): Prisma__PreguntaClient<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preguntas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaCountArgs} args - Arguments to filter Preguntas to count.
     * @example
     * // Count the number of Preguntas
     * const count = await prisma.pregunta.count({
     *   where: {
     *     // ... the filter for the Preguntas we want to count
     *   }
     * })
    **/
    count<T extends PreguntaCountArgs>(
      args?: Subset<T, PreguntaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreguntaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pregunta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreguntaAggregateArgs>(args: Subset<T, PreguntaAggregateArgs>): Prisma.PrismaPromise<GetPreguntaAggregateType<T>>

    /**
     * Group by Pregunta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreguntaGroupByArgs} args - Group by arguments.
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
      T extends PreguntaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreguntaGroupByArgs['orderBy'] }
        : { orderBy?: PreguntaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PreguntaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreguntaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pregunta model
   */
  readonly fields: PreguntaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pregunta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreguntaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    respuestas<T extends Pregunta$respuestasArgs<ExtArgs> = {}>(args?: Subset<T, Pregunta$respuestasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pregunta model
   */
  interface PreguntaFieldRefs {
    readonly id: FieldRef<"Pregunta", 'String'>
    readonly numero: FieldRef<"Pregunta", 'Int'>
    readonly bloque: FieldRef<"Pregunta", 'String'>
    readonly texto: FieldRef<"Pregunta", 'String'>
    readonly opcionA: FieldRef<"Pregunta", 'String'>
    readonly opcionB: FieldRef<"Pregunta", 'String'>
    readonly opcionC: FieldRef<"Pregunta", 'String'>
    readonly opcionD: FieldRef<"Pregunta", 'String'>
    readonly claveA: FieldRef<"Pregunta", 'String'>
    readonly claveB: FieldRef<"Pregunta", 'String'>
    readonly claveC: FieldRef<"Pregunta", 'String'>
    readonly claveD: FieldRef<"Pregunta", 'String'>
    readonly createdAt: FieldRef<"Pregunta", 'DateTime'>
    readonly updatedAt: FieldRef<"Pregunta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pregunta findUnique
   */
  export type PreguntaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pregunta to fetch.
     */
    where: PreguntaWhereUniqueInput
  }

  /**
   * Pregunta findUniqueOrThrow
   */
  export type PreguntaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pregunta to fetch.
     */
    where: PreguntaWhereUniqueInput
  }

  /**
   * Pregunta findFirst
   */
  export type PreguntaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pregunta to fetch.
     */
    where?: PreguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preguntas to fetch.
     */
    orderBy?: PreguntaOrderByWithRelationInput | PreguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preguntas.
     */
    cursor?: PreguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preguntas.
     */
    distinct?: PreguntaScalarFieldEnum | PreguntaScalarFieldEnum[]
  }

  /**
   * Pregunta findFirstOrThrow
   */
  export type PreguntaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pregunta to fetch.
     */
    where?: PreguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preguntas to fetch.
     */
    orderBy?: PreguntaOrderByWithRelationInput | PreguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preguntas.
     */
    cursor?: PreguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preguntas.
     */
    distinct?: PreguntaScalarFieldEnum | PreguntaScalarFieldEnum[]
  }

  /**
   * Pregunta findMany
   */
  export type PreguntaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaInclude<ExtArgs> | null
    /**
     * Filter, which Preguntas to fetch.
     */
    where?: PreguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preguntas to fetch.
     */
    orderBy?: PreguntaOrderByWithRelationInput | PreguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preguntas.
     */
    cursor?: PreguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preguntas.
     */
    skip?: number
    distinct?: PreguntaScalarFieldEnum | PreguntaScalarFieldEnum[]
  }

  /**
   * Pregunta create
   */
  export type PreguntaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pregunta.
     */
    data: XOR<PreguntaCreateInput, PreguntaUncheckedCreateInput>
  }

  /**
   * Pregunta createMany
   */
  export type PreguntaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preguntas.
     */
    data: PreguntaCreateManyInput | PreguntaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pregunta createManyAndReturn
   */
  export type PreguntaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * The data used to create many Preguntas.
     */
    data: PreguntaCreateManyInput | PreguntaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pregunta update
   */
  export type PreguntaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pregunta.
     */
    data: XOR<PreguntaUpdateInput, PreguntaUncheckedUpdateInput>
    /**
     * Choose, which Pregunta to update.
     */
    where: PreguntaWhereUniqueInput
  }

  /**
   * Pregunta updateMany
   */
  export type PreguntaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preguntas.
     */
    data: XOR<PreguntaUpdateManyMutationInput, PreguntaUncheckedUpdateManyInput>
    /**
     * Filter which Preguntas to update
     */
    where?: PreguntaWhereInput
    /**
     * Limit how many Preguntas to update.
     */
    limit?: number
  }

  /**
   * Pregunta updateManyAndReturn
   */
  export type PreguntaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * The data used to update Preguntas.
     */
    data: XOR<PreguntaUpdateManyMutationInput, PreguntaUncheckedUpdateManyInput>
    /**
     * Filter which Preguntas to update
     */
    where?: PreguntaWhereInput
    /**
     * Limit how many Preguntas to update.
     */
    limit?: number
  }

  /**
   * Pregunta upsert
   */
  export type PreguntaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pregunta to update in case it exists.
     */
    where: PreguntaWhereUniqueInput
    /**
     * In case the Pregunta found by the `where` argument doesn't exist, create a new Pregunta with this data.
     */
    create: XOR<PreguntaCreateInput, PreguntaUncheckedCreateInput>
    /**
     * In case the Pregunta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreguntaUpdateInput, PreguntaUncheckedUpdateInput>
  }

  /**
   * Pregunta delete
   */
  export type PreguntaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaInclude<ExtArgs> | null
    /**
     * Filter which Pregunta to delete.
     */
    where: PreguntaWhereUniqueInput
  }

  /**
   * Pregunta deleteMany
   */
  export type PreguntaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preguntas to delete
     */
    where?: PreguntaWhereInput
    /**
     * Limit how many Preguntas to delete.
     */
    limit?: number
  }

  /**
   * Pregunta.respuestas
   */
  export type Pregunta$respuestasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    where?: RespuestaWhereInput
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    cursor?: RespuestaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RespuestaScalarFieldEnum | RespuestaScalarFieldEnum[]
  }

  /**
   * Pregunta without action
   */
  export type PreguntaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pregunta
     */
    select?: PreguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pregunta
     */
    omit?: PreguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreguntaInclude<ExtArgs> | null
  }


  /**
   * Model Respuesta
   */

  export type AggregateRespuesta = {
    _count: RespuestaCountAggregateOutputType | null
    _min: RespuestaMinAggregateOutputType | null
    _max: RespuestaMaxAggregateOutputType | null
  }

  export type RespuestaMinAggregateOutputType = {
    id: string | null
    encuestadoId: string | null
    preguntaId: string | null
    opcionSeleccionada: string | null
    perfilAsignado: string | null
    createdAt: Date | null
  }

  export type RespuestaMaxAggregateOutputType = {
    id: string | null
    encuestadoId: string | null
    preguntaId: string | null
    opcionSeleccionada: string | null
    perfilAsignado: string | null
    createdAt: Date | null
  }

  export type RespuestaCountAggregateOutputType = {
    id: number
    encuestadoId: number
    preguntaId: number
    opcionSeleccionada: number
    perfilAsignado: number
    createdAt: number
    _all: number
  }


  export type RespuestaMinAggregateInputType = {
    id?: true
    encuestadoId?: true
    preguntaId?: true
    opcionSeleccionada?: true
    perfilAsignado?: true
    createdAt?: true
  }

  export type RespuestaMaxAggregateInputType = {
    id?: true
    encuestadoId?: true
    preguntaId?: true
    opcionSeleccionada?: true
    perfilAsignado?: true
    createdAt?: true
  }

  export type RespuestaCountAggregateInputType = {
    id?: true
    encuestadoId?: true
    preguntaId?: true
    opcionSeleccionada?: true
    perfilAsignado?: true
    createdAt?: true
    _all?: true
  }

  export type RespuestaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respuesta to aggregate.
     */
    where?: RespuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RespuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Respuestas
    **/
    _count?: true | RespuestaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RespuestaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RespuestaMaxAggregateInputType
  }

  export type GetRespuestaAggregateType<T extends RespuestaAggregateArgs> = {
        [P in keyof T & keyof AggregateRespuesta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRespuesta[P]>
      : GetScalarType<T[P], AggregateRespuesta[P]>
  }




  export type RespuestaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RespuestaWhereInput
    orderBy?: RespuestaOrderByWithAggregationInput | RespuestaOrderByWithAggregationInput[]
    by: RespuestaScalarFieldEnum[] | RespuestaScalarFieldEnum
    having?: RespuestaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RespuestaCountAggregateInputType | true
    _min?: RespuestaMinAggregateInputType
    _max?: RespuestaMaxAggregateInputType
  }

  export type RespuestaGroupByOutputType = {
    id: string
    encuestadoId: string
    preguntaId: string
    opcionSeleccionada: string
    perfilAsignado: string
    createdAt: Date
    _count: RespuestaCountAggregateOutputType | null
    _min: RespuestaMinAggregateOutputType | null
    _max: RespuestaMaxAggregateOutputType | null
  }

  type GetRespuestaGroupByPayload<T extends RespuestaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RespuestaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RespuestaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RespuestaGroupByOutputType[P]>
            : GetScalarType<T[P], RespuestaGroupByOutputType[P]>
        }
      >
    >


  export type RespuestaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    encuestadoId?: boolean
    preguntaId?: boolean
    opcionSeleccionada?: boolean
    perfilAsignado?: boolean
    createdAt?: boolean
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
    pregunta?: boolean | PreguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respuesta"]>

  export type RespuestaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    encuestadoId?: boolean
    preguntaId?: boolean
    opcionSeleccionada?: boolean
    perfilAsignado?: boolean
    createdAt?: boolean
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
    pregunta?: boolean | PreguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respuesta"]>

  export type RespuestaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    encuestadoId?: boolean
    preguntaId?: boolean
    opcionSeleccionada?: boolean
    perfilAsignado?: boolean
    createdAt?: boolean
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
    pregunta?: boolean | PreguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respuesta"]>

  export type RespuestaSelectScalar = {
    id?: boolean
    encuestadoId?: boolean
    preguntaId?: boolean
    opcionSeleccionada?: boolean
    perfilAsignado?: boolean
    createdAt?: boolean
  }

  export type RespuestaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "encuestadoId" | "preguntaId" | "opcionSeleccionada" | "perfilAsignado" | "createdAt", ExtArgs["result"]["respuesta"]>
  export type RespuestaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
    pregunta?: boolean | PreguntaDefaultArgs<ExtArgs>
  }
  export type RespuestaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
    pregunta?: boolean | PreguntaDefaultArgs<ExtArgs>
  }
  export type RespuestaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
    pregunta?: boolean | PreguntaDefaultArgs<ExtArgs>
  }

  export type $RespuestaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Respuesta"
    objects: {
      encuestado: Prisma.$EncuestadoPayload<ExtArgs>
      pregunta: Prisma.$PreguntaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      encuestadoId: string
      preguntaId: string
      opcionSeleccionada: string
      perfilAsignado: string
      createdAt: Date
    }, ExtArgs["result"]["respuesta"]>
    composites: {}
  }

  type RespuestaGetPayload<S extends boolean | null | undefined | RespuestaDefaultArgs> = $Result.GetResult<Prisma.$RespuestaPayload, S>

  type RespuestaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RespuestaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RespuestaCountAggregateInputType | true
    }

  export interface RespuestaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Respuesta'], meta: { name: 'Respuesta' } }
    /**
     * Find zero or one Respuesta that matches the filter.
     * @param {RespuestaFindUniqueArgs} args - Arguments to find a Respuesta
     * @example
     * // Get one Respuesta
     * const respuesta = await prisma.respuesta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RespuestaFindUniqueArgs>(args: SelectSubset<T, RespuestaFindUniqueArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Respuesta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RespuestaFindUniqueOrThrowArgs} args - Arguments to find a Respuesta
     * @example
     * // Get one Respuesta
     * const respuesta = await prisma.respuesta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RespuestaFindUniqueOrThrowArgs>(args: SelectSubset<T, RespuestaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Respuesta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaFindFirstArgs} args - Arguments to find a Respuesta
     * @example
     * // Get one Respuesta
     * const respuesta = await prisma.respuesta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RespuestaFindFirstArgs>(args?: SelectSubset<T, RespuestaFindFirstArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Respuesta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaFindFirstOrThrowArgs} args - Arguments to find a Respuesta
     * @example
     * // Get one Respuesta
     * const respuesta = await prisma.respuesta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RespuestaFindFirstOrThrowArgs>(args?: SelectSubset<T, RespuestaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Respuestas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Respuestas
     * const respuestas = await prisma.respuesta.findMany()
     * 
     * // Get first 10 Respuestas
     * const respuestas = await prisma.respuesta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const respuestaWithIdOnly = await prisma.respuesta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RespuestaFindManyArgs>(args?: SelectSubset<T, RespuestaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Respuesta.
     * @param {RespuestaCreateArgs} args - Arguments to create a Respuesta.
     * @example
     * // Create one Respuesta
     * const Respuesta = await prisma.respuesta.create({
     *   data: {
     *     // ... data to create a Respuesta
     *   }
     * })
     * 
     */
    create<T extends RespuestaCreateArgs>(args: SelectSubset<T, RespuestaCreateArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Respuestas.
     * @param {RespuestaCreateManyArgs} args - Arguments to create many Respuestas.
     * @example
     * // Create many Respuestas
     * const respuesta = await prisma.respuesta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RespuestaCreateManyArgs>(args?: SelectSubset<T, RespuestaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Respuestas and returns the data saved in the database.
     * @param {RespuestaCreateManyAndReturnArgs} args - Arguments to create many Respuestas.
     * @example
     * // Create many Respuestas
     * const respuesta = await prisma.respuesta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Respuestas and only return the `id`
     * const respuestaWithIdOnly = await prisma.respuesta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RespuestaCreateManyAndReturnArgs>(args?: SelectSubset<T, RespuestaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Respuesta.
     * @param {RespuestaDeleteArgs} args - Arguments to delete one Respuesta.
     * @example
     * // Delete one Respuesta
     * const Respuesta = await prisma.respuesta.delete({
     *   where: {
     *     // ... filter to delete one Respuesta
     *   }
     * })
     * 
     */
    delete<T extends RespuestaDeleteArgs>(args: SelectSubset<T, RespuestaDeleteArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Respuesta.
     * @param {RespuestaUpdateArgs} args - Arguments to update one Respuesta.
     * @example
     * // Update one Respuesta
     * const respuesta = await prisma.respuesta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RespuestaUpdateArgs>(args: SelectSubset<T, RespuestaUpdateArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Respuestas.
     * @param {RespuestaDeleteManyArgs} args - Arguments to filter Respuestas to delete.
     * @example
     * // Delete a few Respuestas
     * const { count } = await prisma.respuesta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RespuestaDeleteManyArgs>(args?: SelectSubset<T, RespuestaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Respuestas
     * const respuesta = await prisma.respuesta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RespuestaUpdateManyArgs>(args: SelectSubset<T, RespuestaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respuestas and returns the data updated in the database.
     * @param {RespuestaUpdateManyAndReturnArgs} args - Arguments to update many Respuestas.
     * @example
     * // Update many Respuestas
     * const respuesta = await prisma.respuesta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Respuestas and only return the `id`
     * const respuestaWithIdOnly = await prisma.respuesta.updateManyAndReturn({
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
    updateManyAndReturn<T extends RespuestaUpdateManyAndReturnArgs>(args: SelectSubset<T, RespuestaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Respuesta.
     * @param {RespuestaUpsertArgs} args - Arguments to update or create a Respuesta.
     * @example
     * // Update or create a Respuesta
     * const respuesta = await prisma.respuesta.upsert({
     *   create: {
     *     // ... data to create a Respuesta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Respuesta we want to update
     *   }
     * })
     */
    upsert<T extends RespuestaUpsertArgs>(args: SelectSubset<T, RespuestaUpsertArgs<ExtArgs>>): Prisma__RespuestaClient<$Result.GetResult<Prisma.$RespuestaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Respuestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaCountArgs} args - Arguments to filter Respuestas to count.
     * @example
     * // Count the number of Respuestas
     * const count = await prisma.respuesta.count({
     *   where: {
     *     // ... the filter for the Respuestas we want to count
     *   }
     * })
    **/
    count<T extends RespuestaCountArgs>(
      args?: Subset<T, RespuestaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RespuestaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Respuesta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RespuestaAggregateArgs>(args: Subset<T, RespuestaAggregateArgs>): Prisma.PrismaPromise<GetRespuestaAggregateType<T>>

    /**
     * Group by Respuesta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RespuestaGroupByArgs} args - Group by arguments.
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
      T extends RespuestaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RespuestaGroupByArgs['orderBy'] }
        : { orderBy?: RespuestaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RespuestaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespuestaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Respuesta model
   */
  readonly fields: RespuestaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Respuesta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RespuestaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    encuestado<T extends EncuestadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EncuestadoDefaultArgs<ExtArgs>>): Prisma__EncuestadoClient<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pregunta<T extends PreguntaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PreguntaDefaultArgs<ExtArgs>>): Prisma__PreguntaClient<$Result.GetResult<Prisma.$PreguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Respuesta model
   */
  interface RespuestaFieldRefs {
    readonly id: FieldRef<"Respuesta", 'String'>
    readonly encuestadoId: FieldRef<"Respuesta", 'String'>
    readonly preguntaId: FieldRef<"Respuesta", 'String'>
    readonly opcionSeleccionada: FieldRef<"Respuesta", 'String'>
    readonly perfilAsignado: FieldRef<"Respuesta", 'String'>
    readonly createdAt: FieldRef<"Respuesta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Respuesta findUnique
   */
  export type RespuestaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter, which Respuesta to fetch.
     */
    where: RespuestaWhereUniqueInput
  }

  /**
   * Respuesta findUniqueOrThrow
   */
  export type RespuestaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter, which Respuesta to fetch.
     */
    where: RespuestaWhereUniqueInput
  }

  /**
   * Respuesta findFirst
   */
  export type RespuestaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter, which Respuesta to fetch.
     */
    where?: RespuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respuestas.
     */
    cursor?: RespuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respuestas.
     */
    distinct?: RespuestaScalarFieldEnum | RespuestaScalarFieldEnum[]
  }

  /**
   * Respuesta findFirstOrThrow
   */
  export type RespuestaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter, which Respuesta to fetch.
     */
    where?: RespuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Respuestas.
     */
    cursor?: RespuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Respuestas.
     */
    distinct?: RespuestaScalarFieldEnum | RespuestaScalarFieldEnum[]
  }

  /**
   * Respuesta findMany
   */
  export type RespuestaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter, which Respuestas to fetch.
     */
    where?: RespuestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Respuestas to fetch.
     */
    orderBy?: RespuestaOrderByWithRelationInput | RespuestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Respuestas.
     */
    cursor?: RespuestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Respuestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Respuestas.
     */
    skip?: number
    distinct?: RespuestaScalarFieldEnum | RespuestaScalarFieldEnum[]
  }

  /**
   * Respuesta create
   */
  export type RespuestaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * The data needed to create a Respuesta.
     */
    data: XOR<RespuestaCreateInput, RespuestaUncheckedCreateInput>
  }

  /**
   * Respuesta createMany
   */
  export type RespuestaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Respuestas.
     */
    data: RespuestaCreateManyInput | RespuestaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Respuesta createManyAndReturn
   */
  export type RespuestaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * The data used to create many Respuestas.
     */
    data: RespuestaCreateManyInput | RespuestaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Respuesta update
   */
  export type RespuestaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * The data needed to update a Respuesta.
     */
    data: XOR<RespuestaUpdateInput, RespuestaUncheckedUpdateInput>
    /**
     * Choose, which Respuesta to update.
     */
    where: RespuestaWhereUniqueInput
  }

  /**
   * Respuesta updateMany
   */
  export type RespuestaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Respuestas.
     */
    data: XOR<RespuestaUpdateManyMutationInput, RespuestaUncheckedUpdateManyInput>
    /**
     * Filter which Respuestas to update
     */
    where?: RespuestaWhereInput
    /**
     * Limit how many Respuestas to update.
     */
    limit?: number
  }

  /**
   * Respuesta updateManyAndReturn
   */
  export type RespuestaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * The data used to update Respuestas.
     */
    data: XOR<RespuestaUpdateManyMutationInput, RespuestaUncheckedUpdateManyInput>
    /**
     * Filter which Respuestas to update
     */
    where?: RespuestaWhereInput
    /**
     * Limit how many Respuestas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Respuesta upsert
   */
  export type RespuestaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * The filter to search for the Respuesta to update in case it exists.
     */
    where: RespuestaWhereUniqueInput
    /**
     * In case the Respuesta found by the `where` argument doesn't exist, create a new Respuesta with this data.
     */
    create: XOR<RespuestaCreateInput, RespuestaUncheckedCreateInput>
    /**
     * In case the Respuesta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RespuestaUpdateInput, RespuestaUncheckedUpdateInput>
  }

  /**
   * Respuesta delete
   */
  export type RespuestaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
    /**
     * Filter which Respuesta to delete.
     */
    where: RespuestaWhereUniqueInput
  }

  /**
   * Respuesta deleteMany
   */
  export type RespuestaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Respuestas to delete
     */
    where?: RespuestaWhereInput
    /**
     * Limit how many Respuestas to delete.
     */
    limit?: number
  }

  /**
   * Respuesta without action
   */
  export type RespuestaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Respuesta
     */
    select?: RespuestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Respuesta
     */
    omit?: RespuestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RespuestaInclude<ExtArgs> | null
  }


  /**
   * Model Resultado
   */

  export type AggregateResultado = {
    _count: ResultadoCountAggregateOutputType | null
    _avg: ResultadoAvgAggregateOutputType | null
    _sum: ResultadoSumAggregateOutputType | null
    _min: ResultadoMinAggregateOutputType | null
    _max: ResultadoMaxAggregateOutputType | null
  }

  export type ResultadoAvgAggregateOutputType = {
    puntosD: number | null
    puntosI: number | null
    puntosS: number | null
    puntosC: number | null
  }

  export type ResultadoSumAggregateOutputType = {
    puntosD: number | null
    puntosI: number | null
    puntosS: number | null
    puntosC: number | null
  }

  export type ResultadoMinAggregateOutputType = {
    id: string | null
    encuestadoId: string | null
    puntosD: number | null
    puntosI: number | null
    puntosS: number | null
    puntosC: number | null
    perfilPrimario: string | null
    perfilSecundario: string | null
    arquetipo: string | null
    createdAt: Date | null
  }

  export type ResultadoMaxAggregateOutputType = {
    id: string | null
    encuestadoId: string | null
    puntosD: number | null
    puntosI: number | null
    puntosS: number | null
    puntosC: number | null
    perfilPrimario: string | null
    perfilSecundario: string | null
    arquetipo: string | null
    createdAt: Date | null
  }

  export type ResultadoCountAggregateOutputType = {
    id: number
    encuestadoId: number
    puntosD: number
    puntosI: number
    puntosS: number
    puntosC: number
    perfilPrimario: number
    perfilSecundario: number
    arquetipo: number
    createdAt: number
    _all: number
  }


  export type ResultadoAvgAggregateInputType = {
    puntosD?: true
    puntosI?: true
    puntosS?: true
    puntosC?: true
  }

  export type ResultadoSumAggregateInputType = {
    puntosD?: true
    puntosI?: true
    puntosS?: true
    puntosC?: true
  }

  export type ResultadoMinAggregateInputType = {
    id?: true
    encuestadoId?: true
    puntosD?: true
    puntosI?: true
    puntosS?: true
    puntosC?: true
    perfilPrimario?: true
    perfilSecundario?: true
    arquetipo?: true
    createdAt?: true
  }

  export type ResultadoMaxAggregateInputType = {
    id?: true
    encuestadoId?: true
    puntosD?: true
    puntosI?: true
    puntosS?: true
    puntosC?: true
    perfilPrimario?: true
    perfilSecundario?: true
    arquetipo?: true
    createdAt?: true
  }

  export type ResultadoCountAggregateInputType = {
    id?: true
    encuestadoId?: true
    puntosD?: true
    puntosI?: true
    puntosS?: true
    puntosC?: true
    perfilPrimario?: true
    perfilSecundario?: true
    arquetipo?: true
    createdAt?: true
    _all?: true
  }

  export type ResultadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultado to aggregate.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resultados
    **/
    _count?: true | ResultadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultadoMaxAggregateInputType
  }

  export type GetResultadoAggregateType<T extends ResultadoAggregateArgs> = {
        [P in keyof T & keyof AggregateResultado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultado[P]>
      : GetScalarType<T[P], AggregateResultado[P]>
  }




  export type ResultadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultadoWhereInput
    orderBy?: ResultadoOrderByWithAggregationInput | ResultadoOrderByWithAggregationInput[]
    by: ResultadoScalarFieldEnum[] | ResultadoScalarFieldEnum
    having?: ResultadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultadoCountAggregateInputType | true
    _avg?: ResultadoAvgAggregateInputType
    _sum?: ResultadoSumAggregateInputType
    _min?: ResultadoMinAggregateInputType
    _max?: ResultadoMaxAggregateInputType
  }

  export type ResultadoGroupByOutputType = {
    id: string
    encuestadoId: string
    puntosD: number
    puntosI: number
    puntosS: number
    puntosC: number
    perfilPrimario: string
    perfilSecundario: string
    arquetipo: string
    createdAt: Date
    _count: ResultadoCountAggregateOutputType | null
    _avg: ResultadoAvgAggregateOutputType | null
    _sum: ResultadoSumAggregateOutputType | null
    _min: ResultadoMinAggregateOutputType | null
    _max: ResultadoMaxAggregateOutputType | null
  }

  type GetResultadoGroupByPayload<T extends ResultadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultadoGroupByOutputType[P]>
            : GetScalarType<T[P], ResultadoGroupByOutputType[P]>
        }
      >
    >


  export type ResultadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    encuestadoId?: boolean
    puntosD?: boolean
    puntosI?: boolean
    puntosS?: boolean
    puntosC?: boolean
    perfilPrimario?: boolean
    perfilSecundario?: boolean
    arquetipo?: boolean
    createdAt?: boolean
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultado"]>

  export type ResultadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    encuestadoId?: boolean
    puntosD?: boolean
    puntosI?: boolean
    puntosS?: boolean
    puntosC?: boolean
    perfilPrimario?: boolean
    perfilSecundario?: boolean
    arquetipo?: boolean
    createdAt?: boolean
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultado"]>

  export type ResultadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    encuestadoId?: boolean
    puntosD?: boolean
    puntosI?: boolean
    puntosS?: boolean
    puntosC?: boolean
    perfilPrimario?: boolean
    perfilSecundario?: boolean
    arquetipo?: boolean
    createdAt?: boolean
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultado"]>

  export type ResultadoSelectScalar = {
    id?: boolean
    encuestadoId?: boolean
    puntosD?: boolean
    puntosI?: boolean
    puntosS?: boolean
    puntosC?: boolean
    perfilPrimario?: boolean
    perfilSecundario?: boolean
    arquetipo?: boolean
    createdAt?: boolean
  }

  export type ResultadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "encuestadoId" | "puntosD" | "puntosI" | "puntosS" | "puntosC" | "perfilPrimario" | "perfilSecundario" | "arquetipo" | "createdAt", ExtArgs["result"]["resultado"]>
  export type ResultadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
  }
  export type ResultadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
  }
  export type ResultadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    encuestado?: boolean | EncuestadoDefaultArgs<ExtArgs>
  }

  export type $ResultadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resultado"
    objects: {
      encuestado: Prisma.$EncuestadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      encuestadoId: string
      puntosD: number
      puntosI: number
      puntosS: number
      puntosC: number
      perfilPrimario: string
      perfilSecundario: string
      arquetipo: string
      createdAt: Date
    }, ExtArgs["result"]["resultado"]>
    composites: {}
  }

  type ResultadoGetPayload<S extends boolean | null | undefined | ResultadoDefaultArgs> = $Result.GetResult<Prisma.$ResultadoPayload, S>

  type ResultadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultadoCountAggregateInputType | true
    }

  export interface ResultadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resultado'], meta: { name: 'Resultado' } }
    /**
     * Find zero or one Resultado that matches the filter.
     * @param {ResultadoFindUniqueArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultadoFindUniqueArgs>(args: SelectSubset<T, ResultadoFindUniqueArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resultado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultadoFindUniqueOrThrowArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindFirstArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultadoFindFirstArgs>(args?: SelectSubset<T, ResultadoFindFirstArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindFirstOrThrowArgs} args - Arguments to find a Resultado
     * @example
     * // Get one Resultado
     * const resultado = await prisma.resultado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resultados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resultados
     * const resultados = await prisma.resultado.findMany()
     * 
     * // Get first 10 Resultados
     * const resultados = await prisma.resultado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultadoWithIdOnly = await prisma.resultado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultadoFindManyArgs>(args?: SelectSubset<T, ResultadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resultado.
     * @param {ResultadoCreateArgs} args - Arguments to create a Resultado.
     * @example
     * // Create one Resultado
     * const Resultado = await prisma.resultado.create({
     *   data: {
     *     // ... data to create a Resultado
     *   }
     * })
     * 
     */
    create<T extends ResultadoCreateArgs>(args: SelectSubset<T, ResultadoCreateArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resultados.
     * @param {ResultadoCreateManyArgs} args - Arguments to create many Resultados.
     * @example
     * // Create many Resultados
     * const resultado = await prisma.resultado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultadoCreateManyArgs>(args?: SelectSubset<T, ResultadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resultados and returns the data saved in the database.
     * @param {ResultadoCreateManyAndReturnArgs} args - Arguments to create many Resultados.
     * @example
     * // Create many Resultados
     * const resultado = await prisma.resultado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resultados and only return the `id`
     * const resultadoWithIdOnly = await prisma.resultado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultadoCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resultado.
     * @param {ResultadoDeleteArgs} args - Arguments to delete one Resultado.
     * @example
     * // Delete one Resultado
     * const Resultado = await prisma.resultado.delete({
     *   where: {
     *     // ... filter to delete one Resultado
     *   }
     * })
     * 
     */
    delete<T extends ResultadoDeleteArgs>(args: SelectSubset<T, ResultadoDeleteArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resultado.
     * @param {ResultadoUpdateArgs} args - Arguments to update one Resultado.
     * @example
     * // Update one Resultado
     * const resultado = await prisma.resultado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultadoUpdateArgs>(args: SelectSubset<T, ResultadoUpdateArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resultados.
     * @param {ResultadoDeleteManyArgs} args - Arguments to filter Resultados to delete.
     * @example
     * // Delete a few Resultados
     * const { count } = await prisma.resultado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultadoDeleteManyArgs>(args?: SelectSubset<T, ResultadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resultados
     * const resultado = await prisma.resultado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultadoUpdateManyArgs>(args: SelectSubset<T, ResultadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultados and returns the data updated in the database.
     * @param {ResultadoUpdateManyAndReturnArgs} args - Arguments to update many Resultados.
     * @example
     * // Update many Resultados
     * const resultado = await prisma.resultado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resultados and only return the `id`
     * const resultadoWithIdOnly = await prisma.resultado.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResultadoUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resultado.
     * @param {ResultadoUpsertArgs} args - Arguments to update or create a Resultado.
     * @example
     * // Update or create a Resultado
     * const resultado = await prisma.resultado.upsert({
     *   create: {
     *     // ... data to create a Resultado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resultado we want to update
     *   }
     * })
     */
    upsert<T extends ResultadoUpsertArgs>(args: SelectSubset<T, ResultadoUpsertArgs<ExtArgs>>): Prisma__ResultadoClient<$Result.GetResult<Prisma.$ResultadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resultados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoCountArgs} args - Arguments to filter Resultados to count.
     * @example
     * // Count the number of Resultados
     * const count = await prisma.resultado.count({
     *   where: {
     *     // ... the filter for the Resultados we want to count
     *   }
     * })
    **/
    count<T extends ResultadoCountArgs>(
      args?: Subset<T, ResultadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resultado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultadoAggregateArgs>(args: Subset<T, ResultadoAggregateArgs>): Prisma.PrismaPromise<GetResultadoAggregateType<T>>

    /**
     * Group by Resultado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultadoGroupByArgs} args - Group by arguments.
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
      T extends ResultadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultadoGroupByArgs['orderBy'] }
        : { orderBy?: ResultadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResultadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resultado model
   */
  readonly fields: ResultadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resultado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    encuestado<T extends EncuestadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EncuestadoDefaultArgs<ExtArgs>>): Prisma__EncuestadoClient<$Result.GetResult<Prisma.$EncuestadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resultado model
   */
  interface ResultadoFieldRefs {
    readonly id: FieldRef<"Resultado", 'String'>
    readonly encuestadoId: FieldRef<"Resultado", 'String'>
    readonly puntosD: FieldRef<"Resultado", 'Int'>
    readonly puntosI: FieldRef<"Resultado", 'Int'>
    readonly puntosS: FieldRef<"Resultado", 'Int'>
    readonly puntosC: FieldRef<"Resultado", 'Int'>
    readonly perfilPrimario: FieldRef<"Resultado", 'String'>
    readonly perfilSecundario: FieldRef<"Resultado", 'String'>
    readonly arquetipo: FieldRef<"Resultado", 'String'>
    readonly createdAt: FieldRef<"Resultado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resultado findUnique
   */
  export type ResultadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado findUniqueOrThrow
   */
  export type ResultadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado findFirst
   */
  export type ResultadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultados.
     */
    distinct?: ResultadoScalarFieldEnum | ResultadoScalarFieldEnum[]
  }

  /**
   * Resultado findFirstOrThrow
   */
  export type ResultadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultado to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resultados.
     */
    distinct?: ResultadoScalarFieldEnum | ResultadoScalarFieldEnum[]
  }

  /**
   * Resultado findMany
   */
  export type ResultadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter, which Resultados to fetch.
     */
    where?: ResultadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resultados to fetch.
     */
    orderBy?: ResultadoOrderByWithRelationInput | ResultadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resultados.
     */
    cursor?: ResultadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resultados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resultados.
     */
    skip?: number
    distinct?: ResultadoScalarFieldEnum | ResultadoScalarFieldEnum[]
  }

  /**
   * Resultado create
   */
  export type ResultadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Resultado.
     */
    data: XOR<ResultadoCreateInput, ResultadoUncheckedCreateInput>
  }

  /**
   * Resultado createMany
   */
  export type ResultadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resultados.
     */
    data: ResultadoCreateManyInput | ResultadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resultado createManyAndReturn
   */
  export type ResultadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * The data used to create many Resultados.
     */
    data: ResultadoCreateManyInput | ResultadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resultado update
   */
  export type ResultadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Resultado.
     */
    data: XOR<ResultadoUpdateInput, ResultadoUncheckedUpdateInput>
    /**
     * Choose, which Resultado to update.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado updateMany
   */
  export type ResultadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resultados.
     */
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyInput>
    /**
     * Filter which Resultados to update
     */
    where?: ResultadoWhereInput
    /**
     * Limit how many Resultados to update.
     */
    limit?: number
  }

  /**
   * Resultado updateManyAndReturn
   */
  export type ResultadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * The data used to update Resultados.
     */
    data: XOR<ResultadoUpdateManyMutationInput, ResultadoUncheckedUpdateManyInput>
    /**
     * Filter which Resultados to update
     */
    where?: ResultadoWhereInput
    /**
     * Limit how many Resultados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resultado upsert
   */
  export type ResultadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Resultado to update in case it exists.
     */
    where: ResultadoWhereUniqueInput
    /**
     * In case the Resultado found by the `where` argument doesn't exist, create a new Resultado with this data.
     */
    create: XOR<ResultadoCreateInput, ResultadoUncheckedCreateInput>
    /**
     * In case the Resultado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultadoUpdateInput, ResultadoUncheckedUpdateInput>
  }

  /**
   * Resultado delete
   */
  export type ResultadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
    /**
     * Filter which Resultado to delete.
     */
    where: ResultadoWhereUniqueInput
  }

  /**
   * Resultado deleteMany
   */
  export type ResultadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resultados to delete
     */
    where?: ResultadoWhereInput
    /**
     * Limit how many Resultados to delete.
     */
    limit?: number
  }

  /**
   * Resultado without action
   */
  export type ResultadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resultado
     */
    select?: ResultadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resultado
     */
    omit?: ResultadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultadoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nombre: 'nombre',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    razonSocial: 'razonSocial',
    contacto: 'contacto',
    email: 'email',
    telefono: 'telefono',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const EncuestadoScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    nombre: 'nombre',
    email: 'email',
    puesto: 'puesto',
    departamento: 'departamento',
    empresaId: 'empresaId',
    status: 'status',
    fechaInicio: 'fechaInicio',
    fechaCompletado: 'fechaCompletado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EncuestadoScalarFieldEnum = (typeof EncuestadoScalarFieldEnum)[keyof typeof EncuestadoScalarFieldEnum]


  export const PreguntaScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    bloque: 'bloque',
    texto: 'texto',
    opcionA: 'opcionA',
    opcionB: 'opcionB',
    opcionC: 'opcionC',
    opcionD: 'opcionD',
    claveA: 'claveA',
    claveB: 'claveB',
    claveC: 'claveC',
    claveD: 'claveD',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PreguntaScalarFieldEnum = (typeof PreguntaScalarFieldEnum)[keyof typeof PreguntaScalarFieldEnum]


  export const RespuestaScalarFieldEnum: {
    id: 'id',
    encuestadoId: 'encuestadoId',
    preguntaId: 'preguntaId',
    opcionSeleccionada: 'opcionSeleccionada',
    perfilAsignado: 'perfilAsignado',
    createdAt: 'createdAt'
  };

  export type RespuestaScalarFieldEnum = (typeof RespuestaScalarFieldEnum)[keyof typeof RespuestaScalarFieldEnum]


  export const ResultadoScalarFieldEnum: {
    id: 'id',
    encuestadoId: 'encuestadoId',
    puntosD: 'puntosD',
    puntosI: 'puntosI',
    puntosS: 'puntosS',
    puntosC: 'puntosC',
    perfilPrimario: 'perfilPrimario',
    perfilSecundario: 'perfilSecundario',
    arquetipo: 'arquetipo',
    createdAt: 'createdAt'
  };

  export type ResultadoScalarFieldEnum = (typeof ResultadoScalarFieldEnum)[keyof typeof ResultadoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusEncuesta'
   */
  export type EnumStatusEncuestaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEncuesta'>
    


  /**
   * Reference to a field of type 'StatusEncuesta[]'
   */
  export type ListEnumStatusEncuestaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEncuesta[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    empresas?: EmpresaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empresas?: EmpresaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    nombre?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    empresas?: EmpresaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: StringFilter<"Empresa"> | string
    nombre?: StringFilter<"Empresa"> | string
    razonSocial?: StringNullableFilter<"Empresa"> | string | null
    contacto?: StringNullableFilter<"Empresa"> | string | null
    email?: StringNullableFilter<"Empresa"> | string | null
    telefono?: StringNullableFilter<"Empresa"> | string | null
    usuarioId?: StringFilter<"Empresa"> | string
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeFilter<"Empresa"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    encuestados?: EncuestadoListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    razonSocial?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    encuestados?: EncuestadoOrderByRelationAggregateInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    nombre?: StringFilter<"Empresa"> | string
    razonSocial?: StringNullableFilter<"Empresa"> | string | null
    contacto?: StringNullableFilter<"Empresa"> | string | null
    email?: StringNullableFilter<"Empresa"> | string | null
    telefono?: StringNullableFilter<"Empresa"> | string | null
    usuarioId?: StringFilter<"Empresa"> | string
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeFilter<"Empresa"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    encuestados?: EncuestadoListRelationFilter
  }, "id">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    razonSocial?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Empresa"> | string
    nombre?: StringWithAggregatesFilter<"Empresa"> | string
    razonSocial?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    contacto?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    email?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    usuarioId?: StringWithAggregatesFilter<"Empresa"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Empresa"> | Date | string
  }

  export type EncuestadoWhereInput = {
    AND?: EncuestadoWhereInput | EncuestadoWhereInput[]
    OR?: EncuestadoWhereInput[]
    NOT?: EncuestadoWhereInput | EncuestadoWhereInput[]
    id?: StringFilter<"Encuestado"> | string
    codigo?: StringFilter<"Encuestado"> | string
    nombre?: StringFilter<"Encuestado"> | string
    email?: StringNullableFilter<"Encuestado"> | string | null
    puesto?: StringNullableFilter<"Encuestado"> | string | null
    departamento?: StringNullableFilter<"Encuestado"> | string | null
    empresaId?: StringFilter<"Encuestado"> | string
    status?: EnumStatusEncuestaFilter<"Encuestado"> | $Enums.StatusEncuesta
    fechaInicio?: DateTimeNullableFilter<"Encuestado"> | Date | string | null
    fechaCompletado?: DateTimeNullableFilter<"Encuestado"> | Date | string | null
    createdAt?: DateTimeFilter<"Encuestado"> | Date | string
    updatedAt?: DateTimeFilter<"Encuestado"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    respuestas?: RespuestaListRelationFilter
    resultado?: XOR<ResultadoNullableScalarRelationFilter, ResultadoWhereInput> | null
  }

  export type EncuestadoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    puesto?: SortOrderInput | SortOrder
    departamento?: SortOrderInput | SortOrder
    empresaId?: SortOrder
    status?: SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    fechaCompletado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    respuestas?: RespuestaOrderByRelationAggregateInput
    resultado?: ResultadoOrderByWithRelationInput
  }

  export type EncuestadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: EncuestadoWhereInput | EncuestadoWhereInput[]
    OR?: EncuestadoWhereInput[]
    NOT?: EncuestadoWhereInput | EncuestadoWhereInput[]
    nombre?: StringFilter<"Encuestado"> | string
    email?: StringNullableFilter<"Encuestado"> | string | null
    puesto?: StringNullableFilter<"Encuestado"> | string | null
    departamento?: StringNullableFilter<"Encuestado"> | string | null
    empresaId?: StringFilter<"Encuestado"> | string
    status?: EnumStatusEncuestaFilter<"Encuestado"> | $Enums.StatusEncuesta
    fechaInicio?: DateTimeNullableFilter<"Encuestado"> | Date | string | null
    fechaCompletado?: DateTimeNullableFilter<"Encuestado"> | Date | string | null
    createdAt?: DateTimeFilter<"Encuestado"> | Date | string
    updatedAt?: DateTimeFilter<"Encuestado"> | Date | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    respuestas?: RespuestaListRelationFilter
    resultado?: XOR<ResultadoNullableScalarRelationFilter, ResultadoWhereInput> | null
  }, "id" | "codigo">

  export type EncuestadoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    nombre?: SortOrder
    email?: SortOrderInput | SortOrder
    puesto?: SortOrderInput | SortOrder
    departamento?: SortOrderInput | SortOrder
    empresaId?: SortOrder
    status?: SortOrder
    fechaInicio?: SortOrderInput | SortOrder
    fechaCompletado?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EncuestadoCountOrderByAggregateInput
    _max?: EncuestadoMaxOrderByAggregateInput
    _min?: EncuestadoMinOrderByAggregateInput
  }

  export type EncuestadoScalarWhereWithAggregatesInput = {
    AND?: EncuestadoScalarWhereWithAggregatesInput | EncuestadoScalarWhereWithAggregatesInput[]
    OR?: EncuestadoScalarWhereWithAggregatesInput[]
    NOT?: EncuestadoScalarWhereWithAggregatesInput | EncuestadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Encuestado"> | string
    codigo?: StringWithAggregatesFilter<"Encuestado"> | string
    nombre?: StringWithAggregatesFilter<"Encuestado"> | string
    email?: StringNullableWithAggregatesFilter<"Encuestado"> | string | null
    puesto?: StringNullableWithAggregatesFilter<"Encuestado"> | string | null
    departamento?: StringNullableWithAggregatesFilter<"Encuestado"> | string | null
    empresaId?: StringWithAggregatesFilter<"Encuestado"> | string
    status?: EnumStatusEncuestaWithAggregatesFilter<"Encuestado"> | $Enums.StatusEncuesta
    fechaInicio?: DateTimeNullableWithAggregatesFilter<"Encuestado"> | Date | string | null
    fechaCompletado?: DateTimeNullableWithAggregatesFilter<"Encuestado"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Encuestado"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Encuestado"> | Date | string
  }

  export type PreguntaWhereInput = {
    AND?: PreguntaWhereInput | PreguntaWhereInput[]
    OR?: PreguntaWhereInput[]
    NOT?: PreguntaWhereInput | PreguntaWhereInput[]
    id?: StringFilter<"Pregunta"> | string
    numero?: IntFilter<"Pregunta"> | number
    bloque?: StringFilter<"Pregunta"> | string
    texto?: StringFilter<"Pregunta"> | string
    opcionA?: StringFilter<"Pregunta"> | string
    opcionB?: StringFilter<"Pregunta"> | string
    opcionC?: StringFilter<"Pregunta"> | string
    opcionD?: StringFilter<"Pregunta"> | string
    claveA?: StringFilter<"Pregunta"> | string
    claveB?: StringFilter<"Pregunta"> | string
    claveC?: StringFilter<"Pregunta"> | string
    claveD?: StringFilter<"Pregunta"> | string
    createdAt?: DateTimeFilter<"Pregunta"> | Date | string
    updatedAt?: DateTimeFilter<"Pregunta"> | Date | string
    respuestas?: RespuestaListRelationFilter
  }

  export type PreguntaOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    bloque?: SortOrder
    texto?: SortOrder
    opcionA?: SortOrder
    opcionB?: SortOrder
    opcionC?: SortOrder
    opcionD?: SortOrder
    claveA?: SortOrder
    claveB?: SortOrder
    claveC?: SortOrder
    claveD?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    respuestas?: RespuestaOrderByRelationAggregateInput
  }

  export type PreguntaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero?: number
    AND?: PreguntaWhereInput | PreguntaWhereInput[]
    OR?: PreguntaWhereInput[]
    NOT?: PreguntaWhereInput | PreguntaWhereInput[]
    bloque?: StringFilter<"Pregunta"> | string
    texto?: StringFilter<"Pregunta"> | string
    opcionA?: StringFilter<"Pregunta"> | string
    opcionB?: StringFilter<"Pregunta"> | string
    opcionC?: StringFilter<"Pregunta"> | string
    opcionD?: StringFilter<"Pregunta"> | string
    claveA?: StringFilter<"Pregunta"> | string
    claveB?: StringFilter<"Pregunta"> | string
    claveC?: StringFilter<"Pregunta"> | string
    claveD?: StringFilter<"Pregunta"> | string
    createdAt?: DateTimeFilter<"Pregunta"> | Date | string
    updatedAt?: DateTimeFilter<"Pregunta"> | Date | string
    respuestas?: RespuestaListRelationFilter
  }, "id" | "numero">

  export type PreguntaOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    bloque?: SortOrder
    texto?: SortOrder
    opcionA?: SortOrder
    opcionB?: SortOrder
    opcionC?: SortOrder
    opcionD?: SortOrder
    claveA?: SortOrder
    claveB?: SortOrder
    claveC?: SortOrder
    claveD?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PreguntaCountOrderByAggregateInput
    _avg?: PreguntaAvgOrderByAggregateInput
    _max?: PreguntaMaxOrderByAggregateInput
    _min?: PreguntaMinOrderByAggregateInput
    _sum?: PreguntaSumOrderByAggregateInput
  }

  export type PreguntaScalarWhereWithAggregatesInput = {
    AND?: PreguntaScalarWhereWithAggregatesInput | PreguntaScalarWhereWithAggregatesInput[]
    OR?: PreguntaScalarWhereWithAggregatesInput[]
    NOT?: PreguntaScalarWhereWithAggregatesInput | PreguntaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pregunta"> | string
    numero?: IntWithAggregatesFilter<"Pregunta"> | number
    bloque?: StringWithAggregatesFilter<"Pregunta"> | string
    texto?: StringWithAggregatesFilter<"Pregunta"> | string
    opcionA?: StringWithAggregatesFilter<"Pregunta"> | string
    opcionB?: StringWithAggregatesFilter<"Pregunta"> | string
    opcionC?: StringWithAggregatesFilter<"Pregunta"> | string
    opcionD?: StringWithAggregatesFilter<"Pregunta"> | string
    claveA?: StringWithAggregatesFilter<"Pregunta"> | string
    claveB?: StringWithAggregatesFilter<"Pregunta"> | string
    claveC?: StringWithAggregatesFilter<"Pregunta"> | string
    claveD?: StringWithAggregatesFilter<"Pregunta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pregunta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pregunta"> | Date | string
  }

  export type RespuestaWhereInput = {
    AND?: RespuestaWhereInput | RespuestaWhereInput[]
    OR?: RespuestaWhereInput[]
    NOT?: RespuestaWhereInput | RespuestaWhereInput[]
    id?: StringFilter<"Respuesta"> | string
    encuestadoId?: StringFilter<"Respuesta"> | string
    preguntaId?: StringFilter<"Respuesta"> | string
    opcionSeleccionada?: StringFilter<"Respuesta"> | string
    perfilAsignado?: StringFilter<"Respuesta"> | string
    createdAt?: DateTimeFilter<"Respuesta"> | Date | string
    encuestado?: XOR<EncuestadoScalarRelationFilter, EncuestadoWhereInput>
    pregunta?: XOR<PreguntaScalarRelationFilter, PreguntaWhereInput>
  }

  export type RespuestaOrderByWithRelationInput = {
    id?: SortOrder
    encuestadoId?: SortOrder
    preguntaId?: SortOrder
    opcionSeleccionada?: SortOrder
    perfilAsignado?: SortOrder
    createdAt?: SortOrder
    encuestado?: EncuestadoOrderByWithRelationInput
    pregunta?: PreguntaOrderByWithRelationInput
  }

  export type RespuestaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    encuestadoId_preguntaId?: RespuestaEncuestadoIdPreguntaIdCompoundUniqueInput
    AND?: RespuestaWhereInput | RespuestaWhereInput[]
    OR?: RespuestaWhereInput[]
    NOT?: RespuestaWhereInput | RespuestaWhereInput[]
    encuestadoId?: StringFilter<"Respuesta"> | string
    preguntaId?: StringFilter<"Respuesta"> | string
    opcionSeleccionada?: StringFilter<"Respuesta"> | string
    perfilAsignado?: StringFilter<"Respuesta"> | string
    createdAt?: DateTimeFilter<"Respuesta"> | Date | string
    encuestado?: XOR<EncuestadoScalarRelationFilter, EncuestadoWhereInput>
    pregunta?: XOR<PreguntaScalarRelationFilter, PreguntaWhereInput>
  }, "id" | "encuestadoId_preguntaId">

  export type RespuestaOrderByWithAggregationInput = {
    id?: SortOrder
    encuestadoId?: SortOrder
    preguntaId?: SortOrder
    opcionSeleccionada?: SortOrder
    perfilAsignado?: SortOrder
    createdAt?: SortOrder
    _count?: RespuestaCountOrderByAggregateInput
    _max?: RespuestaMaxOrderByAggregateInput
    _min?: RespuestaMinOrderByAggregateInput
  }

  export type RespuestaScalarWhereWithAggregatesInput = {
    AND?: RespuestaScalarWhereWithAggregatesInput | RespuestaScalarWhereWithAggregatesInput[]
    OR?: RespuestaScalarWhereWithAggregatesInput[]
    NOT?: RespuestaScalarWhereWithAggregatesInput | RespuestaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Respuesta"> | string
    encuestadoId?: StringWithAggregatesFilter<"Respuesta"> | string
    preguntaId?: StringWithAggregatesFilter<"Respuesta"> | string
    opcionSeleccionada?: StringWithAggregatesFilter<"Respuesta"> | string
    perfilAsignado?: StringWithAggregatesFilter<"Respuesta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Respuesta"> | Date | string
  }

  export type ResultadoWhereInput = {
    AND?: ResultadoWhereInput | ResultadoWhereInput[]
    OR?: ResultadoWhereInput[]
    NOT?: ResultadoWhereInput | ResultadoWhereInput[]
    id?: StringFilter<"Resultado"> | string
    encuestadoId?: StringFilter<"Resultado"> | string
    puntosD?: IntFilter<"Resultado"> | number
    puntosI?: IntFilter<"Resultado"> | number
    puntosS?: IntFilter<"Resultado"> | number
    puntosC?: IntFilter<"Resultado"> | number
    perfilPrimario?: StringFilter<"Resultado"> | string
    perfilSecundario?: StringFilter<"Resultado"> | string
    arquetipo?: StringFilter<"Resultado"> | string
    createdAt?: DateTimeFilter<"Resultado"> | Date | string
    encuestado?: XOR<EncuestadoScalarRelationFilter, EncuestadoWhereInput>
  }

  export type ResultadoOrderByWithRelationInput = {
    id?: SortOrder
    encuestadoId?: SortOrder
    puntosD?: SortOrder
    puntosI?: SortOrder
    puntosS?: SortOrder
    puntosC?: SortOrder
    perfilPrimario?: SortOrder
    perfilSecundario?: SortOrder
    arquetipo?: SortOrder
    createdAt?: SortOrder
    encuestado?: EncuestadoOrderByWithRelationInput
  }

  export type ResultadoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    encuestadoId?: string
    AND?: ResultadoWhereInput | ResultadoWhereInput[]
    OR?: ResultadoWhereInput[]
    NOT?: ResultadoWhereInput | ResultadoWhereInput[]
    puntosD?: IntFilter<"Resultado"> | number
    puntosI?: IntFilter<"Resultado"> | number
    puntosS?: IntFilter<"Resultado"> | number
    puntosC?: IntFilter<"Resultado"> | number
    perfilPrimario?: StringFilter<"Resultado"> | string
    perfilSecundario?: StringFilter<"Resultado"> | string
    arquetipo?: StringFilter<"Resultado"> | string
    createdAt?: DateTimeFilter<"Resultado"> | Date | string
    encuestado?: XOR<EncuestadoScalarRelationFilter, EncuestadoWhereInput>
  }, "id" | "encuestadoId">

  export type ResultadoOrderByWithAggregationInput = {
    id?: SortOrder
    encuestadoId?: SortOrder
    puntosD?: SortOrder
    puntosI?: SortOrder
    puntosS?: SortOrder
    puntosC?: SortOrder
    perfilPrimario?: SortOrder
    perfilSecundario?: SortOrder
    arquetipo?: SortOrder
    createdAt?: SortOrder
    _count?: ResultadoCountOrderByAggregateInput
    _avg?: ResultadoAvgOrderByAggregateInput
    _max?: ResultadoMaxOrderByAggregateInput
    _min?: ResultadoMinOrderByAggregateInput
    _sum?: ResultadoSumOrderByAggregateInput
  }

  export type ResultadoScalarWhereWithAggregatesInput = {
    AND?: ResultadoScalarWhereWithAggregatesInput | ResultadoScalarWhereWithAggregatesInput[]
    OR?: ResultadoScalarWhereWithAggregatesInput[]
    NOT?: ResultadoScalarWhereWithAggregatesInput | ResultadoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resultado"> | string
    encuestadoId?: StringWithAggregatesFilter<"Resultado"> | string
    puntosD?: IntWithAggregatesFilter<"Resultado"> | number
    puntosI?: IntWithAggregatesFilter<"Resultado"> | number
    puntosS?: IntWithAggregatesFilter<"Resultado"> | number
    puntosC?: IntWithAggregatesFilter<"Resultado"> | number
    perfilPrimario?: StringWithAggregatesFilter<"Resultado"> | string
    perfilSecundario?: StringWithAggregatesFilter<"Resultado"> | string
    arquetipo?: StringWithAggregatesFilter<"Resultado"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Resultado"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    password: string
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    empresas?: EmpresaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    empresas?: EmpresaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresas?: EmpresaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresas?: EmpresaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    password: string
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaCreateInput = {
    id?: string
    nombre: string
    razonSocial?: string | null
    contacto?: string | null
    email?: string | null
    telefono?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEmpresasInput
    encuestados?: EncuestadoCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: string
    nombre: string
    razonSocial?: string | null
    contacto?: string | null
    email?: string | null
    telefono?: string | null
    usuarioId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    encuestados?: EncuestadoUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEmpresasNestedInput
    encuestados?: EncuestadoUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encuestados?: EncuestadoUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: string
    nombre: string
    razonSocial?: string | null
    contacto?: string | null
    email?: string | null
    telefono?: string | null
    usuarioId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpresaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EncuestadoCreateInput = {
    id?: string
    codigo: string
    nombre: string
    email?: string | null
    puesto?: string | null
    departamento?: string | null
    status?: $Enums.StatusEncuesta
    fechaInicio?: Date | string | null
    fechaCompletado?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    empresa: EmpresaCreateNestedOneWithoutEncuestadosInput
    respuestas?: RespuestaCreateNestedManyWithoutEncuestadoInput
    resultado?: ResultadoCreateNestedOneWithoutEncuestadoInput
  }

  export type EncuestadoUncheckedCreateInput = {
    id?: string
    codigo: string
    nombre: string
    email?: string | null
    puesto?: string | null
    departamento?: string | null
    empresaId: string
    status?: $Enums.StatusEncuesta
    fechaInicio?: Date | string | null
    fechaCompletado?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    respuestas?: RespuestaUncheckedCreateNestedManyWithoutEncuestadoInput
    resultado?: ResultadoUncheckedCreateNestedOneWithoutEncuestadoInput
  }

  export type EncuestadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutEncuestadosNestedInput
    respuestas?: RespuestaUpdateManyWithoutEncuestadoNestedInput
    resultado?: ResultadoUpdateOneWithoutEncuestadoNestedInput
  }

  export type EncuestadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: RespuestaUncheckedUpdateManyWithoutEncuestadoNestedInput
    resultado?: ResultadoUncheckedUpdateOneWithoutEncuestadoNestedInput
  }

  export type EncuestadoCreateManyInput = {
    id?: string
    codigo: string
    nombre: string
    email?: string | null
    puesto?: string | null
    departamento?: string | null
    empresaId: string
    status?: $Enums.StatusEncuesta
    fechaInicio?: Date | string | null
    fechaCompletado?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EncuestadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EncuestadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreguntaCreateInput = {
    id?: string
    numero: number
    bloque: string
    texto: string
    opcionA: string
    opcionB: string
    opcionC: string
    opcionD: string
    claveA: string
    claveB: string
    claveC: string
    claveD: string
    createdAt?: Date | string
    updatedAt?: Date | string
    respuestas?: RespuestaCreateNestedManyWithoutPreguntaInput
  }

  export type PreguntaUncheckedCreateInput = {
    id?: string
    numero: number
    bloque: string
    texto: string
    opcionA: string
    opcionB: string
    opcionC: string
    opcionD: string
    claveA: string
    claveB: string
    claveC: string
    claveD: string
    createdAt?: Date | string
    updatedAt?: Date | string
    respuestas?: RespuestaUncheckedCreateNestedManyWithoutPreguntaInput
  }

  export type PreguntaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bloque?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    opcionA?: StringFieldUpdateOperationsInput | string
    opcionB?: StringFieldUpdateOperationsInput | string
    opcionC?: StringFieldUpdateOperationsInput | string
    opcionD?: StringFieldUpdateOperationsInput | string
    claveA?: StringFieldUpdateOperationsInput | string
    claveB?: StringFieldUpdateOperationsInput | string
    claveC?: StringFieldUpdateOperationsInput | string
    claveD?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: RespuestaUpdateManyWithoutPreguntaNestedInput
  }

  export type PreguntaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bloque?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    opcionA?: StringFieldUpdateOperationsInput | string
    opcionB?: StringFieldUpdateOperationsInput | string
    opcionC?: StringFieldUpdateOperationsInput | string
    opcionD?: StringFieldUpdateOperationsInput | string
    claveA?: StringFieldUpdateOperationsInput | string
    claveB?: StringFieldUpdateOperationsInput | string
    claveC?: StringFieldUpdateOperationsInput | string
    claveD?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: RespuestaUncheckedUpdateManyWithoutPreguntaNestedInput
  }

  export type PreguntaCreateManyInput = {
    id?: string
    numero: number
    bloque: string
    texto: string
    opcionA: string
    opcionB: string
    opcionC: string
    opcionD: string
    claveA: string
    claveB: string
    claveC: string
    claveD: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreguntaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bloque?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    opcionA?: StringFieldUpdateOperationsInput | string
    opcionB?: StringFieldUpdateOperationsInput | string
    opcionC?: StringFieldUpdateOperationsInput | string
    opcionD?: StringFieldUpdateOperationsInput | string
    claveA?: StringFieldUpdateOperationsInput | string
    claveB?: StringFieldUpdateOperationsInput | string
    claveC?: StringFieldUpdateOperationsInput | string
    claveD?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreguntaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bloque?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    opcionA?: StringFieldUpdateOperationsInput | string
    opcionB?: StringFieldUpdateOperationsInput | string
    opcionC?: StringFieldUpdateOperationsInput | string
    opcionD?: StringFieldUpdateOperationsInput | string
    claveA?: StringFieldUpdateOperationsInput | string
    claveB?: StringFieldUpdateOperationsInput | string
    claveC?: StringFieldUpdateOperationsInput | string
    claveD?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaCreateInput = {
    id?: string
    opcionSeleccionada: string
    perfilAsignado: string
    createdAt?: Date | string
    encuestado: EncuestadoCreateNestedOneWithoutRespuestasInput
    pregunta: PreguntaCreateNestedOneWithoutRespuestasInput
  }

  export type RespuestaUncheckedCreateInput = {
    id?: string
    encuestadoId: string
    preguntaId: string
    opcionSeleccionada: string
    perfilAsignado: string
    createdAt?: Date | string
  }

  export type RespuestaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opcionSeleccionada?: StringFieldUpdateOperationsInput | string
    perfilAsignado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encuestado?: EncuestadoUpdateOneRequiredWithoutRespuestasNestedInput
    pregunta?: PreguntaUpdateOneRequiredWithoutRespuestasNestedInput
  }

  export type RespuestaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    encuestadoId?: StringFieldUpdateOperationsInput | string
    preguntaId?: StringFieldUpdateOperationsInput | string
    opcionSeleccionada?: StringFieldUpdateOperationsInput | string
    perfilAsignado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaCreateManyInput = {
    id?: string
    encuestadoId: string
    preguntaId: string
    opcionSeleccionada: string
    perfilAsignado: string
    createdAt?: Date | string
  }

  export type RespuestaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    opcionSeleccionada?: StringFieldUpdateOperationsInput | string
    perfilAsignado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    encuestadoId?: StringFieldUpdateOperationsInput | string
    preguntaId?: StringFieldUpdateOperationsInput | string
    opcionSeleccionada?: StringFieldUpdateOperationsInput | string
    perfilAsignado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoCreateInput = {
    id?: string
    puntosD: number
    puntosI: number
    puntosS: number
    puntosC: number
    perfilPrimario: string
    perfilSecundario: string
    arquetipo: string
    createdAt?: Date | string
    encuestado: EncuestadoCreateNestedOneWithoutResultadoInput
  }

  export type ResultadoUncheckedCreateInput = {
    id?: string
    encuestadoId: string
    puntosD: number
    puntosI: number
    puntosS: number
    puntosC: number
    perfilPrimario: string
    perfilSecundario: string
    arquetipo: string
    createdAt?: Date | string
  }

  export type ResultadoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosD?: IntFieldUpdateOperationsInput | number
    puntosI?: IntFieldUpdateOperationsInput | number
    puntosS?: IntFieldUpdateOperationsInput | number
    puntosC?: IntFieldUpdateOperationsInput | number
    perfilPrimario?: StringFieldUpdateOperationsInput | string
    perfilSecundario?: StringFieldUpdateOperationsInput | string
    arquetipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encuestado?: EncuestadoUpdateOneRequiredWithoutResultadoNestedInput
  }

  export type ResultadoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    encuestadoId?: StringFieldUpdateOperationsInput | string
    puntosD?: IntFieldUpdateOperationsInput | number
    puntosI?: IntFieldUpdateOperationsInput | number
    puntosS?: IntFieldUpdateOperationsInput | number
    puntosC?: IntFieldUpdateOperationsInput | number
    perfilPrimario?: StringFieldUpdateOperationsInput | string
    perfilSecundario?: StringFieldUpdateOperationsInput | string
    arquetipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoCreateManyInput = {
    id?: string
    encuestadoId: string
    puntosD: number
    puntosI: number
    puntosS: number
    puntosC: number
    perfilPrimario: string
    perfilSecundario: string
    arquetipo: string
    createdAt?: Date | string
  }

  export type ResultadoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosD?: IntFieldUpdateOperationsInput | number
    puntosI?: IntFieldUpdateOperationsInput | number
    puntosS?: IntFieldUpdateOperationsInput | number
    puntosC?: IntFieldUpdateOperationsInput | number
    perfilPrimario?: StringFieldUpdateOperationsInput | string
    perfilSecundario?: StringFieldUpdateOperationsInput | string
    arquetipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    encuestadoId?: StringFieldUpdateOperationsInput | string
    puntosD?: IntFieldUpdateOperationsInput | number
    puntosI?: IntFieldUpdateOperationsInput | number
    puntosS?: IntFieldUpdateOperationsInput | number
    puntosC?: IntFieldUpdateOperationsInput | number
    perfilPrimario?: StringFieldUpdateOperationsInput | string
    perfilSecundario?: StringFieldUpdateOperationsInput | string
    arquetipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmpresaListRelationFilter = {
    every?: EmpresaWhereInput
    some?: EmpresaWhereInput
    none?: EmpresaWhereInput
  }

  export type EmpresaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type EncuestadoListRelationFilter = {
    every?: EncuestadoWhereInput
    some?: EncuestadoWhereInput
    none?: EncuestadoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EncuestadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    razonSocial?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    razonSocial?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    razonSocial?: SortOrder
    contacto?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatusEncuestaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEncuesta | EnumStatusEncuestaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEncuesta[] | ListEnumStatusEncuestaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEncuesta[] | ListEnumStatusEncuestaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEncuestaFilter<$PrismaModel> | $Enums.StatusEncuesta
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type RespuestaListRelationFilter = {
    every?: RespuestaWhereInput
    some?: RespuestaWhereInput
    none?: RespuestaWhereInput
  }

  export type ResultadoNullableScalarRelationFilter = {
    is?: ResultadoWhereInput | null
    isNot?: ResultadoWhereInput | null
  }

  export type RespuestaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EncuestadoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    puesto?: SortOrder
    departamento?: SortOrder
    empresaId?: SortOrder
    status?: SortOrder
    fechaInicio?: SortOrder
    fechaCompletado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EncuestadoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    puesto?: SortOrder
    departamento?: SortOrder
    empresaId?: SortOrder
    status?: SortOrder
    fechaInicio?: SortOrder
    fechaCompletado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EncuestadoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    puesto?: SortOrder
    departamento?: SortOrder
    empresaId?: SortOrder
    status?: SortOrder
    fechaInicio?: SortOrder
    fechaCompletado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusEncuestaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEncuesta | EnumStatusEncuestaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEncuesta[] | ListEnumStatusEncuestaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEncuesta[] | ListEnumStatusEncuestaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEncuestaWithAggregatesFilter<$PrismaModel> | $Enums.StatusEncuesta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEncuestaFilter<$PrismaModel>
    _max?: NestedEnumStatusEncuestaFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PreguntaCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    bloque?: SortOrder
    texto?: SortOrder
    opcionA?: SortOrder
    opcionB?: SortOrder
    opcionC?: SortOrder
    opcionD?: SortOrder
    claveA?: SortOrder
    claveB?: SortOrder
    claveC?: SortOrder
    claveD?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreguntaAvgOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type PreguntaMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    bloque?: SortOrder
    texto?: SortOrder
    opcionA?: SortOrder
    opcionB?: SortOrder
    opcionC?: SortOrder
    opcionD?: SortOrder
    claveA?: SortOrder
    claveB?: SortOrder
    claveC?: SortOrder
    claveD?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreguntaMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    bloque?: SortOrder
    texto?: SortOrder
    opcionA?: SortOrder
    opcionB?: SortOrder
    opcionC?: SortOrder
    opcionD?: SortOrder
    claveA?: SortOrder
    claveB?: SortOrder
    claveC?: SortOrder
    claveD?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreguntaSumOrderByAggregateInput = {
    numero?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EncuestadoScalarRelationFilter = {
    is?: EncuestadoWhereInput
    isNot?: EncuestadoWhereInput
  }

  export type PreguntaScalarRelationFilter = {
    is?: PreguntaWhereInput
    isNot?: PreguntaWhereInput
  }

  export type RespuestaEncuestadoIdPreguntaIdCompoundUniqueInput = {
    encuestadoId: string
    preguntaId: string
  }

  export type RespuestaCountOrderByAggregateInput = {
    id?: SortOrder
    encuestadoId?: SortOrder
    preguntaId?: SortOrder
    opcionSeleccionada?: SortOrder
    perfilAsignado?: SortOrder
    createdAt?: SortOrder
  }

  export type RespuestaMaxOrderByAggregateInput = {
    id?: SortOrder
    encuestadoId?: SortOrder
    preguntaId?: SortOrder
    opcionSeleccionada?: SortOrder
    perfilAsignado?: SortOrder
    createdAt?: SortOrder
  }

  export type RespuestaMinOrderByAggregateInput = {
    id?: SortOrder
    encuestadoId?: SortOrder
    preguntaId?: SortOrder
    opcionSeleccionada?: SortOrder
    perfilAsignado?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultadoCountOrderByAggregateInput = {
    id?: SortOrder
    encuestadoId?: SortOrder
    puntosD?: SortOrder
    puntosI?: SortOrder
    puntosS?: SortOrder
    puntosC?: SortOrder
    perfilPrimario?: SortOrder
    perfilSecundario?: SortOrder
    arquetipo?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultadoAvgOrderByAggregateInput = {
    puntosD?: SortOrder
    puntosI?: SortOrder
    puntosS?: SortOrder
    puntosC?: SortOrder
  }

  export type ResultadoMaxOrderByAggregateInput = {
    id?: SortOrder
    encuestadoId?: SortOrder
    puntosD?: SortOrder
    puntosI?: SortOrder
    puntosS?: SortOrder
    puntosC?: SortOrder
    perfilPrimario?: SortOrder
    perfilSecundario?: SortOrder
    arquetipo?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultadoMinOrderByAggregateInput = {
    id?: SortOrder
    encuestadoId?: SortOrder
    puntosD?: SortOrder
    puntosI?: SortOrder
    puntosS?: SortOrder
    puntosC?: SortOrder
    perfilPrimario?: SortOrder
    perfilSecundario?: SortOrder
    arquetipo?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultadoSumOrderByAggregateInput = {
    puntosD?: SortOrder
    puntosI?: SortOrder
    puntosS?: SortOrder
    puntosC?: SortOrder
  }

  export type EmpresaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EmpresaCreateWithoutUsuarioInput, EmpresaUncheckedCreateWithoutUsuarioInput> | EmpresaCreateWithoutUsuarioInput[] | EmpresaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmpresaCreateOrConnectWithoutUsuarioInput | EmpresaCreateOrConnectWithoutUsuarioInput[]
    createMany?: EmpresaCreateManyUsuarioInputEnvelope
    connect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
  }

  export type EmpresaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<EmpresaCreateWithoutUsuarioInput, EmpresaUncheckedCreateWithoutUsuarioInput> | EmpresaCreateWithoutUsuarioInput[] | EmpresaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmpresaCreateOrConnectWithoutUsuarioInput | EmpresaCreateOrConnectWithoutUsuarioInput[]
    createMany?: EmpresaCreateManyUsuarioInputEnvelope
    connect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmpresaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EmpresaCreateWithoutUsuarioInput, EmpresaUncheckedCreateWithoutUsuarioInput> | EmpresaCreateWithoutUsuarioInput[] | EmpresaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmpresaCreateOrConnectWithoutUsuarioInput | EmpresaCreateOrConnectWithoutUsuarioInput[]
    upsert?: EmpresaUpsertWithWhereUniqueWithoutUsuarioInput | EmpresaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EmpresaCreateManyUsuarioInputEnvelope
    set?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    disconnect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    delete?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    connect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    update?: EmpresaUpdateWithWhereUniqueWithoutUsuarioInput | EmpresaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EmpresaUpdateManyWithWhereWithoutUsuarioInput | EmpresaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EmpresaScalarWhereInput | EmpresaScalarWhereInput[]
  }

  export type EmpresaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<EmpresaCreateWithoutUsuarioInput, EmpresaUncheckedCreateWithoutUsuarioInput> | EmpresaCreateWithoutUsuarioInput[] | EmpresaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: EmpresaCreateOrConnectWithoutUsuarioInput | EmpresaCreateOrConnectWithoutUsuarioInput[]
    upsert?: EmpresaUpsertWithWhereUniqueWithoutUsuarioInput | EmpresaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: EmpresaCreateManyUsuarioInputEnvelope
    set?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    disconnect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    delete?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    connect?: EmpresaWhereUniqueInput | EmpresaWhereUniqueInput[]
    update?: EmpresaUpdateWithWhereUniqueWithoutUsuarioInput | EmpresaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: EmpresaUpdateManyWithWhereWithoutUsuarioInput | EmpresaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: EmpresaScalarWhereInput | EmpresaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutEmpresasInput = {
    create?: XOR<UsuarioCreateWithoutEmpresasInput, UsuarioUncheckedCreateWithoutEmpresasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpresasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type EncuestadoCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<EncuestadoCreateWithoutEmpresaInput, EncuestadoUncheckedCreateWithoutEmpresaInput> | EncuestadoCreateWithoutEmpresaInput[] | EncuestadoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: EncuestadoCreateOrConnectWithoutEmpresaInput | EncuestadoCreateOrConnectWithoutEmpresaInput[]
    createMany?: EncuestadoCreateManyEmpresaInputEnvelope
    connect?: EncuestadoWhereUniqueInput | EncuestadoWhereUniqueInput[]
  }

  export type EncuestadoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<EncuestadoCreateWithoutEmpresaInput, EncuestadoUncheckedCreateWithoutEmpresaInput> | EncuestadoCreateWithoutEmpresaInput[] | EncuestadoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: EncuestadoCreateOrConnectWithoutEmpresaInput | EncuestadoCreateOrConnectWithoutEmpresaInput[]
    createMany?: EncuestadoCreateManyEmpresaInputEnvelope
    connect?: EncuestadoWhereUniqueInput | EncuestadoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutEmpresasNestedInput = {
    create?: XOR<UsuarioCreateWithoutEmpresasInput, UsuarioUncheckedCreateWithoutEmpresasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutEmpresasInput
    upsert?: UsuarioUpsertWithoutEmpresasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutEmpresasInput, UsuarioUpdateWithoutEmpresasInput>, UsuarioUncheckedUpdateWithoutEmpresasInput>
  }

  export type EncuestadoUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<EncuestadoCreateWithoutEmpresaInput, EncuestadoUncheckedCreateWithoutEmpresaInput> | EncuestadoCreateWithoutEmpresaInput[] | EncuestadoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: EncuestadoCreateOrConnectWithoutEmpresaInput | EncuestadoCreateOrConnectWithoutEmpresaInput[]
    upsert?: EncuestadoUpsertWithWhereUniqueWithoutEmpresaInput | EncuestadoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: EncuestadoCreateManyEmpresaInputEnvelope
    set?: EncuestadoWhereUniqueInput | EncuestadoWhereUniqueInput[]
    disconnect?: EncuestadoWhereUniqueInput | EncuestadoWhereUniqueInput[]
    delete?: EncuestadoWhereUniqueInput | EncuestadoWhereUniqueInput[]
    connect?: EncuestadoWhereUniqueInput | EncuestadoWhereUniqueInput[]
    update?: EncuestadoUpdateWithWhereUniqueWithoutEmpresaInput | EncuestadoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: EncuestadoUpdateManyWithWhereWithoutEmpresaInput | EncuestadoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: EncuestadoScalarWhereInput | EncuestadoScalarWhereInput[]
  }

  export type EncuestadoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<EncuestadoCreateWithoutEmpresaInput, EncuestadoUncheckedCreateWithoutEmpresaInput> | EncuestadoCreateWithoutEmpresaInput[] | EncuestadoUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: EncuestadoCreateOrConnectWithoutEmpresaInput | EncuestadoCreateOrConnectWithoutEmpresaInput[]
    upsert?: EncuestadoUpsertWithWhereUniqueWithoutEmpresaInput | EncuestadoUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: EncuestadoCreateManyEmpresaInputEnvelope
    set?: EncuestadoWhereUniqueInput | EncuestadoWhereUniqueInput[]
    disconnect?: EncuestadoWhereUniqueInput | EncuestadoWhereUniqueInput[]
    delete?: EncuestadoWhereUniqueInput | EncuestadoWhereUniqueInput[]
    connect?: EncuestadoWhereUniqueInput | EncuestadoWhereUniqueInput[]
    update?: EncuestadoUpdateWithWhereUniqueWithoutEmpresaInput | EncuestadoUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: EncuestadoUpdateManyWithWhereWithoutEmpresaInput | EncuestadoUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: EncuestadoScalarWhereInput | EncuestadoScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutEncuestadosInput = {
    create?: XOR<EmpresaCreateWithoutEncuestadosInput, EmpresaUncheckedCreateWithoutEncuestadosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutEncuestadosInput
    connect?: EmpresaWhereUniqueInput
  }

  export type RespuestaCreateNestedManyWithoutEncuestadoInput = {
    create?: XOR<RespuestaCreateWithoutEncuestadoInput, RespuestaUncheckedCreateWithoutEncuestadoInput> | RespuestaCreateWithoutEncuestadoInput[] | RespuestaUncheckedCreateWithoutEncuestadoInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutEncuestadoInput | RespuestaCreateOrConnectWithoutEncuestadoInput[]
    createMany?: RespuestaCreateManyEncuestadoInputEnvelope
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
  }

  export type ResultadoCreateNestedOneWithoutEncuestadoInput = {
    create?: XOR<ResultadoCreateWithoutEncuestadoInput, ResultadoUncheckedCreateWithoutEncuestadoInput>
    connectOrCreate?: ResultadoCreateOrConnectWithoutEncuestadoInput
    connect?: ResultadoWhereUniqueInput
  }

  export type RespuestaUncheckedCreateNestedManyWithoutEncuestadoInput = {
    create?: XOR<RespuestaCreateWithoutEncuestadoInput, RespuestaUncheckedCreateWithoutEncuestadoInput> | RespuestaCreateWithoutEncuestadoInput[] | RespuestaUncheckedCreateWithoutEncuestadoInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutEncuestadoInput | RespuestaCreateOrConnectWithoutEncuestadoInput[]
    createMany?: RespuestaCreateManyEncuestadoInputEnvelope
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
  }

  export type ResultadoUncheckedCreateNestedOneWithoutEncuestadoInput = {
    create?: XOR<ResultadoCreateWithoutEncuestadoInput, ResultadoUncheckedCreateWithoutEncuestadoInput>
    connectOrCreate?: ResultadoCreateOrConnectWithoutEncuestadoInput
    connect?: ResultadoWhereUniqueInput
  }

  export type EnumStatusEncuestaFieldUpdateOperationsInput = {
    set?: $Enums.StatusEncuesta
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EmpresaUpdateOneRequiredWithoutEncuestadosNestedInput = {
    create?: XOR<EmpresaCreateWithoutEncuestadosInput, EmpresaUncheckedCreateWithoutEncuestadosInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutEncuestadosInput
    upsert?: EmpresaUpsertWithoutEncuestadosInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutEncuestadosInput, EmpresaUpdateWithoutEncuestadosInput>, EmpresaUncheckedUpdateWithoutEncuestadosInput>
  }

  export type RespuestaUpdateManyWithoutEncuestadoNestedInput = {
    create?: XOR<RespuestaCreateWithoutEncuestadoInput, RespuestaUncheckedCreateWithoutEncuestadoInput> | RespuestaCreateWithoutEncuestadoInput[] | RespuestaUncheckedCreateWithoutEncuestadoInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutEncuestadoInput | RespuestaCreateOrConnectWithoutEncuestadoInput[]
    upsert?: RespuestaUpsertWithWhereUniqueWithoutEncuestadoInput | RespuestaUpsertWithWhereUniqueWithoutEncuestadoInput[]
    createMany?: RespuestaCreateManyEncuestadoInputEnvelope
    set?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    disconnect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    delete?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    update?: RespuestaUpdateWithWhereUniqueWithoutEncuestadoInput | RespuestaUpdateWithWhereUniqueWithoutEncuestadoInput[]
    updateMany?: RespuestaUpdateManyWithWhereWithoutEncuestadoInput | RespuestaUpdateManyWithWhereWithoutEncuestadoInput[]
    deleteMany?: RespuestaScalarWhereInput | RespuestaScalarWhereInput[]
  }

  export type ResultadoUpdateOneWithoutEncuestadoNestedInput = {
    create?: XOR<ResultadoCreateWithoutEncuestadoInput, ResultadoUncheckedCreateWithoutEncuestadoInput>
    connectOrCreate?: ResultadoCreateOrConnectWithoutEncuestadoInput
    upsert?: ResultadoUpsertWithoutEncuestadoInput
    disconnect?: ResultadoWhereInput | boolean
    delete?: ResultadoWhereInput | boolean
    connect?: ResultadoWhereUniqueInput
    update?: XOR<XOR<ResultadoUpdateToOneWithWhereWithoutEncuestadoInput, ResultadoUpdateWithoutEncuestadoInput>, ResultadoUncheckedUpdateWithoutEncuestadoInput>
  }

  export type RespuestaUncheckedUpdateManyWithoutEncuestadoNestedInput = {
    create?: XOR<RespuestaCreateWithoutEncuestadoInput, RespuestaUncheckedCreateWithoutEncuestadoInput> | RespuestaCreateWithoutEncuestadoInput[] | RespuestaUncheckedCreateWithoutEncuestadoInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutEncuestadoInput | RespuestaCreateOrConnectWithoutEncuestadoInput[]
    upsert?: RespuestaUpsertWithWhereUniqueWithoutEncuestadoInput | RespuestaUpsertWithWhereUniqueWithoutEncuestadoInput[]
    createMany?: RespuestaCreateManyEncuestadoInputEnvelope
    set?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    disconnect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    delete?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    update?: RespuestaUpdateWithWhereUniqueWithoutEncuestadoInput | RespuestaUpdateWithWhereUniqueWithoutEncuestadoInput[]
    updateMany?: RespuestaUpdateManyWithWhereWithoutEncuestadoInput | RespuestaUpdateManyWithWhereWithoutEncuestadoInput[]
    deleteMany?: RespuestaScalarWhereInput | RespuestaScalarWhereInput[]
  }

  export type ResultadoUncheckedUpdateOneWithoutEncuestadoNestedInput = {
    create?: XOR<ResultadoCreateWithoutEncuestadoInput, ResultadoUncheckedCreateWithoutEncuestadoInput>
    connectOrCreate?: ResultadoCreateOrConnectWithoutEncuestadoInput
    upsert?: ResultadoUpsertWithoutEncuestadoInput
    disconnect?: ResultadoWhereInput | boolean
    delete?: ResultadoWhereInput | boolean
    connect?: ResultadoWhereUniqueInput
    update?: XOR<XOR<ResultadoUpdateToOneWithWhereWithoutEncuestadoInput, ResultadoUpdateWithoutEncuestadoInput>, ResultadoUncheckedUpdateWithoutEncuestadoInput>
  }

  export type RespuestaCreateNestedManyWithoutPreguntaInput = {
    create?: XOR<RespuestaCreateWithoutPreguntaInput, RespuestaUncheckedCreateWithoutPreguntaInput> | RespuestaCreateWithoutPreguntaInput[] | RespuestaUncheckedCreateWithoutPreguntaInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutPreguntaInput | RespuestaCreateOrConnectWithoutPreguntaInput[]
    createMany?: RespuestaCreateManyPreguntaInputEnvelope
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
  }

  export type RespuestaUncheckedCreateNestedManyWithoutPreguntaInput = {
    create?: XOR<RespuestaCreateWithoutPreguntaInput, RespuestaUncheckedCreateWithoutPreguntaInput> | RespuestaCreateWithoutPreguntaInput[] | RespuestaUncheckedCreateWithoutPreguntaInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutPreguntaInput | RespuestaCreateOrConnectWithoutPreguntaInput[]
    createMany?: RespuestaCreateManyPreguntaInputEnvelope
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RespuestaUpdateManyWithoutPreguntaNestedInput = {
    create?: XOR<RespuestaCreateWithoutPreguntaInput, RespuestaUncheckedCreateWithoutPreguntaInput> | RespuestaCreateWithoutPreguntaInput[] | RespuestaUncheckedCreateWithoutPreguntaInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutPreguntaInput | RespuestaCreateOrConnectWithoutPreguntaInput[]
    upsert?: RespuestaUpsertWithWhereUniqueWithoutPreguntaInput | RespuestaUpsertWithWhereUniqueWithoutPreguntaInput[]
    createMany?: RespuestaCreateManyPreguntaInputEnvelope
    set?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    disconnect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    delete?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    update?: RespuestaUpdateWithWhereUniqueWithoutPreguntaInput | RespuestaUpdateWithWhereUniqueWithoutPreguntaInput[]
    updateMany?: RespuestaUpdateManyWithWhereWithoutPreguntaInput | RespuestaUpdateManyWithWhereWithoutPreguntaInput[]
    deleteMany?: RespuestaScalarWhereInput | RespuestaScalarWhereInput[]
  }

  export type RespuestaUncheckedUpdateManyWithoutPreguntaNestedInput = {
    create?: XOR<RespuestaCreateWithoutPreguntaInput, RespuestaUncheckedCreateWithoutPreguntaInput> | RespuestaCreateWithoutPreguntaInput[] | RespuestaUncheckedCreateWithoutPreguntaInput[]
    connectOrCreate?: RespuestaCreateOrConnectWithoutPreguntaInput | RespuestaCreateOrConnectWithoutPreguntaInput[]
    upsert?: RespuestaUpsertWithWhereUniqueWithoutPreguntaInput | RespuestaUpsertWithWhereUniqueWithoutPreguntaInput[]
    createMany?: RespuestaCreateManyPreguntaInputEnvelope
    set?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    disconnect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    delete?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    connect?: RespuestaWhereUniqueInput | RespuestaWhereUniqueInput[]
    update?: RespuestaUpdateWithWhereUniqueWithoutPreguntaInput | RespuestaUpdateWithWhereUniqueWithoutPreguntaInput[]
    updateMany?: RespuestaUpdateManyWithWhereWithoutPreguntaInput | RespuestaUpdateManyWithWhereWithoutPreguntaInput[]
    deleteMany?: RespuestaScalarWhereInput | RespuestaScalarWhereInput[]
  }

  export type EncuestadoCreateNestedOneWithoutRespuestasInput = {
    create?: XOR<EncuestadoCreateWithoutRespuestasInput, EncuestadoUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: EncuestadoCreateOrConnectWithoutRespuestasInput
    connect?: EncuestadoWhereUniqueInput
  }

  export type PreguntaCreateNestedOneWithoutRespuestasInput = {
    create?: XOR<PreguntaCreateWithoutRespuestasInput, PreguntaUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: PreguntaCreateOrConnectWithoutRespuestasInput
    connect?: PreguntaWhereUniqueInput
  }

  export type EncuestadoUpdateOneRequiredWithoutRespuestasNestedInput = {
    create?: XOR<EncuestadoCreateWithoutRespuestasInput, EncuestadoUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: EncuestadoCreateOrConnectWithoutRespuestasInput
    upsert?: EncuestadoUpsertWithoutRespuestasInput
    connect?: EncuestadoWhereUniqueInput
    update?: XOR<XOR<EncuestadoUpdateToOneWithWhereWithoutRespuestasInput, EncuestadoUpdateWithoutRespuestasInput>, EncuestadoUncheckedUpdateWithoutRespuestasInput>
  }

  export type PreguntaUpdateOneRequiredWithoutRespuestasNestedInput = {
    create?: XOR<PreguntaCreateWithoutRespuestasInput, PreguntaUncheckedCreateWithoutRespuestasInput>
    connectOrCreate?: PreguntaCreateOrConnectWithoutRespuestasInput
    upsert?: PreguntaUpsertWithoutRespuestasInput
    connect?: PreguntaWhereUniqueInput
    update?: XOR<XOR<PreguntaUpdateToOneWithWhereWithoutRespuestasInput, PreguntaUpdateWithoutRespuestasInput>, PreguntaUncheckedUpdateWithoutRespuestasInput>
  }

  export type EncuestadoCreateNestedOneWithoutResultadoInput = {
    create?: XOR<EncuestadoCreateWithoutResultadoInput, EncuestadoUncheckedCreateWithoutResultadoInput>
    connectOrCreate?: EncuestadoCreateOrConnectWithoutResultadoInput
    connect?: EncuestadoWhereUniqueInput
  }

  export type EncuestadoUpdateOneRequiredWithoutResultadoNestedInput = {
    create?: XOR<EncuestadoCreateWithoutResultadoInput, EncuestadoUncheckedCreateWithoutResultadoInput>
    connectOrCreate?: EncuestadoCreateOrConnectWithoutResultadoInput
    upsert?: EncuestadoUpsertWithoutResultadoInput
    connect?: EncuestadoWhereUniqueInput
    update?: XOR<XOR<EncuestadoUpdateToOneWithWhereWithoutResultadoInput, EncuestadoUpdateWithoutResultadoInput>, EncuestadoUncheckedUpdateWithoutResultadoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusEncuestaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEncuesta | EnumStatusEncuestaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEncuesta[] | ListEnumStatusEncuestaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEncuesta[] | ListEnumStatusEncuestaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEncuestaFilter<$PrismaModel> | $Enums.StatusEncuesta
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusEncuestaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEncuesta | EnumStatusEncuestaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEncuesta[] | ListEnumStatusEncuestaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEncuesta[] | ListEnumStatusEncuestaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEncuestaWithAggregatesFilter<$PrismaModel> | $Enums.StatusEncuesta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEncuestaFilter<$PrismaModel>
    _max?: NestedEnumStatusEncuestaFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EmpresaCreateWithoutUsuarioInput = {
    id?: string
    nombre: string
    razonSocial?: string | null
    contacto?: string | null
    email?: string | null
    telefono?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    encuestados?: EncuestadoCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nombre: string
    razonSocial?: string | null
    contacto?: string | null
    email?: string | null
    telefono?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    encuestados?: EncuestadoUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutUsuarioInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutUsuarioInput, EmpresaUncheckedCreateWithoutUsuarioInput>
  }

  export type EmpresaCreateManyUsuarioInputEnvelope = {
    data: EmpresaCreateManyUsuarioInput | EmpresaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: EmpresaWhereUniqueInput
    update: XOR<EmpresaUpdateWithoutUsuarioInput, EmpresaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<EmpresaCreateWithoutUsuarioInput, EmpresaUncheckedCreateWithoutUsuarioInput>
  }

  export type EmpresaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: EmpresaWhereUniqueInput
    data: XOR<EmpresaUpdateWithoutUsuarioInput, EmpresaUncheckedUpdateWithoutUsuarioInput>
  }

  export type EmpresaUpdateManyWithWhereWithoutUsuarioInput = {
    where: EmpresaScalarWhereInput
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type EmpresaScalarWhereInput = {
    AND?: EmpresaScalarWhereInput | EmpresaScalarWhereInput[]
    OR?: EmpresaScalarWhereInput[]
    NOT?: EmpresaScalarWhereInput | EmpresaScalarWhereInput[]
    id?: StringFilter<"Empresa"> | string
    nombre?: StringFilter<"Empresa"> | string
    razonSocial?: StringNullableFilter<"Empresa"> | string | null
    contacto?: StringNullableFilter<"Empresa"> | string | null
    email?: StringNullableFilter<"Empresa"> | string | null
    telefono?: StringNullableFilter<"Empresa"> | string | null
    usuarioId?: StringFilter<"Empresa"> | string
    createdAt?: DateTimeFilter<"Empresa"> | Date | string
    updatedAt?: DateTimeFilter<"Empresa"> | Date | string
  }

  export type UsuarioCreateWithoutEmpresasInput = {
    id?: string
    email: string
    password: string
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutEmpresasInput = {
    id?: string
    email: string
    password: string
    nombre: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutEmpresasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutEmpresasInput, UsuarioUncheckedCreateWithoutEmpresasInput>
  }

  export type EncuestadoCreateWithoutEmpresaInput = {
    id?: string
    codigo: string
    nombre: string
    email?: string | null
    puesto?: string | null
    departamento?: string | null
    status?: $Enums.StatusEncuesta
    fechaInicio?: Date | string | null
    fechaCompletado?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    respuestas?: RespuestaCreateNestedManyWithoutEncuestadoInput
    resultado?: ResultadoCreateNestedOneWithoutEncuestadoInput
  }

  export type EncuestadoUncheckedCreateWithoutEmpresaInput = {
    id?: string
    codigo: string
    nombre: string
    email?: string | null
    puesto?: string | null
    departamento?: string | null
    status?: $Enums.StatusEncuesta
    fechaInicio?: Date | string | null
    fechaCompletado?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    respuestas?: RespuestaUncheckedCreateNestedManyWithoutEncuestadoInput
    resultado?: ResultadoUncheckedCreateNestedOneWithoutEncuestadoInput
  }

  export type EncuestadoCreateOrConnectWithoutEmpresaInput = {
    where: EncuestadoWhereUniqueInput
    create: XOR<EncuestadoCreateWithoutEmpresaInput, EncuestadoUncheckedCreateWithoutEmpresaInput>
  }

  export type EncuestadoCreateManyEmpresaInputEnvelope = {
    data: EncuestadoCreateManyEmpresaInput | EncuestadoCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutEmpresasInput = {
    update: XOR<UsuarioUpdateWithoutEmpresasInput, UsuarioUncheckedUpdateWithoutEmpresasInput>
    create: XOR<UsuarioCreateWithoutEmpresasInput, UsuarioUncheckedCreateWithoutEmpresasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutEmpresasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutEmpresasInput, UsuarioUncheckedUpdateWithoutEmpresasInput>
  }

  export type UsuarioUpdateWithoutEmpresasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutEmpresasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EncuestadoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: EncuestadoWhereUniqueInput
    update: XOR<EncuestadoUpdateWithoutEmpresaInput, EncuestadoUncheckedUpdateWithoutEmpresaInput>
    create: XOR<EncuestadoCreateWithoutEmpresaInput, EncuestadoUncheckedCreateWithoutEmpresaInput>
  }

  export type EncuestadoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: EncuestadoWhereUniqueInput
    data: XOR<EncuestadoUpdateWithoutEmpresaInput, EncuestadoUncheckedUpdateWithoutEmpresaInput>
  }

  export type EncuestadoUpdateManyWithWhereWithoutEmpresaInput = {
    where: EncuestadoScalarWhereInput
    data: XOR<EncuestadoUpdateManyMutationInput, EncuestadoUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type EncuestadoScalarWhereInput = {
    AND?: EncuestadoScalarWhereInput | EncuestadoScalarWhereInput[]
    OR?: EncuestadoScalarWhereInput[]
    NOT?: EncuestadoScalarWhereInput | EncuestadoScalarWhereInput[]
    id?: StringFilter<"Encuestado"> | string
    codigo?: StringFilter<"Encuestado"> | string
    nombre?: StringFilter<"Encuestado"> | string
    email?: StringNullableFilter<"Encuestado"> | string | null
    puesto?: StringNullableFilter<"Encuestado"> | string | null
    departamento?: StringNullableFilter<"Encuestado"> | string | null
    empresaId?: StringFilter<"Encuestado"> | string
    status?: EnumStatusEncuestaFilter<"Encuestado"> | $Enums.StatusEncuesta
    fechaInicio?: DateTimeNullableFilter<"Encuestado"> | Date | string | null
    fechaCompletado?: DateTimeNullableFilter<"Encuestado"> | Date | string | null
    createdAt?: DateTimeFilter<"Encuestado"> | Date | string
    updatedAt?: DateTimeFilter<"Encuestado"> | Date | string
  }

  export type EmpresaCreateWithoutEncuestadosInput = {
    id?: string
    nombre: string
    razonSocial?: string | null
    contacto?: string | null
    email?: string | null
    telefono?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutEmpresasInput
  }

  export type EmpresaUncheckedCreateWithoutEncuestadosInput = {
    id?: string
    nombre: string
    razonSocial?: string | null
    contacto?: string | null
    email?: string | null
    telefono?: string | null
    usuarioId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpresaCreateOrConnectWithoutEncuestadosInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutEncuestadosInput, EmpresaUncheckedCreateWithoutEncuestadosInput>
  }

  export type RespuestaCreateWithoutEncuestadoInput = {
    id?: string
    opcionSeleccionada: string
    perfilAsignado: string
    createdAt?: Date | string
    pregunta: PreguntaCreateNestedOneWithoutRespuestasInput
  }

  export type RespuestaUncheckedCreateWithoutEncuestadoInput = {
    id?: string
    preguntaId: string
    opcionSeleccionada: string
    perfilAsignado: string
    createdAt?: Date | string
  }

  export type RespuestaCreateOrConnectWithoutEncuestadoInput = {
    where: RespuestaWhereUniqueInput
    create: XOR<RespuestaCreateWithoutEncuestadoInput, RespuestaUncheckedCreateWithoutEncuestadoInput>
  }

  export type RespuestaCreateManyEncuestadoInputEnvelope = {
    data: RespuestaCreateManyEncuestadoInput | RespuestaCreateManyEncuestadoInput[]
    skipDuplicates?: boolean
  }

  export type ResultadoCreateWithoutEncuestadoInput = {
    id?: string
    puntosD: number
    puntosI: number
    puntosS: number
    puntosC: number
    perfilPrimario: string
    perfilSecundario: string
    arquetipo: string
    createdAt?: Date | string
  }

  export type ResultadoUncheckedCreateWithoutEncuestadoInput = {
    id?: string
    puntosD: number
    puntosI: number
    puntosS: number
    puntosC: number
    perfilPrimario: string
    perfilSecundario: string
    arquetipo: string
    createdAt?: Date | string
  }

  export type ResultadoCreateOrConnectWithoutEncuestadoInput = {
    where: ResultadoWhereUniqueInput
    create: XOR<ResultadoCreateWithoutEncuestadoInput, ResultadoUncheckedCreateWithoutEncuestadoInput>
  }

  export type EmpresaUpsertWithoutEncuestadosInput = {
    update: XOR<EmpresaUpdateWithoutEncuestadosInput, EmpresaUncheckedUpdateWithoutEncuestadosInput>
    create: XOR<EmpresaCreateWithoutEncuestadosInput, EmpresaUncheckedCreateWithoutEncuestadosInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutEncuestadosInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutEncuestadosInput, EmpresaUncheckedUpdateWithoutEncuestadosInput>
  }

  export type EmpresaUpdateWithoutEncuestadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutEmpresasNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutEncuestadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaUpsertWithWhereUniqueWithoutEncuestadoInput = {
    where: RespuestaWhereUniqueInput
    update: XOR<RespuestaUpdateWithoutEncuestadoInput, RespuestaUncheckedUpdateWithoutEncuestadoInput>
    create: XOR<RespuestaCreateWithoutEncuestadoInput, RespuestaUncheckedCreateWithoutEncuestadoInput>
  }

  export type RespuestaUpdateWithWhereUniqueWithoutEncuestadoInput = {
    where: RespuestaWhereUniqueInput
    data: XOR<RespuestaUpdateWithoutEncuestadoInput, RespuestaUncheckedUpdateWithoutEncuestadoInput>
  }

  export type RespuestaUpdateManyWithWhereWithoutEncuestadoInput = {
    where: RespuestaScalarWhereInput
    data: XOR<RespuestaUpdateManyMutationInput, RespuestaUncheckedUpdateManyWithoutEncuestadoInput>
  }

  export type RespuestaScalarWhereInput = {
    AND?: RespuestaScalarWhereInput | RespuestaScalarWhereInput[]
    OR?: RespuestaScalarWhereInput[]
    NOT?: RespuestaScalarWhereInput | RespuestaScalarWhereInput[]
    id?: StringFilter<"Respuesta"> | string
    encuestadoId?: StringFilter<"Respuesta"> | string
    preguntaId?: StringFilter<"Respuesta"> | string
    opcionSeleccionada?: StringFilter<"Respuesta"> | string
    perfilAsignado?: StringFilter<"Respuesta"> | string
    createdAt?: DateTimeFilter<"Respuesta"> | Date | string
  }

  export type ResultadoUpsertWithoutEncuestadoInput = {
    update: XOR<ResultadoUpdateWithoutEncuestadoInput, ResultadoUncheckedUpdateWithoutEncuestadoInput>
    create: XOR<ResultadoCreateWithoutEncuestadoInput, ResultadoUncheckedCreateWithoutEncuestadoInput>
    where?: ResultadoWhereInput
  }

  export type ResultadoUpdateToOneWithWhereWithoutEncuestadoInput = {
    where?: ResultadoWhereInput
    data: XOR<ResultadoUpdateWithoutEncuestadoInput, ResultadoUncheckedUpdateWithoutEncuestadoInput>
  }

  export type ResultadoUpdateWithoutEncuestadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosD?: IntFieldUpdateOperationsInput | number
    puntosI?: IntFieldUpdateOperationsInput | number
    puntosS?: IntFieldUpdateOperationsInput | number
    puntosC?: IntFieldUpdateOperationsInput | number
    perfilPrimario?: StringFieldUpdateOperationsInput | string
    perfilSecundario?: StringFieldUpdateOperationsInput | string
    arquetipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultadoUncheckedUpdateWithoutEncuestadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    puntosD?: IntFieldUpdateOperationsInput | number
    puntosI?: IntFieldUpdateOperationsInput | number
    puntosS?: IntFieldUpdateOperationsInput | number
    puntosC?: IntFieldUpdateOperationsInput | number
    perfilPrimario?: StringFieldUpdateOperationsInput | string
    perfilSecundario?: StringFieldUpdateOperationsInput | string
    arquetipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaCreateWithoutPreguntaInput = {
    id?: string
    opcionSeleccionada: string
    perfilAsignado: string
    createdAt?: Date | string
    encuestado: EncuestadoCreateNestedOneWithoutRespuestasInput
  }

  export type RespuestaUncheckedCreateWithoutPreguntaInput = {
    id?: string
    encuestadoId: string
    opcionSeleccionada: string
    perfilAsignado: string
    createdAt?: Date | string
  }

  export type RespuestaCreateOrConnectWithoutPreguntaInput = {
    where: RespuestaWhereUniqueInput
    create: XOR<RespuestaCreateWithoutPreguntaInput, RespuestaUncheckedCreateWithoutPreguntaInput>
  }

  export type RespuestaCreateManyPreguntaInputEnvelope = {
    data: RespuestaCreateManyPreguntaInput | RespuestaCreateManyPreguntaInput[]
    skipDuplicates?: boolean
  }

  export type RespuestaUpsertWithWhereUniqueWithoutPreguntaInput = {
    where: RespuestaWhereUniqueInput
    update: XOR<RespuestaUpdateWithoutPreguntaInput, RespuestaUncheckedUpdateWithoutPreguntaInput>
    create: XOR<RespuestaCreateWithoutPreguntaInput, RespuestaUncheckedCreateWithoutPreguntaInput>
  }

  export type RespuestaUpdateWithWhereUniqueWithoutPreguntaInput = {
    where: RespuestaWhereUniqueInput
    data: XOR<RespuestaUpdateWithoutPreguntaInput, RespuestaUncheckedUpdateWithoutPreguntaInput>
  }

  export type RespuestaUpdateManyWithWhereWithoutPreguntaInput = {
    where: RespuestaScalarWhereInput
    data: XOR<RespuestaUpdateManyMutationInput, RespuestaUncheckedUpdateManyWithoutPreguntaInput>
  }

  export type EncuestadoCreateWithoutRespuestasInput = {
    id?: string
    codigo: string
    nombre: string
    email?: string | null
    puesto?: string | null
    departamento?: string | null
    status?: $Enums.StatusEncuesta
    fechaInicio?: Date | string | null
    fechaCompletado?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    empresa: EmpresaCreateNestedOneWithoutEncuestadosInput
    resultado?: ResultadoCreateNestedOneWithoutEncuestadoInput
  }

  export type EncuestadoUncheckedCreateWithoutRespuestasInput = {
    id?: string
    codigo: string
    nombre: string
    email?: string | null
    puesto?: string | null
    departamento?: string | null
    empresaId: string
    status?: $Enums.StatusEncuesta
    fechaInicio?: Date | string | null
    fechaCompletado?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resultado?: ResultadoUncheckedCreateNestedOneWithoutEncuestadoInput
  }

  export type EncuestadoCreateOrConnectWithoutRespuestasInput = {
    where: EncuestadoWhereUniqueInput
    create: XOR<EncuestadoCreateWithoutRespuestasInput, EncuestadoUncheckedCreateWithoutRespuestasInput>
  }

  export type PreguntaCreateWithoutRespuestasInput = {
    id?: string
    numero: number
    bloque: string
    texto: string
    opcionA: string
    opcionB: string
    opcionC: string
    opcionD: string
    claveA: string
    claveB: string
    claveC: string
    claveD: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreguntaUncheckedCreateWithoutRespuestasInput = {
    id?: string
    numero: number
    bloque: string
    texto: string
    opcionA: string
    opcionB: string
    opcionC: string
    opcionD: string
    claveA: string
    claveB: string
    claveC: string
    claveD: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreguntaCreateOrConnectWithoutRespuestasInput = {
    where: PreguntaWhereUniqueInput
    create: XOR<PreguntaCreateWithoutRespuestasInput, PreguntaUncheckedCreateWithoutRespuestasInput>
  }

  export type EncuestadoUpsertWithoutRespuestasInput = {
    update: XOR<EncuestadoUpdateWithoutRespuestasInput, EncuestadoUncheckedUpdateWithoutRespuestasInput>
    create: XOR<EncuestadoCreateWithoutRespuestasInput, EncuestadoUncheckedCreateWithoutRespuestasInput>
    where?: EncuestadoWhereInput
  }

  export type EncuestadoUpdateToOneWithWhereWithoutRespuestasInput = {
    where?: EncuestadoWhereInput
    data: XOR<EncuestadoUpdateWithoutRespuestasInput, EncuestadoUncheckedUpdateWithoutRespuestasInput>
  }

  export type EncuestadoUpdateWithoutRespuestasInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutEncuestadosNestedInput
    resultado?: ResultadoUpdateOneWithoutEncuestadoNestedInput
  }

  export type EncuestadoUncheckedUpdateWithoutRespuestasInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resultado?: ResultadoUncheckedUpdateOneWithoutEncuestadoNestedInput
  }

  export type PreguntaUpsertWithoutRespuestasInput = {
    update: XOR<PreguntaUpdateWithoutRespuestasInput, PreguntaUncheckedUpdateWithoutRespuestasInput>
    create: XOR<PreguntaCreateWithoutRespuestasInput, PreguntaUncheckedCreateWithoutRespuestasInput>
    where?: PreguntaWhereInput
  }

  export type PreguntaUpdateToOneWithWhereWithoutRespuestasInput = {
    where?: PreguntaWhereInput
    data: XOR<PreguntaUpdateWithoutRespuestasInput, PreguntaUncheckedUpdateWithoutRespuestasInput>
  }

  export type PreguntaUpdateWithoutRespuestasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bloque?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    opcionA?: StringFieldUpdateOperationsInput | string
    opcionB?: StringFieldUpdateOperationsInput | string
    opcionC?: StringFieldUpdateOperationsInput | string
    opcionD?: StringFieldUpdateOperationsInput | string
    claveA?: StringFieldUpdateOperationsInput | string
    claveB?: StringFieldUpdateOperationsInput | string
    claveC?: StringFieldUpdateOperationsInput | string
    claveD?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreguntaUncheckedUpdateWithoutRespuestasInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bloque?: StringFieldUpdateOperationsInput | string
    texto?: StringFieldUpdateOperationsInput | string
    opcionA?: StringFieldUpdateOperationsInput | string
    opcionB?: StringFieldUpdateOperationsInput | string
    opcionC?: StringFieldUpdateOperationsInput | string
    opcionD?: StringFieldUpdateOperationsInput | string
    claveA?: StringFieldUpdateOperationsInput | string
    claveB?: StringFieldUpdateOperationsInput | string
    claveC?: StringFieldUpdateOperationsInput | string
    claveD?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EncuestadoCreateWithoutResultadoInput = {
    id?: string
    codigo: string
    nombre: string
    email?: string | null
    puesto?: string | null
    departamento?: string | null
    status?: $Enums.StatusEncuesta
    fechaInicio?: Date | string | null
    fechaCompletado?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    empresa: EmpresaCreateNestedOneWithoutEncuestadosInput
    respuestas?: RespuestaCreateNestedManyWithoutEncuestadoInput
  }

  export type EncuestadoUncheckedCreateWithoutResultadoInput = {
    id?: string
    codigo: string
    nombre: string
    email?: string | null
    puesto?: string | null
    departamento?: string | null
    empresaId: string
    status?: $Enums.StatusEncuesta
    fechaInicio?: Date | string | null
    fechaCompletado?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    respuestas?: RespuestaUncheckedCreateNestedManyWithoutEncuestadoInput
  }

  export type EncuestadoCreateOrConnectWithoutResultadoInput = {
    where: EncuestadoWhereUniqueInput
    create: XOR<EncuestadoCreateWithoutResultadoInput, EncuestadoUncheckedCreateWithoutResultadoInput>
  }

  export type EncuestadoUpsertWithoutResultadoInput = {
    update: XOR<EncuestadoUpdateWithoutResultadoInput, EncuestadoUncheckedUpdateWithoutResultadoInput>
    create: XOR<EncuestadoCreateWithoutResultadoInput, EncuestadoUncheckedCreateWithoutResultadoInput>
    where?: EncuestadoWhereInput
  }

  export type EncuestadoUpdateToOneWithWhereWithoutResultadoInput = {
    where?: EncuestadoWhereInput
    data: XOR<EncuestadoUpdateWithoutResultadoInput, EncuestadoUncheckedUpdateWithoutResultadoInput>
  }

  export type EncuestadoUpdateWithoutResultadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    empresa?: EmpresaUpdateOneRequiredWithoutEncuestadosNestedInput
    respuestas?: RespuestaUpdateManyWithoutEncuestadoNestedInput
  }

  export type EncuestadoUncheckedUpdateWithoutResultadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    empresaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: RespuestaUncheckedUpdateManyWithoutEncuestadoNestedInput
  }

  export type EmpresaCreateManyUsuarioInput = {
    id?: string
    nombre: string
    razonSocial?: string | null
    contacto?: string | null
    email?: string | null
    telefono?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmpresaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encuestados?: EncuestadoUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encuestados?: EncuestadoUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    razonSocial?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EncuestadoCreateManyEmpresaInput = {
    id?: string
    codigo: string
    nombre: string
    email?: string | null
    puesto?: string | null
    departamento?: string | null
    status?: $Enums.StatusEncuesta
    fechaInicio?: Date | string | null
    fechaCompletado?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EncuestadoUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: RespuestaUpdateManyWithoutEncuestadoNestedInput
    resultado?: ResultadoUpdateOneWithoutEncuestadoNestedInput
  }

  export type EncuestadoUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: RespuestaUncheckedUpdateManyWithoutEncuestadoNestedInput
    resultado?: ResultadoUncheckedUpdateOneWithoutEncuestadoNestedInput
  }

  export type EncuestadoUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    puesto?: NullableStringFieldUpdateOperationsInput | string | null
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusEncuestaFieldUpdateOperationsInput | $Enums.StatusEncuesta
    fechaInicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaCompletado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaCreateManyEncuestadoInput = {
    id?: string
    preguntaId: string
    opcionSeleccionada: string
    perfilAsignado: string
    createdAt?: Date | string
  }

  export type RespuestaUpdateWithoutEncuestadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    opcionSeleccionada?: StringFieldUpdateOperationsInput | string
    perfilAsignado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pregunta?: PreguntaUpdateOneRequiredWithoutRespuestasNestedInput
  }

  export type RespuestaUncheckedUpdateWithoutEncuestadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    preguntaId?: StringFieldUpdateOperationsInput | string
    opcionSeleccionada?: StringFieldUpdateOperationsInput | string
    perfilAsignado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaUncheckedUpdateManyWithoutEncuestadoInput = {
    id?: StringFieldUpdateOperationsInput | string
    preguntaId?: StringFieldUpdateOperationsInput | string
    opcionSeleccionada?: StringFieldUpdateOperationsInput | string
    perfilAsignado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaCreateManyPreguntaInput = {
    id?: string
    encuestadoId: string
    opcionSeleccionada: string
    perfilAsignado: string
    createdAt?: Date | string
  }

  export type RespuestaUpdateWithoutPreguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    opcionSeleccionada?: StringFieldUpdateOperationsInput | string
    perfilAsignado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    encuestado?: EncuestadoUpdateOneRequiredWithoutRespuestasNestedInput
  }

  export type RespuestaUncheckedUpdateWithoutPreguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    encuestadoId?: StringFieldUpdateOperationsInput | string
    opcionSeleccionada?: StringFieldUpdateOperationsInput | string
    perfilAsignado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RespuestaUncheckedUpdateManyWithoutPreguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    encuestadoId?: StringFieldUpdateOperationsInput | string
    opcionSeleccionada?: StringFieldUpdateOperationsInput | string
    perfilAsignado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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