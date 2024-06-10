'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useState } from 'react';
import { createBoard } from '@/lib/actions/boards.actions';

export const BoardCreator = () => {

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const onOpenChange = (open: boolean) => {
    if (!open) {
      setName('');
    }
  };

  const createNewBoard = async () => {
    await createBoard(name);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>+ Create New Board</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Board</DialogTitle>
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
          <Button onClick={() => setOpen(false)} variant="secondary">
            Close
          </Button>
          <Button type="submit" onClick={createNewBoard} disabled={name.length < 3}>Save </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  );
};
