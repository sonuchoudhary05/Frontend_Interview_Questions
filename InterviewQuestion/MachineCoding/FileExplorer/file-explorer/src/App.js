import './App.css';
import FileExplorer from './FileExplorer';

const files = {
  "name": "Root",
  "type": "folder",
  "children": [
    {
      "name": "Documents",
      "type": "folder",
      "children": [
        {
          "name": "Resume.pdf",
          "type": "file",
          "size": "2 MB",
          "createdAt": "2023-11-15T10:30:00Z"
        },
        {
          "name": "ProjectPlan.docx",
          "type": "file",
          "size": "1.5 MB",
          "createdAt": "2023-10-22T14:00:00Z"
        }
      ]
    },
    {
      "name": "Photos",
      "type": "folder",
      "children": [
        {
          "name": "Vacation",
          "type": "folder",
          "children": [
            {
              "name": "beach.png",
              "type": "file",
              "size": "4 MB",
              "createdAt": "2023-06-20T08:00:00Z"
            },
            {
              "name": "mountains.jpg",
              "type": "file",
              "size": "3.8 MB",
              "createdAt": "2023-06-22T09:30:00Z"
            }
          ]
        },
        {
          "name": "ProfilePic.jpg",
          "type": "file",
          "size": "2.2 MB",
          "createdAt": "2023-05-10T15:00:00Z"
        }
      ]
    },
    {
      "name": "Music",
      "type": "folder",
      "children": [
        {
          "name": "Rock",
          "type": "folder",
          "children": [
            {
              "name": "song1.mp3",
              "type": "file",
              "size": "5 MB",
              "createdAt": "2022-12-10T10:00:00Z"
            },
            {
              "name": "song2.mp3",
              "type": "file",
              "size": "6 MB",
              "createdAt": "2022-12-11T11:00:00Z"
            }
          ]
        },
        {
          "name": "Classical.mp3",
          "type": "file",
          "size": "3.5 MB",
          "createdAt": "2022-11-01T14:00:00Z"
        }
      ]
    },
    {
      "name": "System",
      "type": "folder",
      "children": [
        {
          "name": "logs.txt",
          "type": "file",
          "size": "500 KB",
          "createdAt": "2023-09-01T12:00:00Z"
        },
        {
          "name": "config.json",
          "type": "file",
          "size": "1 KB",
          "createdAt": "2023-09-10T16:00:00Z"
        }
      ]
    },
    {
      "name": "README.md",
      "type": "file",
      "size": "10 KB",
      "createdAt": "2023-01-01T10:00:00Z"
    }
  ]
} 
function App() {
  return (
    <div className="App">
      <FileExplorer explorer = {files} />
    </div>
  );
}

export default App;
