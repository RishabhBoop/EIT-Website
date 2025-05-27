"use client";
import React, { useState, useEffect } from "react";

// TODO: Replace with actual API call when backend is ready
const mockContacts = [
  {
    id: 1,
    name: "Rishabh Venugopal",
    role: "Cloudbeauftragter",
    imageUrl: "_PIC1015__Edited_02.JPG", // Using existing image as placeholder
  },
  {
    id: 2,
    name: "Charles Leclerc",
    role: "F1-Fahrer",
    imageUrl: "_PIC1015__Edited_02.JPG", // Using another image as placeholder
  },
  {
    id: 3,
    name: "Max Verstappen",
    role: "F1-Weltmeister",
    imageUrl: "_PIC1259_01.jpg", // Using a different image as placeholder
  },
  // Add more mock contacts as needed
];

export default function Kontakt() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchContacts = () => {
      setTimeout(() => {
        setContacts(mockContacts);
        setLoading(false);
      }, 2000); // Simulate 1 second delay
    };

    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen pt-[60px]">
        Loading Kontakte...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start pt-[60px] px-4 h-full">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex flex-col items-center rounded-lg p-4"
        >
          <img
            src={contact.imageUrl}
            alt={`Foto von ${contact.name}`}
            className="w-full h-80 object-cover rounded-full"
          />
          <div className="text-center">
            <h1 className="text-xl font-bold font-montserrat py-2">
              {contact.name}
            </h1>
            <p className="font-montserrat">{contact.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
