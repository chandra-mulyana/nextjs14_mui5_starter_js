import { Box, Container, Typography } from "@mui/material";

export default function Home() {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<Box
				sx={{
					boxShadow: 6,
					p: 4,
					borderRadius: 10,
					border: "1px solid grey",
				}}
			>
				<Typography variant="h4">Nextjs 14 + MUI 5</Typography>
			</Box>
		</Container>
	);
}
