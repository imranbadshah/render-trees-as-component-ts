import React from "react";

export interface FileDropZoneProps {
  processFile: Function;
}

const FileDropZone: React.FC<FileDropZoneProps> = ({ processFile }) => {
  const handleDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    // Handle the dropped files here (e.g., upload or process them)
    console.log("Dropped files:", files);
    // Call processFile for each dropped file
    Array.from(files).forEach((file) => {
      processFile(file);
    });
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        top: "25%",
        left: "25%",
        position: "absolute",
        width: "50%",
        height: "50%",
        border: "2px dashed #aaaaaa",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p>Drag & Drop your tree input file here</p>
    </div>
  );
};

export default FileDropZone;
