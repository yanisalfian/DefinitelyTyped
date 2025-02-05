declare module 'node:crypto' {
    export * from 'crypto';
}

declare module 'crypto' {
    import * as stream from 'node:stream';

    interface Certificate {
        /**
         * @param spkac
         * @returns The challenge component of the `spkac` data structure,
         * which includes a public key and a challenge.
         */
        exportChallenge(spkac: BinaryLike): Buffer;
        /**
         * @param spkac
         * @param encoding The encoding of the spkac string.
         * @returns The public key component of the `spkac` data structure,
         * which includes a public key and a challenge.
         */
        exportPublicKey(spkac: BinaryLike, encoding?: string): Buffer;
        /**
         * @param spkac
         * @returns `true` if the given `spkac` data structure is valid,
         * `false` otherwise.
         */
        verifySpkac(spkac: NodeJS.ArrayBufferView): boolean;
    }
    const Certificate: Certificate & {
        /** @deprecated since v14.9.0 - Use static methods of `crypto.Certificate` instead. */
        new (): Certificate;
        /** @deprecated since v14.9.0 - Use static methods of `crypto.Certificate` instead. */
        (): Certificate;
    };

    namespace constants {
        // https://nodejs.org/dist/latest-v10.x/docs/api/crypto.html#crypto_crypto_constants
        const OPENSSL_VERSION_NUMBER: number;

        /** Applies multiple bug workarounds within OpenSSL. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html for detail. */
        const SSL_OP_ALL: number;
        /** Allows legacy insecure renegotiation between OpenSSL and unpatched clients or servers. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html. */
        const SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: number;
        /** Attempts to use the server's preferences instead of the client's when selecting a cipher. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html. */
        const SSL_OP_CIPHER_SERVER_PREFERENCE: number;
        /** Instructs OpenSSL to use Cisco's "speshul" version of DTLS_BAD_VER. */
        const SSL_OP_CISCO_ANYCONNECT: number;
        /** Instructs OpenSSL to turn on cookie exchange. */
        const SSL_OP_COOKIE_EXCHANGE: number;
        /** Instructs OpenSSL to add server-hello extension from an early version of the cryptopro draft. */
        const SSL_OP_CRYPTOPRO_TLSEXT_BUG: number;
        /** Instructs OpenSSL to disable a SSL 3.0/TLS 1.0 vulnerability workaround added in OpenSSL 0.9.6d. */
        const SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: number;
        /** Instructs OpenSSL to always use the tmp_rsa key when performing RSA operations. */
        const SSL_OP_EPHEMERAL_RSA: number;
        /** Allows initial connection to servers that do not support RI. */
        const SSL_OP_LEGACY_SERVER_CONNECT: number;
        const SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: number;
        const SSL_OP_MICROSOFT_SESS_ID_BUG: number;
        /** Instructs OpenSSL to disable the workaround for a man-in-the-middle protocol-version vulnerability in the SSL 2.0 server implementation. */
        const SSL_OP_MSIE_SSLV2_RSA_PADDING: number;
        const SSL_OP_NETSCAPE_CA_DN_BUG: number;
        const SSL_OP_NETSCAPE_CHALLENGE_BUG: number;
        const SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: number;
        const SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: number;
        /** Instructs OpenSSL to disable support for SSL/TLS compression. */
        const SSL_OP_NO_COMPRESSION: number;
        const SSL_OP_NO_QUERY_MTU: number;
        /** Instructs OpenSSL to always start a new session when performing renegotiation. */
        const SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: number;
        const SSL_OP_NO_SSLv2: number;
        const SSL_OP_NO_SSLv3: number;
        const SSL_OP_NO_TICKET: number;
        const SSL_OP_NO_TLSv1: number;
        const SSL_OP_NO_TLSv1_1: number;
        const SSL_OP_NO_TLSv1_2: number;
        const SSL_OP_PKCS1_CHECK_1: number;
        const SSL_OP_PKCS1_CHECK_2: number;
        /** Instructs OpenSSL to always create a new key when using temporary/ephemeral DH parameters. */
        const SSL_OP_SINGLE_DH_USE: number;
        /** Instructs OpenSSL to always create a new key when using temporary/ephemeral ECDH parameters. */
        const SSL_OP_SINGLE_ECDH_USE: number;
        const SSL_OP_SSLEAY_080_CLIENT_DH_BUG: number;
        const SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: number;
        const SSL_OP_TLS_BLOCK_PADDING_BUG: number;
        const SSL_OP_TLS_D5_BUG: number;
        /** Instructs OpenSSL to disable version rollback attack detection. */
        const SSL_OP_TLS_ROLLBACK_BUG: number;

        const ENGINE_METHOD_RSA: number;
        const ENGINE_METHOD_DSA: number;
        const ENGINE_METHOD_DH: number;
        const ENGINE_METHOD_RAND: number;
        const ENGINE_METHOD_EC: number;
        const ENGINE_METHOD_CIPHERS: number;
        const ENGINE_METHOD_DIGESTS: number;
        const ENGINE_METHOD_PKEY_METHS: number;
        const ENGINE_METHOD_PKEY_ASN1_METHS: number;
        const ENGINE_METHOD_ALL: number;
        const ENGINE_METHOD_NONE: number;

        const DH_CHECK_P_NOT_SAFE_PRIME: number;
        const DH_CHECK_P_NOT_PRIME: number;
        const DH_UNABLE_TO_CHECK_GENERATOR: number;
        const DH_NOT_SUITABLE_GENERATOR: number;

        const ALPN_ENABLED: number;

        const RSA_PKCS1_PADDING: number;
        const RSA_SSLV23_PADDING: number;
        const RSA_NO_PADDING: number;
        const RSA_PKCS1_OAEP_PADDING: number;
        const RSA_X931_PADDING: number;
        const RSA_PKCS1_PSS_PADDING: number;
        /** Sets the salt length for RSA_PKCS1_PSS_PADDING to the digest size when signing or verifying. */
        const RSA_PSS_SALTLEN_DIGEST: number;
        /** Sets the salt length for RSA_PKCS1_PSS_PADDING to the maximum permissible value when signing data. */
        const RSA_PSS_SALTLEN_MAX_SIGN: number;
        /** Causes the salt length for RSA_PKCS1_PSS_PADDING to be determined automatically when verifying a signature. */
        const RSA_PSS_SALTLEN_AUTO: number;

        const POINT_CONVERSION_COMPRESSED: number;
        const POINT_CONVERSION_UNCOMPRESSED: number;
        const POINT_CONVERSION_HYBRID: number;

        /** Specifies the built-in default cipher list used by Node.js (colon-separated values). */
        const defaultCoreCipherList: string;
        /** Specifies the active default cipher list used by the current Node.js process  (colon-separated values). */
        const defaultCipherList: string;
    }

    interface HashOptions extends stream.TransformOptions {
        /**
         * For XOF hash functions such as `shake256`, the
         * outputLength option can be used to specify the desired output length in bytes.
         */
        outputLength?: number;
    }

    /** @deprecated since v10.0.0 */
    const fips: boolean;

    function createHash(algorithm: string, options?: HashOptions): Hash;
    function createHmac(algorithm: string, key: BinaryLike | KeyObject, options?: stream.TransformOptions): Hmac;

    // https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings
    type BinaryToTextEncoding = 'base64' | 'hex';
    type CharacterEncoding = 'utf8' | 'utf-8' | 'utf16le' | 'latin1';
    type LegacyCharacterEncoding = 'ascii' | 'binary' | 'ucs2' | 'ucs-2';

    type Encoding = BinaryToTextEncoding | CharacterEncoding | LegacyCharacterEncoding;

    type ECDHKeyFormat = 'compressed' | 'uncompressed' | 'hybrid';

    class Hash extends stream.Transform {
        private constructor();
        copy(): Hash;
        update(data: BinaryLike): Hash;
        update(data: string, input_encoding: Encoding): Hash;
        digest(): Buffer;
        digest(encoding: BinaryToTextEncoding): string;
    }
    class Hmac extends stream.Transform {
        private constructor();
        update(data: BinaryLike): Hmac;
        update(data: string, input_encoding: Encoding): Hmac;
        digest(): Buffer;
        digest(encoding: BinaryToTextEncoding): string;
    }

    type KeyObjectType = 'secret' | 'public' | 'private';

    interface KeyExportOptions<T extends KeyFormat> {
        type: 'pkcs1' | 'spki' | 'pkcs8' | 'sec1';
        format: T;
        cipher?: string;
        passphrase?: string | Buffer;
    }

    class KeyObject {
        private constructor();
        asymmetricKeyType?: KeyType;
        /**
         * For asymmetric keys, this property represents the size of the embedded key in
         * bytes. This property is `undefined` for symmetric keys.
         */
        asymmetricKeySize?: number;
        export(options: KeyExportOptions<'pem'>): string | Buffer;
        export(options?: KeyExportOptions<'der'>): Buffer;
        symmetricKeySize?: number;
        type: KeyObjectType;
    }

    type CipherCCMTypes = 'aes-128-ccm' | 'aes-192-ccm' | 'aes-256-ccm' | 'chacha20-poly1305';
    type CipherGCMTypes = 'aes-128-gcm' | 'aes-192-gcm' | 'aes-256-gcm';

    type BinaryLike = string | NodeJS.ArrayBufferView;

    type CipherKey = BinaryLike | KeyObject;

    interface CipherCCMOptions extends stream.TransformOptions {
        authTagLength: number;
    }
    interface CipherGCMOptions extends stream.TransformOptions {
        authTagLength?: number;
    }
    /** @deprecated since v10.0.0 use `createCipheriv()` */
    function createCipher(algorithm: CipherCCMTypes, password: BinaryLike, options: CipherCCMOptions): CipherCCM;
    /** @deprecated since v10.0.0 use `createCipheriv()` */
    function createCipher(algorithm: CipherGCMTypes, password: BinaryLike, options?: CipherGCMOptions): CipherGCM;
    /** @deprecated since v10.0.0 use `createCipheriv()` */
    function createCipher(algorithm: string, password: BinaryLike, options?: stream.TransformOptions): Cipher;

    function createCipheriv(
        algorithm: CipherCCMTypes,
        key: CipherKey,
        iv: BinaryLike | null,
        options: CipherCCMOptions,
    ): CipherCCM;
    function createCipheriv(
        algorithm: CipherGCMTypes,
        key: CipherKey,
        iv: BinaryLike | null,
        options?: CipherGCMOptions,
    ): CipherGCM;
    function createCipheriv(
        algorithm: string,
        key: CipherKey,
        iv: BinaryLike | null,
        options?: stream.TransformOptions,
    ): Cipher;

    class Cipher extends stream.Transform {
        private constructor();
        update(data: BinaryLike): Buffer;
        update(data: string, input_encoding: Encoding): Buffer;
        update(data: NodeJS.ArrayBufferView, input_encoding: BinaryToTextEncoding | undefined, output_encoding: BinaryToTextEncoding): string;
        update(data: string, input_encoding: Encoding | undefined, output_encoding: BinaryToTextEncoding): string;
        final(): Buffer;
        final(output_encoding: BufferEncoding): string;
        setAutoPadding(auto_padding?: boolean): this;
        // getAuthTag(): Buffer;
        // setAAD(buffer: NodeJS.ArrayBufferView): this;
    }
    interface CipherCCM extends Cipher {
        setAAD(buffer: NodeJS.ArrayBufferView, options: { plaintextLength: number }): this;
        getAuthTag(): Buffer;
    }
    interface CipherGCM extends Cipher {
        setAAD(buffer: NodeJS.ArrayBufferView, options?: { plaintextLength: number }): this;
        getAuthTag(): Buffer;
    }
    /** @deprecated since v10.0.0 use `createDecipheriv()` */
    function createDecipher(algorithm: CipherCCMTypes, password: BinaryLike, options: CipherCCMOptions): DecipherCCM;
    /** @deprecated since v10.0.0 use `createDecipheriv()` */
    function createDecipher(algorithm: CipherGCMTypes, password: BinaryLike, options?: CipherGCMOptions): DecipherGCM;
    /** @deprecated since v10.0.0 use `createDecipheriv()` */
    function createDecipher(algorithm: string, password: BinaryLike, options?: stream.TransformOptions): Decipher;

    function createDecipheriv(
        algorithm: CipherCCMTypes,
        key: CipherKey,
        iv: BinaryLike | null,
        options: CipherCCMOptions,
    ): DecipherCCM;
    function createDecipheriv(
        algorithm: CipherGCMTypes,
        key: CipherKey,
        iv: BinaryLike | null,
        options?: CipherGCMOptions,
    ): DecipherGCM;
    function createDecipheriv(
        algorithm: string,
        key: CipherKey,
        iv: BinaryLike | null,
        options?: stream.TransformOptions,
    ): Decipher;

    class Decipher extends stream.Transform {
        private constructor();
        update(data: NodeJS.ArrayBufferView): Buffer;
        update(data: string, input_encoding: BinaryToTextEncoding): Buffer;
        update(data: NodeJS.ArrayBufferView, input_encoding: BinaryToTextEncoding | undefined, output_encoding: Encoding): string;
        update(data: string, input_encoding: BinaryToTextEncoding | undefined, output_encoding: Encoding): string;
        final(): Buffer;
        final(output_encoding: BufferEncoding): string;
        setAutoPadding(auto_padding?: boolean): this;
        // setAuthTag(tag: NodeJS.ArrayBufferView): this;
        // setAAD(buffer: NodeJS.ArrayBufferView): this;
    }
    interface DecipherCCM extends Decipher {
        setAuthTag(buffer: NodeJS.ArrayBufferView): this;
        setAAD(buffer: NodeJS.ArrayBufferView, options: { plaintextLength: number }): this;
    }
    interface DecipherGCM extends Decipher {
        setAuthTag(buffer: NodeJS.ArrayBufferView): this;
        setAAD(buffer: NodeJS.ArrayBufferView, options?: { plaintextLength: number }): this;
    }

    interface PrivateKeyInput {
        key: string | Buffer;
        format?: KeyFormat;
        type?: 'pkcs1' | 'pkcs8' | 'sec1';
        passphrase?: string | Buffer;
    }

    interface PublicKeyInput {
        key: string | Buffer;
        format?: KeyFormat;
        type?: 'pkcs1' | 'spki';
    }

    function createPrivateKey(key: PrivateKeyInput | string | Buffer): KeyObject;
    function createPublicKey(key: PublicKeyInput | string | Buffer | KeyObject): KeyObject;
    function createSecretKey(key: NodeJS.ArrayBufferView): KeyObject;

    function createSign(algorithm: string, options?: stream.WritableOptions): Signer;

    type DSAEncoding = 'der' | 'ieee-p1363';

    interface SigningOptions {
        /**
         * @See crypto.constants.RSA_PKCS1_PADDING
         */
        padding?: number;
        saltLength?: number;
        dsaEncoding?: DSAEncoding;
    }

    interface SignPrivateKeyInput extends PrivateKeyInput, SigningOptions {}
    interface SignKeyObjectInput extends SigningOptions {
        key: KeyObject;
    }
    interface VerifyPublicKeyInput extends PublicKeyInput, SigningOptions {}
    interface VerifyKeyObjectInput extends SigningOptions {
        key: KeyObject;
    }

    type KeyLike = string | Buffer | KeyObject;

    class Signer extends stream.Writable {
        private constructor();

        update(data: BinaryLike): Signer;
        update(data: string, input_encoding: Encoding): Signer;
        sign(private_key: KeyLike | SignKeyObjectInput | SignPrivateKeyInput): Buffer;
        sign(
            private_key: KeyLike | SignKeyObjectInput | SignPrivateKeyInput,
            output_format: BinaryToTextEncoding,
        ): string;
    }

    function createVerify(algorithm: string, options?: stream.WritableOptions): Verify;
    class Verify extends stream.Writable {
        private constructor();

        update(data: BinaryLike): Verify;
        update(data: string, input_encoding: Encoding): Verify;
        verify(
            object: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput,
            signature: NodeJS.ArrayBufferView,
        ): boolean;
        verify(
            object: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput,
            signature: string,
            signature_format?: BinaryToTextEncoding,
        ): boolean;
        // https://nodejs.org/api/crypto.html#crypto_verifier_verify_object_signature_signature_format
        // The signature field accepts a TypedArray type, but it is only available starting ES2017
    }
    function createDiffieHellman(prime_length: number, generator?: number | NodeJS.ArrayBufferView): DiffieHellman;
    function createDiffieHellman(prime: NodeJS.ArrayBufferView): DiffieHellman;
    function createDiffieHellman(prime: string, prime_encoding: BinaryToTextEncoding): DiffieHellman;
    function createDiffieHellman(
        prime: string,
        prime_encoding: BinaryToTextEncoding,
        generator: number | NodeJS.ArrayBufferView,
    ): DiffieHellman;
    function createDiffieHellman(
        prime: string,
        prime_encoding: BinaryToTextEncoding,
        generator: string,
        generator_encoding: BinaryToTextEncoding,
    ): DiffieHellman;
    class DiffieHellman {
        private constructor();
        generateKeys(): Buffer;
        generateKeys(encoding: BinaryToTextEncoding): string;
        computeSecret(other_public_key: NodeJS.ArrayBufferView): Buffer;
        computeSecret(other_public_key: string, input_encoding: BinaryToTextEncoding): Buffer;
        computeSecret(other_public_key: NodeJS.ArrayBufferView, output_encoding: BinaryToTextEncoding): string;
        computeSecret(
            other_public_key: string,
            input_encoding: BinaryToTextEncoding,
            output_encoding: BinaryToTextEncoding,
        ): string;
        getPrime(): Buffer;
        getPrime(encoding: BinaryToTextEncoding): string;
        getGenerator(): Buffer;
        getGenerator(encoding: BinaryToTextEncoding): string;
        getPublicKey(): Buffer;
        getPublicKey(encoding: BinaryToTextEncoding): string;
        getPrivateKey(): Buffer;
        getPrivateKey(encoding: BinaryToTextEncoding): string;
        setPublicKey(public_key: NodeJS.ArrayBufferView): void;
        setPublicKey(public_key: string, encoding: BufferEncoding): void;
        setPrivateKey(private_key: NodeJS.ArrayBufferView): void;
        setPrivateKey(private_key: string, encoding: BufferEncoding): void;
        verifyError: number;
    }
    function getDiffieHellman(group_name: string): DiffieHellman;
    function pbkdf2(
        password: BinaryLike,
        salt: BinaryLike,
        iterations: number,
        keylen: number,
        digest: string,
        callback: (err: Error | null, derivedKey: Buffer) => any,
    ): void;
    function pbkdf2Sync(
        password: BinaryLike,
        salt: BinaryLike,
        iterations: number,
        keylen: number,
        digest: string,
    ): Buffer;

    function randomBytes(size: number): Buffer;
    function randomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;
    function pseudoRandomBytes(size: number): Buffer;
    function pseudoRandomBytes(size: number, callback: (err: Error | null, buf: Buffer) => void): void;

    function randomInt(max: number): number;
    function randomInt(min: number, max: number): number;
    function randomInt(max: number, callback: (err: Error | null, value: number) => void): void;
    function randomInt(min: number, max: number, callback: (err: Error | null, value: number) => void): void;

    function randomFillSync<T extends NodeJS.ArrayBufferView>(buffer: T, offset?: number, size?: number): T;
    function randomFill<T extends NodeJS.ArrayBufferView>(
        buffer: T,
        callback: (err: Error | null, buf: T) => void,
    ): void;
    function randomFill<T extends NodeJS.ArrayBufferView>(
        buffer: T,
        offset: number,
        callback: (err: Error | null, buf: T) => void,
    ): void;
    function randomFill<T extends NodeJS.ArrayBufferView>(
        buffer: T,
        offset: number,
        size: number,
        callback: (err: Error | null, buf: T) => void,
    ): void;

    interface ScryptOptions {
        cost?: number;
        blockSize?: number;
        parallelization?: number;
        N?: number;
        r?: number;
        p?: number;
        maxmem?: number;
    }
    function scrypt(
        password: BinaryLike,
        salt: BinaryLike,
        keylen: number,
        callback: (err: Error | null, derivedKey: Buffer) => void,
    ): void;
    function scrypt(
        password: BinaryLike,
        salt: BinaryLike,
        keylen: number,
        options: ScryptOptions,
        callback: (err: Error | null, derivedKey: Buffer) => void,
    ): void;
    function scryptSync(password: BinaryLike, salt: BinaryLike, keylen: number, options?: ScryptOptions): Buffer;

    interface RsaPublicKey {
        key: KeyLike;
        padding?: number;
    }
    interface RsaPrivateKey {
        key: KeyLike;
        passphrase?: string;
        /**
         * @default 'sha1'
         */
        oaepHash?: string;
        oaepLabel?: NodeJS.TypedArray;
        padding?: number;
    }
    function publicEncrypt(key: RsaPublicKey | RsaPrivateKey | KeyLike, buffer: NodeJS.ArrayBufferView): Buffer;
    function publicDecrypt(key: RsaPublicKey | RsaPrivateKey | KeyLike, buffer: NodeJS.ArrayBufferView): Buffer;
    function privateDecrypt(private_key: RsaPrivateKey | KeyLike, buffer: NodeJS.ArrayBufferView): Buffer;
    function privateEncrypt(private_key: RsaPrivateKey | KeyLike, buffer: NodeJS.ArrayBufferView): Buffer;
    function getCiphers(): string[];
    function getCurves(): string[];
    function getFips(): 1 | 0;
    function getHashes(): string[];
    class ECDH {
        private constructor();
        static convertKey(
            key: BinaryLike,
            curve: string,
            inputEncoding?: BinaryToTextEncoding,
            outputEncoding?: 'latin1' | 'hex' | 'base64',
            format?: 'uncompressed' | 'compressed' | 'hybrid',
        ): Buffer | string;
        generateKeys(): Buffer;
        generateKeys(encoding: BinaryToTextEncoding, format?: ECDHKeyFormat): string;
        computeSecret(other_public_key: NodeJS.ArrayBufferView): Buffer;
        computeSecret(other_public_key: string, input_encoding: BinaryToTextEncoding): Buffer;
        computeSecret(other_public_key: NodeJS.ArrayBufferView, output_encoding: BinaryToTextEncoding): string;
        computeSecret(
            other_public_key: string,
            input_encoding: BinaryToTextEncoding,
            output_encoding: BinaryToTextEncoding,
        ): string;
        getPrivateKey(): Buffer;
        getPrivateKey(encoding: BinaryToTextEncoding): string;
        getPublicKey(): Buffer;
        getPublicKey(encoding: BinaryToTextEncoding, format?: ECDHKeyFormat): string;
        setPrivateKey(private_key: NodeJS.ArrayBufferView): void;
        setPrivateKey(private_key: string, encoding: BinaryToTextEncoding): void;
    }
    function createECDH(curve_name: string): ECDH;
    function timingSafeEqual(a: NodeJS.ArrayBufferView, b: NodeJS.ArrayBufferView): boolean;
    /** @deprecated since v10.0.0 */
    const DEFAULT_ENCODING: BufferEncoding;

    type KeyType = 'rsa' | 'dsa' | 'ec' | 'ed25519' | 'ed448' | 'x25519' | 'x448';
    type KeyFormat = 'pem' | 'der';

    interface BasePrivateKeyEncodingOptions<T extends KeyFormat> {
        format: T;
        cipher?: string;
        passphrase?: string;
    }

    interface KeyPairKeyObjectResult {
        publicKey: KeyObject;
        privateKey: KeyObject;
    }

    interface ED25519KeyPairKeyObjectOptions {
        /**
         * No options.
         */
    }

    interface ED448KeyPairKeyObjectOptions {
        /**
         * No options.
         */
    }

    interface X25519KeyPairKeyObjectOptions {
        /**
         * No options.
         */
    }

    interface X448KeyPairKeyObjectOptions {
        /**
         * No options.
         */
    }

    interface ECKeyPairKeyObjectOptions {
        /**
         * Name of the curve to use.
         */
        namedCurve: string;
    }

    interface RSAKeyPairKeyObjectOptions {
        /**
         * Key size in bits
         */
        modulusLength: number;

        /**
         * @default 0x10001
         */
        publicExponent?: number;
    }

    interface DSAKeyPairKeyObjectOptions {
        /**
         * Key size in bits
         */
        modulusLength: number;

        /**
         * Size of q in bits
         */
        divisorLength: number;
    }

    interface RSAKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        /**
         * Key size in bits
         */
        modulusLength: number;
        /**
         * @default 0x10001
         */
        publicExponent?: number;

        publicKeyEncoding: {
            type: 'pkcs1' | 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs1' | 'pkcs8';
        };
    }

    interface DSAKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        /**
         * Key size in bits
         */
        modulusLength: number;
        /**
         * Size of q in bits
         */
        divisorLength: number;

        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }

    interface ECKeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        /**
         * Name of the curve to use.
         */
        namedCurve: string;

        publicKeyEncoding: {
            type: 'pkcs1' | 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'sec1' | 'pkcs8';
        };
    }

    interface ED25519KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }

    interface ED448KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }

    interface X25519KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }

    interface X448KeyPairOptions<PubF extends KeyFormat, PrivF extends KeyFormat> {
        publicKeyEncoding: {
            type: 'spki';
            format: PubF;
        };
        privateKeyEncoding: BasePrivateKeyEncodingOptions<PrivF> & {
            type: 'pkcs8';
        };
    }

    interface KeyPairSyncResult<T1 extends string | Buffer, T2 extends string | Buffer> {
        publicKey: T1;
        privateKey: T2;
    }

    function generateKeyPairSync(
        type: 'rsa',
        options: RSAKeyPairOptions<'pem', 'pem'>,
    ): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(
        type: 'rsa',
        options: RSAKeyPairOptions<'pem', 'der'>,
    ): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(
        type: 'rsa',
        options: RSAKeyPairOptions<'der', 'pem'>,
    ): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(
        type: 'rsa',
        options: RSAKeyPairOptions<'der', 'der'>,
    ): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'rsa', options: RSAKeyPairKeyObjectOptions): KeyPairKeyObjectResult;

    function generateKeyPairSync(
        type: 'dsa',
        options: DSAKeyPairOptions<'pem', 'pem'>,
    ): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(
        type: 'dsa',
        options: DSAKeyPairOptions<'pem', 'der'>,
    ): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(
        type: 'dsa',
        options: DSAKeyPairOptions<'der', 'pem'>,
    ): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(
        type: 'dsa',
        options: DSAKeyPairOptions<'der', 'der'>,
    ): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'dsa', options: DSAKeyPairKeyObjectOptions): KeyPairKeyObjectResult;

    function generateKeyPairSync(
        type: 'ec',
        options: ECKeyPairOptions<'pem', 'pem'>,
    ): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(
        type: 'ec',
        options: ECKeyPairOptions<'pem', 'der'>,
    ): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(
        type: 'ec',
        options: ECKeyPairOptions<'der', 'pem'>,
    ): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(
        type: 'ec',
        options: ECKeyPairOptions<'der', 'der'>,
    ): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'ec', options: ECKeyPairKeyObjectOptions): KeyPairKeyObjectResult;

    function generateKeyPairSync(
        type: 'ed25519',
        options: ED25519KeyPairOptions<'pem', 'pem'>,
    ): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(
        type: 'ed25519',
        options: ED25519KeyPairOptions<'pem', 'der'>,
    ): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(
        type: 'ed25519',
        options: ED25519KeyPairOptions<'der', 'pem'>,
    ): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(
        type: 'ed25519',
        options: ED25519KeyPairOptions<'der', 'der'>,
    ): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'ed25519', options?: ED25519KeyPairKeyObjectOptions): KeyPairKeyObjectResult;

    function generateKeyPairSync(
        type: 'ed448',
        options: ED448KeyPairOptions<'pem', 'pem'>,
    ): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(
        type: 'ed448',
        options: ED448KeyPairOptions<'pem', 'der'>,
    ): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(
        type: 'ed448',
        options: ED448KeyPairOptions<'der', 'pem'>,
    ): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(
        type: 'ed448',
        options: ED448KeyPairOptions<'der', 'der'>,
    ): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'ed448', options?: ED448KeyPairKeyObjectOptions): KeyPairKeyObjectResult;

    function generateKeyPairSync(
        type: 'x25519',
        options: X25519KeyPairOptions<'pem', 'pem'>,
    ): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(
        type: 'x25519',
        options: X25519KeyPairOptions<'pem', 'der'>,
    ): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(
        type: 'x25519',
        options: X25519KeyPairOptions<'der', 'pem'>,
    ): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(
        type: 'x25519',
        options: X25519KeyPairOptions<'der', 'der'>,
    ): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'x25519', options?: X25519KeyPairKeyObjectOptions): KeyPairKeyObjectResult;

    function generateKeyPairSync(
        type: 'x448',
        options: X448KeyPairOptions<'pem', 'pem'>,
    ): KeyPairSyncResult<string, string>;
    function generateKeyPairSync(
        type: 'x448',
        options: X448KeyPairOptions<'pem', 'der'>,
    ): KeyPairSyncResult<string, Buffer>;
    function generateKeyPairSync(
        type: 'x448',
        options: X448KeyPairOptions<'der', 'pem'>,
    ): KeyPairSyncResult<Buffer, string>;
    function generateKeyPairSync(
        type: 'x448',
        options: X448KeyPairOptions<'der', 'der'>,
    ): KeyPairSyncResult<Buffer, Buffer>;
    function generateKeyPairSync(type: 'x448', options?: X448KeyPairKeyObjectOptions): KeyPairKeyObjectResult;

    function generateKeyPair(
        type: 'rsa',
        options: RSAKeyPairOptions<'pem', 'pem'>,
        callback: (err: Error | null, publicKey: string, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'rsa',
        options: RSAKeyPairOptions<'pem', 'der'>,
        callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'rsa',
        options: RSAKeyPairOptions<'der', 'pem'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'rsa',
        options: RSAKeyPairOptions<'der', 'der'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'rsa',
        options: RSAKeyPairKeyObjectOptions,
        callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void,
    ): void;

    function generateKeyPair(
        type: 'dsa',
        options: DSAKeyPairOptions<'pem', 'pem'>,
        callback: (err: Error | null, publicKey: string, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'dsa',
        options: DSAKeyPairOptions<'pem', 'der'>,
        callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'dsa',
        options: DSAKeyPairOptions<'der', 'pem'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'dsa',
        options: DSAKeyPairOptions<'der', 'der'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'dsa',
        options: DSAKeyPairKeyObjectOptions,
        callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void,
    ): void;

    function generateKeyPair(
        type: 'ec',
        options: ECKeyPairOptions<'pem', 'pem'>,
        callback: (err: Error | null, publicKey: string, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'ec',
        options: ECKeyPairOptions<'pem', 'der'>,
        callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'ec',
        options: ECKeyPairOptions<'der', 'pem'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'ec',
        options: ECKeyPairOptions<'der', 'der'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'ec',
        options: ECKeyPairKeyObjectOptions,
        callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void,
    ): void;

    function generateKeyPair(
        type: 'ed25519',
        options: ED25519KeyPairOptions<'pem', 'pem'>,
        callback: (err: Error | null, publicKey: string, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'ed25519',
        options: ED25519KeyPairOptions<'pem', 'der'>,
        callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'ed25519',
        options: ED25519KeyPairOptions<'der', 'pem'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'ed25519',
        options: ED25519KeyPairOptions<'der', 'der'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'ed25519',
        options: ED25519KeyPairKeyObjectOptions | undefined,
        callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void,
    ): void;

    function generateKeyPair(
        type: 'ed448',
        options: ED448KeyPairOptions<'pem', 'pem'>,
        callback: (err: Error | null, publicKey: string, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'ed448',
        options: ED448KeyPairOptions<'pem', 'der'>,
        callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'ed448',
        options: ED448KeyPairOptions<'der', 'pem'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'ed448',
        options: ED448KeyPairOptions<'der', 'der'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'ed448',
        options: ED448KeyPairKeyObjectOptions | undefined,
        callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void,
    ): void;

    function generateKeyPair(
        type: 'x25519',
        options: X25519KeyPairOptions<'pem', 'pem'>,
        callback: (err: Error | null, publicKey: string, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'x25519',
        options: X25519KeyPairOptions<'pem', 'der'>,
        callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'x25519',
        options: X25519KeyPairOptions<'der', 'pem'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'x25519',
        options: X25519KeyPairOptions<'der', 'der'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'x25519',
        options: X25519KeyPairKeyObjectOptions | undefined,
        callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void,
    ): void;

    function generateKeyPair(
        type: 'x448',
        options: X448KeyPairOptions<'pem', 'pem'>,
        callback: (err: Error | null, publicKey: string, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'x448',
        options: X448KeyPairOptions<'pem', 'der'>,
        callback: (err: Error | null, publicKey: string, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'x448',
        options: X448KeyPairOptions<'der', 'pem'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: string) => void,
    ): void;
    function generateKeyPair(
        type: 'x448',
        options: X448KeyPairOptions<'der', 'der'>,
        callback: (err: Error | null, publicKey: Buffer, privateKey: Buffer) => void,
    ): void;
    function generateKeyPair(
        type: 'x448',
        options: X448KeyPairKeyObjectOptions | undefined,
        callback: (err: Error | null, publicKey: KeyObject, privateKey: KeyObject) => void,
    ): void;

    namespace generateKeyPair {
        function __promisify__(
            type: 'rsa',
            options: RSAKeyPairOptions<'pem', 'pem'>,
        ): Promise<{ publicKey: string; privateKey: string }>;
        function __promisify__(
            type: 'rsa',
            options: RSAKeyPairOptions<'pem', 'der'>,
        ): Promise<{ publicKey: string; privateKey: Buffer }>;
        function __promisify__(
            type: 'rsa',
            options: RSAKeyPairOptions<'der', 'pem'>,
        ): Promise<{ publicKey: Buffer; privateKey: string }>;
        function __promisify__(
            type: 'rsa',
            options: RSAKeyPairOptions<'der', 'der'>,
        ): Promise<{ publicKey: Buffer; privateKey: Buffer }>;
        function __promisify__(type: 'rsa', options: RSAKeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;

        function __promisify__(
            type: 'dsa',
            options: DSAKeyPairOptions<'pem', 'pem'>,
        ): Promise<{ publicKey: string; privateKey: string }>;
        function __promisify__(
            type: 'dsa',
            options: DSAKeyPairOptions<'pem', 'der'>,
        ): Promise<{ publicKey: string; privateKey: Buffer }>;
        function __promisify__(
            type: 'dsa',
            options: DSAKeyPairOptions<'der', 'pem'>,
        ): Promise<{ publicKey: Buffer; privateKey: string }>;
        function __promisify__(
            type: 'dsa',
            options: DSAKeyPairOptions<'der', 'der'>,
        ): Promise<{ publicKey: Buffer; privateKey: Buffer }>;
        function __promisify__(type: 'dsa', options: DSAKeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;

        function __promisify__(
            type: 'ec',
            options: ECKeyPairOptions<'pem', 'pem'>,
        ): Promise<{ publicKey: string; privateKey: string }>;
        function __promisify__(
            type: 'ec',
            options: ECKeyPairOptions<'pem', 'der'>,
        ): Promise<{ publicKey: string; privateKey: Buffer }>;
        function __promisify__(
            type: 'ec',
            options: ECKeyPairOptions<'der', 'pem'>,
        ): Promise<{ publicKey: Buffer; privateKey: string }>;
        function __promisify__(
            type: 'ec',
            options: ECKeyPairOptions<'der', 'der'>,
        ): Promise<{ publicKey: Buffer; privateKey: Buffer }>;
        function __promisify__(type: 'ec', options: ECKeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;

        function __promisify__(
            type: 'ed25519',
            options: ED25519KeyPairOptions<'pem', 'pem'>,
        ): Promise<{ publicKey: string; privateKey: string }>;
        function __promisify__(
            type: 'ed25519',
            options: ED25519KeyPairOptions<'pem', 'der'>,
        ): Promise<{ publicKey: string; privateKey: Buffer }>;
        function __promisify__(
            type: 'ed25519',
            options: ED25519KeyPairOptions<'der', 'pem'>,
        ): Promise<{ publicKey: Buffer; privateKey: string }>;
        function __promisify__(
            type: 'ed25519',
            options: ED25519KeyPairOptions<'der', 'der'>,
        ): Promise<{ publicKey: Buffer; privateKey: Buffer }>;
        function __promisify__(
            type: 'ed25519',
            options?: ED25519KeyPairKeyObjectOptions,
        ): Promise<KeyPairKeyObjectResult>;

        function __promisify__(
            type: 'ed448',
            options: ED448KeyPairOptions<'pem', 'pem'>,
        ): Promise<{ publicKey: string; privateKey: string }>;
        function __promisify__(
            type: 'ed448',
            options: ED448KeyPairOptions<'pem', 'der'>,
        ): Promise<{ publicKey: string; privateKey: Buffer }>;
        function __promisify__(
            type: 'ed448',
            options: ED448KeyPairOptions<'der', 'pem'>,
        ): Promise<{ publicKey: Buffer; privateKey: string }>;
        function __promisify__(
            type: 'ed448',
            options: ED448KeyPairOptions<'der', 'der'>,
        ): Promise<{ publicKey: Buffer; privateKey: Buffer }>;
        function __promisify__(type: 'ed448', options?: ED448KeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;

        function __promisify__(
            type: 'x25519',
            options: X25519KeyPairOptions<'pem', 'pem'>,
        ): Promise<{ publicKey: string; privateKey: string }>;
        function __promisify__(
            type: 'x25519',
            options: X25519KeyPairOptions<'pem', 'der'>,
        ): Promise<{ publicKey: string; privateKey: Buffer }>;
        function __promisify__(
            type: 'x25519',
            options: X25519KeyPairOptions<'der', 'pem'>,
        ): Promise<{ publicKey: Buffer; privateKey: string }>;
        function __promisify__(
            type: 'x25519',
            options: X25519KeyPairOptions<'der', 'der'>,
        ): Promise<{ publicKey: Buffer; privateKey: Buffer }>;
        function __promisify__(
            type: 'x25519',
            options?: X25519KeyPairKeyObjectOptions,
        ): Promise<KeyPairKeyObjectResult>;

        function __promisify__(
            type: 'x448',
            options: X448KeyPairOptions<'pem', 'pem'>,
        ): Promise<{ publicKey: string; privateKey: string }>;
        function __promisify__(
            type: 'x448',
            options: X448KeyPairOptions<'pem', 'der'>,
        ): Promise<{ publicKey: string; privateKey: Buffer }>;
        function __promisify__(
            type: 'x448',
            options: X448KeyPairOptions<'der', 'pem'>,
        ): Promise<{ publicKey: Buffer; privateKey: string }>;
        function __promisify__(
            type: 'x448',
            options: X448KeyPairOptions<'der', 'der'>,
        ): Promise<{ publicKey: Buffer; privateKey: Buffer }>;
        function __promisify__(type: 'x448', options?: X448KeyPairKeyObjectOptions): Promise<KeyPairKeyObjectResult>;
    }

    /**
     * Calculates and returns the signature for `data` using the given private key and
     * algorithm. If `algorithm` is `null` or `undefined`, then the algorithm is
     * dependent upon the key type (especially Ed25519 and Ed448).
     *
     * If `key` is not a [`KeyObject`][], this function behaves as if `key` had been
     * passed to [`crypto.createPrivateKey()`][].
     */
    function sign(
        algorithm: string | null | undefined,
        data: NodeJS.ArrayBufferView,
        key: KeyLike | SignKeyObjectInput | SignPrivateKeyInput,
    ): Buffer;

    /**
     * Calculates and returns the signature for `data` using the given private key and
     * algorithm. If `algorithm` is `null` or `undefined`, then the algorithm is
     * dependent upon the key type (especially Ed25519 and Ed448).
     *
     * If `key` is not a [`KeyObject`][], this function behaves as if `key` had been
     * passed to [`crypto.createPublicKey()`][].
     */
    function verify(
        algorithm: string | null | undefined,
        data: NodeJS.ArrayBufferView,
        key: KeyLike | VerifyKeyObjectInput | VerifyPublicKeyInput,
        signature: NodeJS.ArrayBufferView,
    ): boolean;

    /**
     * Computes the Diffie-Hellman secret based on a privateKey and a publicKey.
     * Both keys must have the same asymmetricKeyType, which must be one of
     * 'dh' (for Diffie-Hellman), 'ec' (for ECDH), 'x448', or 'x25519' (for ECDH-ES).
     */
    function diffieHellman(options: { privateKey: KeyObject; publicKey: KeyObject }): Buffer;
}
