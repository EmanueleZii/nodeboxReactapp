import { useState } from 'react';
import './App.css';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div className="App">
     <Accordition data={faqs} />
    </div>
  );
}

function Accordition({data})
{
  const [CurOpen, setisOpen] = useState(null);

  return (
   <div className='accordion'> 
    {
    data.map(
      (el, i) => 
      <AccorditionItem CurOpen={CurOpen} OnOpen={setisOpen} on title={el.title} text={el.text} num={i} key={el.title}/>
     )}
   </div>
  );
}

function AccorditionItem({num, title, text, CurOpen, OnOpen})
{
  //const [isOpen, setisOpen] = useState(false);
  const isOpen = num === CurOpen;
  
  function handleToggle() {
   OnOpen(num); 
  }

  return (
  <div className={`item ${isOpen ? "open":""}`} onClick={handleToggle}>
    <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
    <p className='text'>{title}</p>
    <p className='icon'>{isOpen ? '-':'+'}</p>
    {isOpen && <div className='content-box'>{text}</div>}
  </div>
  );
}
