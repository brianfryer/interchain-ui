import { useMetadata, Show } from "@builder.io/mitosis";
import BigNumber from "bignumber.js";
import Stack from "../stack";
import Text from "../text";
import Skeleton from "../skeleton";

import type { StakingDelegateCardProps } from "./staking-delegate.types";

useMetadata({
  scaffolds: ["number-field"],
  rsc: {
    componentType: "client",
  },
});

export default function StakingDelegateCard(props: StakingDelegateCardProps) {
  return (
    <Stack
      direction="vertical"
      space="$4"
      key={props.label}
      attributes={{
        p: "$10",
        height: "104px",
        flexGrow: "1",
        borderRadius: "$lg",
        backgroundColor: "$cardBg",
        alignItems: "flex-start",
        ...props.attributes,
      }}
    >
      <Text fontSize="$md" fontWeight="$semibold" color="$text">
        {props.label}
      </Text>

      <Show when={!props.isLoading}>
        <Stack
          direction="horizontal"
          space="$2"
          attributes={{
            alignItems: "center",
          }}
        >
          <Text
            fontSize="$lg"
            fontWeight="$semibold"
            color={
              new BigNumber(props.tokenAmount).isEqualTo(0)
                ? "$textSecondary"
                : "$text"
            }
          >
            {props.tokenAmount}
          </Text>
          <Text fontSize="$md" fontWeight="$normal" color="$textSecondary">
            {props.tokenName}
          </Text>
        </Stack>
      </Show>

      <Show when={props.isLoading}>
        <Stack
          direction="horizontal"
          space="$2"
          attributes={{
            alignItems: "center",
          }}
        >
          <Skeleton borderRadius="$sm" width="$18" height="$10" />
          <Skeleton borderRadius="$sm" width="$16" height="$10" />
        </Stack>
      </Show>
    </Stack>
  );
}
