import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { HiChevronRight } from 'react-icons/hi'

export const NavBreadcrumb = (props: { arr: string[] }) => (
	<Breadcrumb
		fontSize="sm"
		separator={<Box as={HiChevronRight} color="gray.400" fontSize="md" top="2px" pos="relative" />}
	>
		<BreadcrumbItem color="inherit">
			<BreadcrumbLink>AlmazKimya</BreadcrumbLink>
		</BreadcrumbItem>
		{props.arr.map((item, index) => {
			return (
				<BreadcrumbItem key={index} color="inherit">
					<BreadcrumbLink>{item}</BreadcrumbLink>
				</BreadcrumbItem>
			)
		})}
	</Breadcrumb>
)
