import IsLoggedIn from "../components/isLoggedin"
import QuizList from "../components/quizlist"

const Quiz = () => {
	return (
		<IsLoggedIn breadcumb={["Sınaqlar"]} head={"Sınaqlar"}>
			<QuizList />
		</IsLoggedIn>
	)
}

export default Quiz
