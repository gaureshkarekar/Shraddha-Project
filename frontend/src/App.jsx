import { useState } from 'react'
import './App.css'
import jarvisgif from './assets/jarvis.gif'
import ironmangif from './assets/ironman.gif'

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const sendDataToBackend = async () => {
    setCount(count + 1);
    const data = { name: "John Doe", age: 30, count }; // Example data to send
    try {
      const response = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setMessage(result.data); // Display response message
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const callJarvis = async () => {
    setCount(count + 1);
    const data = { name: "John Doe", age: 30, count }; // Example data to send
    try {
      const response = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setMessage(result.data); // Display response message
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const jarvisGreet =  () => {
     fetch("http://127.0.0.1:5000/jarvis");
  }

  return (
    <>
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          flexDirection:'column'
        }}>
          <img
            // style={{display:'none'}}
            src={jarvisgif} alt="Example GIF" />
          <div
            style={{
              width: '72%',
              borderRadius: '10px',
              backgroundColor: 'blue',
              padding: '20px',
              boxSizing: "border-box",
              fontSize: '20px',
              // display: 'none'
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur et quo quos rem modi, possimus ut perferendis earum, veritatis quis praesentium ipsa deserunt voluptate veniam, corporis inventore quas incidunt. Quia!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione ducimus, debitis esse exercitationem sit voluptatem magnam ipsam dicta dolore eos recusandae. Perspiciatis debitis voluptates sapiente, vero fugit magnam obcaecati?
            Fuga, eveniet. Optio excepturi laboriosam exercitationem facilis tempore eius animi ea necessitatibus quasi totam nisi saepe vitae, fugiat nesciunt aperiam deserunt voluptatum nulla ad? Corrupti dolores ullam hic doloribus laborum.
            Deserunt id quam consequatur non voluptatibus. Itaque porro repellendus aliquam eius quod! Deserunt autem adipisci exercitationem veritatis commodi, esse similique, in corporis dolore aliquam odit amet sint accusantium neque accusamus!
            Ipsam, dolorem! Quae corrupti quidem sit quasi hic sunt aut magni earum architecto alias minus molestias, unde exercitationem aliquam sed. Eius sed est provident repudiandae illo quod maiores iste mollitia.
            Vero aperiam dolores excepturi laudantium maiores ad dolor nulla amet dignissimos dolorem rem, laboriosam beatae. Eveniet dignissimos adipisci nesciunt quae ipsum quis, exercitationem, enim libero cum doloribus ratione, quo voluptas!
          </div>
          {/* <button style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            backgroundColor: 'rgb(247, 176, 43)'
          }}
            onClick={callJarvis}
          >Mic</button> */}
        </div>
        <button
          onClick={jarvisGreet}
        >Microphone</button>
        <p>{message.name}</p>
        <p>{message.count}</p>
        <img
          width='320px'
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '0px'
          }}
          src={ironmangif} alt="Example GIF" />

      </div>
    </>
  )
}

export default App
