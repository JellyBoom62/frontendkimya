import { Box, Flex, Heading, Stack, useColorModeValue as mode } from '@chakra-ui/react'
import router from 'next/router';
import { FiLogOut, FiSliders, FiHome, FiEdit, FiFileText } from "react-icons/fi";
import { MobileMenuButton } from '../components/MobileMenuButton'
import { NavBreadcrumb } from '../components/NavBreadcrumb.tsx'
import { ScrollArea } from '../components/ScrollArea'
import { SearchInput } from '../components/SearchInput'
import { SidebarLink } from '../components/SidebarLink.tsx'
import { useMobileMenuState } from '../components/useMobileMenuState'
import { UserInfo } from '../components/UserInfo'
import { logout } from './serveraxios';

export default function Layout(props) {
	const { isOpen, toggle } = useMobileMenuState()
	return (
		<Flex
			height="100vh"
			bg={mode('blue.800', 'gray.800')}
			overflow="hidden"
			sx={{
				'--sidebar-width': '13rem',
			}}
		>
			<Box
				as="nav"
				display="block"
				flex="1"
				width="var(--sidebar-width)"
				left="0"
				py="5"
				px="3"
				color="gray.200"
				position="fixed"
			>
				<Box fontSize="sm" lineHeight="tall">
					<Box
						as="a"
						href="#"
						p="3"
						display="block"
						transition="background 0.1s"
						rounded="xl"
						_hover={{
							bg: 'whiteAlpha.200',
						}}
						whiteSpace="nowrap"
					>
						<UserInfo name={props.name} email={props.username} />
					</Box>
					<ScrollArea pt="5" pb="6">
						<Stack pb="6">
							<SidebarLink link={"/home"} icon={<FiHome />}>Ana səhifə</SidebarLink>
							<SidebarLink link={"/quiz"} icon={<FiEdit />}>Sınaqlar</SidebarLink>
							<SidebarLink link={"/documents"} icon={<FiFileText />}>Fayllar</SidebarLink>
							<SidebarLink link={"/settings"} icon={<FiSliders />}>Profilim</SidebarLink>
						</Stack>
					</ScrollArea>
					<SidebarLink
						rest={() => {
							logout()
							router.push("/login")
						}}
						icon={<FiLogOut />}>Çıxış</SidebarLink>
				</Box>
			</Box>
			<Box
				flex="1"
				p={{
					base: '0',
					md: '6',
				}}
				marginStart={{
					md: 'var(--sidebar-width)',
				}}
				position="relative"
				left={isOpen ? 'var(--sidebar-width)' : '0'}
				transition="left 0.2s"
			>
				<Box
					maxW="2560px"
					bg={mode('white', 'gray.700')}
					height="100%"
					pb="6"
					rounded={{
						md: 'lg',
					}}
				>
					<Flex direction="column" height="full">
						<Flex w="full" py="4" justify="space-between" align="center" px="10">
							<Flex align="center" minH="8">
								<MobileMenuButton onClick={toggle} isOpen={isOpen} />
								<NavBreadcrumb arr={props.breadcumb} />
							</Flex>
							<SearchInput />
						</Flex>
						<Flex direction="column" flex="1" overflow="auto" px="10" pt="8">
							<Heading size="md" fontWeight="extrabold" mb="6">
								{props.head}
							</Heading>
							<Box flex="1" rounded="xl">
								{props.children}
							</Box>
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Flex>
	)
}
