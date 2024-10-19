
export const IngredientList = ({availableIngredients}) => {
    return (
        <>
   
        <ul>
            {availableIngredients.map((i) => (
      
                // eslint-disable-next-line react/jsx-key
                <li style={{backgroundColor: i.color}}>{i.name}</li>
            )
            )}
           
        </ul>
        </>
    )
  }
