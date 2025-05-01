const ResumeButton = () => {
  const handlePreview = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const resumeUrl =
      "https://drive.google.com/file/d/1Bwsl1bKa1AJEOLrDIjcuQdHVEMmMSPEF/view?usp=sharing";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href="#resume" // Fallback in case JS fails
      onClick={handlePreview}
      className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
    >
      Resume ↗
    </a>
  );
};

export default ResumeButton;
