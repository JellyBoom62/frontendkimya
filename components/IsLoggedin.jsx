import { isLoggedUser } from './serveraxios'
import { Flex, Spinner } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Layout from './layout';

export default function IsLoggedIn(props) {
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
	else if (!userData) {
		router.push('/login')
		return (
			<>
			</>
		)
	} else {
		return (
			<Layout breadcumb={props.breadcumb} head={props.head} name={`${userData.name} ${userData.surname}`} username={userData.username} >
				{props.children}
			</Layout>
		)
	}
}
