import NavBar from "./NavBar"

function Header() {
    return (  
        <header className="flex bg-[#0DC40A8A] text-black text-4xl p-4 justify-between">
            <h1 className="font-JollyLodger">MHZFLIX</h1>
            <NavBar/>
        </header>
    )
}

export default Header