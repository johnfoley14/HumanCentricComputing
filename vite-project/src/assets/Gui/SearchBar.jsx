import { useState } from 'react';
import { Search } from '@carbon/react';
import { useNavigate } from 'react-router-dom';
import '@carbon/react/scss/components/search/_index.scss';

const SearchBar = () => {
  const navigate = useNavigate();
  const list = [
        'Logout',
        'Data',
        'Home',
        'ISE', 
        'W3Schools', 
        'UL', 
        'Github',
        'React Documentation',
        'Java API',];
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredList = list.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (item) => {
    console.log('Item clicked:', item);
    if(item === 'Logout'){
      navigate('/logout');
    } else if(item === 'Data'){
        navigate('/data');
    } else if(item === 'Home'){
        navigate('/');
    } else if(item === 'ISE'){
      window.open('https://software-engineering.ie/what-you-need-to-know/', '_blank');
    } else if(item === 'W3Schools'){
      window.open('https://www.w3schools.com/', '_blank');
    } else if(item === 'UL'){
      window.open('https://www.ul.ie/', '_blank');
    } else if(item === 'Github'){
      window.open('https://github.com');
    } else if(item === 'React Documentation'){
        window.open('https://reactjs.org/docs/getting-started.html', '_blank');
    } else if(item === 'Java API'){
        window.open('https://docs.oracle.com/en/java/javase/11/docs/api/index.html', '_blank');   
    }
  };

  return (
    <div>
      <Search
        labelText="Search"
        placeholder="Search items..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredList.map((item, index) => (
          <span 
            key={index} 
            style={{ display: "block", padding: "5px", cursor: "pointer" }}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

