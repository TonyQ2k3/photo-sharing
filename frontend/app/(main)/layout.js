import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}