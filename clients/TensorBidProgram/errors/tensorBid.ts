/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  isProgramError,
  type Address,
  type SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM,
  type SolanaError,
} from "@solana/kit";
import { TENSOR_BID_PROGRAM_ADDRESS } from "../programs";

/** BadMargin: bad margin account passed in */
export const TENSOR_BID_ERROR__BAD_MARGIN = 0x1770; // 6000
/** ExpiryTooLarge: expiry date too far in the future, max expiry 60d */
export const TENSOR_BID_ERROR__EXPIRY_TOO_LARGE = 0x1771; // 6001
/** PriceMismatch: passed in amount doesnt match that stored */
export const TENSOR_BID_ERROR__PRICE_MISMATCH = 0x1772; // 6002
/** BidExpired: bid expired */
export const TENSOR_BID_ERROR__BID_EXPIRED = 0x1773; // 6003
/** BidNotYetExpired: bid hasn't reached expiry time yet */
export const TENSOR_BID_ERROR__BID_NOT_YET_EXPIRED = 0x1774; // 6004

export type TensorBidError =
  | typeof TENSOR_BID_ERROR__BAD_MARGIN
  | typeof TENSOR_BID_ERROR__BID_EXPIRED
  | typeof TENSOR_BID_ERROR__BID_NOT_YET_EXPIRED
  | typeof TENSOR_BID_ERROR__EXPIRY_TOO_LARGE
  | typeof TENSOR_BID_ERROR__PRICE_MISMATCH;

let tensorBidErrorMessages: Record<TensorBidError, string> | undefined;
if (process.env.NODE_ENV !== "production") {
  tensorBidErrorMessages = {
    [TENSOR_BID_ERROR__BAD_MARGIN]: `bad margin account passed in`,
    [TENSOR_BID_ERROR__BID_EXPIRED]: `bid expired`,
    [TENSOR_BID_ERROR__BID_NOT_YET_EXPIRED]: `bid hasn't reached expiry time yet`,
    [TENSOR_BID_ERROR__EXPIRY_TOO_LARGE]: `expiry date too far in the future, max expiry 60d`,
    [TENSOR_BID_ERROR__PRICE_MISMATCH]: `passed in amount doesnt match that stored`,
  };
}

export function getTensorBidErrorMessage(code: TensorBidError): string {
  if (process.env.NODE_ENV !== "production") {
    return (tensorBidErrorMessages as Record<TensorBidError, string>)[code];
  }

  return "Error message not available in production bundles.";
}

export function isTensorBidError<TProgramErrorCode extends TensorBidError>(
  error: unknown,
  transactionMessage: {
    instructions: Record<number, { programAddress: Address }>;
  },
  code?: TProgramErrorCode,
): error is SolanaError<typeof SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM> &
  Readonly<{ context: Readonly<{ code: TProgramErrorCode }> }> {
  return isProgramError<TProgramErrorCode>(
    error,
    transactionMessage,
    TENSOR_BID_PROGRAM_ADDRESS,
    code,
  );
}
