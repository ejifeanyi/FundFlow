'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ModalTrigger from './ModalTrigger';

const Navbar = () => {
	const { setTheme } = useTheme();
	return (
		<div className="px-5 sm:px-6 py-4 sm:py-5 bg-background flex items-center">
			{/* logo */}
			<p className="font-bold text-2xl">FundFlow</p>

			{/* dark-mode, button & profile pic */}
			<div className="flex items-center justify-end flex-grow space-x-4 sm:space-x-6">
				<div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="icon">
								<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
								<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
								<span className="sr-only">Toggle theme</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={() => setTheme('light')}>
								Light
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('dark')}>
								Dark
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setTheme('system')}>
								System
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				{/* todo: add onclick to button to create modal for adding new board*/}

				<ModalTrigger />

				{/* todo: add fuctionality to update profile pic */}
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
};

export default Navbar;
