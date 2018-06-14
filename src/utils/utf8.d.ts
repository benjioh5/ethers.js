import { Arrayish } from './convert.js';
export declare enum UnicodeNormalizationForm {
    current = "",
    NFC = "NFC",
    NFD = "NFD",
    NFKC = "NFKC",
    NFKD = "NFKD"
}
export declare function toUtf8Bytes(str: string, form?: UnicodeNormalizationForm): Uint8Array;
export declare function toUtf8String(bytes: Arrayish): string;