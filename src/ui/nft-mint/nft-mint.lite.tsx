import {
  useStore,
  Show,
  useDefaultProps,
  useMetadata,
} from "@builder.io/mitosis";
import BigNumber from "bignumber.js";
import Stack from "../stack";
import Text from "../text";
import Button from "../button";
import Icon from "../icon";
import Box from "../box";
import { store } from "../../models/store";
import { toNumber } from "../../helpers/number";

import * as styles from "./nft-mint.css";
import type { NftMintProps } from "./nft-mint.types";

useMetadata({
  isAttachedToShadowDom: true,
  scaffolds: ["number-field"],
  rsc: {
    componentType: "client",
  },
});

useDefaultProps<Partial<NftMintProps>>({
  mintButtonLabel: "Mint",
  mintButtonDisabledLabel: "Insufficient balance",
  tokenName: "STAR",
});

export default function NftMint(props: NftMintProps) {
  const state = useStore<{
    amount: number;
    handleAmountChange: (value: number) => void;
    isControlled: () => boolean;
  }>({
    amount: 0,
    isControlled() {
      return typeof props.amount !== "undefined";
    },
    handleAmountChange(value: number) {
      props?.onChange?.(value);

      // Update internal amount if uncontrolled
      if (!state.isControlled()) {
        state.amount = value;
      }
    },
  });

  return (
    <Stack className={props.className} direction="vertical">
      {/* Title */}
      <Text
        fontSize={{
          mobile: "$lg",
          tablet: "$xl",
          desktop: "$xl",
        }}
        fontWeight="$semibold"
        attributes={{
          marginBottom: {
            mobile: "$7",
            tablet: "$10",
            desktop: "$12",
          },
        }}
      >
        {props.title}
      </Text>

      {/* ==== Nft details Mobile */}
      <Stack
        direction="vertical"
        space="$2"
        attributes={{
          display: {
            mobile: "flex",
            tablet: "none",
            desktop: "none",
          },
        }}
      >
        {/* Main image */}
        <Box
          flex="1"
          position="relative"
          borderRadius="$lg"
          borderWidth="$sm"
          borderColor="$divider"
          borderStyle="solid"
        >
          {/* Main NFT image */}
          <Box
            as="img"
            width="$full"
            maxHeight="$27"
            borderRadius="$md"
            backgroundColor="$cardBg"
            style={{
              objectFit: "contain",
            }}
            attributes={{
              alt: props.description,
              src: props.imgSrc,
            }}
          />

          <Text
            color="$cardBg"
            fontSize="$xs"
            fontWeight="$semibold"
            attributes={{
              position: "absolute",
              top: "$4",
              right: "$4",
              width: "fit-content",
              backgroundColor: "$text",
              px: "$4",
              py: "$2",
              borderRadius: "40px",
            }}
          >
            {props?.tag}
          </Text>
        </Box>

        {/* Details */}
        <Box flex={1}>
          <Stack direction="vertical">
            <Text fontSize="$md" fontWeight="$semibold">
              {props?.name}
            </Text>

            <Text fontSize="$sm" color="$textSecondary">
              {props?.description}
            </Text>

            <Stack attributes={{ pt: "$4", justifyContent: "space-between" }}>
              <Stack direction="vertical">
                <Text
                  fontSize="$xs"
                  color="$textSecondary"
                  fontWeight="$semibold"
                >
                  Quantity
                </Text>
                <Text fontSize="$sm" fontWeight="$semibold">
                  {props?.quantity}
                </Text>
              </Stack>
              <Stack direction="vertical">
                <Text
                  fontSize="$xs"
                  color="$textSecondary"
                  fontWeight="$semibold"
                >
                  Royalties
                </Text>
                <Text fontSize="$sm" fontWeight="$semibold">
                  {new BigNumber(props?.royalties).decimalPlaces(2).toString()}%
                </Text>
              </Stack>
              <Stack direction="vertical">
                <Text
                  fontSize="$xs"
                  color="$textSecondary"
                  fontWeight="$semibold"
                >
                  Minted
                </Text>
                <Text fontSize="$sm" fontWeight="$semibold">
                  {new BigNumber(props?.minted).decimalPlaces(2).toString()}%
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* ==== Nft details Desktop */}
      <Stack
        space="$10"
        attributes={{
          marginBottom: "$10",
          display: {
            mobile: "none",
            tablet: "flex",
            desktop: "flex",
          },
        }}
      >
        {/* Main NFT image */}
        <Box flex="1">
          <Box
            as="img"
            width="$full"
            height="auto"
            borderRadius="$md"
            attributes={{
              src: props.imgSrc,
            }}
          />
        </Box>

        {/* Details */}
        <Box flex={1}>
          <Stack direction="vertical">
            <Text
              color="$cardBg"
              fontSize="$xs"
              fontWeight="$semibold"
              attributes={{
                width: "fit-content",
                backgroundColor: "$text",
                px: "$4",
                py: "$2",
                borderRadius: "40px",
              }}
            >
              {props?.tag}
            </Text>
            <Text
              fontSize="$4xl"
              fontWeight="$semibold"
              attributes={{ marginTop: "$6", marginBottom: "$3" }}
            >
              {props?.name}
            </Text>
            <Text color="$textSecondary">{props?.description}</Text>
            <Stack attributes={{ my: "$9", justifyContent: "space-between" }}>
              <Stack direction="vertical">
                <Text color="$textSecondary" fontWeight="$semibold">
                  Quantity
                </Text>
                <Text fontSize="$4xl" fontWeight="$semibold">
                  {props?.quantity}
                </Text>
              </Stack>
              <Stack direction="vertical">
                <Text color="$textSecondary" fontWeight="$semibold">
                  Royalties
                </Text>
                <Text fontSize="$4xl" fontWeight="$semibold">
                  {new BigNumber(props?.royalties).decimalPlaces(2).toString()}%
                </Text>
              </Stack>
              <Stack direction="vertical">
                <Text color="$textSecondary" fontWeight="$semibold">
                  Minted
                </Text>
                <Text fontSize="$4xl" fontWeight="$semibold">
                  {new BigNumber(props?.minted).decimalPlaces(2).toString()}%
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Actions */}
      <Box
        display={{
          mobile: "block",
          tablet: "grid",
          desktop: "grid",
        }}
        paddingTop={{
          mobile: "$4",
          tablet: "$0",
          desktop: "$0",
        }}
        gridTemplateRows="0.5fr, 1fr"
        gridTemplateColumns={{
          mobile: "auto",
          tablet: "repeat(2, 1fr)",
          desktop: "repeat(2, 1fr)",
        }}
        gridTemplateAreas={{
          mobile: "none",
          tablet: `
            "a c"
            "b d"
          `,
          desktop: `
            "a c"
            "b d"
          `,
        }}
        columnGap="$10"
      >
        {/* gridArea a: labels */}
        <Stack
          attributes={{
            gridArea: "a",
            marginBottom: {
              mobile: "$1",
              tablet: "$6",
              desktop: "$6",
            },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box as="label" attributes={{ htmlFor: "nft-mint-amount" }}>
            <Text
              as="span"
              color="$textSecondary"
              fontSize={{
                mobile: "$2xs",
                tablet: "$lg",
                desktop: "$lg",
              }}
              fontWeight="$semibold"
            >
              Select amount
            </Text>
          </Box>
          <Stack
            attributes={{
              alignItems: "center",
            }}
          >
            <Text
              color="$textSecondary"
              fontSize={{
                mobile: "$2xs",
                tablet: "$sm",
                desktop: "$sm",
              }}
              attributes={{ marginRight: "$2" }}
            >
              Available
            </Text>
            <Text
              color="$textSecondary"
              fontSize={{
                mobile: "$2xs",
                tablet: "$sm",
                desktop: "$sm",
              }}
              fontWeight="$semibold"
            >
              {`${props?.available} ${props.tokenName}`}
            </Text>
          </Stack>
        </Stack>

        {/* amount input (mobile) */}
        <Box
          position="relative"
          display={{
            mobile: "block",
            tablet: "none",
            desktop: "none",
          }}
        >
          {/* @ts-expect-error */}
          <ScaffoldNumberField
            size="sm"
            value={state.isControlled() ? props.amount : undefined}
            defaultValue={
              state.isControlled() ? props.amount : props.defaultAmount ?? 0
            }
            minValue={0}
            maxValue={toNumber(props.limited)}
            onInput={(event) => props?.onInput?.(event)}
            onChange={(value) => state.handleAmountChange(value)}
            inputClassName={styles.baseInput}
            formatOptions={{
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }}
          />

          <Stack
            space="$4"
            className={styles.starContainer}
            attributes={{
              position: "absolute",
              alignItems: "center",
              right: "$6",
            }}
          >
            <Icon
              name="stargazePixel"
              size="$sm"
              attributes={{
                borderRadius: "$full",
                backgroundColor: "$black",
              }}
            />

            <Text fontSize="$sm" fontWeight="$semibold">{`${
              props.tokenAmount ?? 0
            } ${props.tokenName}`}</Text>

            <Show when={!!props.notionalAmount}>
              <Text color="$textPlaceholder">{`≈ $${props.notionalAmount}`}</Text>
            </Show>
          </Stack>
        </Box>

        {/* gridArea b: amount input (desktop) */}
        <Box
          position="relative"
          gridArea="b"
          display={{
            mobile: "none",
            tablet: "block",
            desktop: "block",
          }}
        >
          {/* @ts-expect-error */}
          <ScaffoldNumberField
            size="lg"
            value={state.isControlled() ? props.amount : undefined}
            defaultValue={
              state.isControlled() ? props.amount : props.defaultAmount ?? 0
            }
            minValue={0}
            maxValue={toNumber(props.limited)}
            onInput={(event) => props?.onInput?.(event)}
            onChange={(value) => state.handleAmountChange(value)}
            inputClassName={styles.baseInput}
            formatOptions={{
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }}
          />

          <Stack
            className={styles.starContainer}
            attributes={{
              position: "absolute",
              alignItems: "center",
              right: "$6",
            }}
          >
            <Icon
              name="stargazePixel"
              size="$5xl"
              attributes={{
                borderRadius: "$full",
                backgroundColor: "$black",
              }}
            />
            <Text
              fontWeight="$semibold"
              attributes={{
                marginLeft: "$6",
                marginRight: "$4",
              }}
            >{`${props.tokenAmount ?? 0} ${props.tokenName}`}</Text>

            <Show when={!!props.notionalAmount}>
              <Text color="$textSecondary">{`≈ $${props.notionalAmount}`}</Text>
            </Show>
          </Stack>
        </Box>

        {/* gridArea c: labels top of primary button */}
        <Stack
          attributes={{
            gridArea: "c",
            paddingTop: {
              mobile: "$4",
              tablet: "$0",
              desktop: "$0",
            },
            marginBottom: {
              mobile: "$1",
              tablet: "$6",
              desktop: "$6",
            },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack
            attributes={{
              alignItems: "center",
              paddingBottom: "$1",
            }}
          >
            <Text
              color="$textSecondary"
              fontSize={{
                mobile: "$2xs",
                tablet: "$sm",
                desktop: "$sm",
              }}
              attributes={{ marginRight: "$2" }}
            >
              Price:
            </Text>

            <Text
              color="$textSecondary"
              fontSize={{
                mobile: "$2xs",
                tablet: "$sm",
                desktop: "$sm",
              }}
              fontWeight="$semibold"
            >
              {`${store.getState()?.formatNumber?.({
                value: props?.priceDisplayAmount,
              })} ${props.tokenName}`}
            </Text>
          </Stack>
          <Text
            fontSize={{
              mobile: "$2xs",
              tablet: "$sm",
              desktop: "$sm",
            }}
            color="$textSecondary"
          >
            {`Limited to ${store
              .getState()
              ?.formatNumber?.({ value: props?.limited })} tokens`}
          </Text>
        </Stack>

        {/* primary button (mobile) */}
        <Box
          display={{
            mobile: "block",
            tablet: "none",
            desktop: "none",
          }}
        >
          <Button
            size="md"
            intent="tertiary"
            fluidWidth
            disabled={props.isMintButtonDisabled}
            onClick={() => props?.onMint?.()}
            isLoading={props.isMintLoading}
          >
            {`${
              props.isMintButtonDisabled
                ? props.mintButtonDisabledLabel
                : props.mintButtonLabel
            }`}
          </Button>
        </Box>

        {/* gridArea d: primary button */}
        <Box
          gridArea="d"
          display={{
            mobile: "none",
            tablet: "block",
            desktop: "block",
          }}
        >
          <Button
            size="lg"
            intent="tertiary"
            fluidWidth
            disabled={props.isMintButtonDisabled}
            onClick={() => props?.onMint?.()}
            isLoading={props.isMintLoading}
          >
            {`${
              props.isMintButtonDisabled
                ? props.mintButtonDisabledLabel
                : props.mintButtonLabel
            }`}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
