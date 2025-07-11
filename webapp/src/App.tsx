export const App = () => {
    const ideas = [
        {
            name: 'Idea 1',
            description: 'Idea 1 description'
        },
        {
            name: 'Idea 2',
            description: 'Idea 2 description'
        },
        {
            name: 'Idea 3',
            description: 'Idea 3 description'
        },
        {
            name: 'Idea 4',
            description: 'Idea 4 description'
        },
        {
            name: 'Idea 5',
            description: 'Idea 5 description'
        },
    ]
    return (
        <div>
            <h1>Ideanick</h1>
            <div>
                {
                    ideas.map(idea => {
                    return <div key={idea.name}>
                        <h2>{idea.name}</h2>
                        <p>{idea.description}</p>
                    </div>
                })}
            </div>
        </div>
    );
}