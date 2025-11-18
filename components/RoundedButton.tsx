const RoundedButton = ({ onClick, text, color = "dgreen", }: { onClick: () => void; text: string; color?: string }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block px-8 py-2 cursor-pointer rounded-full border-[2px] border-${color} text-${color} hover:bg-lgreen hover:border-lgreen hover:text-white transition`}>
      {text}
    </button>
  );
}

export default RoundedButton;