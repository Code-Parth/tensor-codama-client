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
  type ReadonlySignerAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from "@solana/kit";
import { TENSORSWAP_PROGRAM_ADDRESS } from "../programs";
import { getAccountMetaFactory, type ResolvedAccount } from "../shared";
import {
  getTSwapConfigDecoder,
  getTSwapConfigEncoder,
  type TSwapConfig,
  type TSwapConfigArgs,
} from "../types";

export const INIT_UPDATE_TSWAP_DISCRIMINATOR = new Uint8Array([
  140, 185, 54, 172, 15, 94, 31, 155,
]);

export function getInitUpdateTswapDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    INIT_UPDATE_TSWAP_DISCRIMINATOR,
  );
}

export type InitUpdateTswapInstruction<
  TProgram extends string = typeof TENSORSWAP_PROGRAM_ADDRESS,
  TAccountTswap extends string | IAccountMeta<string> = string,
  TAccountFeeVault extends string | IAccountMeta<string> = string,
  TAccountCosigner extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = "11111111111111111111111111111111",
  TAccountNewOwner extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTswap extends string
        ? WritableAccount<TAccountTswap>
        : TAccountTswap,
      TAccountFeeVault extends string
        ? ReadonlyAccount<TAccountFeeVault>
        : TAccountFeeVault,
      TAccountCosigner extends string
        ? ReadonlySignerAccount<TAccountCosigner> &
            IAccountSignerMeta<TAccountCosigner>
        : TAccountCosigner,
      TAccountOwner extends string
        ? WritableSignerAccount<TAccountOwner> &
            IAccountSignerMeta<TAccountOwner>
        : TAccountOwner,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountNewOwner extends string
        ? ReadonlySignerAccount<TAccountNewOwner> &
            IAccountSignerMeta<TAccountNewOwner>
        : TAccountNewOwner,
      ...TRemainingAccounts,
    ]
  >;

export type InitUpdateTswapInstructionData = {
  discriminator: ReadonlyUint8Array;
  config: TSwapConfig;
};

export type InitUpdateTswapInstructionDataArgs = { config: TSwapConfigArgs };

export function getInitUpdateTswapInstructionDataEncoder(): Encoder<InitUpdateTswapInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ["discriminator", fixEncoderSize(getBytesEncoder(), 8)],
      ["config", getTSwapConfigEncoder()],
    ]),
    (value) => ({ ...value, discriminator: INIT_UPDATE_TSWAP_DISCRIMINATOR }),
  );
}

export function getInitUpdateTswapInstructionDataDecoder(): Decoder<InitUpdateTswapInstructionData> {
  return getStructDecoder([
    ["discriminator", fixDecoderSize(getBytesDecoder(), 8)],
    ["config", getTSwapConfigDecoder()],
  ]);
}

export function getInitUpdateTswapInstructionDataCodec(): Codec<
  InitUpdateTswapInstructionDataArgs,
  InitUpdateTswapInstructionData
> {
  return combineCodec(
    getInitUpdateTswapInstructionDataEncoder(),
    getInitUpdateTswapInstructionDataDecoder(),
  );
}

export type InitUpdateTswapInput<
  TAccountTswap extends string = string,
  TAccountFeeVault extends string = string,
  TAccountCosigner extends string = string,
  TAccountOwner extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountNewOwner extends string = string,
> = {
  tswap: Address<TAccountTswap>;
  feeVault: Address<TAccountFeeVault>;
  /** We ask also for a signature just to make sure this wallet can actually sign things */
  cosigner: TransactionSigner<TAccountCosigner>;
  owner: TransactionSigner<TAccountOwner>;
  systemProgram?: Address<TAccountSystemProgram>;
  newOwner: TransactionSigner<TAccountNewOwner>;
  config: InitUpdateTswapInstructionDataArgs["config"];
};

export function getInitUpdateTswapInstruction<
  TAccountTswap extends string,
  TAccountFeeVault extends string,
  TAccountCosigner extends string,
  TAccountOwner extends string,
  TAccountSystemProgram extends string,
  TAccountNewOwner extends string,
  TProgramAddress extends Address = typeof TENSORSWAP_PROGRAM_ADDRESS,
>(
  input: InitUpdateTswapInput<
    TAccountTswap,
    TAccountFeeVault,
    TAccountCosigner,
    TAccountOwner,
    TAccountSystemProgram,
    TAccountNewOwner
  >,
  config?: { programAddress?: TProgramAddress },
): InitUpdateTswapInstruction<
  TProgramAddress,
  TAccountTswap,
  TAccountFeeVault,
  TAccountCosigner,
  TAccountOwner,
  TAccountSystemProgram,
  TAccountNewOwner
> {
  // Program address.
  const programAddress = config?.programAddress ?? TENSORSWAP_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    tswap: { value: input.tswap ?? null, isWritable: true },
    feeVault: { value: input.feeVault ?? null, isWritable: false },
    cosigner: { value: input.cosigner ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: true },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    newOwner: { value: input.newOwner ?? null, isWritable: false },
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
      getAccountMeta(accounts.feeVault),
      getAccountMeta(accounts.cosigner),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.newOwner),
    ],
    programAddress,
    data: getInitUpdateTswapInstructionDataEncoder().encode(
      args as InitUpdateTswapInstructionDataArgs,
    ),
  } as InitUpdateTswapInstruction<
    TProgramAddress,
    TAccountTswap,
    TAccountFeeVault,
    TAccountCosigner,
    TAccountOwner,
    TAccountSystemProgram,
    TAccountNewOwner
  >;

  return instruction;
}

export type ParsedInitUpdateTswapInstruction<
  TProgram extends string = typeof TENSORSWAP_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    tswap: TAccountMetas[0];
    feeVault: TAccountMetas[1];
    /** We ask also for a signature just to make sure this wallet can actually sign things */
    cosigner: TAccountMetas[2];
    owner: TAccountMetas[3];
    systemProgram: TAccountMetas[4];
    newOwner: TAccountMetas[5];
  };
  data: InitUpdateTswapInstructionData;
};

export function parseInitUpdateTswapInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>,
): ParsedInitUpdateTswapInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 6) {
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
      feeVault: getNextAccount(),
      cosigner: getNextAccount(),
      owner: getNextAccount(),
      systemProgram: getNextAccount(),
      newOwner: getNextAccount(),
    },
    data: getInitUpdateTswapInstructionDataDecoder().decode(instruction.data),
  };
}
