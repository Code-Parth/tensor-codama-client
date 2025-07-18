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
import {
  getPoolConfigDecoder,
  getPoolConfigEncoder,
  type PoolConfig,
  type PoolConfigArgs,
} from "../types";

export const CLOSE_POOL_DISCRIMINATOR = new Uint8Array([
  140, 189, 209, 23, 239, 62, 239, 11,
]);

export function getClosePoolDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(CLOSE_POOL_DISCRIMINATOR);
}

export type ClosePoolInstruction<
  TProgram extends string = typeof TENSORSWAP_PROGRAM_ADDRESS,
  TAccountTswap extends string | IAccountMeta<string> = string,
  TAccountPool extends string | IAccountMeta<string> = string,
  TAccountSolEscrow extends string | IAccountMeta<string> = string,
  TAccountWhitelist extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = "11111111111111111111111111111111",
  TAccountNftAuthority extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTswap extends string
        ? ReadonlyAccount<TAccountTswap>
        : TAccountTswap,
      TAccountPool extends string
        ? WritableAccount<TAccountPool>
        : TAccountPool,
      TAccountSolEscrow extends string
        ? WritableAccount<TAccountSolEscrow>
        : TAccountSolEscrow,
      TAccountWhitelist extends string
        ? ReadonlyAccount<TAccountWhitelist>
        : TAccountWhitelist,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountNftAuthority extends string
        ? WritableAccount<TAccountNftAuthority>
        : TAccountNftAuthority,
      ...TRemainingAccounts,
    ]
  >;

export type ClosePoolInstructionData = {
  discriminator: ReadonlyUint8Array;
  config: PoolConfig;
};

export type ClosePoolInstructionDataArgs = { config: PoolConfigArgs };

export function getClosePoolInstructionDataEncoder(): Encoder<ClosePoolInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ["discriminator", fixEncoderSize(getBytesEncoder(), 8)],
      ["config", getPoolConfigEncoder()],
    ]),
    (value) => ({ ...value, discriminator: CLOSE_POOL_DISCRIMINATOR }),
  );
}

export function getClosePoolInstructionDataDecoder(): Decoder<ClosePoolInstructionData> {
  return getStructDecoder([
    ["discriminator", fixDecoderSize(getBytesDecoder(), 8)],
    ["config", getPoolConfigDecoder()],
  ]);
}

export function getClosePoolInstructionDataCodec(): Codec<
  ClosePoolInstructionDataArgs,
  ClosePoolInstructionData
> {
  return combineCodec(
    getClosePoolInstructionDataEncoder(),
    getClosePoolInstructionDataDecoder(),
  );
}

export type ClosePoolInput<
  TAccountTswap extends string = string,
  TAccountPool extends string = string,
  TAccountSolEscrow extends string = string,
  TAccountWhitelist extends string = string,
  TAccountOwner extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountNftAuthority extends string = string,
> = {
  tswap: Address<TAccountTswap>;
  pool: Address<TAccountPool>;
  /** (!) if the order is marginated this won't return any funds to the user, since margin isn't auto-closed */
  solEscrow: Address<TAccountSolEscrow>;
  whitelist: Address<TAccountWhitelist>;
  owner: TransactionSigner<TAccountOwner>;
  systemProgram?: Address<TAccountSystemProgram>;
  nftAuthority: Address<TAccountNftAuthority>;
  config: ClosePoolInstructionDataArgs["config"];
};

export function getClosePoolInstruction<
  TAccountTswap extends string,
  TAccountPool extends string,
  TAccountSolEscrow extends string,
  TAccountWhitelist extends string,
  TAccountOwner extends string,
  TAccountSystemProgram extends string,
  TAccountNftAuthority extends string,
  TProgramAddress extends Address = typeof TENSORSWAP_PROGRAM_ADDRESS,
>(
  input: ClosePoolInput<
    TAccountTswap,
    TAccountPool,
    TAccountSolEscrow,
    TAccountWhitelist,
    TAccountOwner,
    TAccountSystemProgram,
    TAccountNftAuthority
  >,
  config?: { programAddress?: TProgramAddress },
): ClosePoolInstruction<
  TProgramAddress,
  TAccountTswap,
  TAccountPool,
  TAccountSolEscrow,
  TAccountWhitelist,
  TAccountOwner,
  TAccountSystemProgram,
  TAccountNftAuthority
> {
  // Program address.
  const programAddress = config?.programAddress ?? TENSORSWAP_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    tswap: { value: input.tswap ?? null, isWritable: false },
    pool: { value: input.pool ?? null, isWritable: true },
    solEscrow: { value: input.solEscrow ?? null, isWritable: true },
    whitelist: { value: input.whitelist ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    nftAuthority: { value: input.nftAuthority ?? null, isWritable: true },
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
      getAccountMeta(accounts.pool),
      getAccountMeta(accounts.solEscrow),
      getAccountMeta(accounts.whitelist),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.nftAuthority),
    ],
    programAddress,
    data: getClosePoolInstructionDataEncoder().encode(
      args as ClosePoolInstructionDataArgs,
    ),
  } as ClosePoolInstruction<
    TProgramAddress,
    TAccountTswap,
    TAccountPool,
    TAccountSolEscrow,
    TAccountWhitelist,
    TAccountOwner,
    TAccountSystemProgram,
    TAccountNftAuthority
  >;

  return instruction;
}

export type ParsedClosePoolInstruction<
  TProgram extends string = typeof TENSORSWAP_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    tswap: TAccountMetas[0];
    pool: TAccountMetas[1];
    /** (!) if the order is marginated this won't return any funds to the user, since margin isn't auto-closed */
    solEscrow: TAccountMetas[2];
    whitelist: TAccountMetas[3];
    owner: TAccountMetas[4];
    systemProgram: TAccountMetas[5];
    nftAuthority: TAccountMetas[6];
  };
  data: ClosePoolInstructionData;
};

export function parseClosePoolInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>,
): ParsedClosePoolInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 7) {
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
      pool: getNextAccount(),
      solEscrow: getNextAccount(),
      whitelist: getNextAccount(),
      owner: getNextAccount(),
      systemProgram: getNextAccount(),
      nftAuthority: getNextAccount(),
    },
    data: getClosePoolInstructionDataDecoder().decode(instruction.data),
  };
}
