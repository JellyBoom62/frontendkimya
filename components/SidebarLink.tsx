import { Box, HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import Link from 'next/link'


type Props = {
	children?: string,
	icon?: any,
	link?: string,
	avatar?: any,
	rest?: any
}
export const SidebarLink = (props: Props) => {
	return (
		<>
			{props.link == undefined
				? <Box
					as="a"
					marginEnd="2"
					fontSize="sm"
					display="block"
					px="3"
					py="1"
					rounded="md"
					cursor="pointer"
					_hover={{
						color: 'white',
						bg: mode('blue.700', 'gray.600'),
					}}
					className="group"
					fontWeight="medium"
					transition="background .1s ease-out"
					onClick={props.rest}
				>
					<HStack>
						<Box
							opacity={props.avatar ? 1 : 0.5}
							_groupHover={{
								opacity: 1,
							}}
						>
							{props.avatar || props.icon}
						</Box>
						<Text>{props.children}</Text>
					</HStack>
				</Box>
				: <Link href={props.link}>
					<Box
						as="a"
						marginEnd="2"
						fontSize="sm"
						display="block"
						px="3"
						py="1"
						rounded="md"
						cursor="pointer"
						_hover={{
							color: 'white',
							bg: mode('blue.700', 'gray.600'),
						}}
						className="group"
						fontWeight="medium"
						transition="background .1s ease-out"
					>
						<HStack>
							<Box
								opacity={props.avatar ? 1 : 0.5}
								_groupHover={{
									opacity: 1,
								}}
							>
								{props.avatar || props.icon}
							</Box>
							<Text>{props.children}</Text>
						</HStack>
					</Box>
				</Link>
			}
		</>
	)
}
