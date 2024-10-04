import TextReveal from "@/component/textReveal";

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center text-[80px] font-bold ">
      <div className=" overflow-y-hidden">
        <TextReveal />
      </div>
    </div>
  );
}
