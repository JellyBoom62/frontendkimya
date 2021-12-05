import { useState, useEffect } from 'react'
import {
	Flex,
	Box,
	Text,
	Badge,
	Spinner,
} from '@chakra-ui/react'

import { FcBiomass } from "react-icons/fc";
import { FiChevronRight } from "react-icons/fi";
import { fetchTestsName } from "../components/serveraxios"
import { Link } from '@geist-ui/react';
import moment from 'moment';

const QuizList = () => {
	const [quizes, setQuizes] = useState();

	useEffect(() => {
		fetchTestsName(setQuizes)
	}, [])

	if (quizes == undefined) {
		return (
			<Flex w="100%" h="100vh" justifyContent="center" alignItems="center">
				<Spinner size="xl"></Spinner>
			</Flex>
		)
	} else {
		return (
			<Box w="100%" pt="15px" pb="5px" px="10px" borderRadius="6px" bgColor="gray.800">
				<Flex direction="row" alignItems="center" mb="20px">
					<FiChevronRight fontSize="20px" color="#6d6d6d" />
					<Box mr="5px"></Box>
					<FcBiomass fontSize="20px" />
					<Text fontSize="14px" ml="5px" fontWeight="semibold">Testlər</Text>
				</Flex>
				{quizes.map((item, index) => {
					const date = new Date(item.time)
					const formattedDate = moment(date).format('HH:mm:ss')
					return (
						<Link w="100%" href={`quiz/${item.testID}`} key={index}>
							<Flex direction={["column", "row"]} transition="0.1s" shadow="lg"
								alignItems={['', 'center']}
								justifyContent="space-between"
								w="100%" py="7px"
								px={["10px", "20px"]}
								bgColor="gray.700"
								borderLeftWidth="2px"
								borderLeftColor="green.400"
								borderRadius="4px"
								mb="10px"
								_hover={{
									cursor: 'pointer',
									bgColor: "gray.600"
								}}
							>
								<Box w="40%" fontSize="14px">
									{item.testName}
								</Box>
								<Flex w="40%" fontSize="14px">
									{item.description}
								</Flex>
								<Flex w="20%" justifyContent={['', 'flex-end']}>
									<Badge fontSize="14px" colorScheme="green">{formattedDate}</Badge>
								</Flex>
							</Flex>
						</Link>
					)
				})
				}
			</Box >
		)
	}
}
export default QuizList
