/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  getU16Decoder,
  getU16Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from "@solana/kit";
import { TENSORSWAP_PROGRAM_ADDRESS } from "../programs";
import { getAccountMetaFactory, type ResolvedAccount } from "../shared";

export const INIT_MARGIN_ACCOUNT_DISCRIMINATOR = new Uint8Array([
  10, 54, 68, 252, 130, 97, 39, 52,
]);

export function getInitMarginAccountDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    INIT_MARGIN_ACCOUNT_DISCRIMINATOR,
  );
}

export type InitMarginAccountInstruction<
  TProgram extends string = typeof TENSORSWAP_PROGRAM_ADDRESS,
  TAccountTswap extends string | IAccountMeta<string> = string,
  TAccountMarginAccount extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = "11111111111111111111111111111111",
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTswap extends string
        ? ReadonlyAccount<TAccountTswap>
        : TAccountTswap,
      TAccountMarginAccount extends string
        ? WritableAccount<TAccountMarginAccount>
        : TAccountMarginAccount,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      ...TRemainingAccounts,
    ]
  >;

export type InitMarginAccountInstructionData = {
  discriminator: ReadonlyUint8Array;
  marginNr: number;
  name: ReadonlyUint8Array;
};

export type InitMarginAccountInstructionDataArgs = {
  marginNr: number;
  name: ReadonlyUint8Array;
};

export function getInitMarginAccountInstructionDataEncoder(): Encoder<InitMarginAccountInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ["discriminator", fixEncoderSize(getBytesEncoder(), 8)],
      ["marginNr", getU16Encoder()],
      ["name", fixEncoderSize(getBytesEncoder(), 32)],
    ]),
    (value) => ({ ...value, discriminator: INIT_MARGIN_ACCOUNT_DISCRIMINATOR }),
  );
}

export function getInitMarginAccountInstructionDataDecoder(): Decoder<InitMarginAccountInstructionData> {
  return getStructDecoder([
    ["discriminator", fixDecoderSize(getBytesDecoder(), 8)],
    ["marginNr", getU16Decoder()],
    ["name", fixDecoderSize(getBytesDecoder(), 32)],
  ]);
}

export function getInitMarginAccountInstructionDataCodec(): Codec<
  InitMarginAccountInstructionDataArgs,
  InitMarginAccountInstructionData
> {
  return combineCodec(
    getInitMarginAccountInstructionDataEncoder(),
    getInitMarginAccountInstructionDataDecoder(),
  );
}

export type InitMarginAccountInput<
  TAccountTswap extends string = string,
  TAccountMarginAccount extends string = string,
  TAccountOwner extends string = string,
  TAccountSystemProgram extends string = string,
> = {
  tswap: Address<TAccountTswap>;
  marginAccount: Address<TAccountMarginAccount>;
  owner: TransactionSigner<TAccountOwner>;
  systemProgram?: Address<TAccountSystemProgram>;
  marginNr: InitMarginAccountInstructionDataArgs["marginNr"];
  name: InitMarginAccountInstructionDataArgs["name"];
};

export function getInitMarginAccountInstruction<
  TAccountTswap extends string,
  TAccountMarginAccount extends string,
  TAccountOwner extends string,
  TAccountSystemProgram extends string,
  TProgramAddress extends Address = typeof TENSORSWAP_PROGRAM_ADDRESS,
>(
  input: InitMarginAccountInput<
    TAccountTswap,
    TAccountMarginAccount,
    TAccountOwner,
    TAccountSystemProgram
  >,
  config?: { programAddress?: TProgramAddress },
): InitMarginAccountInstruction<
  TProgramAddress,
  TAccountTswap,
  TAccountMarginAccount,
  TAccountOwner,
  TAccountSystemProgram
> {
  // Program address.
  const programAddress = config?.programAddress ?? TENSORSWAP_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    tswap: { value: input.tswap ?? null, isWritable: false },
    marginAccount: { value: input.marginAccount ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      "11111111111111111111111111111111" as Address<"11111111111111111111111111111111">;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, "programId");
  const instruction = {
    accounts: [
      getAccountMeta(accounts.tswap),
      getAccountMeta(accounts.marginAccount),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.systemProgram),
    ],
    programAddress,
    data: getInitMarginAccountInstructionDataEncoder().encode(
      args as InitMarginAccountInstructionDataArgs,
    ),
  } as InitMarginAccountInstruction<
    TProgramAddress,
    TAccountTswap,
    TAccountMarginAccount,
    TAccountOwner,
    TAccountSystemProgram
  >;

  return instruction;
}

export type ParsedInitMarginAccountInstruction<
  TProgram extends string = typeof TENSORSWAP_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    tswap: TAccountMetas[0];
    marginAccount: TAccountMetas[1];
    owner: TAccountMetas[2];
    systemProgram: TAccountMetas[3];
  };
  data: InitMarginAccountInstructionData;
};

export function parseInitMarginAccountInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>,
): ParsedInitMarginAccountInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 4) {
    // TODO: Coded error.
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      tswap: getNextAccount(),
      marginAccount: getNextAccount(),
      owner: getNextAccount(),
      systemProgram: getNextAccount(),
    },
    data: getInitMarginAccountInstructionDataDecoder().decode(instruction.data),
  };
}
