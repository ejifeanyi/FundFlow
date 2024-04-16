import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from './ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const ModalTrigger = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button className="bg-primary text-sm text-primary-foreground rounded-lg px-4 py-3">
					Create board
				</button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>My FundFlow board is called...</SheetTitle>
					<SheetDescription>
						What do you want to call your board?
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center">
						<Input id="name" value="Personal project" className="col-span-4" />
					</div>
					<div className="mt-5">
						<h1 className="font-bold text-2xl">Now, let's start budgeting!</h1>
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<>
							<p className="mt-6 text-muted-foreground text-sm ">
								We'll create a board for you to start budgeting. You'll be able
								to add unlimited lists, cards, and get insights using AI!
							</p>
							<Button type="submit" className="flex items-center gap-2 mt-3">
								<Plus className="text-xs" /> Create board
							</Button>
						</>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default ModalTrigger;
