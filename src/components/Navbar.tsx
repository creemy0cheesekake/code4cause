import React from "react";
import { GraduationCap, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
	const isMobile = useIsMobile();

	return (
		<div className="bg-white border-b border-border sticky top-0 z-10">
			<div className="container mx-auto px-4 py-3 flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<GraduationCap className="h-6 w-6 text-edu-blue" />
					<h1 className="text-xl font-bold text-edu-blue">Pathway Partner</h1>
				</div>

				{isMobile ? (
					<div className="md:hidden">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger>
										<Menu className="h-5 w-5" />
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className="w-56 p-2 bg-white">
											<NavigationMenuLink asChild>
												<a
													href="#"
													className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
													About
												</a>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<a
													href="#"
													className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
													Resources
												</a>
											</NavigationMenuLink>
											<NavigationMenuLink asChild>
												<a
													href="#"
													className="block px-4 py-2 text-sm hover:bg-muted rounded-md">
													Contact
												</a>
											</NavigationMenuLink>
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				) : (
					<nav className="hidden md:flex items-center space-x-6">
						<a
							href="#"
							className="text-sm font-medium text-foreground hover:text-edu-blue">
							About
						</a>
						<a
							href="#"
							className="text-sm font-medium text-foreground hover:text-edu-blue">
							Resources
						</a>
						<a
							href="#"
							className="text-sm font-medium text-foreground hover:text-edu-blue">
							Contact
						</a>
					</nav>
				)}
			</div>
		</div>
	);
};

export default Navbar;
