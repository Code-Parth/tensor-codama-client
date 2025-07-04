/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  getEnumDecoder,
  getEnumEncoder,
  type Codec,
  type Decoder,
  type Encoder,
} from "@solana/kit";

export enum TTokenProgramVersion {
  Original,
  Token2022,
}

export type TTokenProgramVersionArgs = TTokenProgramVersion;

export function getTTokenProgramVersionEncoder(): Encoder<TTokenProgramVersionArgs> {
  return getEnumEncoder(TTokenProgramVersion);
}

export function getTTokenProgramVersionDecoder(): Decoder<TTokenProgramVersion> {
  return getEnumDecoder(TTokenProgramVersion);
}

export function getTTokenProgramVersionCodec(): Codec<
  TTokenProgramVersionArgs,
  TTokenProgramVersion
> {
  return combineCodec(
    getTTokenProgramVersionEncoder(),
    getTTokenProgramVersionDecoder(),
  );
}
