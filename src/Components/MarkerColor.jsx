function MarkerColor({ onchange }) {
    return (
      <div>
        <label htmlFor="markerColor" className="special">
          Marker Color:{" "}
        </label>
        <input
          name="markerColor"
          className="color"
          type="color"
          defaultValue="#4f0077"
          onInput={onchange}
        />
      </div>
    );
  }
  
  export default MarkerColor;