export default function Footer(){
    return (
        <div id="contact">
            <h1 className="ul italic text-center">Contact me</h1>
            <ul className="text-center gap-6 ">
                <li><a className="text-blue-600 hover:underline" href="https://github.com/JosephMelesse">GitHub </a>: JosephMelesse</li>
                <li><a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/joseph-m-420333329/">LinkedIn </a>: Joseph Melesse</li>
                <li><a className="text-blue-600 hover:underline" href="mailto:josephmelesse3@gmail.com">Email 󰊫</a>: josephmelesse3@gmail.com</li>
            </ul>
            <footer className="flex justify-center px-6 py-4 border-t">
                © 2026 All rights reserved.
            </footer>
        </div>
    )
}