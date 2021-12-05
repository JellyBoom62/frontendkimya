import { isLoggedUser } from './serveraxios'
import { Flex, Spinner } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function IsLogin({ children }) {
	const [userData, setUserData] = useState("NoAuth")

	useEffect(() => {
		isLoggedUser(setUserData)
	}, [])

	const router = useRouter()

	if (userData == "NoAuth") {
		return (
			<Flex height="100vh" alignItems="center" justifyContent="center">
				<Spinner size="xl" />
			</Flex>
		)
	}
	else if (userData) {
		router.push('/home')
		return (
			<>
			</>
		)
	} else {
		return (
			<div>
				{children}
			</div>
		)
	}
}