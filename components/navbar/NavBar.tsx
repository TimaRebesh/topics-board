'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { IBoard } from '@/lib/database/models/board.model';
import { BoardElement } from '@/constants/constants';
import { NavItem } from './NavItem';
import { Separator } from '@/components/ui/separator';

export const NavBar = ({ board }: { board: IBoard }) => {
  const pathname = usePathname();
  const { id, elementId } = useParams();
  const router = useRouter();

  const selectTable = () => {
    const boardTableId = board.elements.find(
      (el) => el.type === BoardElement.TABLE
    )?.id;
    router.push(`/${id}/table/${boardTableId}`);
  };

  useEffect(() => {
    if (pathname === `/${id}`) {
      selectTable();
    }
  }, [pathname]);

  return (
    <div className="rounded-tl-lg mb-2">
      <ul className="flex cursor-pointer text-sm">
        {board.elements.map((elem) => (
          <NavItem
            key={elem.id}
            href={{
              pathname: `/${board._id}/${elem.type}/${elem.id}`,
            }}
            selected={elementId === elem.id}
          >
            {elem.title}
          </NavItem>
        ))}
        <NavItem
          href={{ pathname: `/${board._id}/new-form` }}
          selected={pathname.includes('new-form')}
          tooltipText="create new form"
        >
          +
        </NavItem>
      </ul>

      <Separator />
    </div>
  );
};
