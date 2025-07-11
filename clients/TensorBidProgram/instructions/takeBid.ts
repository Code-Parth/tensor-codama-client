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
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from "@solana/kit";
import { TENSOR_BID_PROGRAM_ADDRESS } from "../programs";
import { getAccountMetaFactory, type ResolvedAccount } from "../shared";
import {
  getAuthorizationDataLocalDecoder,
  getAuthorizationDataLocalEncoder,
  type AuthorizationDataLocal,
  type AuthorizationDataLocalArgs,
} from "../types";

export const TAKE_BID_DISCRIMINATOR = new Uint8Array([
  143, 227, 21, 28, 152, 128, 7, 10,
]);

export function getTakeBidDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(TAKE_BID_DISCRIMINATOR);
}

export type TakeBidInstruction<
  TProgram extends string = typeof TENSOR_BID_PROGRAM_ADDRESS,
  TAccountTswap extends string | IAccountMeta<string> = string,
  TAccountFeeVault extends string | IAccountMeta<string> = string,
  TAccountNftMint extends string | IAccountMeta<string> = string,
  TAccountNftBidderAcc extends string | IAccountMeta<string> = string,
  TAccountNftSellerAcc extends string | IAccountMeta<string> = string,
  TAccountNftTempAcc extends string | IAccountMeta<string> = string,
  TAccountNftMetadata extends string | IAccountMeta<string> = string,
  TAccountBidState extends string | IAccountMeta<string> = string,
  TAccountBidder extends string | IAccountMeta<string> = string,
  TAccountSeller extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
  TAccountAssociatedTokenProgram extends string | IAccountMeta<string> = string,
  TAccountSystemProgram extends
    | string
    | IAccountMeta<string> = "11111111111111111111111111111111",
  TAccountRent extends
    | string
    | IAccountMeta<string> = "SysvarRent111111111111111111111111111111111",
  TAccountNftEdition extends string | IAccountMeta<string> = string,
  TAccountSellerTokenRecord extends string | IAccountMeta<string> = string,
  TAccountBidderTokenRecord extends string | IAccountMeta<string> = string,
  TAccountTempTokenRecord extends string | IAccountMeta<string> = string,
  TAccountTokenMetadataProgram extends
    | string
    | IAccountMeta<string> = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
  TAccountInstructions extends string | IAccountMeta<string> = string,
  TAccountAuthorizationRulesProgram extends
    | string
    | IAccountMeta<string> = "auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg",
  TAccountTensorswapProgram extends string | IAccountMeta<string> = string,
  TAccountAuthRules extends string | IAccountMeta<string> = string,
  TAccountMarginAccount extends string | IAccountMeta<string> = string,
  TAccountTakerBroker extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountTswap extends string
        ? ReadonlyAccount<TAccountTswap>
        : TAccountTswap,
      TAccountFeeVault extends string
        ? WritableAccount<TAccountFeeVault>
        : TAccountFeeVault,
      TAccountNftMint extends string
        ? ReadonlyAccount<TAccountNftMint>
        : TAccountNftMint,
      TAccountNftBidderAcc extends string
        ? WritableAccount<TAccountNftBidderAcc>
        : TAccountNftBidderAcc,
      TAccountNftSellerAcc extends string
        ? WritableAccount<TAccountNftSellerAcc>
        : TAccountNftSellerAcc,
      TAccountNftTempAcc extends string
        ? WritableAccount<TAccountNftTempAcc>
        : TAccountNftTempAcc,
      TAccountNftMetadata extends string
        ? WritableAccount<TAccountNftMetadata>
        : TAccountNftMetadata,
      TAccountBidState extends string
        ? WritableAccount<TAccountBidState>
        : TAccountBidState,
      TAccountBidder extends string
        ? WritableAccount<TAccountBidder>
        : TAccountBidder,
      TAccountSeller extends string
        ? WritableSignerAccount<TAccountSeller> &
            IAccountSignerMeta<TAccountSeller>
        : TAccountSeller,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      TAccountAssociatedTokenProgram extends string
        ? ReadonlyAccount<TAccountAssociatedTokenProgram>
        : TAccountAssociatedTokenProgram,
      TAccountSystemProgram extends string
        ? ReadonlyAccount<TAccountSystemProgram>
        : TAccountSystemProgram,
      TAccountRent extends string
        ? ReadonlyAccount<TAccountRent>
        : TAccountRent,
      TAccountNftEdition extends string
        ? ReadonlyAccount<TAccountNftEdition>
        : TAccountNftEdition,
      TAccountSellerTokenRecord extends string
        ? WritableAccount<TAccountSellerTokenRecord>
        : TAccountSellerTokenRecord,
      TAccountBidderTokenRecord extends string
        ? WritableAccount<TAccountBidderTokenRecord>
        : TAccountBidderTokenRecord,
      TAccountTempTokenRecord extends string
        ? WritableAccount<TAccountTempTokenRecord>
        : TAccountTempTokenRecord,
      TAccountTokenMetadataProgram extends string
        ? ReadonlyAccount<TAccountTokenMetadataProgram>
        : TAccountTokenMetadataProgram,
      TAccountInstructions extends string
        ? ReadonlyAccount<TAccountInstructions>
        : TAccountInstructions,
      TAccountAuthorizationRulesProgram extends string
        ? ReadonlyAccount<TAccountAuthorizationRulesProgram>
        : TAccountAuthorizationRulesProgram,
      TAccountTensorswapProgram extends string
        ? ReadonlyAccount<TAccountTensorswapProgram>
        : TAccountTensorswapProgram,
      TAccountAuthRules extends string
        ? ReadonlyAccount<TAccountAuthRules>
        : TAccountAuthRules,
      TAccountMarginAccount extends string
        ? WritableAccount<TAccountMarginAccount>
        : TAccountMarginAccount,
      TAccountTakerBroker extends string
        ? WritableAccount<TAccountTakerBroker>
        : TAccountTakerBroker,
      ...TRemainingAccounts,
    ]
  >;

export type TakeBidInstructionData = {
  discriminator: ReadonlyUint8Array;
  lamports: bigint;
  rulesAccPresent: boolean;
  authorizationData: Option<AuthorizationDataLocal>;
  optionalRoyaltyPct: Option<number>;
};

export type TakeBidInstructionDataArgs = {
  lamports: number | bigint;
  rulesAccPresent: boolean;
  authorizationData: OptionOrNullable<AuthorizationDataLocalArgs>;
  optionalRoyaltyPct: OptionOrNullable<number>;
};

export function getTakeBidInstructionDataEncoder(): Encoder<TakeBidInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ["discriminator", fixEncoderSize(getBytesEncoder(), 8)],
      ["lamports", getU64Encoder()],
      ["rulesAccPresent", getBooleanEncoder()],
      [
        "authorizationData",
        getOptionEncoder(getAuthorizationDataLocalEncoder()),
      ],
      ["optionalRoyaltyPct", getOptionEncoder(getU16Encoder())],
    ]),
    (value) => ({ ...value, discriminator: TAKE_BID_DISCRIMINATOR }),
  );
}

export function getTakeBidInstructionDataDecoder(): Decoder<TakeBidInstructionData> {
  return getStructDecoder([
    ["discriminator", fixDecoderSize(getBytesDecoder(), 8)],
    ["lamports", getU64Decoder()],
    ["rulesAccPresent", getBooleanDecoder()],
    ["authorizationData", getOptionDecoder(getAuthorizationDataLocalDecoder())],
    ["optionalRoyaltyPct", getOptionDecoder(getU16Decoder())],
  ]);
}

export function getTakeBidInstructionDataCodec(): Codec<
  TakeBidInstructionDataArgs,
  TakeBidInstructionData
> {
  return combineCodec(
    getTakeBidInstructionDataEncoder(),
    getTakeBidInstructionDataDecoder(),
  );
}

export type TakeBidInput<
  TAccountTswap extends string = string,
  TAccountFeeVault extends string = string,
  TAccountNftMint extends string = string,
  TAccountNftBidderAcc extends string = string,
  TAccountNftSellerAcc extends string = string,
  TAccountNftTempAcc extends string = string,
  TAccountNftMetadata extends string = string,
  TAccountBidState extends string = string,
  TAccountBidder extends string = string,
  TAccountSeller extends string = string,
  TAccountTokenProgram extends string = string,
  TAccountAssociatedTokenProgram extends string = string,
  TAccountSystemProgram extends string = string,
  TAccountRent extends string = string,
  TAccountNftEdition extends string = string,
  TAccountSellerTokenRecord extends string = string,
  TAccountBidderTokenRecord extends string = string,
  TAccountTempTokenRecord extends string = string,
  TAccountTokenMetadataProgram extends string = string,
  TAccountInstructions extends string = string,
  TAccountAuthorizationRulesProgram extends string = string,
  TAccountTensorswapProgram extends string = string,
  TAccountAuthRules extends string = string,
  TAccountMarginAccount extends string = string,
  TAccountTakerBroker extends string = string,
> = {
  tswap: Address<TAccountTswap>;
  feeVault: Address<TAccountFeeVault>;
  nftMint: Address<TAccountNftMint>;
  nftBidderAcc: Address<TAccountNftBidderAcc>;
  nftSellerAcc: Address<TAccountNftSellerAcc>;
  nftTempAcc: Address<TAccountNftTempAcc>;
  nftMetadata: Address<TAccountNftMetadata>;
  bidState: Address<TAccountBidState>;
  bidder: Address<TAccountBidder>;
  seller: TransactionSigner<TAccountSeller>;
  tokenProgram?: Address<TAccountTokenProgram>;
  associatedTokenProgram: Address<TAccountAssociatedTokenProgram>;
  systemProgram?: Address<TAccountSystemProgram>;
  rent?: Address<TAccountRent>;
  nftEdition: Address<TAccountNftEdition>;
  sellerTokenRecord: Address<TAccountSellerTokenRecord>;
  bidderTokenRecord: Address<TAccountBidderTokenRecord>;
  tempTokenRecord: Address<TAccountTempTokenRecord>;
  tokenMetadataProgram?: Address<TAccountTokenMetadataProgram>;
  instructions: Address<TAccountInstructions>;
  authorizationRulesProgram?: Address<TAccountAuthorizationRulesProgram>;
  tensorswapProgram: Address<TAccountTensorswapProgram>;
  authRules: Address<TAccountAuthRules>;
  marginAccount: Address<TAccountMarginAccount>;
  takerBroker: Address<TAccountTakerBroker>;
  lamports: TakeBidInstructionDataArgs["lamports"];
  rulesAccPresent: TakeBidInstructionDataArgs["rulesAccPresent"];
  authorizationData: TakeBidInstructionDataArgs["authorizationData"];
  optionalRoyaltyPct: TakeBidInstructionDataArgs["optionalRoyaltyPct"];
};

export function getTakeBidInstruction<
  TAccountTswap extends string,
  TAccountFeeVault extends string,
  TAccountNftMint extends string,
  TAccountNftBidderAcc extends string,
  TAccountNftSellerAcc extends string,
  TAccountNftTempAcc extends string,
  TAccountNftMetadata extends string,
  TAccountBidState extends string,
  TAccountBidder extends string,
  TAccountSeller extends string,
  TAccountTokenProgram extends string,
  TAccountAssociatedTokenProgram extends string,
  TAccountSystemProgram extends string,
  TAccountRent extends string,
  TAccountNftEdition extends string,
  TAccountSellerTokenRecord extends string,
  TAccountBidderTokenRecord extends string,
  TAccountTempTokenRecord extends string,
  TAccountTokenMetadataProgram extends string,
  TAccountInstructions extends string,
  TAccountAuthorizationRulesProgram extends string,
  TAccountTensorswapProgram extends string,
  TAccountAuthRules extends string,
  TAccountMarginAccount extends string,
  TAccountTakerBroker extends string,
  TProgramAddress extends Address = typeof TENSOR_BID_PROGRAM_ADDRESS,
>(
  input: TakeBidInput<
    TAccountTswap,
    TAccountFeeVault,
    TAccountNftMint,
    TAccountNftBidderAcc,
    TAccountNftSellerAcc,
    TAccountNftTempAcc,
    TAccountNftMetadata,
    TAccountBidState,
    TAccountBidder,
    TAccountSeller,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountNftEdition,
    TAccountSellerTokenRecord,
    TAccountBidderTokenRecord,
    TAccountTempTokenRecord,
    TAccountTokenMetadataProgram,
    TAccountInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountTensorswapProgram,
    TAccountAuthRules,
    TAccountMarginAccount,
    TAccountTakerBroker
  >,
  config?: { programAddress?: TProgramAddress },
): TakeBidInstruction<
  TProgramAddress,
  TAccountTswap,
  TAccountFeeVault,
  TAccountNftMint,
  TAccountNftBidderAcc,
  TAccountNftSellerAcc,
  TAccountNftTempAcc,
  TAccountNftMetadata,
  TAccountBidState,
  TAccountBidder,
  TAccountSeller,
  TAccountTokenProgram,
  TAccountAssociatedTokenProgram,
  TAccountSystemProgram,
  TAccountRent,
  TAccountNftEdition,
  TAccountSellerTokenRecord,
  TAccountBidderTokenRecord,
  TAccountTempTokenRecord,
  TAccountTokenMetadataProgram,
  TAccountInstructions,
  TAccountAuthorizationRulesProgram,
  TAccountTensorswapProgram,
  TAccountAuthRules,
  TAccountMarginAccount,
  TAccountTakerBroker
> {
  // Program address.
  const programAddress = config?.programAddress ?? TENSOR_BID_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    tswap: { value: input.tswap ?? null, isWritable: false },
    feeVault: { value: input.feeVault ?? null, isWritable: true },
    nftMint: { value: input.nftMint ?? null, isWritable: false },
    nftBidderAcc: { value: input.nftBidderAcc ?? null, isWritable: true },
    nftSellerAcc: { value: input.nftSellerAcc ?? null, isWritable: true },
    nftTempAcc: { value: input.nftTempAcc ?? null, isWritable: true },
    nftMetadata: { value: input.nftMetadata ?? null, isWritable: true },
    bidState: { value: input.bidState ?? null, isWritable: true },
    bidder: { value: input.bidder ?? null, isWritable: true },
    seller: { value: input.seller ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
    associatedTokenProgram: {
      value: input.associatedTokenProgram ?? null,
      isWritable: false,
    },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false },
    nftEdition: { value: input.nftEdition ?? null, isWritable: false },
    sellerTokenRecord: {
      value: input.sellerTokenRecord ?? null,
      isWritable: true,
    },
    bidderTokenRecord: {
      value: input.bidderTokenRecord ?? null,
      isWritable: true,
    },
    tempTokenRecord: { value: input.tempTokenRecord ?? null, isWritable: true },
    tokenMetadataProgram: {
      value: input.tokenMetadataProgram ?? null,
      isWritable: false,
    },
    instructions: { value: input.instructions ?? null, isWritable: false },
    authorizationRulesProgram: {
      value: input.authorizationRulesProgram ?? null,
      isWritable: false,
    },
    tensorswapProgram: {
      value: input.tensorswapProgram ?? null,
      isWritable: false,
    },
    authRules: { value: input.authRules ?? null, isWritable: false },
    marginAccount: { value: input.marginAccount ?? null, isWritable: true },
    takerBroker: { value: input.takerBroker ?? null, isWritable: true },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" as Address<"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA">;
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value =
      "11111111111111111111111111111111" as Address<"11111111111111111111111111111111">;
  }
  if (!accounts.rent.value) {
    accounts.rent.value =
      "SysvarRent111111111111111111111111111111111" as Address<"SysvarRent111111111111111111111111111111111">;
  }
  if (!accounts.tokenMetadataProgram.value) {
    accounts.tokenMetadataProgram.value =
      "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s" as Address<"metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s">;
  }
  if (!accounts.authorizationRulesProgram.value) {
    accounts.authorizationRulesProgram.value =
      "auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg" as Address<"auth9SigNpDKz4sJJ1DfCTuZrZNSAgh9sFD3rboVmgg">;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, "programId");
  const instruction = {
    accounts: [
      getAccountMeta(accounts.tswap),
      getAccountMeta(accounts.feeVault),
      getAccountMeta(accounts.nftMint),
      getAccountMeta(accounts.nftBidderAcc),
      getAccountMeta(accounts.nftSellerAcc),
      getAccountMeta(accounts.nftTempAcc),
      getAccountMeta(accounts.nftMetadata),
      getAccountMeta(accounts.bidState),
      getAccountMeta(accounts.bidder),
      getAccountMeta(accounts.seller),
      getAccountMeta(accounts.tokenProgram),
      getAccountMeta(accounts.associatedTokenProgram),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.rent),
      getAccountMeta(accounts.nftEdition),
      getAccountMeta(accounts.sellerTokenRecord),
      getAccountMeta(accounts.bidderTokenRecord),
      getAccountMeta(accounts.tempTokenRecord),
      getAccountMeta(accounts.tokenMetadataProgram),
      getAccountMeta(accounts.instructions),
      getAccountMeta(accounts.authorizationRulesProgram),
      getAccountMeta(accounts.tensorswapProgram),
      getAccountMeta(accounts.authRules),
      getAccountMeta(accounts.marginAccount),
      getAccountMeta(accounts.takerBroker),
    ],
    programAddress,
    data: getTakeBidInstructionDataEncoder().encode(
      args as TakeBidInstructionDataArgs,
    ),
  } as TakeBidInstruction<
    TProgramAddress,
    TAccountTswap,
    TAccountFeeVault,
    TAccountNftMint,
    TAccountNftBidderAcc,
    TAccountNftSellerAcc,
    TAccountNftTempAcc,
    TAccountNftMetadata,
    TAccountBidState,
    TAccountBidder,
    TAccountSeller,
    TAccountTokenProgram,
    TAccountAssociatedTokenProgram,
    TAccountSystemProgram,
    TAccountRent,
    TAccountNftEdition,
    TAccountSellerTokenRecord,
    TAccountBidderTokenRecord,
    TAccountTempTokenRecord,
    TAccountTokenMetadataProgram,
    TAccountInstructions,
    TAccountAuthorizationRulesProgram,
    TAccountTensorswapProgram,
    TAccountAuthRules,
    TAccountMarginAccount,
    TAccountTakerBroker
  >;

  return instruction;
}

export type ParsedTakeBidInstruction<
  TProgram extends string = typeof TENSOR_BID_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    tswap: TAccountMetas[0];
    feeVault: TAccountMetas[1];
    nftMint: TAccountMetas[2];
    nftBidderAcc: TAccountMetas[3];
    nftSellerAcc: TAccountMetas[4];
    nftTempAcc: TAccountMetas[5];
    nftMetadata: TAccountMetas[6];
    bidState: TAccountMetas[7];
    bidder: TAccountMetas[8];
    seller: TAccountMetas[9];
    tokenProgram: TAccountMetas[10];
    associatedTokenProgram: TAccountMetas[11];
    systemProgram: TAccountMetas[12];
    rent: TAccountMetas[13];
    nftEdition: TAccountMetas[14];
    sellerTokenRecord: TAccountMetas[15];
    bidderTokenRecord: TAccountMetas[16];
    tempTokenRecord: TAccountMetas[17];
    tokenMetadataProgram: TAccountMetas[18];
    instructions: TAccountMetas[19];
    authorizationRulesProgram: TAccountMetas[20];
    tensorswapProgram: TAccountMetas[21];
    authRules: TAccountMetas[22];
    marginAccount: TAccountMetas[23];
    takerBroker: TAccountMetas[24];
  };
  data: TakeBidInstructionData;
};

export function parseTakeBidInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>,
): ParsedTakeBidInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 25) {
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
      nftMint: getNextAccount(),
      nftBidderAcc: getNextAccount(),
      nftSellerAcc: getNextAccount(),
      nftTempAcc: getNextAccount(),
      nftMetadata: getNextAccount(),
      bidState: getNextAccount(),
      bidder: getNextAccount(),
      seller: getNextAccount(),
      tokenProgram: getNextAccount(),
      associatedTokenProgram: getNextAccount(),
      systemProgram: getNextAccount(),
      rent: getNextAccount(),
      nftEdition: getNextAccount(),
      sellerTokenRecord: getNextAccount(),
      bidderTokenRecord: getNextAccount(),
      tempTokenRecord: getNextAccount(),
      tokenMetadataProgram: getNextAccount(),
      instructions: getNextAccount(),
      authorizationRulesProgram: getNextAccount(),
      tensorswapProgram: getNextAccount(),
      authRules: getNextAccount(),
      marginAccount: getNextAccount(),
      takerBroker: getNextAccount(),
    },
    data: getTakeBidInstructionDataDecoder().decode(instruction.data),
  };
}
