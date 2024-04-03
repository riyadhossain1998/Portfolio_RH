function Projects() {

    const boxCard = (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div className="border-solid">1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </>
    )

    return ( 
        <>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {boxCard}
            </div>
        </> 
    );
}

export default Projects;