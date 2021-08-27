interface babyNameProp{
    id: number;
    name: string;
    gender: string;
    setFavourites(ids:string[]): void;
    favourites: string[];
}

export function FavouriteName({id, name, gender,setFavourites,favourites}: babyNameProp): JSX.Element {

    const removeID = () => {
        const res = [...favourites]
        const index = res.indexOf(name);
        if (index !== -1){
            res.splice(index,1);
            setFavourites([...res]);
        }
        
    
    };

    return (
        <>
            {gender === 'f' ? <button onClick={removeID} className='female'>{name}</button> : <button onClick={removeID} className='male'>{name}</button>}
        </>
    );
}