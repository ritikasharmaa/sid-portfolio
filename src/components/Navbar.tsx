"use client";
import { useState } from "react";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="navInner">
        <div className="logo">Siddharth</div>

        {/* Desktop */}
        <div className="navLinks desktop">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/brand">Brand</Link>
          <Link href="/Services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobileMenu ${open ? "show" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link href="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href="/work" onClick={() => setOpen(false)}>
          Work
        </Link>
        <Link href="/brand" onClick={() => setOpen(false)}>
          Brand
        </Link>
        <Link href="/Services" onClick={() => setOpen(false)}>
          Services
        </Link>
        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
