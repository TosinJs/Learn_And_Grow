import './App.css';
import Button from './components/button';

function App() {
  const buttons = [
    {
      index: 0,
      variant: "default",
      disabled: false,
      type: "default",
      size: "md",
      color: "#E0E0E0",
      fontColor: "#3F3F3F"

    },
    {
      index: 1,
      variant: "outline",
      disabled: false,
      type: "default",
      size: "md",
      color: "#3D5AFE",
      fontColor: "#3D5AFE"
    },
    {
      index: 2,
      variant: "text",
      disabled: false,
      type: "default",
      size: "md",
      color: "#3D5AFE",
      fontColor: "#3D5AFE"
    },
    {
      index: 3,
      variant: "default",
      disabled: true,
      type: "default",
      size: "md",
      color: null,
      fontColor: null
    },
    {
      index: 4,
      variant: "default",
      disabled: false,
      type: "special",
      size: "md",
      color: "#2962FF"

    },
    {
      index: 5,
      variant: "default",
      disabled: false,
      type: "default",
      size: "sm",
      color: "#3D5AFE"

    },
    {
      index: 6,
      variant: "default",
      disabled: false,
      type: "default",
      size: "md",
      color: "#3D5AFE"

    },
    {
      index: 7,
      variant: "default",
      disabled: false,
      type: "default",
      size: "lg",
      color: "#3D5AFE"

    },
    {
      index: 8,
      variant: "default",
      disabled: false,
      type: "default",
      size: "md",
      color: "#E0E0E0"
    },
    {
      index: 9,
      variant: "default",
      disabled: false,
      type: "default",
      size: "md",
      color: "#2962FF"
    },
    {
      index: 10,
      variant: "default",
      disabled: false,
      type: "default",
      size: "md",
      color: "#455A64"
    },
    {
      index: 11,
      variant: "default",
      disabled: false,
      type: "default",
      size: "md",
      color: "#D32F2F"
    },
  ]
  return (
    <div className="button-holder">
      <h2>Buttons</h2>
      {
        buttons.map((button, index) => {
          const {variant, disabled, size,} = button
          return (
            <div key={index} style={{borderBottom: "2px solid grey", marginBottom: "10px", paddingBottom: "10px"}}>
            <p style={{fontWeight: "600"}}>{`<Button ${variant ? "variant=" + variant : null} ${disabled ? "disabled=disabled" : ""} ${"size=" + size}/>`}</p>
            <Button index={button.index} button = {button}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
