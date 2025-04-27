import PathRightBlack from "../assets/icons/path-right-black.svg";

export default function BtnContact() {
  return (
    <button className="flex items-center gap-2 bg-resto-bright-yellow hover:opacity-90 text-resto-black font-semibold rounded-xl px-6 py-4">
      Contact Me
      <img src={PathRightBlack} alt="Arrow" className="h-5 w-5" />
    </button>
  );
}
