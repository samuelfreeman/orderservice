import Bread from "@/components/Bread";


export default function Home() {
  return (
    <main className="">



      <div className="flex  flex-col  gap-y-10 justify-center items-center h-screen">
      <Bread />

        <h1 className="text-4xl font-bold">Welcome to Order service</h1>
        <h2>Click on any of the links to get started!</h2>
      </div>
    </main>
  );
}
