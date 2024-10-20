// `src/components/BurgerStack.jsx`
export const BurgerStack = ({ stack}) => {
    return (
      <>
        <ul>
          {stack.map((i, index) => (
            // eslint-disable-next-line react/jsx-key
            <li key={index} style={{ backgroundColor: i.color }}>{i.name}</li>
          ))}
        </ul>
      </>
    );
  };
  