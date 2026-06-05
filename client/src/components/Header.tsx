export default function Header(){
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b">
            <div className="font-medium">Joseph Melesse</div>
            <ul className="flex gap-6">
                <li> About </li>
                <li> Projects </li>
                <li> Contact </li>
            </ul>
        </nav>
    )
}