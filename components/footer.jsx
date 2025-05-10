import React from "react";

export default function Footer() {
    return (
        <footer className="text-white opacity-100 blur-full">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Fachschaft EIT.</p>
            </div>
        </footer>
    )
}