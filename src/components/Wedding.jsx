import React, { useState } from "react";

export default function WeddingCardCustomization() {
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [venue, setVenue] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [template, setTemplate] = useState("peacock");  // Default template

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "brideName") setBrideName(value);
    if (name === "groomName") setGroomName(value);
    if (name === "weddingDate") setWeddingDate(value);
    if (name === "venue") setVenue(value);
    if (name === "customMessage") setCustomMessage(value);
  };

  // Preview wedding card template
  const WeddingCardPreview = () => {
    return (
      <div
        className="wedding-card-preview"
        style={{
          background: template === "peacock" ? "#a8d0e6" : "#f0f0f0", // Simple color change based on template
          padding: "20px",
          borderRadius: "10px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Wedding Invitation</h2>
        <h3 style={{ fontSize: "22px", color: "#3b3b3b" }}>
          {brideName} & {groomName}
        </h3>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>
          Wedding Date: {weddingDate}
        </p>
        <p style={{ fontSize: "18px", margin: "10px 0" }}>Venue: {venue}</p>
        {customMessage && <p style={{ fontSize: "16px", marginTop: "20px" }}>{customMessage}</p>}
      </div>
    );
  };

  return (
    <div className="wedding-card-customizer">
      <h2 className="text-xl font-bold mb-4">Customize Your Wedding Invitation</h2>
      
      {/* Template Selector */}
      <div>
        <label className="block mb-2">Choose Template:</label>
        <select
          className="w-full p-2 border rounded mb-3"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
        >
          <option value="peacock">Peacock Theme</option>
          <option value="floral">Floral Theme</option>
          <option value="modern">Modern Theme</option>
        </select>
      </div>

      {/* Bride's Name */}
      <div>
        <label className="block mb-2">Bride's Name:</label>
        <input
          type="text"
          name="brideName"
          className="w-full p-2 border rounded mb-3"
          value={brideName}
          onChange={handleInputChange}
          placeholder="Enter Bride's Name"
        />
      </div>

      {/* Groom's Name */}
      <div>
        <label className="block mb-2">Groom's Name:</label>
        <input
          type="text"
          name="groomName"
          className="w-full p-2 border rounded mb-3"
          value={groomName}
          onChange={handleInputChange}
          placeholder="Enter Groom's Name"
        />
      </div>

      {/* Wedding Date */}
      <div>
        <label className="block mb-2">Wedding Date:</label>
        <input
          type="text"
          name="weddingDate"
          className="w-full p-2 border rounded mb-3"
          value={weddingDate}
          onChange={handleInputChange}
          placeholder="Enter Wedding Date"
        />
      </div>

      {/* Venue */}
      <div>
        <label className="block mb-2">Venue:</label>
        <input
          type="text"
          name="venue"
          className="w-full p-2 border rounded mb-3"
          value={venue}
          onChange={handleInputChange}
          placeholder="Enter Venue"
        />
      </div>

      {/* Custom Message */}
      <div>
        <label className="block mb-2">Custom Message:</label>
        <textarea
          name="customMessage"
          className="w-full p-2 border rounded mb-3"
          value={customMessage}
          onChange={handleInputChange}
          placeholder="Enter a custom message"
        />
      </div>

      {/* Preview Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Preview Your Wedding Card:</h3>
        <WeddingCardPreview />
      </div>
    </div>
  );
}
