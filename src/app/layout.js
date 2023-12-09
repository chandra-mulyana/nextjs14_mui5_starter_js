import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata = {
	title: "Starter Nextjs14 + MUI5",
	description: "Starter Nextjs14 + MUI5",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry>{children}</ThemeRegistry>
			</body>
		</html>
	);
}
