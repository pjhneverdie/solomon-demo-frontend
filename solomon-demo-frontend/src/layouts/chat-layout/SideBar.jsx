export default function Sidebar({ open, children }) {
    return (
        <aside
            className={`
        fixed sm:relative inset-y-0 left-0
        flex flex-col border-r border-black/20
        ${open ? "w-full sm:w-72" : "w-0 overflow-hidden"}
        transition-all duration-300 bg-[#202123] text-white
      `}
        >
            {children}
        </aside>
    );
}