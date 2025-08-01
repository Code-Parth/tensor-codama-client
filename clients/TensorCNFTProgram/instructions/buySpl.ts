/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  addDecoderSizePrefix,
  addEncoderSizePrefix,
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getArrayDecoder,
  getArrayEncoder,
  getBooleanDecoder,
  getBooleanEncoder,
  getBytesDecoder,
  getBytesEncoder,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder,
  getStructEncoder,
  getU16Decoder,
  getU16Encoder,
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
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
  type Option,
  type OptionOrNullable,
  type ReadonlyAccount,
  type ReadonlySignerAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from "@solana/kit";
import { TCOMP_PROGRAM_ADDRESS } from "../programs";
import { getAccountMetaFactory, type ResolvedAccount } from "../shared";

export const BUY_SPL_DISCRIMINATOR = new Uint8Array([
  65, 136, 254, 255, 59, 130, 234, 174,
]);

export function getBuySplDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(BUY_SPL_DISCRIMINATOR);
}

export type BuySplInstruction<
  TProgram extends string = typeof TCOMP_PROGRAM_ADDRESS,
  TAccountTcomp extends string | IAccountMeta<string> = string,
  TAccountTcompAta extends string | IAccountMeta<string> = string,
  TAccountTreeAuthority extends string | IAccountMeta<string> = string,
  TAccountMerkleTree extends string | IAccountMeta<string> = string,
  TAccountLogWrapper extends string | IAccountMeta<string> = string,
  TAccountCompressionProgram extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = "11111111111111111111111111111111",
  TAccountBubblegumProgram extends string | IAccountMeta<string> = string,
  TAccountTcompProgram extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
  TAccountAssociatedTokenProgram extends string | IAccountMeta<string> = string,
  TAccountListState extends string | IAccountMeta<string> = string,
  TAccountBuyer extends string | IAccountMeta<string> = string,
  TAccountPayer extends string | IAccountMeta<string> = string,
  TAccountPayerSource extends string | IAccountMeta<string> = string,
  TAccountOwner extends string | IAccountMeta<string> = string,
  TAccountOwnerDest extends string | IAccountMeta<string> = string,
  TAccountCurrency extends string | IAccountMeta<string> = string,
  TAccountTakerBroker extends string | IAccountMeta<string> = string,
  TAccountTakerBrokerAta extends string | IAccountMeta<string> = string,
  TAccountMakerBroker extends string | IAccountMeta<string> = string,
  TAccountMakerBrokerAta extends string | IAccountMeta<string> = string,
  TAccountRentDest extends string | IAccountMeta<string> = string,
  TAccountRentPayer extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTcomp extends string
        ? WritableAccount<TAccountTcomp>
        : TAccountTcomp,
      TAccountTcompAta extends string
        ? WritableAccount<TAccountTcompAta>
        : TAccountTcompAta,
      TAccountTreeAuthority extends string
        ? ReadonlyAccount<TAccountTreeAuthority>
        : TAccountTreeAuthority,
      TAccountMerkleTree extends string
        ? WritableAccount<TAccountMerkleTree>
        : TAccountMerkleTree,
      TAccountLogWrapper extends string
        ? ReadonlyAccount<TAccountLogWrapper>
        : TAccountLogWrapper,
      TAccountCompressionProgram extends string
        ? ReadonlyAccount<TAccountCompressionProgram>
        : TAccountCompressionProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountBubblegumProgram extends string
        ? ReadonlyAccount<TAccountBubblegumProgram>
        : TAccountBubblegumProgram,
      TAccountTcompProgram extends string
        ? ReadonlyAccount<TAccountTcompProgram>
        : TAccountTcompProgram,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountListState extends string
        ? WritableAccount<TAccountListState>
        : TAccountListState,
      TAccountBuyer extends string
        ? ReadonlyAccount<TAccountBuyer>
        : TAccountBuyer,
      TAccountPayer extends string
        ? ReadonlySignerAccount<TAccountPayer> &
            IAccountSignerMeta<TAccountPayer>
        : TAccountPayer,
      TAccountPayerSource extends string
        ? WritableAccount<TAccountPayerSource>
        : TAccountPayerSource,
      TAccountOwner extends string
        ? ReadonlyAccount<TAccountOwner>
        : TAccountOwner,
      TAccountOwnerDest extends string
        ? WritableAccount<TAccountOwnerDest>
        : TAccountOwnerDest,
      TAccountCurrency extends string
        ? ReadonlyAccount<TAccountCurrency>
        : TAccountCurrency,
      TAccountTakerBroker extends string
        ? WritableAccount<TAccountTakerBroker>
        : TAccountTakerBroker,
      TAccountTakerBrokerAta extends string
        ? WritableAccount<TAccountTakerBrokerAta>
        : TAccountTakerBrokerAta,
      TAccountMakerBroker extends string
        ? WritableAccount<TAccountMakerBroker>
        : TAccountMakerBroker,
      TAccountMakerBrokerAta extends string
        ? WritableAccount<TAccountMakerBrokerAta>
        : TAccountMakerBrokerAta,
      TAccountRentDest extends string
        ? WritableAccount<TAccountRentDest>
        : TAccountRentDest,
      TAccountRentPayer extends string
        ? WritableSignerAccount<TAccountRentPayer> &
            IAccountSignerMeta<TAccountRentPayer>
        : TAccountRentPayer,
      ...TRemainingAccounts,
    ]
  >;

export type BuySplInstructionData = {
  discriminator: ReadonlyUint8Array;
  nonce: bigint;
  index: number;
  root: ReadonlyUint8Array;
  metaHash: ReadonlyUint8Array;
  creatorShares: ReadonlyUint8Array;
  creatorVerified: Array<boolean>;
  sellerFeeBasisPoints: number;
  maxAmount: bigint;
  optionalRoyaltyPct: Option<number>;
};

export type BuySplInstructionDataArgs = {
  nonce: number | bigint;
  index: number;
  root: ReadonlyUint8Array;
  metaHash: ReadonlyUint8Array;
  creatorShares: ReadonlyUint8Array;
  creatorVerified: Array<boolean>;
  sellerFeeBasisPoints: number;
  maxAmount: number | bigint;
  optionalRoyaltyPct: OptionOrNullable<number>;
};

export function getBuySplInstructionDataEncoder(): Encoder<BuySplInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ["discriminator", fixEncoderSize(getBytesEncoder(), 8)],
      ["nonce", getU64Encoder()],
      ["index", getU32Encoder()],
      ["root", fixEncoderSize(getBytesEncoder(), 32)],
      ["metaHash", fixEncoderSize(getBytesEncoder(), 32)],
      [
        "creatorShares",
        addEncoderSizePrefix(getBytesEncoder(), getU32Encoder()),
      ],
      ["creatorVerified", getArrayEncoder(getBooleanEncoder())],
      ["sellerFeeBasisPoints", getU16Encoder()],
      ["maxAmount", getU64Encoder()],
      ["optionalRoyaltyPct", getOptionEncoder(getU16Encoder())],
    ]),
    (value) => ({ ...value, discriminator: BUY_SPL_DISCRIMINATOR }),
  );
}

export function getBuySplInstructionDataDecoder(): Decoder<BuySplInstructionData> {
  return getStructDecoder([
    ["discriminator", fixDecoderSize(getBytesDecoder(), 8)],
    ["nonce", getU64Decoder()],
    ["index", getU32Decoder()],
    ["root", fixDecoderSize(getBytesDecoder(), 32)],
    ["metaHash", fixDecoderSize(getBytesDecoder(), 32)],
    ["creatorShares", addDecoderSizePrefix(getBytesDecoder(), getU32Decoder())],
    ["creatorVerified", getArrayDecoder(getBooleanDecoder())],
    ["sellerFeeBasisPoints", getU16Decoder()],
    ["maxAmount", getU64Decoder()],
    ["optionalRoyaltyPct", getOptionDecoder(getU16Decoder())],
  ]);
}

export function getBuySplInstructionDataCodec(): Codec<
  BuySplInstructionDataArgs,
  BuySplInstructionData
> {
  return combineCodec(
    getBuySplInstructionDataEncoder(),
    getBuySplInstructionDataDecoder(),
  );
}

export type BuySplInput<
  TAccountTcomp extends string = string,
  TAccountTcompAta extends string = string,
  TAccountTreeAuthority extends string = string,
  TAccountMerkleTree extends string = string,
  TAccountLogWrapper extends string = string,
  TAccountCompressionProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountBubblegumProgram extends string = string,
  TAccountTcompProgram extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountListState extends string = string,
  TAccountBuyer extends string = string,
  TAccountPayer extends string = string,
  TAccountPayerSource extends string = string,
  TAccountOwner extends string = string,
  TAccountOwnerDest extends string = string,
  TAccountCurrency extends string = string,
  TAccountTakerBroker extends string = string,
  TAccountTakerBrokerAta extends string = string,
  TAccountMakerBroker extends string = string,
  TAccountMakerBrokerAta extends string = string,
  TAccountRentDest extends string = string,
  TAccountRentPayer extends string = string,
> = {
  tcomp: Address<TAccountTcomp>;
  tcompAta: Address<TAccountTcompAta>;
  treeAuthority: Address<TAccountTreeAuthority>;
  merkleTree: Address<TAccountMerkleTree>;
  logWrapper: Address<TAccountLogWrapper>;
  compressionProgram: Address<TAccountCompressionProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  bubblegumProgram: Address<TAccountBubblegumProgram>;
  tcompProgram: Address<TAccountTcompProgram>;
  tokenProgram?: Address<TAccountTokenProgram>;
  associatedTokenProgram: Address<TAccountAssociatedTokenProgram>;
  listState: Address<TAccountListState>;
  buyer: Address<TAccountBuyer>;
  payer: TransactionSigner<TAccountPayer>;
  payerSource: Address<TAccountPayerSource>;
  owner: Address<TAccountOwner>;
  ownerDest: Address<TAccountOwnerDest>;
  currency: Address<TAccountCurrency>;
  takerBroker?: Address<TAccountTakerBroker>;
  takerBrokerAta?: Address<TAccountTakerBrokerAta>;
  makerBroker?: Address<TAccountMakerBroker>;
  makerBrokerAta?: Address<TAccountMakerBrokerAta>;
  rentDest: Address<TAccountRentDest>;
  rentPayer: TransactionSigner<TAccountRentPayer>;
  nonce: BuySplInstructionDataArgs["nonce"];
  index: BuySplInstructionDataArgs["index"];
  root: BuySplInstructionDataArgs["root"];
  metaHash: BuySplInstructionDataArgs["metaHash"];
  creatorShares: BuySplInstructionDataArgs["creatorShares"];
  creatorVerified: BuySplInstructionDataArgs["creatorVerified"];
  sellerFeeBasisPoints: BuySplInstructionDataArgs["sellerFeeBasisPoints"];
  maxAmount: BuySplInstructionDataArgs["maxAmount"];
  optionalRoyaltyPct: BuySplInstructionDataArgs["optionalRoyaltyPct"];
};

export function getBuySplInstruction<
  TAccountTcomp extends string,
  TAccountTcompAta extends string,
  TAccountTreeAuthority extends string,
  TAccountMerkleTree extends string,
  TAccountLogWrapper extends string,
  TAccountCompressionProgram extends string,
  TAccountSystemProgram extends string,
  TAccountBubblegumProgram extends string,
  TAccountTcompProgram extends string,
  TAccountTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountListState extends string,
  TAccountBuyer extends string,
  TAccountPayer extends string,
  TAccountPayerSource extends string,
  TAccountOwner extends string,
  TAccountOwnerDest extends string,
  TAccountCurrency extends string,
  TAccountTakerBroker extends string,
  TAccountTakerBrokerAta extends string,
  TAccountMakerBroker extends string,
  TAccountMakerBrokerAta extends string,
  TAccountRentDest extends string,
  TAccountRentPayer extends string,
  TProgramAddress extends Address = typeof TCOMP_PROGRAM_ADDRESS,
>(
  input: BuySplInput<
    TAccountTcomp,
    TAccountTcompAta,
    TAccountTreeAuthority,
    TAccountMerkleTree,
    TAccountLogWrapper,
    TAccountCompressionProgram,
    TAccountSystemProgram,
    TAccountBubblegumProgram,
    TAccountTcompProgram,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountListState,
    TAccountBuyer,
    TAccountPayer,
    TAccountPayerSource,
    TAccountOwner,
    TAccountOwnerDest,
    TAccountCurrency,
    TAccountTakerBroker,
    TAccountTakerBrokerAta,
    TAccountMakerBroker,
    TAccountMakerBrokerAta,
    TAccountRentDest,
    TAccountRentPayer
  >,
  config?: { programAddress?: TProgramAddress },
): BuySplInstruction<
  TProgramAddress,
  TAccountTcomp,
  TAccountTcompAta,
  TAccountTreeAuthority,
  TAccountMerkleTree,
  TAccountLogWrapper,
  TAccountCompressionProgram,
  TAccountSystemProgram,
  TAccountBubblegumProgram,
  TAccountTcompProgram,
  TAccountTokenProgram,
  TAccountAssociatedTokenProgram,
  TAccountListState,
  TAccountBuyer,
  TAccountPayer,
  TAccountPayerSource,
  TAccountOwner,
  TAccountOwnerDest,
  TAccountCurrency,
  TAccountTakerBroker,
  TAccountTakerBrokerAta,
  TAccountMakerBroker,
  TAccountMakerBrokerAta,
  TAccountRentDest,
  TAccountRentPayer
> {
  // Program address.
  const programAddress = config?.programAddress ?? TCOMP_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    tcomp: { value: input.tcomp ?? null, isWritable: true },
    tcompAta: { value: input.tcompAta ?? null, isWritable: true },
    treeAuthority: { value: input.treeAuthority ?? null, isWritable: false },
    merkleTree: { value: input.merkleTree ?? null, isWritable: true },
    logWrapper: { value: input.logWrapper ?? null, isWritable: false },
    compressionProgram: {
      value: input.compressionProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    bubblegumProgram: {
      value: input.bubblegumProgram ?? null,
      isWritable: false,
    },
    tcompProgram: { value: input.tcompProgram ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    listState: { value: input.listState ?? null, isWritable: true },
    buyer: { value: input.buyer ?? null, isWritable: false },
    payer: { value: input.payer ?? null, isWritable: false },
    payerSource: { value: input.payerSource ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
    ownerDest: { value: input.ownerDest ?? null, isWritable: true },
    currency: { value: input.currency ?? null, isWritable: false },
    takerBroker: { value: input.takerBroker ?? null, isWritable: true },
    takerBrokerAta: { value: input.takerBrokerAta ?? null, isWritable: true },
    makerBroker: { value: input.makerBroker ?? null, isWritable: true },
    makerBrokerAta: { value: input.makerBrokerAta ?? null, isWritable: true },
    rentDest: { value: input.rentDest ?? null, isWritable: true },
    rentPayer: { value: input.rentPayer ?? null, isWritable: true },
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
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" as Address<"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA">;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, "programId");
  const instruction = {
    accounts: [
      getAccountMeta(accounts.tcomp),
      getAccountMeta(accounts.tcompAta),
      getAccountMeta(accounts.treeAuthority),
      getAccountMeta(accounts.merkleTree),
      getAccountMeta(accounts.logWrapper),
      getAccountMeta(accounts.compressionProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.bubblegumProgram),
      getAccountMeta(accounts.tcompProgram),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.listState),
      getAccountMeta(accounts.buyer),
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.payerSource),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.ownerDest),
      getAccountMeta(accounts.currency),
      getAccountMeta(accounts.takerBroker),
      getAccountMeta(accounts.takerBrokerAta),
      getAccountMeta(accounts.makerBroker),
      getAccountMeta(accounts.makerBrokerAta),
      getAccountMeta(accounts.rentDest),
      getAccountMeta(accounts.rentPayer),
    ],
    programAddress,
    data: getBuySplInstructionDataEncoder().encode(
      args as BuySplInstructionDataArgs,
    ),
  } as BuySplInstruction<
    TProgramAddress,
    TAccountTcomp,
    TAccountTcompAta,
    TAccountTreeAuthority,
    TAccountMerkleTree,
    TAccountLogWrapper,
    TAccountCompressionProgram,
    TAccountSystemProgram,
    TAccountBubblegumProgram,
    TAccountTcompProgram,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountListState,
    TAccountBuyer,
    TAccountPayer,
    TAccountPayerSource,
    TAccountOwner,
    TAccountOwnerDest,
    TAccountCurrency,
    TAccountTakerBroker,
    TAccountTakerBrokerAta,
    TAccountMakerBroker,
    TAccountMakerBrokerAta,
    TAccountRentDest,
    TAccountRentPayer
  >;

  return instruction;
}

export type ParsedBuySplInstruction<
  TProgram extends string = typeof TCOMP_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    tcomp: TAccountMetas[0];
    tcompAta: TAccountMetas[1];
    treeAuthority: TAccountMetas[2];
    merkleTree: TAccountMetas[3];
    logWrapper: TAccountMetas[4];
    compressionProgram: TAccountMetas[5];
    systemProgram: TAccountMetas[6];
    bubblegumProgram: TAccountMetas[7];
    tcompProgram: TAccountMetas[8];
    tokenProgram: TAccountMetas[9];
    associatedTokenProgram: TAccountMetas[10];
    listState: TAccountMetas[11];
    buyer: TAccountMetas[12];
    payer: TAccountMetas[13];
    payerSource: TAccountMetas[14];
    owner: TAccountMetas[15];
    ownerDest: TAccountMetas[16];
    currency: TAccountMetas[17];
    takerBroker?: TAccountMetas[18] | undefined;
    takerBrokerAta?: TAccountMetas[19] | undefined;
    makerBroker?: TAccountMetas[20] | undefined;
    makerBrokerAta?: TAccountMetas[21] | undefined;
    rentDest: TAccountMetas[22];
    rentPayer: TAccountMetas[23];
  };
  data: BuySplInstructionData;
};

export function parseBuySplInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>,
): ParsedBuySplInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 24) {
    // TODO: Coded error.
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  const getNextOptionalAccount = () => {
    const accountMeta = getNextAccount();
    return accountMeta.address === TCOMP_PROGRAM_ADDRESS
      ? undefined
      : accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      tcomp: getNextAccount(),
      tcompAta: getNextAccount(),
      treeAuthority: getNextAccount(),
      merkleTree: getNextAccount(),
      logWrapper: getNextAccount(),
      compressionProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      bubblegumProgram: getNextAccount(),
      tcompProgram: getNextAccount(),
      tokenProgram: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      listState: getNextAccount(),
      buyer: getNextAccount(),
      payer: getNextAccount(),
      payerSource: getNextAccount(),
      owner: getNextAccount(),
      ownerDest: getNextAccount(),
      currency: getNextAccount(),
      takerBroker: getNextOptionalAccount(),
      takerBrokerAta: getNextOptionalAccount(),
      makerBroker: getNextOptionalAccount(),
      makerBrokerAta: getNextOptionalAccount(),
      rentDest: getNextAccount(),
      rentPayer: getNextAccount(),
    },
    data: getBuySplInstructionDataDecoder().decode(instruction.data),
  };
}
