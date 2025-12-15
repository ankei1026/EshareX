'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/menu-toggle-icon';
import { useScroll } from '@/components/use-scroll';
import { router, usePage } from '@inertiajs/react';
import AppLogoIcon from './app-logo-icon';
import { SharedData } from '@/types';

export function Header() {

	const { auth } = usePage<SharedData>().props;

	const [open, setOpen] = React.useState(false);

	const scrolled = useScroll(10);

	const links = [
		{
			label: 'Features',
			href: '#',
		},
		{
			label: 'About',
			href: '#',
		},
		{
			label: 'Contact',
			href: '#',
		},
	];

	React.useEffect(() => {
		if (open) {
			// Disable scroll
			document.body.style.overflow = 'hidden';
		} else {
			// Re-enable scroll
			document.body.style.overflow = '';
		}

		// Cleanup when component unmounts (important for Next.js)
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
				{
					'bg-background/100 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow':
						scrolled && !open,
					'bg-background/100': open,
				},
			)}
		>
			<nav
				className={cn(
					'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
					{
						'md:px-2': scrolled,
					},
				)}
			>
				<WordmarkIcon className="font-bold text-lg" />
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link, i) => (
						<a key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
							{link.label}
						</a>
					))}
					{auth?.user ? (
						<Button variant="outline" className="w-full" onClick={() => router.get(`/${auth.user.role}/dashboard`)}>
							Dashboard
						</Button>
					) : (
						<Button variant="outline" className="w-full" onClick={() => router.get('/login')}>
							Log in
						</Button>
					)}
					<Button className="w-full">Get Started</Button>
				</div>
				<Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<div
				className={cn(
					'bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-4',
					)}
				>
					<div className="grid gap-y-2">
						{links.map((link) => (
							<a
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start',
								})}
								href={link.href}
							>
								{link.label}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-2">
						{auth?.user ? (<Button variant="outline" className="w-full" onClick={() => router.get(`/${auth.user.role}/dashboard`)}>
							Dashboard
						</Button>) : <Button variant="outline" className="w-full" onClick={() => router.get('/login')}>
							Log In
						</Button>}

						<Button className="w-full">Get Started</Button>
					</div>
				</div>
			</div>
		</header >
	);
}

export const WordmarkIcon = (props: React.ComponentProps<"div">) => {
	const { className, ...rest } = props;

	return (
		<div
			className={cn('flex items-center gap-2', className)}
			{...rest}
		>
			<AppLogoIcon className="h-8 w-8" />
			<h1 className='font-bold text-lg'>
				EshareX
			</h1>
		</div>
	);
};