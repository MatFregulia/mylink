import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import './links.css'
import { Link } from 'react-router-dom'

export default function Links() {
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