import { Button } from "@/components/ui/button"
import { useState } from "react"
 
function App() {
  const [statusLabel, setStatusLabel] = useState("not clicked");

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={()=> setStatusLabel("Clicked")}>Click me</Button>
      <span>{statusLabel}</span>
    </div>
  )
}
 
export default App