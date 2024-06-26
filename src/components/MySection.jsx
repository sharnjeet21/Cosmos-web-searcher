import React from 'react';
import TipCard from './TipCard';
import { Link } from 'react-router-dom';

const MySection = ({ section }) => {
    return (
        <section id={section.title} >
            <Link to={section.titlePath} target="_blank" rel="noopener noreferrer" className='pt-6 pb-2 text-secondary  font-Rey text-2xl block'>
                {section.title}
            </Link>
            {section.titleTip && <TipCard />}
            <div className='items-center font-Outfit'>
                <ul className='pt-3'>
                    {section.links.map(link => (
                        <li key={link.id}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className='text-orange font-semibold'>
                                {link.desc} {"- "}
                                <span className='text-secondary'>{link.sub}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default MySection;
