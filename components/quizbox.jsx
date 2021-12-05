import React, { useState } from 'react'

import {
	Box,
	Flex,
	Spinner,
	Button,
	Text,
	RadioGroup,
	Radio,
	CheckboxGroup,
	Checkbox,
} from '@chakra-ui/react'

const QuizBox = ({ quiz }) => {
	const [quizNum, setQuizNum] = useState(1)
	return (
		<Box w="100%" minH="470px" borderRadius="6px" p="20px" bgColor="gray.800">
			<Box w="100%" mb="10px">
				{quiz.test.item.map((item, index) => {
					if (quizNum == index + 1) {
						return (
							<Button fontSize="12px" size="sm" mr="10px" mb="10px" bgColor="cyan.500"
								_focus={{}}
								_hover={{
									bgColor: "cyan.500"
								}}
								transition='all 0.1s cubic-bezier(.08,.52,.52,1)'
								key={index}>{index + 1}</Button>
						)
					}
					return (
						<Button fontSize="12px" size="sm" mr="10px" mb="10px"
							_focus={{}}
							_hover={{
								bgColor: "cyan.500"
							}}
							transition='all 0.1s cubic-bezier(.08,.52,.52,1)'
							onClick={() => setQuizNum(index + 1)}
							key={index}>{index + 1}</Button>
					)
				})}
			</Box>
			<Box w="100%" minH="380px" boxShadow="lg" borderRadius="6px" p="20px" bgColor="gray.700">
				<Flex w="100%" mb="10px">
					<Text mr="5px">{quizNum}.</Text> <div dangerouslySetInnerHTML={{ __html: quiz.test.item[quizNum - 1].question }}></div>
				</Flex>
				<RadioGroup name={quizNum}>
					<Flex direction="column">
						{quiz.test.item[quizNum - 1].variants.map((item, index) => {
							if (quiz.test.item[quizNum - 1].questionType == 'radio') {
								return (
									<Radio value={item.value} mb="3px" key={index}>{item.value}</Radio>
								)
							} else {
								return (
									<Checkbox value={item.value} mb="3px" key={index}>{item.value}</Checkbox>
								)
							}
						})}
					</Flex>
				</RadioGroup>
			</Box>
		</Box>
	)
}

export default QuizBox
