import React, { useEffect, useState } from 'react'
import IsLoggedIn from '../../components/isLoggedin'

import { useRouter } from 'next/router'
import { fetchTest } from '../../components/serveraxios'
import {
	Box,
	Flex,
	Spinner,
} from '@chakra-ui/react'
import QuizBox from '../../components/quizbox'

const Quiz = () => {
	const router = useRouter()
	const { quizID } = router.query
	const [quiz, setQuiz] = useState()

	useEffect(() => {
		if (quizID != undefined) {
			fetchTest(quizID, setQuiz)
		}
	}, [quizID])

	if (quizID == undefined || quiz == undefined) {
		return (
			<Flex w="100%" h="100vh" justifyContent="center" alignItems="center">
				<Spinner size="xl"></Spinner>
			</Flex>
		)
	} else {
		return (
			<IsLoggedIn breadcumb={["Sınaq"]} head={`Sınaq`}>
				<Box mb="15px">{quiz.testName}, {quiz.description}</Box>
				<QuizBox quiz={quiz} />
			</IsLoggedIn>
		)
	}
}

export default Quiz
