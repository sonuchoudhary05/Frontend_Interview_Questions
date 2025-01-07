import React from 'react'; 
const FileExplorer = ({explorer}) => {
    const [expand, setExpand] = React.useState(false);
    if(explorer.type === "folder"){
        return (
            <div>
                <span onClick = {() => setExpand(!expand)}>{explorer.name}</span>
                <ul>
                    {expand &&
                        explorer.children.map((child) => (
                            <li key={child.name}>
                                <FileExplorer explorer={child} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    else{
        return (
            <div>
                <p>{explorer.name}</p>
            </div>
            )
    }
}

export default FileExplorer
