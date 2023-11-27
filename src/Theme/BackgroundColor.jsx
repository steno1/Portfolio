import { useThemeContext } from "../Context/ThemeContext"

const BackgroundColor = ({className}) => {
  const {themeHandler}=useThemeContext();
  return (
    <button className={className}
     onClick={()=>themeHandler(className)}></button>
  )
}

export default BackgroundColor
