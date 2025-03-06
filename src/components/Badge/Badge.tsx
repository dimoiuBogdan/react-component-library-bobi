import { Badge as PrimeBadge } from "primereact/badge";
import type { ComponentProps, FC } from "react";

export type BadgeProps = ComponentProps<typeof PrimeBadge>;

const Badge: FC<BadgeProps> = (props) => {
  return <PrimeBadge {...props}></PrimeBadge>;
};

export default Badge;
