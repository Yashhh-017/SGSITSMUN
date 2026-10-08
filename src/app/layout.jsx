import "./globals.css";

export const metadata = {
  title: "SGSITS MUN 2026 | PRISM — Model United Nations, Indore",
  description:
    "SGSITS MUN 2026 — PRISM: Peace, Rights, Integrity, Statecraft, Morality. A Model United Nations conference in Indore on 10 & 11 October.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
