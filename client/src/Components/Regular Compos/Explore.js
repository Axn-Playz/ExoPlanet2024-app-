import React, { useState } from 'react';
import Nav from '../Reusable Compos/Nav';
// import OrbitSimulation from '../Reusable Compos/OrbitSimulation';


    const exoplanets = [
        {
            
                name: 'Proxima Centauri b',
                distance: '4.24 ly',
                description: 'The closest exoplanet to Earth.',
                details: `Proxima Centauri b is an exoplanet located in the habitable zone of the red dwarf star Proxima Centauri, which is the closest star to the Sun, at a distance of 4.24 light-years. This exoplanet has drawn significant attention since its discovery in 2016, as it is the closest known potentially habitable exoplanet to our solar system. Proxima Centauri b orbits its star at a distance of just 0.05 AU, completing one orbit every 11 Earth days. Despite being very close to its star, Proxima Centauri b resides in the star's habitable zone due to the dim nature of red dwarf stars.
            
                With a minimum mass of 1.17 times that of Earth, Proxima Centauri b is considered an Earth-like planet, though many uncertainties remain about its atmosphere, composition, and potential habitability. It is speculated that the planet may be tidally locked, meaning one side always faces the star while the other remains in perpetual darkness. If this is true, it would create extreme conditions, with one hemisphere bathed in constant daylight and the other in eternal night. However, the existence of an atmosphere could potentially distribute heat across the planet, making it more temperate.
            
                Proxima Centauri b's proximity to its host star raises concerns about the impact of stellar flares. Red dwarf stars like Proxima Centauri are known for their frequent and powerful solar flares, which could strip away the atmosphere of a planet in close orbit or subject its surface to high levels of radiation. For this reason, scientists are keen to learn whether Proxima Centauri b has a protective atmosphere, or if its conditions are too harsh for life as we know it.
            
                Despite these challenges, Proxima Centauri b remains one of the best candidates for studying exoplanetary habitability. Its relatively close distance to Earth makes it an enticing target for future observation missions, including the search for biosignatures. Upcoming space missions, such as the James Webb Space Telescope (JWST), are expected to provide more detailed observations that could shed light on the planet's atmosphere and surface conditions.
            
                Another intriguing aspect of Proxima Centauri b is the potential for water. If the planet's atmosphere is thick enough, water could exist in liquid form on its surface, especially in regions that are not exposed to the star's intense radiation. Additionally, the planet's proximity to Earth raises the possibility of direct exploration in the distant future. Technologies like Breakthrough Starshot, a proposed project to send small spacecraft to nearby stars at a fraction of the speed of light, could make it possible to study Proxima Centauri b more closely within our lifetime.
            
                In summary, Proxima Centauri b offers both exciting opportunities and significant challenges in the quest to understand exoplanets and the possibility of life beyond Earth. While it is uncertain whether this exoplanet harbors life, its proximity to our solar system and its location within the habitable zone make it a prime candidate for further study, representing humanity's best chance at observing and understanding a potentially habitable world outside of our own solar system.`,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Artist%E2%80%99s_impression_of_Proxima_Centauri_b_shown_hypothetically_as_an_arid_rocky_super-earth.jpg/290px-Artist%E2%80%99s_impression_of_Proxima_Centauri_b_shown_hypothetically_as_an_arid_rocky_super-earth.jpg'
            }
            ,
            {
                name: 'Kepler-186f',
                distance: '500 ly',
                description: 'First Earth-sized planet in the habitable zone.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Kepler186f-ArtistConcept-20140417.jpg/290px-Kepler186f-ArtistConcept-20140417.jpg',
                details: `Kepler-186f is a groundbreaking discovery in the search for habitable exoplanets. Discovered in 2014 by NASA’s Kepler Space Telescope, this exoplanet was the first Earth-sized planet found in the habitable zone of its star, Kepler-186. Located about 500 light-years from Earth in the constellation Cygnus, Kepler-186f orbits its red dwarf star every 130 Earth days. What makes Kepler-186f particularly exciting is that it receives just a third of the energy that Earth gets from the Sun, placing it in a region where temperatures might allow liquid water to exist on its surface—if conditions are right.
            
                Kepler-186f has a radius approximately 1.1 times that of Earth, and while its mass is not precisely known, it is expected to have a similar composition, likely consisting of rock and iron. Although red dwarf stars like Kepler-186 are cooler and dimmer than the Sun, they are incredibly long-lived, providing stable environments for planetary systems to evolve. However, like other planets orbiting red dwarfs, Kepler-186f may be subjected to solar flares and radiation from its star, which could affect its habitability.
            
                One major unknown is whether Kepler-186f has an atmosphere capable of supporting life. If it does, the atmosphere could play a crucial role in regulating the planet’s temperature and protecting it from stellar radiation. Without an atmosphere, the planet’s surface could be too cold or too hot, depending on which side is facing its star.
            
                The discovery of Kepler-186f marked a major milestone in exoplanet research because it showed that Earth-like planets could exist around other stars, especially around the most common type of stars in the galaxy—red dwarfs. Since then, astronomers have discovered many more potentially habitable planets, but Kepler-186f remains one of the most intriguing candidates for further study due to its size and location in the habitable zone.
            
                Future telescopes, such as the James Webb Space Telescope, will be able to gather more information about Kepler-186f, potentially revealing whether it has an atmosphere, what its climate is like, and whether it could support life. While direct exploration of this planet is beyond our current capabilities, Kepler-186f continues to be a symbol of hope in the search for life beyond our solar system.`,
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/PIA19123-Kepler186f-20150417.jpg/220px-PIA19123-Kepler186f-20150417.jpg'
            },
            
            {
                name: 'TRAPPIST-1e',
                distance: '39 ly',
                description: 'One of the seven planets in the TRAPPIST system.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/TRAPPIST-1d_artist_impression_2018.png/290px-TRAPPIST-1d_artist_impression_2018.png',
                details: `TRAPPIST-1e is one of the most fascinating exoplanets discovered to date. Located just 39 light-years away from Earth, TRAPPIST-1e is part of a compact planetary system containing seven known planets, all of which are Earth-sized and rocky. This exoplanet is particularly interesting because it lies in the habitable zone of its ultra-cool dwarf star, meaning it could potentially have conditions suitable for liquid water and, by extension, life.
            
                Discovered in 2017 by the TRAPPIST telescope in Chile, TRAPPIST-1e orbits its star at a distance of 0.029 AU, completing one orbit every 6.1 Earth days. Despite its close proximity to its star, the low luminosity of the TRAPPIST-1 star means that TRAPPIST-1e receives about the same amount of energy from its star as Earth does from the Sun. This makes it one of the best candidates for studying the potential for life on planets orbiting red dwarf stars.
            
                One of the most intriguing aspects of the TRAPPIST-1 system is the potential for habitability on multiple planets. In addition to TRAPPIST-1e, several other planets in the system, including TRAPPIST-1d and TRAPPIST-1f, are also located in the habitable zone. This raises the exciting possibility that life could exist on more than one planet in this system.
            
                However, like other planets orbiting red dwarfs, TRAPPIST-1e faces significant challenges to habitability. Red dwarf stars are known for their intense stellar flares, which could strip away the atmospheres of nearby planets. Whether TRAPPIST-1e has an atmosphere capable of protecting it from these flares remains an open question. Scientists are hopeful that upcoming observations with the James Webb Space Telescope will provide more information about the atmospheres of the TRAPPIST-1 planets, including TRAPPIST-1e.
            
               
            
                While much remains to be learned about TRAPPIST-1e, its discovery has revolutionized our understanding of planetary systems and the potential for life beyond our solar system. The TRAPPIST-1 system has shown that even small, cool stars can host multiple planets, some of which may be capable of supporting life.`,
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TRAPPIST-1e_artist%27s_impression_2018.png/220px-TRAPPIST-1e_artist%27s_impression_2018.png'
            }
            ,
            {
                name: 'Gliese 667 Cc',
                distance: '23.62 ly',
                description: 'A potentially habitable super-Earth.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Gliese_667_Cc_sunset.jpg/225px-Gliese_667_Cc_sunset.jpg',
                details: `Gliese 667 Cc is an exciting exoplanet discovery located just 23.62 light-years away in the constellation Scorpius. Orbiting the red dwarf star Gliese 667 C, this planet is classified as a super-Earth, with a mass at least 4.5 times that of Earth. What makes Gliese 667 Cc particularly interesting is its location within the habitable zone of its star, where conditions could allow liquid water to exist on the planet’s surface.
            
                Discovered in 2011, Gliese 667 Cc is one of the most promising candidates for habitability outside our solar system. The planet orbits its star every 28 days at a distance of about 0.125 AU. Despite its close orbit, the planet receives a similar amount of energy from its star as Earth does from the Sun, thanks to the dim nature of the red dwarf Gliese 667 C. This places Gliese 667 Cc within the “Goldilocks zone,” where temperatures are neither too hot nor too cold for liquid water, a crucial ingredient for life as we know it.
            
                Red dwarfs like Gliese 667 C are much cooler and dimmer than our Sun, and they are known to be relatively stable over long periods of time. This long-lived nature allows planets like Gliese 667 Cc to remain in potentially habitable zones for billions of years, giving life ample time to evolve. However, one of the potential drawbacks of red dwarf stars is the tendency to produce strong stellar flares, which could pose a threat to any atmosphere the planet may have.
            
                Scientists are particularly keen to study the atmosphere of Gliese 667 Cc to determine its habitability. If the planet has a thick atmosphere with a greenhouse effect similar to Earth’s, it could retain heat and maintain stable surface temperatures. On the other hand, if Gliese 667 Cc lacks an atmosphere or has a very thin one, the planet could be too cold for life. Models of the planet’s climate suggest that the possibility of habitability depends heavily on its atmospheric composition.
            
                Another important aspect of Gliese 667 Cc is its classification as a super-Earth. With a higher mass than Earth, Gliese 667 Cc could have stronger gravity and thicker atmospheres, potentially creating conditions different from what we experience on Earth. The surface could be rocky, with mountains and valleys, but the higher gravity could also affect how the planet holds on to its atmosphere and oceans.
            
                In summary, Gliese 667 Cc represents one of the best chances for finding a habitable world beyond our solar system. Its relatively close proximity to Earth makes it an excellent candidate for future observations with telescopes like the James Webb Space Telescope, which may be able to detect signs of an atmosphere and potentially even biosignatures. Whether or not Gliese 667 Cc harbors life, its discovery has expanded our understanding of the types of planets that can exist in the habitable zones of red dwarf stars.`,
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gliese_667_Cc_artist_impression.jpg/220px-Gliese_667_Cc_artist_impression.jpg'
            }
            ,
            {
                name: 'Kepler-452b',
                distance: '1,400 ly',
                description: 'Known as Earth’s cousin.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Kepler-452b_artist_concept.jpg/290px-Kepler-452b_artist_concept.jpg',
                details: `Kepler-452b, often referred to as Earth’s cousin, is one of the most intriguing exoplanets discovered in recent years. Located about 1,400 light-years away in the constellation Cygnus, Kepler-452b orbits a G-type star (like our Sun) in the star’s habitable zone. This discovery was announced by NASA in 2015, and it sparked widespread interest because of its similarities to Earth. 
            
                Kepler-452b is approximately 60% larger than Earth, making it a super-Earth, and it orbits its star at a distance that allows for the possibility of liquid water on its surface. The exoplanet completes one orbit around its star every 385 days, a time frame very similar to Earth’s year. The star itself, Kepler-452, is slightly older and a bit more luminous than our Sun, which suggests that Kepler-452b may be experiencing a greenhouse effect, leading to warmer conditions than we experience on Earth.
            
                What makes Kepler-452b particularly fascinating is the possibility that it could host life or have hosted life in the past. While its exact composition is unknown, it is believed that Kepler-452b is a rocky planet, like Earth, with potential surface features such as mountains and oceans. The fact that the planet has been in its star’s habitable zone for billions of years means that life, if it ever existed, had ample time to develop.
            
                One of the biggest unknowns about Kepler-452b is its atmosphere. While it’s possible that the planet has retained a thick atmosphere that could support life, it’s equally possible that it has lost its atmosphere due to the increased luminosity of its aging star. This makes Kepler-452b a prime candidate for further study, particularly with future telescopes like the James Webb Space Telescope, which may be able to detect signs of an atmosphere or even biosignatures.
            
                Kepler-452b also raises important questions about the future of Earth. The star it orbits, Kepler-452, is about 1.5 billion years older than our Sun, meaning that Kepler-452b may provide a glimpse into what Earth could look like in the distant future as our Sun ages and becomes more luminous. Studying planets like Kepler-452b helps scientists understand the long-term habitability of Earth-like planets and the factors that contribute to or detract from the possibility of life.
            
                In conclusion, Kepler-452b represents a tantalizing possibility for life beyond Earth. While we don’t yet know whether it is truly habitable, its similarities to Earth make it a key target for future observations and studies. Whether or not we eventually discover life on Kepler-452b, its existence has deepened our understanding of the diversity of planets in our galaxy and the conditions necessary for habitability.`,
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Kepler-452b_artist_concept.jpg/290px-Kepler-452b_artist_concept.jpg'
            }
            ,
            {
                name: 'HD 40307 g',
                distance: '42 ly',
                description: 'A super-Earth that could harbor life.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/HD40307g_with_earth.png/290px-HD40307g_with_earth.png',
                details: `HD 40307 g is an exoplanet located 42 light-years from Earth in the constellation Pictor. Orbiting the star HD 40307, this planet is classified as a super-Earth, with a mass at least 7.1 times that of Earth. Discovered in 2012 by astronomers using the radial velocity method, HD 40307 g lies within the habitable zone of its star, where conditions could potentially allow for liquid water to exist.
            
                HD 40307 g orbits its star at a distance of about 0.6 AU and takes around 200 Earth days to complete one orbit. What makes this planet particularly intriguing is its location in the habitable zone, also known as the “Goldilocks zone,” where temperatures could be just right for life to exist. However, the planet’s exact composition, atmosphere, and surface conditions remain unknown, making it difficult to determine whether HD 40307 g could truly harbor life.
            
                As a super-Earth, HD 40307 g is larger and more massive than our planet, which means it could have a stronger gravitational pull and a thicker atmosphere. If it has a dense atmosphere, it could create conditions that are conducive to life by regulating the planet’s temperature and protecting it from harmful stellar radiation. On the other hand, a thick atmosphere could also create a runaway greenhouse effect, similar to what we see on Venus, making the surface too hot for life.
            
                The star that HD 40307 g orbits, HD 40307, is a K-type main-sequence star, which is slightly cooler and smaller than our Sun. K-type stars are known for their stability and long lifespans, providing a steady environment for planets to potentially develop life. This stability makes HD 40307 g an excellent candidate for further study, as long-lived stars give planets in their habitable zones more time to develop and sustain life.
            
                One of the key questions surrounding HD 40307 g is whether it has an atmosphere and, if so, what that atmosphere is composed of. Future telescopes, like the James Webb Space Telescope, could provide more information about the planet’s atmosphere by analyzing the light that passes through it. If HD 40307 g has a thick, Earth-like atmosphere, it could potentially support life forms similar to those found on Earth. However, without direct observations, it’s impossible to say for certain whether HD 40307 g is habitable.
            
                In summary, HD 40307 g is a fascinating super-Earth located in the habitable zone of its star. While much remains unknown about the planet, its size, location, and orbit make it a prime candidate for future study. Whether or not it is truly capable of supporting life, HD 40307 g has already provided valuable insights into the diversity of planets in our galaxy and the potential for life beyond Earth.`,
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/HD_40307_g.png/220px-HD_40307_g.png'
            }
            ,
            {
                name: 'Kepler-22b',
                distance: '620 ly',
                description: 'A planet in the habitable zone of its star.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kepler22b-artwork.jpg/220px-Kepler22b-artwork.jpg',
                details: `Kepler-22b was one of the first exoplanets discovered to be in the habitable zone of a star similar to our Sun. This planet, located about 620 light-years away in the constellation Cygnus, was discovered by NASA's Kepler Space Telescope in 2009. Kepler-22b orbits a G-type star, Kepler-22, which is slightly cooler than our Sun, but still similar in size and composition. 
            
                One of the key features that make Kepler-22b stand out is its location in its star’s habitable zone. The planet is approximately 2.4 times the radius of Earth, making it a super-Earth, and it completes one orbit around its star every 290 days. This orbit places Kepler-22b within the so-called "Goldilocks zone," where conditions could be just right for liquid water to exist on the surface, a key ingredient for life as we know it. 
            
                While Kepler-22b’s size suggests it may have a thick atmosphere, scientists are still unsure about its exact composition. Some models suggest that the planet could be a rocky world like Earth, but others speculate that it might be more similar to a mini-Neptune, with a deep, thick atmosphere composed of hydrogen and helium. If the latter is true, Kepler-22b may not be habitable, as the thick atmosphere could create extreme pressure and temperature conditions on the surface.
            
                Despite the uncertainties about its composition, Kepler-22b remains one of the most exciting exoplanets for further study. Its relatively close distance to Earth and its position in the habitable zone make it a prime candidate for future observation with telescopes like the James Webb Space Telescope. Scientists are particularly interested in studying the planet’s atmosphere to determine whether it has the potential to support life.
            
                In addition to its potential habitability, Kepler-22b has also sparked interest because of its implications for the search for other Earth-like planets. The discovery of Kepler-22b was a major milestone in the field of exoplanet research, as it confirmed that planets in the habitable zones of stars are more common than previously thought. Kepler-22b’s discovery paved the way for the discovery of many other potentially habitable exoplanets in the years since.
            
                Although much remains unknown about Kepler-22b, its discovery has been a significant step forward in the search for habitable planets beyond our solar system. Whether or not life exists on Kepler-22b, its position in the habitable zone and its size make it a key target for future study, as scientists continue to search for planets that could potentially support life.`,
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Kepler22b-ArtistConcept-20130522.jpg/220px-Kepler22b-ArtistConcept-20130522.jpg'
            }
            ,
            {
                name: 'LHS 1140 b',
                distance: '40 ly',
                description: 'A super-Earth with potential for habitability.',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Artist%E2%80%99s_impression_of_the_super-Earth_exoplanet_LHS_1140b.jpg/290px-Artist%E2%80%99s_impression_of_the_super-Earth_exoplanet_LHS_1140b.jpg',
                details: `LHS 1140 b is a super-Earth exoplanet located just 40 light-years from Earth in the constellation Cetus. Discovered in 2017 by astronomers using the MEarth-South telescope, LHS 1140 b is a rocky planet that orbits a red dwarf star called LHS 1140. What makes LHS 1140 b particularly exciting is that it lies within the habitable zone of its star, where conditions could allow for the existence of liquid water on the surface.
            
                LHS 1140 b is about 6.6 times more massive than Earth, and it has a radius about 1.4 times that of our planet. This makes it a super-Earth, with a much stronger gravitational pull than Earth. Despite its larger size, LHS 1140 b has a similar density to Earth, indicating that it is likely a rocky planet with a composition similar to that of our planet. 
            
                One of the most interesting aspects of LHS 1140 b is its orbit around a red dwarf star. Red dwarfs are cooler and smaller than our Sun, but they can be very stable, making them excellent candidates for hosting habitable planets. LHS 1140 b orbits its star every 24.7 days, which places it within the star’s habitable zone. Because LHS 1140 is a relatively dim star, LHS 1140 b receives less energy than Earth does from the Sun, but this could still allow for temperate conditions on the planet’s surface if it has a thick atmosphere.
            
                Red dwarf stars are known for their long lifespans, and LHS 1140 is no exception. This stability could allow LHS 1140 b to remain in its star’s habitable zone for billions of years, giving life plenty of time to evolve if the necessary conditions are present. However, one of the challenges with planets orbiting red dwarf stars is that these stars can sometimes produce powerful stellar flares, which could strip away a planet’s atmosphere over time. The stability of LHS 1140 and the presence of a thick atmosphere could be crucial factors in determining the habitability of LHS 1140 b.
            
                Scientists are particularly interested in studying LHS 1140 b’s atmosphere, as it could provide important clues about the planet’s potential habitability. If the planet has a thick atmosphere rich in water vapor and other gases, it could have the potential to support life. On the other hand, if the planet has lost its atmosphere due to stellar flares or other factors, it may be too cold and inhospitable for life.
            
                In summary, LHS 1140 b is a fascinating super-Earth located in the habitable zone of a red dwarf star. While much remains unknown about the planet, its size, composition, and orbit make it a prime candidate for future study. Whether or not it is truly habitable, LHS 1140 b represents an exciting opportunity to learn more about the diversity of planets in our galaxy and the potential for life beyond Earth.`,
                image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/LHS_1140_b_Artist_Impression.jpg/220px-LHS_1140_b_Artist_Impression.jpg'
            }
            ,
            { 
                name: 'WASP-18b', 
                distance: '330 ly', 
                description: 'A gas giant exoplanet.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Exoplanet_Comparison_WASP-18_b.png/290px-Exoplanet_Comparison_WASP-18_b.png',
                details: `WASP-18b is an intriguing gas giant located approximately 330 light-years away from Earth in the constellation of Centaurus. Discovered in 2009, this exoplanet is classified as a "hot Jupiter" due to its size and proximity to its host star, WASP-18. The planet has a mass that is about 10 times that of Jupiter, and it orbits its star at an astonishing distance of just 0.015 AU (astronomical units), making its orbital period a mere 23.9 hours. This close proximity leads to extreme atmospheric conditions and temperatures, which can reach upwards of 1,000 degrees Celsius. 
        
                WASP-18b's host star is a bright F-type star, which contributes to the intense heat experienced by the planet. The combination of its mass and proximity to its star makes WASP-18b an ideal candidate for studying the atmospheres of gas giants. Scientists have utilized techniques such as transmission spectroscopy to analyze the atmosphere of WASP-18b, revealing the presence of elements like sodium and potassium. 
        
                One of the most fascinating aspects of WASP-18b is its stability and the peculiar characteristics of its orbit. The planet's tight orbit and mass have led to significant gravitational interactions with its host star, resulting in unique tidal heating effects. This heating may play a role in the atmospheric dynamics of the planet and could contribute to the overall thermal structure of its atmosphere. 
        
                As researchers continue to study WASP-18b, they hope to gain insights into the formation and evolution of gas giants, particularly those that exist in close orbits around their stars. The findings from WASP-18b may also inform our understanding of other similar exoplanets and their potential habitability. With its extreme conditions and dynamic atmosphere, WASP-18b remains a key target for exoplanet research.` 
            },
            { 
                name: 'WASP-39b', 
                distance: '319 ly', 
                description: 'A gas giant located in the constellation Virgo.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Wasp-39b_and_its_parent_star_%28artist%E2%80%99s_impression%29.jpg/290px-Wasp-39b_and_its_parent_star_%28artist%E2%80%99s_impression%29.jpg',
                details: `WASP-39b is a fascinating gas giant exoplanet located about 319 light-years away from Earth in the constellation Virgo. Discovered in 2014, WASP-39b is known for its relatively low density, which suggests that it has a significant amount of hydrogen and helium in its composition. With a mass similar to that of Saturn, WASP-39b is classified as a "sub-Jupiter," being larger than typical gas giants but smaller than Jupiter itself.
        
                The planet orbits its host star, WASP-39, at a distance of just 0.03 AU, leading to an incredibly short orbital period of about 4 days. This proximity to its star results in extreme atmospheric conditions, with temperatures that can exceed 800 degrees Celsius. The intense heat allows researchers to study the atmosphere's composition through methods like transmission spectroscopy, which has revealed the presence of water vapor, sodium, and other molecules.
        
                The discovery of water vapor in WASP-39b's atmosphere has been particularly exciting for scientists. The planet's atmosphere is thought to be quite cloudy, which may have implications for the climate and weather patterns on the planet. The presence of water vapor also raises questions about the potential for similar conditions on other exoplanets, especially those in the habitable zone of their stars.
        
                Researchers are also intrigued by the interactions between WASP-39b and its host star. The gravitational pull between the two can lead to interesting tidal forces that may affect the planet's atmospheric dynamics. Understanding these interactions is crucial for modeling the climate and potential habitability of gas giants like WASP-39b and similar exoplanets.
        
                As technology advances, astronomers hope to conduct more detailed observations of WASP-39b, allowing for a deeper understanding of its atmospheric properties and formation history. This research may shed light on the broader implications for gas giants' formation in various stellar environments, making WASP-39b a key target for future studies.` 
            },
            { 
                name: 'WASP-121b', 
                distance: '850 ly', 
                description: 'A hot Jupiter with an atmosphere.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/WASP-121b_01.jpg/290px-WASP-121b_01.jpg',
                details: `WASP-121b is a remarkable hot Jupiter located about 850 light-years away from Earth in the constellation Puppis. Discovered in 2015, this exoplanet stands out for its unique atmospheric characteristics and extreme temperatures. WASP-121b is classified as a hot Jupiter due to its size and close orbit around its host star, WASP-121. The planet has a mass approximately 1.2 times that of Jupiter and orbits its star at an incredibly short distance of about 0.033 AU, resulting in an orbital period of just 1.3 days.
        
                The intense heat experienced by WASP-121b has led to a highly dynamic atmosphere that scientists are eager to study. Using advanced techniques like transmission spectroscopy, researchers have detected the presence of various elements and molecules in the planet's atmosphere, including water vapor, sodium, and even hints of magnesium. The high temperatures, which can exceed 1,000 degrees Celsius, contribute to the planet's unique atmospheric chemistry.
        
                One of the most intriguing features of WASP-121b is its potential for extreme weather phenomena. The planet is believed to have strong winds that can reach speeds of up to 20 kilometers per second, leading to dramatic changes in its atmospheric structure. Additionally, the discovery of an exotic phenomenon known as "thermal inversion" has been reported, where the temperature in the upper atmosphere is higher than that at lower levels. This phenomenon suggests complex interactions between the planet's atmosphere and the intense radiation from its host star.
        
                WASP-121b is also notable for its potential to reveal insights into the atmospheres of other exoplanets. By studying its atmosphere and weather patterns, scientists can develop better models for understanding gas giants' formation and evolution. Furthermore, WASP-121b's extreme conditions make it a prime candidate for future observational campaigns, including those using space-based telescopes like the James Webb Space Telescope.
        
                Overall, WASP-121b presents a unique opportunity for astronomers to explore the complexities of exoplanet atmospheres, and ongoing research may unlock new understandings of how these distant worlds behave and evolve over time.` 
            },
            { 
                name: 'GJ 1132 b', 
                distance: '39 ly', 
                description: 'A rocky exoplanet similar to Earth.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Exoplanet_Comparison_GJ_1132_b.png/290px-Exoplanet_Comparison_GJ_1132_b.png',
                details: `GJ 1132 b is an intriguing rocky exoplanet located just 39 light-years away from Earth in the constellation Vela. Discovered in 2015, this exoplanet has garnered attention due to its similarities to Earth and its location within the habitable zone of its host star, GJ 1132. With a radius about 1.4 times that of Earth, GJ 1132 b is classified as a super-Earth, meaning it is larger than Earth but smaller than the gas giants.
        
                The planet orbits its host star at a distance of approximately 0.013 AU, resulting in a short orbital period of just 1.6 days. This close proximity to its star contributes to its surface temperatures, which may be high enough to sustain some form of atmosphere. Researchers have been particularly interested in studying GJ 1132 b to determine if it has retained any significant atmosphere and whether conditions could potentially support life.
        
                Initial observations of GJ 1132 b's atmosphere have revealed intriguing possibilities. Studies suggest that the planet may have a hydrogen-rich atmosphere, which could lead to interesting atmospheric chemistry. The presence of water vapor has been debated, and scientists are eager to conduct further observations to confirm its existence. If water vapor is detected, it could have profound implications for understanding the planet's potential habitability.
        
                GJ 1132 b also offers a unique opportunity for comparative planetology, allowing researchers to study how rocky exoplanets evolve differently under various stellar conditions. Understanding the atmospheric and surface characteristics of GJ 1132 b can provide insights into the formation of similar rocky exoplanets in different systems, including our own solar system.
        
                As technology advances, astronomers hope to use telescopes such as the James Webb Space Telescope to conduct more detailed studies of GJ 1132 b. This exoplanet represents an exciting frontier in the search for potentially habitable worlds beyond our solar system, making it a key target for ongoing and future research.` 
            },
            { 
                name: 'HD 209458 b', 
                distance: '159 ly', 
                description: 'One of the first exoplanets ever discovered.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Exoplanet_Comparison_HD_209458_b.png/290px-Exoplanet_Comparison_HD_209458_b.png',
                details: `HD 209458 b, also known as Osiris, is one of the most well-studied exoplanets, located approximately 159 light-years away in the constellation Pegasus. Discovered in 1999, it was one of the first exoplanets detected using the transit method, where the planet passes in front of its host star, causing a temporary dimming of the star's light. This groundbreaking discovery opened up new avenues for exoplanet research and has made HD 209458 b a prime target for scientists.
        
                Classified as a "hot Jupiter," HD 209458 b is a gas giant that orbits its host star, HD 209458, at a distance of only 0.047 AU. With an orbital period of about 3.5 days, the planet experiences extreme temperatures that can exceed 1,000 degrees Celsius. The intense heat and proximity to its star have made HD 209458 b an excellent candidate for atmospheric studies. 
        
                Researchers have utilized various observational techniques, including transmission spectroscopy, to study the planet's atmosphere. Findings have revealed the presence of water vapor, sodium, and carbon monoxide in HD 209458 b's atmosphere. The detection of sodium was particularly significant, as it marked the first time that an exoplanet's atmosphere was directly observed.
        
                One of the most intriguing aspects of HD 209458 b is its potential for atmospheric escape. The high temperatures and intense radiation from its host star may cause the planet's atmosphere to slowly evaporate over time. This phenomenon has led to the hypothesis that HD 209458 b may have lost a significant portion of its original atmosphere, raising questions about the long-term stability of gas giants in close orbits.
        
                Ongoing studies of HD 209458 b continue to provide valuable insights into the atmospheres of exoplanets and the processes that govern their formation and evolution. As observational technology improves, astronomers hope to gain a deeper understanding of this iconic exoplanet and its implications for the search for life beyond our solar system.` 
            },
            { 
                name: 'TRAPPIST-1d', 
                distance: '39 ly', 
                description: 'Another TRAPPIST planet with potential for life.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/TRAPPIST-1d_artist_impression_2018.png/290px-TRAPPIST-1d_artist_impression_2018.png',
                details: `TRAPPIST-1d is one of the seven Earth-sized planets discovered in the TRAPPIST-1 system, located about 39 light-years away from Earth in the constellation Aquarius. This exoplanet was identified in 2017, and its potential for habitability has made it a subject of great interest to scientists. TRAPPIST-1d orbits within the habitable zone of its host star, TRAPPIST-1, which is a cool M-type dwarf star.
        
                With a radius approximately 1.04 times that of Earth, TRAPPIST-1d is classified as a rocky planet. It has an orbital period of about 13 days, which means it completes an orbit around its star much faster than Earth. Despite its close proximity to its host star, TRAPPIST-1d is believed to have the potential to retain liquid water on its surface, making it a prime candidate for the search for extraterrestrial life.
        
                The TRAPPIST-1 system has garnered attention due to its unique arrangement of planets, all of which are relatively close to each other compared to our solar system. This close proximity allows for intriguing gravitational interactions that could influence the atmospheric conditions and climates of each planet. For TRAPPIST-1d, the possibility of tidal locking with its star could create a unique environment where one side is perpetually bathed in light while the other remains in darkness.
        
                Scientists are particularly interested in studying the atmospheres of the TRAPPIST-1 planets, including TRAPPIST-1d, to determine their composition and potential for habitability. Observations from telescopes like the James Webb Space Telescope may provide insights into the atmospheric properties of these planets and whether they contain the necessary conditions for life as we know it.
        
                Overall, TRAPPIST-1d represents a compelling target in the search for habitable exoplanets. Its location within the habitable zone and similarities to Earth make it a key candidate for future studies aimed at understanding the potential for life beyond our solar system.` 
            },
            { 
                name: 'K2-18b', 
                distance: '124 ly', 
                description: 'A planet located in the habitable zone.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Exoplanet_K2-18_b_%28Illustration%29.jpg/290px-Exoplanet_K2-18_b_%28Illustration%29.jpg',
                details: `K2-18b is an intriguing exoplanet located approximately 124 light-years away from Earth in the constellation Leo. Discovered in 2015, this planet is classified as a super-Earth and has garnered significant attention due to its position within the habitable zone of its host star, K2-18. With a radius about 2.6 times that of Earth, K2-18b offers potential insights into the characteristics of rocky planets and the conditions necessary for life.
        
                The planet orbits its host star at a distance of roughly 0.15 AU, resulting in an orbital period of about 33 days. The host star is a K-type dwarf, which emits less energy than our Sun, creating a more temperate environment for K2-18b. This positioning within the habitable zone suggests that K2-18b may have the potential to retain liquid water on its surface, a key ingredient for life as we understand it.
        
                Observations of K2-18b have revealed the presence of water vapor in its atmosphere, making it one of the first exoplanets to be confirmed with such a discovery. This finding has sparked interest in further investigating the planet's atmosphere to determine its composition and the potential for habitability. The detection of water vapor raises questions about the atmospheric pressure, temperature, and other environmental factors that could influence the existence of liquid water.
        
                Researchers are eager to study K2-18b to gain insights into its geological and atmospheric properties. Understanding the planet's structure and climate can provide valuable information about the formation and evolution of super-Earths. By comparing K2-18b to other rocky exoplanets, scientists can better understand the diversity of planetary systems and the potential for life beyond our solar system.
        
                K2-18b's unique characteristics make it a prime target for future observational campaigns. As telescopes and detection techniques continue to advance, astronomers hope to gather more data about K2-18b's atmosphere and its potential for supporting life. The ongoing research into this exoplanet reflects our broader quest to explore the possibilities of habitable worlds beyond our own.` 
            },
            { 
                name: 'WASP-43b', 
                distance: '263 ly', 
                description: 'A highly inflated hot Jupiter.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_Gas-Giant_Exoplanet_WASP-43_b_%28Artist%E2%80%99s_Concept%29_%282024-117%29.jpg/220px-Hot_Gas-Giant_Exoplanet_WASP-43_b_%28Artist%E2%80%99s_Concept%29_%282024-117%29.jpg',
                details: `WASP-43b is a highly inflated hot Jupiter located approximately 263 light-years away from Earth in the constellation Crater. Discovered in 2011, this exoplanet is particularly interesting due to its size and density, which is significantly lower than that of typical gas giants. With a mass similar to that of Jupiter, WASP-43b is much larger in volume, leading to its classification as an inflated hot Jupiter.
        
                The planet orbits its host star, WASP-43, at a distance of about 0.015 AU, resulting in an extremely short orbital period of just 19 hours. The proximity to its host star subjects WASP-43b to intense radiation and heat, with temperatures soaring to over 800 degrees Celsius. This extreme environment contributes to the planet's inflation and raises questions about the mechanisms driving the expansion of its atmosphere.
        
                Scientists have employed various observational techniques to study WASP-43b's atmosphere, revealing the presence of water vapor, carbon monoxide, and other molecules. The planet's highly inflated atmosphere is thought to be the result of intense heating, which may lead to unique atmospheric dynamics, including strong winds and thermal inversion effects.
        
                WASP-43b has become a key target for studying the atmospheric properties of hot Jupiters, providing insights into their formation and evolution. Researchers are particularly interested in understanding how the extreme conditions of WASP-43b affect its atmospheric composition and stability. The findings from WASP-43b can help astronomers refine their models for gas giants in close orbits around their stars.
        
                The ongoing research into WASP-43b also contributes to our understanding of the potential for atmospheric escape in hot Jupiters. The intense radiation from its host star may lead to the gradual loss of the planet's atmosphere over time, raising questions about the long-term habitability of similar exoplanets.
        
                As technology continues to advance, astronomers hope to conduct more detailed observations of WASP-43b, shedding light on its unique atmospheric characteristics and the broader implications for gas giant formation in various stellar environments.` 
            },
            { 
                name: 'Kepler-186c', 
                distance: '500 ly', 
                description: 'A super-Earth in the same system as Kepler-186f.', 
                image: 'https://cdn.sci.news/images/enlarge/image_1864_1e-Kepler-186f.jpg',
                details: `Kepler-186c is a fascinating super-Earth located about 500 light-years away in the constellation Cygnus. Discovered in 2014, this exoplanet is part of the Kepler-186 system, which also includes Kepler-186f, a planet located in the habitable zone. Kepler-186c is approximately 1.3 times the size of Earth and has a significant mass, indicating that it is likely rocky in composition.
        
                The planet orbits its host star, Kepler-186, at a distance of about 0.4 AU, resulting in an orbital period of about 130 days. Kepler-186 is a K-type dwarf star that emits less energy than our Sun, creating a more favorable environment for the potential development of life.
        
                While Kepler-186c is located outside the habitable zone, its size and mass suggest that it may still possess geological and atmospheric features that are of interest to scientists. Researchers are eager to study this planet to understand its characteristics and how they compare to other rocky exoplanets.
        
                The discovery of Kepler-186c has enhanced our understanding of planetary systems with diverse characteristics. It serves as a reminder of the potential for finding a variety of planets in different environments, each with unique features that could contribute to the overall picture of habitability in the universe.
        
                Ongoing studies of Kepler-186c will continue to provide valuable data that can help astronomers refine their models for super-Earths and the potential for life on such planets. The knowledge gained from Kepler-186c and its neighbors will contribute to our broader understanding of the formation and evolution of planetary systems.` 
            },
            { 
                name: 'WASP-80b', 
                distance: '330 ly', 
                description: 'A gas giant exoplanet.', 
                image: 'https://www.astronomy.com/uploads/2023/12/methane-wasp-80B.jpg',
                details: `WASP-80b is a gas giant exoplanet located approximately 330 light-years away from Earth in the constellation Pegasus. Discovered in 2013, this exoplanet has captured the interest of scientists due to its unique characteristics and relatively close proximity to Earth.
        
                With a mass similar to that of Jupiter, WASP-80b is classified as a hot Jupiter, characterized by its large size and short orbital period. It orbits its host star, WASP-80, at a distance of about 0.04 AU, resulting in an orbital period of just over 5 days. The intense heat from its close proximity to the host star leads to high temperatures, with surface temperatures exceeding 1,000 degrees Celsius.
        
                Observations of WASP-80b have revealed the presence of various molecules in its atmosphere, including water vapor and carbon monoxide. These findings have significant implications for understanding the atmospheric composition and evolution of gas giants in close orbits.
        
                The study of WASP-80b contributes to our broader knowledge of hot Jupiters and the factors influencing their formation and atmospheric dynamics. By examining this exoplanet, scientists aim to gain insights into the processes that govern the behavior of gas giants in extreme environments.
        
                As technology continues to improve, astronomers hope to conduct more in-depth studies of WASP-80b, leading to a greater understanding of the diversity of exoplanets and their atmospheric properties.` 
            },
            { 
                name: 'GJ 1214 b', 
                distance: '40 ly', 
                description: 'A sub-Neptune exoplanet.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Planet_GJ_1214_b.jpg/220px-Planet_GJ_1214_b.jpg',
                details: `GJ 1214 b is a sub-Neptune exoplanet located about 40 light-years away from Earth in the constellation Ophiuchus. Discovered in 2009, this exoplanet is classified as a "sub-Neptune" due to its size and mass, which fall between that of Earth and Neptune.
        
                With a radius approximately 2.7 times that of Earth, GJ 1214 b orbits its host star, GJ 1214, at a distance of about 0.014 AU, resulting in an orbital period of approximately 38 hours. The planet's close proximity to its host star subjects it to intense heat, with surface temperatures reaching around 200 degrees Celsius.
        
                GJ 1214 b has gained significant interest due to its atmospheric composition. Observations have detected water vapor in its atmosphere, suggesting the presence of a thick atmosphere that could support clouds and potentially even rain. The discovery of water vapor on GJ 1214 b makes it a key target for further studies aimed at understanding the atmospheric properties and potential habitability of sub-Neptune exoplanets.
        
                The ongoing research into GJ 1214 b aims to explore its atmospheric dynamics and potential for hosting life. By studying this intriguing exoplanet, scientists hope to uncover new insights into the formation and evolution of sub-Neptune planets, as well as their atmospheric behaviors in various environments.` 
            },
            { 
                name: 'K2-141b', 
                distance: '101 ly', 
                description: 'A lava planet with extreme temperatures.', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXoh1ko3DuAj0I5YsSJUq7MmgSJa8rRQ2kw&s',
                details: `K2-141b is a remarkable lava planet located approximately 101 light-years away from Earth in the constellation Octans. Discovered in 2018, this exoplanet has garnered attention due to its extreme surface conditions and unique geological characteristics.
        
                K2-141b is classified as a lava planet due to its extremely high surface temperatures, which can exceed 2,000 degrees Celsius. The planet orbits its host star, K2-141, at a distance of only 0.01 AU, resulting in an incredibly short orbital period of just under 24 hours. This close proximity to its star subjects K2-141b to intense radiation and heat, leading to a surface composed primarily of molten rock.
        
                Observations of K2-141b have revealed a fascinating landscape dominated by vast lava lakes and rivers of molten rock. The extreme temperatures and conditions create an environment that is both hostile and intriguing, raising questions about the formation and evolution of such planets.
        
                The study of K2-141b provides valuable insights into the diversity of planetary environments and the processes that shape them. Researchers are particularly interested in understanding how these extreme conditions affect the planet's atmosphere, if it possesses one, and the potential for geological activity on its surface.
        
                As observational technology improves, astronomers hope to conduct more detailed studies of K2-141b, shedding light on the unique characteristics of lava planets and the implications for our understanding of planetary systems.` 
            },
            { 
                name: 'WASP-49b', 
                distance: '260 ly', 
                description: 'A hot Jupiter exoplanet.', 
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IHZMafjGps_3Ev6VyUdlIs2tlnU1sDnWzQ&s',
                details: `WASP-49b is a hot Jupiter exoplanet located approximately 260 light-years away from Earth in the constellation Virgo. Discovered in 2012, this gas giant is particularly interesting due to its close proximity to its host star and its unique atmospheric properties.
        
                With a mass similar to that of Jupiter, WASP-49b orbits its star, WASP-49, at a distance of about 0.05 AU, resulting in a short orbital period of just over 3 days. The extreme conditions near its star lead to high temperatures in its atmosphere, which has been studied extensively using various observational techniques.
        
                Researchers have detected the presence of several molecules in WASP-49b's atmosphere, including water vapor, sodium, and potassium. The planet's unique atmospheric composition raises questions about the processes that contribute to its formation and the dynamics of its atmosphere.
        
                WASP-49b has become a key target for studying the atmospheric characteristics of hot Jupiters, providing insights into the wider category of gas giants in close orbits. Ongoing research aims to further investigate the physical and chemical properties of its atmosphere and how they relate to the formation and evolution of gas giants.
        
                The findings from WASP-49b will contribute to our understanding of the variety of exoplanets and the potential for habitability in different planetary environments.` 
            },
            { 
                name: 'LHS 3844 b', 
                distance: '48 ly', 
                description: 'A rocky exoplanet with a dense atmosphere.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PIA23130-Exoplanet-LHS3844b-ArtistConcept-20190819.jpg/290px-PIA23130-Exoplanet-LHS3844b-ArtistConcept-20190819.jpg',
                details: `LHS 3844 b is a rocky exoplanet located approximately 48 light-years away from Earth in the constellation Centaurus. Discovered in 2019, this exoplanet has garnered attention for its unique characteristics and the potential for studying rocky planets outside our solar system.
        
                With a radius about 1.3 times that of Earth, LHS 3844 b orbits its host star, LHS 3844, at a distance of about 0.024 AU, resulting in an orbital period of just under 12 hours. The close proximity to its host star exposes LHS 3844 b to intense radiation and heat, resulting in surface temperatures that can exceed 500 degrees Celsius.
        
                The planet's dense atmosphere has been a subject of significant interest, as observations suggest the presence of water vapor and other molecules. These findings raise questions about the potential for habitability and the geological activity of this rocky exoplanet.
        
                Ongoing research into LHS 3844 b aims to understand its atmospheric composition and dynamics, as well as its potential for hosting life. By studying this exoplanet, scientists hope to gain insights into the characteristics of rocky planets and the factors that influence their habitability.
        
                The continued exploration of LHS 3844 b is part of a broader effort to understand the diversity of planetary systems and the potential for life beyond our own.` 
            },
            { 
                name: 'WASP-12b', 
                distance: '870 ly', 
                description: 'A hot Jupiter exoplanet with a unique atmosphere.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Exoplanet_Comparison_WASP-12_b.png/290px-Exoplanet_Comparison_WASP-12_b.png', 
                details: `WASP-12b is a fascinating hot Jupiter exoplanet located approximately 870 light-years away in the constellation Auriga. Discovered in 2008, this exoplanet has drawn considerable attention due to its extreme atmospheric conditions and unique characteristics.
        
                With a mass greater than that of Jupiter, WASP-12b orbits its host star, WASP-12, at a mere distance of about 0.022 AU, which is significantly closer than Mercury is to our Sun. This proximity results in an incredibly short orbital period of just under 26 hours, subjecting the planet to intense radiation and heat.
        
                The extreme temperatures on WASP-12b can reach upwards of 2,500 degrees Celsius, causing the planet's atmosphere to be highly unstable. Studies have detected the presence of various elements in its atmosphere, including carbon, which leads to speculation about its potential for complex chemical reactions. These high temperatures also create a significant thermal inversion, where the temperature increases with altitude rather than decreasing, a phenomenon observed in some other hot Jupiters.
        
                Researchers have also found signs of atmospheric escape on WASP-12b, as the intense heat causes the outer layers of the atmosphere to evaporate into space. This loss of material raises questions about the long-term stability of such planets and how they evolve over time.
        
                The study of WASP-12b provides valuable insights into the dynamics of gas giants in extreme environments, contributing to our understanding of planetary formation and evolution in close orbits. Ongoing research aims to further explore the unique atmospheric conditions and chemical compositions of this intriguing exoplanet.` 
            },
            { 
                name: 'HD 97658 b', 
                distance: '65 ly', 
                description: 'A super-Earth that can be studied for its atmosphere.', 
                image: 'https://eyes.nasa.gov/apps/exo/assets/image/thumbnail/exoplanet/gj-1132-b-list.webp',
                details: `HD 97658 b is an intriguing super-Earth exoplanet located approximately 65 light-years away in the constellation Leo. Discovered in 2012, this planet has captured the interest of astronomers due to its size and proximity to Earth, making it an excellent candidate for atmospheric studies.
        
                With a radius about 1.6 times that of Earth, HD 97658 b orbits its host star, HD 97658, at a distance of approximately 0.017 AU, resulting in an orbital period of only 9.5 days. The close proximity to its host star subjects the planet to high levels of stellar radiation, contributing to surface temperatures that can reach around 500 degrees Celsius.
        
                The unique characteristics of HD 97658 b have prompted researchers to investigate its atmospheric composition. Early studies using the Hubble Space Telescope have suggested the presence of water vapor in the atmosphere, raising the possibility of a thick, steamy atmosphere that may harbor complex weather patterns.
        
                One of the significant advantages of studying HD 97658 b is its relative brightness, making it easier to observe with current telescopes. The ongoing observations aim to refine our understanding of the planet's atmospheric properties and the potential for habitability among super-Earths.
        
                Understanding the atmospheric conditions of HD 97658 b may provide insights into the broader category of rocky planets and their potential for hosting life. As astronomers continue to gather data, this super-Earth remains a vital piece in the puzzle of exoplanetary science.` 
            },
            { 
                name: 'TOI 700 d', 
                distance: '100 ly', 
                description: 'An Earth-sized planet in the habitable zone.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/PIA23408-Exoplanet-TOI700d-20200106.jpg/290px-PIA23408-Exoplanet-TOI700d-20200106.jpg',
                details: `TOI 700 d is an exciting Earth-sized exoplanet located approximately 100 light-years away in the constellation Dorado. Discovered in 2020, this planet orbits within the habitable zone of its host star, TOI 700, making it a prime candidate for the search for extraterrestrial life.
        
                With a radius about 1.19 times that of Earth, TOI 700 d orbits its star at a distance of approximately 0.09 AU, resulting in an orbital period of about 37 days. The host star, TOI 700, is a K-dwarf star, which is smaller and cooler than our Sun, allowing TOI 700 d to remain within the habitable zone where liquid water could exist on its surface.
        
                The discovery of TOI 700 d has significant implications for understanding the potential habitability of exoplanets in different environments. Ongoing studies aim to determine the planet's atmospheric conditions, surface temperatures, and whether it has any features that could support life as we know it.
        
                Researchers are particularly interested in the dynamics of TOI 700 d's atmosphere, including its composition and potential weather patterns. The relative proximity of TOI 700 d makes it a prime target for future observational campaigns aimed at characterizing its environment.
        
                As telescopes become more advanced, astronomers hope to gain more insights into TOI 700 d and its potential for hosting life, contributing to our broader understanding of habitable worlds beyond our solar system.` 
            },
            { 
                name: 'K2-24b', 
                distance: '250 ly', 
                description: 'A Neptune-like exoplanet.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/PIA20053-PossibleCometSwarmAroundKIC8462852-ArtistConcept-20151124.jpg/150px-PIA20053-PossibleCometSwarmAroundKIC8462852-ArtistConcept-20151124.jpg',
                details: `K2-24b is a fascinating Neptune-like exoplanet located approximately 250 light-years away in the constellation Leo. Discovered in 2016, this exoplanet has intrigued scientists due to its size and the potential for atmospheric studies.
        
                With a radius about 2.7 times that of Earth, K2-24b orbits its host star, K2-24, at a distance of approximately 0.09 AU, resulting in an orbital period of about 9.4 days. The close proximity to its host star subjects the planet to intense radiation and heat, contributing to high surface temperatures.
        
                The unique characteristics of K2-24b make it a key target for studying the atmospheric properties of Neptune-like planets. Research indicates that the planet may possess a significant atmosphere, which could contain water vapor and other molecules, providing insights into the atmospheric dynamics of such worlds.
        
                Understanding K2-24b's atmosphere could shed light on the broader category of Neptune-like exoplanets and their potential for hosting life. Ongoing research aims to refine our knowledge of this intriguing planet, exploring its physical and chemical properties.
        
                As astronomers continue to gather data, K2-24b remains an essential piece in the puzzle of exoplanetary science, contributing to our understanding of the diversity of planetary systems.` 
            },
            { 
                name: 'WASP-89b', 
                distance: '300 ly', 
                description: 'A hot Jupiter with an interesting atmosphere.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Wasp-39b_and_its_parent_star_%28artist%E2%80%99s_impression%29.jpg/290px-Wasp-39b_and_its_parent_star_%28artist%E2%80%99s_impression%29.jpg',
                details: `WASP-89b is a hot Jupiter exoplanet located approximately 300 light-years away in the constellation Libra. Discovered in 2013, this gas giant has gained interest due to its unique atmospheric composition and extreme conditions.
        
                With a mass similar to that of Jupiter, WASP-89b orbits its host star, WASP-89, at a distance of about 0.04 AU, resulting in an orbital period of just over 3 days. The extreme temperatures near its star lead to high levels of radiation in its atmosphere, contributing to a complex atmospheric chemistry.
        
                Studies of WASP-89b's atmosphere have revealed the presence of various molecules, including water vapor and sodium. The unique characteristics of its atmosphere offer insights into the dynamics of hot Jupiters and the processes that influence their formation.
        
                The study of WASP-89b contributes to our broader understanding of gas giants in extreme environments, helping researchers understand the variety of exoplanets and their potential for habitability. Ongoing research aims to investigate the atmospheric properties and how they relate to the formation and evolution of such planets.
        
                The findings from WASP-89b will add to our knowledge of the diversity of exoplanets and the factors influencing their characteristics, making it an important subject for further study in the field of exoplanetary science.` 
            },
            { 
                name: 'WASP-57b', 
                distance: '220 ly', 
                description: 'An ultra-hot Jupiter.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Exoplanet_Comparison_WASP-17_b.png/290px-Exoplanet_Comparison_WASP-17_b.png',
                details: `WASP-57b is an ultra-hot Jupiter exoplanet located approximately 220 light-years away in the constellation Centaurus. Discovered in 2012, this gas giant has captured the interest of astronomers due to its extreme atmospheric conditions and unique characteristics.
        
                With a mass comparable to that of Jupiter, WASP-57b orbits its host star, WASP-57, at a distance of about 0.03 AU, leading to an orbital period of only 3.4 days. The close proximity to its star subjects WASP-57b to intense radiation and heat, resulting in surface temperatures that can exceed 2,000 degrees Celsius.
        
                The extreme temperatures create a significant thermal inversion in the atmosphere, where the temperature increases with altitude rather than decreases. Observations have detected the presence of various elements in the atmosphere, including carbon and water vapor, suggesting a complex chemical environment.
        
                The study of WASP-57b contributes to our understanding of the dynamics of gas giants in extreme environments and helps refine our knowledge of how these planets evolve over time. As astronomers continue to gather data, WASP-57b will remain an essential piece in the puzzle of exoplanetary science.` 
            },
            { 
                name: 'HD 149026 b', 
                distance: '250 ly', 
                description: 'A hot Jupiter with a rich atmosphere.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Exoplanet_Comparison_HD_149026_b.png/290px-Exoplanet_Comparison_HD_149026_b.png',
                details: `HD 149026 b is a fascinating hot Jupiter exoplanet located approximately 250 light-years away in the constellation Hercules. Discovered in 2006, this gas giant has garnered attention due to its rich atmospheric composition and unique characteristics.
        
                With a mass greater than that of Jupiter, HD 149026 b orbits its host star, HD 149026, at a distance of about 0.04 AU, resulting in an orbital period of approximately 5.5 days. The close proximity to its star subjects the planet to extreme temperatures, leading to high levels of radiation and a complex atmosphere.
        
                Studies of HD 149026 b's atmosphere have revealed the presence of various molecules, including water vapor and carbon monoxide. The unique characteristics of its atmosphere offer insights into the dynamics of hot Jupiters and the processes that influence their formation and evolution.
        
                The continued exploration of HD 149026 b is part of a broader effort to understand the diversity of planetary systems and the potential for life beyond our own. Ongoing research aims to further investigate the atmospheric properties and how they relate to the formation and evolution of gas giants in extreme environments.` 
            },
            { 
                name: 'WASP-60b', 
                distance: '350 ly', 
                description: 'A hot Jupiter exoplanet.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Iota-draconis-b.jpg',
                details: `WASP-60b is a hot Jupiter exoplanet located approximately 350 light-years away in the constellation Scorpius. Discovered in 2012, this gas giant has captured the attention of astronomers due to its unique atmospheric characteristics and extreme conditions.
        
                With a mass comparable to that of Jupiter, WASP-60b orbits its host star, WASP-60, at a distance of about 0.045 AU, resulting in an orbital period of just over 4 days. The close proximity to its star subjects the planet to intense radiation and heat, contributing to high surface temperatures.
        
                Observations of WASP-60b's atmosphere have revealed the presence of various molecules, including water vapor and sodium. The unique characteristics of its atmosphere provide insights into the dynamics of hot Jupiters and the factors that influence their formation.
        
                The study of WASP-60b is significant for understanding the diversity of exoplanets and their potential for hosting life. Ongoing research aims to further explore the atmospheric properties and how they relate to the formation and evolution of gas giants in extreme environments.` 
            },
            { 
                name: 'WASP-33b', 
                distance: '270 ly', 
                description: 'A hot Jupiter with a unique atmosphere.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Wasp-39b_and_its_parent_star_%28artist%E2%80%99s_impression%29.jpg/290px-Wasp-39b_and_its_parent_star_%28artist%E2%80%99s_impression%29.jpg',
                details: `WASP-33b is a captivating hot Jupiter exoplanet located approximately 270 light-years away in the constellation Andromeda. Discovered in 2008, this gas giant has gained attention due to its extreme atmospheric conditions and unique features.
        
                With a mass greater than that of Jupiter, WASP-33b orbits its host star, WASP-33, at a distance of about 0.02 AU, resulting in an orbital period of just over 1.2 days. The close proximity to its star subjects the planet to intense radiation and heat, leading to surface temperatures that can exceed 3,000 degrees Celsius.
        
                The extreme conditions create a highly dynamic atmosphere, with observations revealing the presence of various molecules, including water vapor and carbon. The unique characteristics of WASP-33b's atmosphere offer insights into the dynamics of hot Jupiters and the processes that influence their formation and evolution.
        
                Ongoing research aims to investigate the atmospheric properties of WASP-33b and how they relate to the broader category of gas giants. The study of this intriguing exoplanet contributes to our understanding of the diversity of planetary systems and the potential for life beyond our own.` 
            },
            { 
                name: 'K2-32b', 
                distance: '190 ly', 
                description: 'A sub-Neptune exoplanet.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Comparing_K2-33_to_our_Solar_System.jpg/290px-Comparing_K2-33_to_our_Solar_System.jpg',
                details: `K2-32b is an intriguing sub-Neptune exoplanet located approximately 190 light-years away in the constellation Scorpius. Discovered in 2016, this exoplanet has drawn attention due to its size and potential for atmospheric studies.
        
                With a radius about 2.5 times that of Earth, K2-32b orbits its host star, K2-32, at a distance of approximately 0.13 AU, resulting in an orbital period of about 14.5 days. The close proximity to its star subjects the planet to high levels of stellar radiation, contributing to surface temperatures that can be quite elevated.
        
                The unique characteristics of K2-32b make it a valuable target for studying the atmospheric properties of sub-Neptune planets. Research aims to determine whether the planet has a significant atmosphere and what its composition might be, including the potential presence of water vapor and other molecules.
        
                Understanding K2-32b's atmosphere could provide insights into the broader category of sub-Neptune exoplanets and their potential for hosting life. As astronomers continue to gather data, K2-32b remains an essential piece in the puzzle of exoplanetary science.` 
            },
            { 
                name: 'Kepler-16b', 
                distance: '245 ly', 
                description: 'A circumbinary planet, or a planet orbiting two stars.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Kepler-16.jpg/250px-Kepler-16.jpg',
                details: `Kepler-16b is a remarkable circumbinary exoplanet located approximately 245 light-years away in the constellation Cygnus. Discovered in 2011, this planet orbits two stars, making it a fascinating case study in the diversity of planetary systems.
        
                With a radius about 0.7 times that of Jupiter, Kepler-16b orbits its host stars, Kepler-16A and Kepler-16B, at a distance of approximately 0.7 AU, resulting in an orbital period of about 228 days. The unique dynamics of this system allow for intriguing interactions between the planet and its two stars.
        
                Observations have suggested that Kepler-16b is a gas giant, likely with a thick atmosphere. The presence of two stars creates complex gravitational interactions that influence the planet's orbit and environment.
        
                The study of Kepler-16b offers valuable insights into the formation and evolution of circumbinary planets, contributing to our understanding of planetary systems beyond our own. As astronomers continue to gather data, this exoplanet remains a crucial part of the exploration of diverse planetary environments.` 
            },
            { 
                name: 'WASP-43c', 
                distance: '500 ly', 
                description: 'A hot Jupiter with extreme weather patterns.', 
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Hot_Gas-Giant_Exoplanet_WASP-43_b_%28Temperature_Maps%29_%282024-117%29.jpg/290px-Hot_Gas-Giant_Exoplanet_WASP-43_b_%28Temperature_Maps%29_%282024-117%29.jpg',
                details: `WASP-43c is a captivating hot Jupiter exoplanet located approximately 500 light-years away in the constellation Crater. Discovered in 2013, this gas giant has gained interest due to its extreme atmospheric conditions and unique characteristics.
        
                With a mass comparable to that of Jupiter, WASP-43c orbits its host star, WASP-43, at a distance of about 0.015 AU, resulting in an orbital period of just over 19 hours. The close proximity to its star subjects the planet to intense radiation and heat, leading to surface temperatures that can exceed 2,000 degrees Celsius.
        
                Observations have revealed the presence of various molecules in WASP-43c's atmosphere, including water vapor and carbon. The extreme temperatures create dynamic weather patterns, making it an intriguing subject for atmospheric studies.
        
                Understanding WASP-43c's atmosphere and weather dynamics could provide insights into the broader category of hot Jupiters and their potential for habitability. Ongoing research aims to further investigate the atmospheric properties and how they relate to the formation and evolution of gas giants in extreme environments.` 
            }
    ];
    

    const Explore = () => {
        const [currentPage, setCurrentPage] = useState(0);
        const [selectedPlanet, setSelectedPlanet] = useState(null);
        const [showOrbitSimulation, setShowOrbitSimulation] = useState(false); // State to show/hide orbit simulation
        const cardsPerPage = 4;
    
        const handleNext = () => {
            if (currentPage < Math.floor(exoplanets.length / cardsPerPage)) {
                setCurrentPage(currentPage + 1);
            }
        };
    
        const handlePrevious = () => {
            if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
            }
        };
    
        const handleLearnMore = (planet) => {
            setSelectedPlanet(planet);
            setShowOrbitSimulation(false); // Reset the orbit simulation visibility
        };
    
        const handleCloseModal = () => {
            setSelectedPlanet(null);
        };
    
        const handleShowOrbitSimulation = () => {
            setShowOrbitSimulation(true);
        };
    
        const progressBarWidth = ((currentPage + 1) / Math.ceil(exoplanets.length / cardsPerPage)) * 100;
    
        return (
            <>
                <div className="explore-container">
                    <div className="nav-sec"><Nav /></div>
                    <div className="starry-background"></div>
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ width:` ${progressBarWidth}%`}}></div>
                    </div>
    
                    <div className="cards-container">
                        {exoplanets.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage).map((planet, index) => (
                            <div key={index} className="planet-card">
                                <div className="card-inner">
                                    <div className="card-front">
                                        <div className="planet-image-container">
                                            <img src={planet.image} alt={planet.name} className="planet-image" />
                                        </div>
                                        <h3>{planet.name}</h3>
                                        <p>Distance: {planet.distance}</p>
                                    </div>
                                    <div className="card-back">
                                        <h3>{planet.name}</h3>
                                        <p>{planet.description}</p>
                                        <button onClick={() => handleLearnMore(planet)} className="learn-more-btn">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
    
                    <div className="navigation-buttons mt-5">
                        <button onClick={handlePrevious} disabled={currentPage === 0}>
                            Previous
                        </button>
                        <button onClick={handleNext} disabled={currentPage >= Math.floor(exoplanets.length / cardsPerPage)}>
                            Next
                        </button>
                    </div>
                </div>
    
                {/* Modal for detailed description */}
                {selectedPlanet && (
                    <div className="planet-modal">
                        <div className="modal-content">
                            <span className="close-btn" onClick={handleCloseModal}>&times;</span>
                            <h2>{selectedPlanet.name}</h2>
                            <p><strong>Distance:</strong> {selectedPlanet.distance}</p>
                            <p><strong>Description:</strong> {selectedPlanet.details}</p>
                            <img src={selectedPlanet.image} alt={selectedPlanet.name} />
                        </div>
                    </div>
                )}
    
            </>
        );
    };
    
    export default Explore;