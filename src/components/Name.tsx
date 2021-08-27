interface babyNameProp{
    id: number;
    name: string;
    gender: string;
    setFavourites(ids:string[]): void;
    favourites: string[];
}

export function Name({id, name, gender,setFavourites,favourites}: babyNameProp): JSX.Element {

    const addID = () => {
        setFavourites([...favourites,name]);
    
    };

    return (
        <>
            {gender === 'f' ? <button onClick={addID} className='female'>{name}</button> : <button onClick={addID} className='male'>{name}</button>}
        </>
    );
}