import { Url } from 'next/dist/shared/lib/router/router';
import { TooltipWrapper } from '@/components/ui/tooltip-wrapper';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export const NavItem = ({
  href,
  selected,
  children,
  tooltipText,
  onClick
}: {
  href?: Url;
  selected: boolean;
  children: string;
  tooltipText?: string;
  onClick?: () => void;
}) => (
  <li
    className="flex"
    {...(onClick ? { onClick } : {})}
  >
    <TooltipWrapper text={tooltipText}>
      <Link
        href={href ?? '#'}
        className={`py-2 px-2 capitalize rounded-t-lg ${selected ? 'selected-item' : 'hover-item'}`}
      >
        {children}
      </Link>
    </TooltipWrapper>
    <Separator orientation="vertical" />
  </li>
);
