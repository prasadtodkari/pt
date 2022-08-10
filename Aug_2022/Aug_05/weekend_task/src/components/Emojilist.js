import { useState } from 'react'
import Emoji from './Emoji'

const Emojilist = () => {
    const [search, setSearch] = useState(null);
    console.log();
  return <>
      <div className='search'>
        <input type="text" placeholder="Just type and Search your Emoji's here..." onKeyUp={(e) =>{setSearch(e.target.value)}}></input>
        
    </div>
    <table>
        <th>Emoji</th>
        <th>Description</th>
        <th>Category</th>
        <th>Aliases</th>
        <th>Tags</th>
        <th>unicode_version</th>
        {Emoji.filter(emoji => emoji.tags.includes(search)).map((e, idx) => {
            return <tr key={idx}><td>{e.emoji}</td><td>{e.description}</td><td>{e.category}</td><td>{e.aliases}</td><td>{e.tags}</td><td>{e.unicode_version}</td></tr>
        })}
    </table>
  </>
}

export default Emojilist