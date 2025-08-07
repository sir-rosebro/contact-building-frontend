'use client';
import { useState } from 'react';

export default function ColorPalette() {
  const colors = ['#fd6656', '#e55a4a', '#ff8c7f', '#c94b3e', '#ff4d3b'];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="text-center mb-5">
      <h3 className="fw-bold mb-3">Preview Our Paint Colors</h3>
      <div className="d-flex justify-content-center gap-3 mb-3">
        {colors.map((color, idx) => (
          <div
            key={idx}
            className="color-swatch"
            style={{ backgroundColor: color, width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer', border: selectedColor === color ? '3px solid #fff' : 'none', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
      <p style={{ color: selectedColor, fontWeight: 'bold' }}>Selected Color: {selectedColor}</p>
    </div>
  );
}