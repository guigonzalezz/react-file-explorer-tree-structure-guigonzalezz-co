export const mockTreeData = {
  id: "root",
  name: "Root Folder",
  type: "folder",
  children: [
    {
      id: "f1",
      name: "Documents",
      type: "folder",
      children: [
        { id: "f1a", name: "Resume.pdf", type: "file" },
        { id: "f1b", name: "CoverLetter.docx", type: "file" },
        { id: "f1c", name: "ProjectProposal.xlsx", type: "file" },
        { id: "f1d", name: "Report.pptx", type: "file" },
      ],
    },
    {
      id: "f2",
      name: "Photos",
      type: "folder",
      children: [
        {
          id: "f2a",
          name: "Vacation",
          type: "folder",
          children: [
            { id: "f2a1", name: "beach.png", type: "file" },
            { id: "f2a2", name: "sunset.jpg", type: "file" },
          ],
        },
        {
          id: "f2b",
          name: "Family",
          type: "folder",
          children: [{ id: "f2b1", name: "reunion.jpg", type: "file" }],
        },
      ],
    },
    {
      id: "f3",
      name: "Projects",
      type: "folder",
      children: [
        {
          id: "f3a",
          name: "WebApp",
          type: "folder",
          children: [
            { id: "f3a1", name: "index.html", type: "file" },
            { id: "f3a2", name: "style.css", type: "file" },
          ],
        },
        {
          id: "f3b",
          name: "MobileApp",
          type: "folder",
          children: [{ id: "f3b1", name: "main.js", type: "file" }],
        },
      ],
    },
    { id: "file1", name: "todo.txt", type: "file" },
    { id: "file2", name: "notes.md", type: "file" },
  ],
};
