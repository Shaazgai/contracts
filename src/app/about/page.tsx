
const AboutPage = () => {
  return (
      <div className="flex flex-col justify-around items-center h-screen bg-black text-white">
          <div>
                <h1 className="font-bold text-[50px] bg-gradient-to-r from-primary to-danger text-transparent bg-clip-text">Hello, User!</h1>
              <h1 className="font-semibold text-[50px]">How can I help you today?</h1>
          </div>
          <div className="flex justify-around text-white w-screen">
              <button className=" border border-transparent bg-[#1e1f20] pl-3 pr-3 w-56 h-[24vh] rounded-2xl">Хамтран ажиллах гэрээ</button>
              <button className=" border border-transparent bg-[#1e1f20] w-56 h-[24vh] rounded-2xl">Гэрээт гэрээ</button>
              <button className=" border border-transparent bg-[#1e1f20] pl-3 pr-3 w-56 h-[24vh] rounded-2xl">Ажил гүйцэтгэлийн гэрээ</button>
              <button className=" border border-transparent bg-[#1e1f20] pl-3 pr-3 w-56 h-[24vh] rounded-2xl">Урт хугацааны гэрээ</button>
          </div>
          <div>
              <button className="w-80 h-[8vh] rounded-2xl border border-transparent bg-[#1e1f20]">Шинээр гэрээний төрөл үүсгэх</button>
          </div>
    </div>
  )
}
export default AboutPage


