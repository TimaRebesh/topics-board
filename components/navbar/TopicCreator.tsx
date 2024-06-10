'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useState } from 'react';
import { NavItem } from './NavItem';
import { createTopic } from '@/lib/actions/topics.actions';

export const TopicCreator = ({ boardId }: { boardId: string; }) => {

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const close = () => {
    setName('');
    setOpen(false);
  };

  const createNewTopic = async () => {
    await createTopic(name, boardId);
    close();
  };

  return (
    <Dialog open={open}>
      <DialogTrigger>
        <NavItem
          key={'creator'}
          onClick={() => setOpen(true)}
          selected={false}
          tooltipText="create new topic"
        >
          +
        </NavItem>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Topic</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 justify-start items-start">
          <div className="w-full">
            <Label>Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="provide a name"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button onClick={createNewTopic} disabled={name.length < 3}>Save </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
