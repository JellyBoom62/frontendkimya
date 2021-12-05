import {
	Flex,
	Heading,
	Input,
	Select,
	Button,
	useColorModeValue,
	Alert,
	AlertIcon,
	AlertDescription,
	Center,
	FormControl,
	FormLabel,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	useToast,
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Link from 'next/link'
import IsLogin from '../components/IsLogin';
import { registerUser } from '../components/serveraxios';
import { useRouter } from 'next/router'

const schema = yup.object({
	name: yup.string()
		.required('Adınızı yazın'),
	surname: yup.string()
		.required('Soyadınızı yazın'),
	school: yup.string()
		.required("Məktəbinizi yazın"),
	class: yup.string()
		.required("Sinfinizi yazın"),
	username: yup.string()
		.required("Adınızı yazın")
		.matches(/^[a-z0-9]+$/, "Yalnız kiçik hərflər"),
	password: yup.string()
		.required('Şifrəni yazın')
		.min(8, 'Şifrənin uzunluğu ən azı 8 olmalıdır')
		.max(25, 'Şifrə çox uzundur')
		.matches(/^[a-zA-Z0-9]+$/, 'Şifrə latın hərflərdən və rəqəmlərdən ibarət olmalıdır.')
}).required();

export default function Register() {
	const router = useRouter()
	const toast = useToast()

	const formBackground = useColorModeValue("gray.200", "gray.700")

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmit = user => {
		let status = registerUser(user)
		status.then(data => {
			if (data == "good") {
				router.push('/home')
				toast({
					title: "Açılır...",
					description: "Uğurla giriş edildi",
					status: "success",
					duration: 1000,
					isClosable: true,
				})
			} else if (data == "bad") {
				toast({
					title: "Səhvlik baş verdi",
					description: "Belə username artıq var",
					status: "error",
					duration: 1000,
					isClosable: true,
				})
			}
		})
	}

	return (
		<IsLogin>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<FormControl id="register">
					<Flex height="120vh" alignItems="center" justifyContent="center">
						<Flex direction="column" background={formBackground} p={12} rounded={6}>
							<Heading mb={6} as="h1" size="lg">Qeydiyyat səhifəsi</Heading>
							<FormLabel>Ad</FormLabel>
							<Input {...register("name")} placeholder="Fuad" variant="filled" mb={3} />
							{errors.name?.message &&
								<Alert status="error" mb={3}>
									<AlertIcon />
									<AlertDescription>{errors.name?.message}</AlertDescription>
								</Alert>
							}
							<FormLabel>Soyad</FormLabel>
							<Input {...register("surname")} placeholder="Dəmirçiyev" variant="filled" mb={3} />
							{errors.surname?.message &&
								<Alert status="error" mb={3}>
									<AlertIcon />
									<AlertDescription>{errors.surname?.message}</AlertDescription>
								</Alert>
							}
							<FormLabel>Məktəb</FormLabel>
							<NumberInput defaultValue={1} min={1} max={9999} variant="filled" mb={3}>
								<NumberInputField {...register("school")} />
								<NumberInputStepper>
									<NumberIncrementStepper />
									<NumberDecrementStepper />
								</NumberInputStepper>
							</NumberInput>
							{errors.school?.message &&
								<Alert status="error" mb={3}>
									<AlertIcon />
									<AlertDescription>{errors.school?.message}</AlertDescription>
								</Alert>
							}
							<FormLabel>Sinif</FormLabel>
							<Flex direction="row">
								<NumberInput defaultValue={1} min={1} max={12} variant="filled" mb='3' mr='10px'>
									<NumberInputField {...register("class")} />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
								<Select defaultValue='A' w='25%' {...register("group")}>
									<option value="A">A</option>
									<option value="B">B</option>
									<option value="C">C</option>
									<option value="D">D</option>
									<option value="E">E</option>
								</Select>
							</Flex>
							{errors.class?.message &&
								<Alert status="error" mb={3}>
									<AlertIcon />
									<AlertDescription>{errors.class?.message}</AlertDescription>
								</Alert>
							}
							<FormLabel>Username</FormLabel>
							<Input {...register("username")} placeholder="fuad123" variant="filled" mb={3} />
							{errors.username?.message &&
								<Alert status="error" mb={3}>
									<AlertIcon />
									<AlertDescription>{errors.username?.message}</AlertDescription>
								</Alert>
							}
							<FormLabel>Şifrə</FormLabel>
							<Input {...register("password")} placeholder="********" variant="filled" mb={6} type="password" />
							{errors.password?.message &&
								<Alert status="error" mb={3}>
									<AlertIcon />
									<AlertDescription>{errors.password?.message}</AlertDescription>
								</Alert>
							}
							<Button mb={6} colorScheme="teal" type="submit">Daxil olmaq</Button>
							<Center color="cyan.200">
								<Link href="/login"><a>Giriş et</a></Link>
							</Center>
						</Flex>
					</Flex>
				</FormControl>
			</form>
		</IsLogin>
	)
}