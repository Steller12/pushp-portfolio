function PageWipe({ wipe }) {
  return (
    <div
      className={`
        fixed inset-0 z-50
        bg-white
        transform transition-transform duration-700 ease-in-out
        ${wipe.active ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="h-full flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-black">{wipe.title}</h1>
      </div>
    </div>
  );
}

export default PageWipe;
