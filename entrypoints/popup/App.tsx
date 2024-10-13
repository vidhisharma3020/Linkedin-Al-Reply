import linkedInIcon from "@/assets/linkedin-icon.svg";
function App() {
  return (
    <div className="w-[400px] flex flex-col gap-2 p-10 items-center cursor-default">
      <img className="py-0" src={linkedInIcon} alt="LinkedIn Icon" />
      <h1 className="text-2xl text-relevantt font-bold py-0">AI REPLY EXTENSION</h1>
      <p className="text-relevantt py-4 text-ld font-semibold">
        Developed utilizing the <span className="text-primary text-md font-bold">WXT FRAMEWORK</span> and <span className="text-primary text-md font-bold">REACT with TYPESCRIPT</span> integration.
      </p>
      <p className="srcCode flex flex-col gap-2">
        <span className="text-relevantt text-md font-bold">View Source Code : </span><span className="bg-gray-600/10 px-2 py-1 rounded-md text-primary-gray"><a href="https://github.com/vidhisharma3020/Linkedin-Al-Reply.git" target="_blank">https://github.com/vidhisharma3020/Linkedin-Al-Reply.git</a></span>
      </p>
      <p className="about">
        <span className="text-relevantt text-lg font-bold">Developed by </span><a href="https://github.com/vidhisharma3020" target="_blank" className="text-primary font-bold text-lg">Vidhi Sharma</a>
      </p>
    </div>
  );
}

export default App;
