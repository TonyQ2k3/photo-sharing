import Image from "next/image";
import Home from "./(main)/home/page";
import { redirect } from 'next/navigation';

export default function App() {
  redirect('/home');
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-iconic-blue to-iconic-orange">
      <h1 className="text-white text-[40px] font-bold">Oops...</h1>
      <p className="text-white text-xl">Redirecting you to the homepage</p>
    </main>
  );
}
