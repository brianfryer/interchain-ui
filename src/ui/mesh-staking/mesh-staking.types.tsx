import type {
  BaseComponentProps,
  GridColumn,
} from "../../models/components.model";
import type { BoxProps } from "../box/box.types";
import type { ButtonProps } from "../button/button.types";

export interface MeshStakingProps extends BaseComponentProps {}

type BaseButtonProps = Omit<
  ButtonProps,
  | "variant"
  | "intent"
  | "size"
  | "iconSize"
  | "leftIcon"
  | "rightIcon"
  | "isLoading"
  | "spinnerPlacement"
>;

export interface MeshButtonProps extends BaseButtonProps {
  color?: BoxProps["color"];
  width?: BoxProps["width"];
  height?: BoxProps["height"];
  px?: BoxProps["px"];
  py?: BoxProps["py"];
  borderRadius?: BoxProps["borderRadius"];
  borderTopLeftRadius?: BoxProps["borderTopLeftRadius"];
  borderTopRightRadius?: BoxProps["borderTopRightRadius"];
  borderBottomRightRadius?: BoxProps["borderBottomRightRadius"];
  borderBottomLeftRadius?: BoxProps["borderBottomLeftRadius"];
  variant?: "text" | "solid";
  colorScheme?: "primary" | "secondary";
}

export interface MeshTagButtonProps extends BaseButtonProps {}

export interface MeshTabProps extends BaseButtonProps {
  isActive?: boolean;
  onClick?: (event?: any) => void;
}

export interface MeshStakingSliderInfoProps extends BaseComponentProps {
  tokenName: string;
  tokenSymbol: string;
  tokenImgSrc: string;
  tokenAPR: string;
  isActive?: boolean;
}

export interface MeshFooterInfoItemProps extends BaseComponentProps {
  title: string;
  description: string;
  subDescription?: string;
}

export interface MeshValidatorSquadEmptyProps extends BaseComponentProps {
  thumbnailSrcs: string[];
  count: number;
  onDecrease?: () => void;
  onIncrease?: () => void;
  onRandomize?: () => void;
  attributes?: BoxProps;
}

// ==== Mesh table
export interface MeshTableProps extends BaseComponentProps {
  columns?: GridColumn[];
  data: Array<{ id: string } & object>;
  pinnedIds?: string[];
  maxPinnedRows?: number;
  // ==== Style props
  borderless?: boolean;
  rowHeight?: BoxProps["height"];
  containerProps?: BoxProps;
  tableProps?: BoxProps;
}

export interface MeshTableHeaderActionProps extends BaseComponentProps {
  type?: "stake" | "unstake";
  stakeLabel?: string;
  unstakeLabel?: string;
  tokenName: string;
  tokenImgSrc: string;
  tokenAmount: string;
  onClick?: () => void;
}

// ==== Mesh table cells
export interface MeshTableChainCellProps extends BaseComponentProps {
  size?: "sm" | "md";
  name: string;
  imgSrc: string;
}

export interface MeshTableAPRCellProps extends BaseComponentProps {
  value: string;
}

export interface MeshTableValidatorsCellProps extends BaseComponentProps {
  validators: Array<{
    name: string;
    imgSrc: string;
  }>;
}
