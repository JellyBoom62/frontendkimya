import IsLoggedIn from "../components/isLoggedin"

import {
	Text,
} from '@chakra-ui/react'

import QuizList from "../components/quizlist"

export default function App() {
	return (
		<IsLoggedIn breadcumb={["Ana Səhifə"]} head={"Ana Səhifə"}>
			<Text fontSize="20px" fontWeight="bold" mb="20px">Sınaqlar</Text>
			<QuizList />
		</IsLoggedIn>
	)
}

