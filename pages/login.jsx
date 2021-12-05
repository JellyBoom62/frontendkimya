import {
	Flex,
	Heading,
	Input,
	Button,
	useColorModeValue,
	Alert,
	AlertIcon,
	AlertDescription,
	Center,
	FormControl,
	FormLabel,
	FormHelperText,
	useToast
} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Link from 'next/link'
import { login } from '../components/serveraxios'
import { useRouter } from 'next/router'
import IsLogin from '../components/IsLogin';

const schema = yup.object({
	username: yup.string()
		.required("Adınızı yazın")
		.matches(/^[a-z0-9]+$/, "Yalnız kiçik hərflər"),
	password: yup.string()
		.required("Şifrənizi yazın")
		.matches()
		.min(8, "Şifrə 8-dən kiçik olmamalıdır")
}).required()

export default function Login() {
	const router = useRouter()
	const toast = useToast()
	const formBackground = useColorModeValue("gray.200", "gray.700")

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmit = user => {
		let data = login(user)
		data.then(data => {
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
					description: "Username və ya şifrə səhvdir",
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
				<FormControl id="login">
					<Flex height="100vh" alignItems="center" justifyContent="center">
						<Flex direction="column" background={formBackground} p={12} rounded={6}>
							<Heading mb={6} as="h1" size="lg">Giriş səhifəsi</Heading>
							<FormLabel>Username</FormLabel>
							<Input {...register("username")} placeholder="fuad123" variant="filled" />
							<FormHelperText mb={3}>Adı kiçik hərflərlə yazın</FormHelperText>
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
								<Link href="/register"><a>Qeydiyyatdan keç</a></Link>
							</Center>
						</Flex>
					</Flex>
				</FormControl>
			</form>
		</IsLogin>
	)
}
