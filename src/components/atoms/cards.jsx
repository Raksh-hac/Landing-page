import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Cards = () => {
  const [cardData, setCardData] = useState([
    {
      image: 'src/assets/Images/game-controller@2x.png',
      heading: 'Game Development',
      paragraph: 'We create immersive games that captivate players. Our talented team excels in various genres and platforms, turning concepts into reality. Collaborate with us to launch your next game.',
      hasExtraContent: false,
      borderColor: '#832232',
    },
    {
      image: 'src/assets/Images/browser-settings@2x.png',
      heading: 'Web Development',
      paragraph: 'We turn your digital vision into reality with custom web development. Our team uses cutting-edge technology and creative design to build responsive, user-friendly websites tailored to your business.',
      hasExtraContent: false,
      borderColor: '#B497D6',
    },
    {
      image: 'src/assets/Images/new-store@2x.png',
      heading: 'Asset Store',
      paragraph: 'Discover our collection of high-quality assets for game and web development.',
      hasExtraContent: true,
      border: 'linear-gradient(to right, #832232, #B497D6)',
    },
  ]);

  const middleCardIndex = 1; // Always the middle card index

  const swapWithMiddleCard = (clickedIndex) => {
    if (clickedIndex === middleCardIndex) return;

    const newCardData = [...cardData];
    const temp = newCardData[middleCardIndex];
    newCardData[middleCardIndex] = newCardData[clickedIndex];
    newCardData[clickedIndex] = temp;

    setCardData(newCardData);
  };

  return (
    <div className="flex flex-row justify-center items-center gap-6 p-48">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          onClick={() => swapWithMiddleCard(index)}
          className="bg-[#040404] text-white rounded-[10px] p-6 flex flex-col justify-between relative"
          style={{
            cursor: 'pointer',
            width: index === middleCardIndex ? '400px' : '356px',
            height: index === middleCardIndex ? '560px' : '502px',
            fontFamily: 'Calibri',
            transform: index === middleCardIndex ? 'scale(1.01)' : 'scale(1)', // Scaling from center for middle card
            transition: 'transform 0.5s ease', // Smooth transition for scaling
            borderImage: index === 2 ? card.border : 'none',
            borderImageSlice: index === 2 ? 2 : 'none',
          }}
          whileHover={{
            boxShadow: index === 3
              ? '0 0 15px rgba(131, 34, 50, 0.3)'
              : index === 2
              ? '0 0 15px rgba(180, 151, 214, 0.3)'
              : '0 0 15px rgba(131, 34, 50, 0.3), 0 0 20px rgba(180, 151, 214, 0.3)',
          }}
          layout
          transition={{
            type: 'spring',
            stiffness: 70,
            damping: 25,
            mass: 0.5,
            duration: 0.5,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              border: '2px solid',
              borderColor: card.borderColor,
              borderRadius: '10px',
            }}
            layout
          />
          <div className="relative z-1">
            <motion.img
              src={card.image}
              alt={card.heading}
              className="rounded-t-lg object-cover mx-auto p-2"
              style={{
                width: index === middleCardIndex ? '160px' : '120px', // Dynamic size for middle card
                height: index === middleCardIndex ? '160px' : '120px',
              }}
              layout
            />
            <motion.h2
              className="mt-10 mb-5 font-bold text-center"
              style={{
                fontSize: index === middleCardIndex ? '28px' : '22px', // Dynamic font size
              }}
              layout
            >
              {card.heading.split(' ')[0] === 'Game' ? (
                <>
                  <span style={{ color: '#832232' }}>{card.heading.split(' ')[0]}</span>
                  <span> {card.heading.split(' ').slice(1).join(' ')}</span>
                </>
              ) : card.heading.split(' ')[0] === 'Web' ? (
                <>
                  <span style={{ color: '#B467D6' }}>{card.heading.split(' ')[0]}</span>
                  <span> {card.heading.split(' ').slice(1).join(' ')}</span>
                </>
              ) : (
                card.heading
              )}
            </motion.h2>
            <motion.p
              className="mt-2 text-center"
              style={{
                fontSize: index === middleCardIndex ? '14px' : '12px', // Dynamic paragraph font size
                color: '#DCDCDC',
              }}
              layout
            >
              {card.paragraph}
            </motion.p>

            {card.hasExtraContent && (
              <motion.div
                className="flex flex-row justify-center items-center mt-4 gap-20"
                layout
              >
                <div className="flex flex-col items-center">
                  <img
                    src="src/assets/Images/playstation-buttons@2x.png"
                    alt="Asset 1"
                    className="w-8 h-8"
                  />
                  <span style={{ fontSize: '10px', color: '#DCDCDC' }}>Game Development</span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="src/assets/Images/source-code@2x.png"
                    alt="Asset 2"
                    className="w-8 h-8"
                  />
                  <span style={{ fontSize: '10px', color: '#DCDCDC' }}>Web Development</span>
                </div>
              </motion.div>
            )}
          </div>

          <motion.div className="flex justify-end mt-auto mr-2 mb-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-0.5">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#832232_0%,#B497D6_50%,#832232_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#040404] px-3 py-1 text-sm font-medium text-white backdrop-blur-2xl">
                Learn More
              </span>
            </button>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
