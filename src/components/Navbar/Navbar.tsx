import { useState } from 'react';
import "./Navbar.css";
// Se não tem react-icons, use texto ou emoji
import { FaBars, FaTimes } from 'react-icons/fa'; // Opcional

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Se não tem react-icons, use:
    // const HamburgerIcon = isMenuOpen ? '✕' : '☰';
    // const CloseIcon = '✕';

    return (
        <nav className="navegacao">
            <div className="nav-container">
                {/* Logo */}
                <div className="nav-logo">
                    <a href="#inicio" onClick={closeMenu}>Marcos Russillo</a>
                </div>
                
                {/* Botão hamburger (mobile) */}
                <button 
                    className="hamburger-btn" 
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    {isMenuOpen ? (
                        <FaTimes /> // ou '✕'
                    ) : (
                        <FaBars /> // ou '☰'
                    )}
                </button>
                
                {/* Menu de navegação */}
                <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#inicio" className="menu-link" onClick={closeMenu}>
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#sobre" className="menu-link" onClick={closeMenu}>
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#projetos" className="menu-link" onClick={closeMenu}>
                            Projetos
                        </a>
                    </li>
                    <li>
                        <a href="#contato" className="menu-link" onClick={closeMenu}>
                            Contato
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;