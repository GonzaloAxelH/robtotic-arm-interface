

const Button = ({Arrow,longPressProps,...props}) => {
  
   return (
    <div className="button sm" {...longPressProps} {...props}>
      <input  type="checkbox" className="check check-toggle" />
    {Arrow}      
    </div>
  );
};

export default Button;
