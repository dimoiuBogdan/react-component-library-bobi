import { Badge as PrimeBadge } from "primereact/badge";
import type { ComponentProps, FC } from "react";

type BadgeProps = ComponentProps<typeof PrimeBadge>;

const Badge: FC<BadgeProps> = (props) => {
  return <PrimeBadge {...props}></PrimeBadge>;
};

export default Badge;
