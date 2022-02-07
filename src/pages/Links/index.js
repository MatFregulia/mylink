import { useState, useEffect } from 'react'
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import './links.css'
import { Link } from 'react-router-dom'

import { getLinksSave } from '../../services/storeLinks'

export default function Links() {
    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      async function getLinks() {
        const result = await getLinksSave('@encurtaLink');
        
        if (result.length === 0) {
          console.log("Lista vazia")
        }

        setMyLinks(result);
      }
      
      getLinks();

    }, [])

    return(
      <div className='links/container'>
        
        <div className="links-header">
          <Link to="/">
            <FiArrowLeft size={38} color='#FFF' />
          </Link>
          <h1>Meus Links</h1>
        </div>

        <div className="links-item">
          <button className="link">
            <FiLink size={18} color='#FFF' />
              http://sujeitoprogramador.com
          </button>
          <buton className="link-delete">
            <FiTrash size={24} color='#FF5454' />
          </buton>
        </div>
        
        <div className="links-item">
          <button className="link">
            <FiLink size={18} color='#FFF' />
              http://sujeitoprogramador.com
          </button>
          <buton className="link-delete">
            <FiTrash size={24} color='#FF5454' />
          </buton>
        </div>

      </div>
    )
}