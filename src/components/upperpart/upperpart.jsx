import React from 'react';
import { useState } from 'react';
import './upperpart.css';
import main from '../../assets/main.png';
import HEADER from '../header/header.jsx'

function header() {

    return (
        
        <div className="upperpart">
            <HEADER />

            <div className="containerupr">


                <div className="txtprt">

                    <div className="txtprtrtra">
                        <h1 className='txtprtfrsth'>Azerbaijan <span className='yellow'>.</span></h1>
                        <h1 className='txtprtscndh'>The great adventure</h1>

                        <p className='txtprtp'>We offer you our handpicked tours and excursions for an incredible vacation in Azerbaijan</p>
                    </div>

                    <div className="mainpicprt">
                        <img src={main} className='main' />
                    </div>
                </div>
            </div>
            <>
                   {/* <ul className='destinations'>
                            <li onClick={() => {
                                handleCityChange('Baku')
                                handleCityInfoChange('Baku, the capital and largest city of Azerbaijan, is a vibrant metropolis blending ancient heritage and modernity. Our tours of Baku offer an insightful journey through its most captivating landmarks and unique sites. From the historical charm of the Old City (Icherisheher) to the futuristic Flame Towers, our knowledgeable guides will share intriguing stories and give you a glimpse into the dynamic life and rich culture of contemporary Baku residents. Discover the enchanting blend of East and West that defines this fascinating city.');
                            }}>Baku</li>

                            <li onClick={() => {
                                handleCityChange('Gabala')
                                handleCityInfoChange('Gabala, nestled amidst the picturesque landscapes of Azerbaijan, is a hidden gem waiting to be explored. Our tours of Gabala offer a delightful journey through its serene natural beauty and cultural attractions. From the tranquil shores of Lake Nohur to the adventurous trails of Tufandag Mountain, Gabala captivates visitors with its diverse offerings. Our experienced guides will unravel the secrets of this enchanting region, sharing stories of its rich history and vibrant culture. Immerse yourself in the charm of Gabala and experience the perfect blend of relaxation and adventure amidst the breathtaking scenery of Azerbaijan.');
                            }}>Gabala</li>

                            <li onClick={() => {
                                handleCityChange('Gusar')
                                handleCityInfoChange('Gusar, a picturesque town nestled in the foothills of the Greater Caucasus Mountains in Azerbaijan, offers a serene retreat for nature lovers and adventurers alike. Our tours of Gusar invite you to explore its pristine landscapes, lush forests, and majestic mountain peaks. From the tranquil beauty of Laza Village to the exhilarating trails of Shahdag National Park, Gusar mesmerizes visitors with its natural wonders and outdoor activities. Our knowledgeable guides will lead you through this enchanting region, sharing insights into its unique flora and fauna, as well as the rich cultural heritage of its inhabitants. Discover the tranquility and charm of Gusar as you embark on an unforgettable journey amidst the stunning vistas of the Caucasus Mountains.');
                            }}>Gusar</li>

                            <li onClick={() => {
                                handleCityChange('Ismailly')
                                handleCityInfoChange("Ismailly, situated in the heart of Azerbaijan's lush greenery and rolling hills, offers a tranquil escape from the hustle and bustle of city life. Our tours of Ismailly invite you to immerse yourself in the serene beauty of this charming region. From the tranquil waters of Lake Shamkir to the picturesque landscapes of Lahij Village, Ismailly captivates visitors with its natural splendor and rich cultural heritage. Our experienced guides will take you on a journey through the region's hidden gems, sharing stories of its history, traditions, and the warm hospitality of its people. Whether you're exploring ancient mosques, wandering through vineyards, or simply enjoying the tranquility of the countryside, Ismailly promises an unforgettable experience for all who visit.");
                            }}>Ismailly</li>

                            <li onClick={() => {
                                handleCityChange('Lankaran')
                                handleCityInfoChange("Lankaran, a coastal city nestled along the Caspian Sea in Azerbaijan, beckons with its blend of natural beauty and cultural heritage. Our tours of Lankaran offer a glimpse into the charm of this coastal gem, where lush greenery meets sandy beaches. From exploring the historic Khan's Palace to wandering through the vibrant bazaars of the Old Town, Lankaran captivates visitors with its rich history and bustling atmosphere. Our knowledgeable guides will lead you through the city's winding streets, sharing stories of its past and present, as well as introducing you to the flavors of local cuisine. Whether you're strolling along the promenade or venturing into the surrounding countryside, Lankaran promises an immersive experience that celebrates the beauty and diversity of Azerbaijan's southern coast.");
                            }}>Lankaran</li>

                            <li onClick={() => {
                                handleCityChange('Lerik')
                                handleCityInfoChange("Lankaran, a coastal city nestled along the Caspian Sea in Azerbaijan, beckons with its blend of natural beauty and cultural heritage. Our tours of Lankaran offer a glimpse into the charm of this coastal gem, where lush greenery meets sandy beaches. From exploring the historic Khan's Palace to wandering through the vibrant bazaars of the Old Town, Lankaran captivates visitors with its rich history and bustling atmosphere. Our knowledgeable guides will lead you through the city's winding streets, sharing stories of its past and present, as well as introducing you to the flavors of local cuisine. Whether you're strolling along the promenade or venturing into the surrounding countryside, Lankaran promises an immersive experience that celebrates the beauty and diversity of Azerbaijan's southern coast.");
                            }}>Lerik</li>

                            <li onClick={() => {
                                handleCityChange('Guba')
                                handleCityInfoChange("Guba, nestled in the northeastern region of Azerbaijan, is a captivating destination renowned for its stunning natural landscapes and rich cultural heritage. Our tours of Guba offer a remarkable journey through this diverse region, where verdant forests, alpine meadows, and majestic mountains beckon adventurers and nature lovers alike. From exploring the historic sites of the ancient city to immersing yourself in the traditional way of life of rural villages, Guba captivates visitors with its authenticity and charm. Our knowledgeable guides will lead you on an exploration of Guba's hidden treasures, sharing insights into its history, traditions, and the warm hospitality of its people. Whether you're trekking through the rugged terrain of the Caucasus Mountains, sampling local delicacies at bustling markets, or simply taking in the breathtaking scenery, Guba promises an unforgettable experience that celebrates the beauty and diversity of Azerbaijan's northern region.");
                            }}>Guba</li>

                            <li onClick={() => {
                                handleCityChange('Shusha')
                                handleCityInfoChange("Shusha, located in the heart of the Karabakh region, is a city steeped in history and cultural significance. Often referred to as the cultural capital of Azerbaijan, Shusha boasts a rich tapestry of historical landmarks, architectural marvels, and breathtaking landscapes. Our tours of Shusha offer a deep dive into its storied past and vibrant present. You'll explore the ancient Shusha Fortress, wander through the charming streets lined with historical buildings, and visit significant cultural sites such as the Yukhari Govhar Agha Mosque and the Natavan House. Our knowledgeable guides will share fascinating stories about Shusha's heritage, from its role in Azerbaijani history to its contributions to music, literature, and the arts. Nestled amidst the picturesque mountains, Shusha provides a serene yet inspiring setting that captivates every visitor. Discover the resilience, spirit of Shusha's people as you immerse yourself in the unique blend of natural beauty and cultural richness that defines this extraordinary city.");
                            }}>Shusha</li>

                            <li onClick={() => {
                                handleCityChange('Khankandi')
                                handleCityInfoChange("Khankandi, the largest city in the Karabakh region, is a hub of cultural and historical significance. Known for its vibrant atmosphere and scenic surroundings, Khankandi is a city that beautifully melds the old with the new. Our tours of Khankandi provide an in-depth exploration of its most notable attractions and hidden gems. You will visit historical landmarks such as the Weeping Spring and enjoy the lush greenery of city parks. The city's rich history is evident in its architecture and cultural institutions, including museums and theaters that showcase the region's heritage. Our experienced guides will narrate captivating stories about Khankandi's past, its strategic importance, and its cultural evolution. Nestled in the picturesque foothills of the Lesser Caucasus Mountains, Khankandi offers stunning views and a peaceful retreat into nature. Discover the dynamic life of Khankandi residents and the cultural depth that makes this city a unique destination for travelers.");
                            }}>Khankandi</li>
                        </ul> */}
            </>
        </div>

    )
}

export default header