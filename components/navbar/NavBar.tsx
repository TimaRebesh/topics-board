'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { IBoard } from '@/lib/database/models/board.model';
import { NavItem } from './NavItem';
import { Separator } from '@/components/ui/separator';
import { TopicCreator } from './TopicCreator';

export const NavBar = ({ board }: { board: IBoard; }) => {

  const pathname = usePathname();
  const { boardId, topicId } = useParams();
  const router = useRouter();

  // const selectTable = () => {
  //   const boardTableId = board.elements.find(
  //     (el) => el.type === BoardElement.TABLE
  //   )?.id;
  //   router.push(`/${id}/table/${boardTableId}`);
  // };

  // useEffect(() => {
  //   if (pathname === `/${boardId}`) {
  //     // selectTable();
  //   }
  // }, [pathname]);

  return (
    <div className="rounded-tl-lg mb-2">
      <ul className="flex cursor-pointer text-sm">
        {board.topics.map((topic) => (
          <NavItem
            key={topic._id}
            href={{
              pathname: `/${board._id}/${topic._id}`,
            }}
            selected={topicId === topic._id}
          >
            {topic.name}
          </NavItem>
        ))}
        <TopicCreator boardId={board._id} />
      </ul>
      <Separator />
    </div>
  );
};
